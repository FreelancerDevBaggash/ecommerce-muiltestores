
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// function ReviewModal({ storeId, customerStoreId, onClose }) {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [hasReviewed, setHasReviewed] = useState(false);

//   // الدالة لجلب التقييمات السابقة من الـ API
//   const checkIfReviewed = async () => {
//     try {
//       const response = await fetch(`/api/reviews?storeId=${storeId}&customerStoreId=${customerStoreId}`);
//       const reviews = await response.json();
//       if (reviews.length > 0) {
//         setHasReviewed(true); // إذا كان العميل قد قيم المتجر بالفعل
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   // دالة إرسال التقييم الجديد إلى الـ API
//   const submitReview = async () => {
//     try {
//       if (hasReviewed) {
//         alert("لقد قمت بتقييم هذا المتجر من قبل.");
//         return;
//       }

//       const response = await fetch('/api/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           storeId,
//           customerStoreId,
//           rating,
//           comment,
//         }),
//       });

//       const data = await response.json();
//       alert("تم إرسال التقييم بنجاح!");
//       onClose(); // إغلاق الـ Modal بعد إرسال التقييم
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       alert("حدث خطأ أثناء إرسال التقييم");
//     }
//   };

//   useEffect(() => {
//     checkIfReviewed();
//   }, [storeId, customerStoreId]);

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>يرجى تقييم المتجر</h2>
//         <div>
//           <label>التقييم:</label>
//           <select onChange={(e) => setRating(Number(e.target.value))}>
//             <option value={0}>اختر التقييم</option>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//             <option value={5}>5</option>
//           </select>
//         </div>
//         <div>
//           <label>اعطينا رأيك في المتجر:</label>
//           <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
//         </div>
//         <div>
//           <button onClick={submitReview}>إرسال التقييم</button>
//           <button onClick={onClose}>إغلاق</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReviewModal;

import { useState, useEffect, useRef } from 'react';

function ReviewModal({ storeId, customerStoreId, onClose }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hasReviewed, setHasReviewed] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const modalRef = useRef();

  // الدوال السابقة تبقى كما هي مع تعديلات طفيفة على الـ alerts
  // ... (ابقاء نفس منطق checkIfReviewed و submitReview و validateForm)
  const checkIfReviewed = async () => {
    try {
      const response = await fetch(`/api/reviews?storeId=${storeId}&customerStoreId=${customerStoreId}`);
      const reviews = await response.json();
      setHasReviewed(reviews.length > 0);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (rating < 1) newErrors.rating = 'الرجاء اختيار تقييم';
    if (comment.trim().length < 10) newErrors.comment = 'الرأي يجب أن يكون على الأقل 10 أحرف';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitReview = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId, customerStoreId, rating, comment }),
      });

      if (!response.ok) throw new Error('فشل في إرسال التقييم');
      
      setHasReviewed(true);
      setTimeout(onClose, 2000); // تأخير الإغلاق لعرض رسالة النجاح
    } catch (error) {
      console.error("Error submitting review:", error);
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    checkIfReviewed();
    const handleKeyDown = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md 
                   shadow-xl transform transition-all duration-300"
      >
        {hasReviewed ? (
          <div className="text-center space-y-4">
            <div className="inline-block bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <svg className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">شكرًا لتقييمك!</h3>
            <p className="text-gray-600 dark:text-gray-300">تم تسجيل تقييمك بنجاح للمتجر</p>
            <button
              onClick={onClose}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl
                         transition-colors duration-200 font-medium"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              تقييم المتجر
              <span className="block text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">شاركنا تجربتك</span>
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">التقييم</label>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`text-4xl transition-transform duration-150 ${
                      star <= (hoverRating || rating) 
                        ? 'text-yellow-400 scale-110' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2 text-center">{errors.rating}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">التعليق</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-3 border dark:border-gray-600 rounded-xl focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 
                           dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                           transition-all duration-200"
                rows="4"
                placeholder="أخبرنا أكثر عن تجربتك..."
                maxLength="500"
              />
              <div className="flex justify-between mt-2">
                {errors.comment && (
                  <p className="text-red-500 dark:text-red-400 text-sm">{errors.comment}</p>
                )}
                <span className={`text-sm ${
                  comment.length === 500 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {comment.length}/500
                </span>
              </div>
            </div>

            {errors.submit && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 
                            rounded-lg text-sm text-center">
                {errors.submit}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 
                           dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl
                           transition-colors duration-200 font-medium"
              >
                إلغاء
              </button>
              <button
                onClick={submitReview}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                           font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                )}
                {isSubmitting ? 'جاري الإرسال...' : 'تأكيد التقييم'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReviewModal;