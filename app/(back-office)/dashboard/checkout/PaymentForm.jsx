// app/(front-end)/checkout/PaymentForm.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react'; // ✅ أضفه هنا
import toast from 'react-hot-toast';
  
export default function PaymentForm({ planId, billingCycle }) {
  const router = useRouter();

  const [plan, setPlan] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [storeId, setStoreId] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  // 1. جلب بيانات الخطة
  useEffect(() => {
    if (!planId) return;
    (async () => {
      try {
        const res = await fetch(`/api/subscriptionPlan?planId=${planId}`);
        const data = await res.json();
        const fetched = Array.isArray(data)
          ? data.find(p => p.id === planId)
          : data;
        setPlan(fetched);
      } catch (e) {
        console.error('Failed to load plan:', e);
      }
    })();
  }, [planId]);

  // 2. جلب رصيد المحفظة وتحديد storeId
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/wallet/store_balance');
        const json = await res.json();
        // نفترض أن الـ API يعيد { wallet: { balance, storeId, ... } }
        const wallet = json.wallet;
        setWalletBalance(wallet.balance);
        setStoreId(wallet.storeId);
      } catch (e) {
        console.error('Failed to load wallet balance:', e);
      }
    })();
  }, []);
  
  if (!plan || walletBalance === null || !storeId) {
    return <p className="text-center mt-10">جاري جلب البيانات…</p>;
  }

  // 3. حساب المبلغ المطلوب وتعطيل الخيار المحلي إن لم يكفِ الرصيد
  const amount = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const localDisabled = walletBalance < amount;

  // 4. دالة متابعة الدفع
  const handleContinue = async () => {
    if (loading || !selectedPayment) return;
    if (selectedPayment === 'local' && localDisabled) return;

    setLoading(true);
    try {

        // 0. التحقق من وجود اشتراك مسبق
const checkRes = await fetch(
  `/api/subscriptions/check?storeId=${storeId}&planId=${plan.id}&cycle=${billingCycle}`
);
const checkData = await checkRes.json();

if (checkData?.alreadySubscribed) {
  alert('لقد اشتركت بالفعل في هذه الخطة.');
  return;
}

      // 4.1 خصم من المحفظة
      const wRes = await fetch(
        `/api/wallet/store_balance/withdraw?plan=${planId}&cycle=${billingCycle}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bankDetails: {}, storeId }),
        }
      );
      const wData = await wRes.json();

      if (!wRes.ok) {
        alert(
          wData.error === 'INSUFFICIENT_BALANCE'
            ? 'رصيد المحفظة غير كافٍ لإتمام الدفع.'
            : wData.error || 'حدث خطأ أثناء الدفع.'
        );
        setLoading(false);
        return;
      }

      // 4.2 إنشاء الاشتراك
      // نحول اسم الخطة إلى code رقمي حسب الترتيب: مجاني=1, أساسي=2, متقدم=3
      const planCode =
        plan.name === 'مجاني' ? 1 :
        plan.name === 'أساسي' ? 2 : 3;

      const sRes = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeId,
          subscriptionPlanId: plan.id,
          planId: planCode,
          billingCycle,
          paymentMethod: selectedPayment,
        }),
      });
      const sData = await sRes.json();

      if (!sRes.ok) {
        alert(sData.error || 'فشل إنشاء الاشتراك.');
        setLoading(false);
        return;
      }
      toast.success('تم الاشتراك بنجاح');
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000); //
    } catch (err) {
      console.error(err);
      alert('فشل الاتصال بالخادم.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        دفع اشتراك {plan.name} ({billingCycle === 'monthly' ? 'شهري' : 'سنوي'})
      </h1>

      <p className="text-center mb-4">
        المبلغ المطلوب: <span className="font-semibold">{amount} ريال</span>
      </p>
      <p className="text-center mb-6">
        رصيد المحفظة: <span className="font-semibold">{walletBalance} ريال</span>
      </p>

      {/* المحفظة المحلية */}
      <div
        className={`flex items-center p-4 mb-4 border-2 rounded-lg transition-all ${
          localDisabled
            ? 'border-red-300 bg-red-50 cursor-not-allowed'
            : selectedPayment === 'local'
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-blue-500'
        }`}
        onClick={() => !localDisabled && setSelectedPayment('local')}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 ml-2 ${
            selectedPayment === 'local'
              ? 'border-green-500 bg-green-500'
              : 'border-gray-400'
          }`}
        />
        <img
          src="/images/local-wallet.png"
          alt="المحفظة المحلية"
          className="w-12 h-12 ml-3"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">المحفظة المحلية</h3>
          <p className="text-sm text-gray-500">دفع عبر رصيد المتجر</p>
        </div>
      </div>
      {localDisabled && (
        <p className="text-sm text-red-600 mb-4 px-4">
          رصيدك غير كافٍ لإتمام العملية.
        </p>
      )}

      {/* المحفظة الخارجية */}
      <div
        className={`flex items-center p-4 mb-6 border-2 rounded-lg cursor-pointer transition-all ${
          selectedPayment === 'international'
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-blue-500'
        }`}
        onClick={() => setSelectedPayment('international')}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 ml-2 ${
            selectedPayment === 'international'
              ? 'border-green-500 bg-green-500'
              : 'border-gray-400'
          }`}
        />
        <img
          src="/images/international-wallet.png"
          alt="المحفظة الخارجية"
          className="w-12 h-12 ml-3"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">المحفظة الخارجية</h3>
          <p className="text-sm text-gray-500">دفع عبر محافظ خارجية</p>
        </div>
      </div>

      {/* زر متابعة الدفع */}
      <Button
  onClick={handleContinue}
  disabled={!selectedPayment || loading}
  className={`w-full flex justify-center items-center gap-2 ${
    loading ? 'opacity-60 cursor-not-allowed' : ''
  }`}
>
  {loading ? (
    <>
      <Loader className="w-4 h-4 animate-spin" />
      <span>جارٍ الدفع...</span>
    </>
  ) : (
    'متابعة للدفع'
  )}
</Button>
{successMessage && (
  <p className="text-green-600 text-center mt-4">{successMessage}</p>
)}
    </div>
  );
}
