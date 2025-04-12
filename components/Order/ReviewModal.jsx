import React, { useState } from 'react'

export default function ReviewModal({ storeId, orderId, customerId, onClose }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const submitReview = async () => {
    setLoading(true)
    try {
      // إرسال التقييم مع userId
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId, customerId, rating, comment }),
      })
      onClose()
    } catch (err) {
      console.error('فشل إرسال التقييم', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">قيم المتجر</h2>

        <div className="flex space-x-1 justify-center mb-4 flex-row-reverse">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)}>
              <span className={star <= rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
            </button>
          ))}
        </div>

        <textarea
          placeholder="أضف تعليقك"
          className="w-full p-2 border rounded-md mb-4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md"
          >
            إغلاق
          </button>
          <button
            disabled={loading}
            onClick={submitReview}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md"
          >
            {loading ? '...جارٍ الإرسال' : 'إرسال'}
          </button>
        </div>
      </div>
    </div>
  )
}
