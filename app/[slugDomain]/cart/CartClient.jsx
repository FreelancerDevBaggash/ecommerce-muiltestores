"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../../components/frontend/templaet5/cart-templaet/Breadcrumb';
import CartSubTotalCard from '../../../components/frontend/templaet5/cart-templaet/CartSubTotalCard';
import EmptyCart from '../../../components/frontend/templaet5/cart-templaet/EmptyCart';
import CartItems from '../../../components/frontend/templaet5/cart-templaet/CartItems';
import { getData } from '../../../lib/getData';

export default function CartClient({ slugDomain }) {
  const [store, setStore] = useState(null);
  const [customizationData, setCustomizationData] = useState(null);
  const [templateId, setTemplateId] = useState('');
  const [error, setError] = useState(null);

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeData = await getData(`/stores/store/${slugDomain}`);
        if (!storeData || !storeData.businessNameEn) {
          setError('Store not found');
          return;
        }
        setStore(storeData);

        const storeId = storeData.id;
        const templatesData = await getData(`/templates/${storeData.templateId}`);
        setTemplateId(templatesData.title);

        const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
        setCustomizationData(customizationData);
      } catch (err) {
        console.error('Error fetching store data:', err);
        setError('Error loading store');
      }
    };

    fetchData();
  }, [slugDomain]);

  const subTotal = cartItems
    .reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
    .toFixed(2) ?? 0;

  if (error) {
    return <h1 className='bg-slate-50 text-slate-500'>{error}</h1>;
  }

  return (
    <div dir='rtl' className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
        <Breadcrumb slugDomain={slugDomain} customization={customizationData} />
        <div className="mt-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 space-y-4">
                <CartItems cartItems={cartItems} customization={customizationData} />
              </div>
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <CartSubTotalCard 
                    subTotal={subTotal} 
                    slugDomain={slugDomain}  
                    customization={customizationData} 
                  />
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart slugDomain={slugDomain} customization={customizationData} />
          )}
        </div>
      </div>
    </div>
  );
}
