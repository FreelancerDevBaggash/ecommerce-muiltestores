'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentForm from './PaymentForm';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan');
  const billingCycle = searchParams.get('cycle');

  if (!planId || !billingCycle) {
    return <p className="text-center mt-20">الرابط ناقص plan أو cycle</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <PaymentForm planId={planId} billingCycle={billingCycle} />
    </div>
  );
}
