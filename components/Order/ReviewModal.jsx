
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function ReviewModal({ storeId, customerStoreId, onClose }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hasReviewed, setHasReviewed] = useState(false);

  // الدالة لجلب التقييمات السابقة من الـ API
  const checkIfReviewed = async () => {
    try {
      const response = await fetch(`/api/reviews?storeId=${storeId}&customerStoreId=${customerStoreId}`);
      const reviews = await response.json();
      if (reviews.length > 0) {
        setHasReviewed(true); // إذا كان العميل قد قيم المتجر بالفعل
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // دالة إرسال التقييم الجديد إلى الـ API
  const submitReview = async () => {
    try {
      if (hasReviewed) {
        alert("لقد قمت بتقييم هذا المتجر من قبل.");
        return;
      }

      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storeId,
          customerStoreId,
          rating,
          comment,
        }),
      });

      const data = await response.json();
      alert("تم إرسال التقييم بنجاح!");
      onClose(); // إغلاق الـ Modal بعد إرسال التقييم
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("حدث خطأ أثناء إرسال التقييم");
    }
  };

  useEffect(() => {
    checkIfReviewed();
  }, [storeId, customerStoreId]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>يرجى تقييم المتجر</h2>
        <div>
          <label>التقييم:</label>
          <select onChange={(e) => setRating(Number(e.target.value))}>
            <option value={0}>اختر التقييم</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label>اعطينا رأيك في المتجر:</label>
          <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
        </div>
        <div>
          <button onClick={submitReview}>إرسال التقييم</button>
          <button onClick={onClose}>إغلاق</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
