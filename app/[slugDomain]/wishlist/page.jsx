
"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WishlistPage from '../../../components/frontend/templaet2/WishlistPage';

import { getData } from '../../../lib/getData';

export default function Page({ params: { slugDomain } }) {
     const [store, setStore] = useState(null);
      const [customizationData, setCustomizationData] = useState(null);
      const [templateId, setTemplateId] = useState('');
      const [error, setError] = useState(null);


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
    
      // حساب الإجمالي الفرعي
     
    
      if (error) {
        return <h1 className='bg-slate-50 text-slate-500'>{error}</h1>;
      }
  return (
    <WishlistPage 
    customization={customizationData} 

      slugDomain={slugDomain}
      
    />
  );
}