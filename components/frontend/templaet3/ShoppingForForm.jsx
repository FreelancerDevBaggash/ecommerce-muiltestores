"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaBoxOpen, FaShoppingCart, 
  FaMoneyBillWave, FaTags
} from 'react-icons/fa';
import CountUp from 'react-countup';
import Head from 'next/head';
import { useParams } from 'next/navigation';

export default function StoreStatistics({ storeId }) {
  const params = useParams();
  const slugDomain = params.slugDomain;
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [storeInfo, setStoreInfo] = useState(null);

  // جلب بيانات المتجر الأساسية
  useEffect(() => {
    const fetchStoreInfo = async () => {
      try {
        // Use either slugDomain or storeId, not both
        const endpoint = slugDomain 
          ? `/api/stores/store/${slugDomain}`
          : `/api/stores/store?storeId=${storeId}`;
          
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch store info');
        }
        
        const data = await response.json();
        setStoreInfo(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching store info:', err);
      }
    };

    fetchStoreInfo();
  }, [slugDomain, storeId]);

  // جلب بيانات الإحصائيات من API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const endpoint = slugDomain 
          ? `/api/stores/store/${slugDomain}/stats`
          : `/api/stores/store/${storeId}/stats`;
        
        const response = await fetch(endpoint);
        
        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          throw new Error(`Expected JSON but got: ${text.slice(0, 100)}...`);
        }
    
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }
        
        setStats({
          customers: data.customersCount || 0,
          products: data.productsCount || 0,
          category: data.categoriesCount || 0,
          orders: data.ordersCount || 0,
          recentOrders: data.recentOrders || []
        });
      } catch (err) {
        console.error('Full error fetching stats:', {
          error: err,
          message: err.message,
          stack: err.stack
        });
        setError(`Failed to load statistics: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    if (slugDomain || storeId) {
      fetchStats();
    }
  }, [slugDomain, storeId]);

  // بطاقات الإحصائيات الأساسية للمتجر
  const statCards = [
    {
      id: 1,
      title: "عملاء المتجر",
      value: stats?.customers || 0,
      icon: <FaUsers className="text-3xl" />,
      color: "text-blue-500",
      suffix: "+"
    },
    {
      id: 2,
      title: "منتجات المتجر",
      value: stats?.products + 1000,
      icon: <FaBoxOpen className="text-3xl" />,
      color: "text-green-500",
      suffix: "+"
    },
    {
      id: 3,
      title: "أقسام المتجر",
      value: stats?.category || 0,
      icon: <FaTags className="text-3xl" />,
      color: "text-indigo-500",
      suffix: "+"
    },
    {
      id: 4,
      title: "طلبات المتجر",
      value: stats?.orders || 0,
      icon: <FaShoppingCart className="text-3xl" />,
      color: "text-purple-500",
      suffix: "+"
    }
   
   
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-9 bg-gray-50" dir="rtl">
      <Head>
        <title>{storeInfo?.businessName ? `إحصائيات ${storeInfo.businessName}` : 'إحصائيات المتجر'}</title>
        <meta name="description" content="إحصائيات وأرقام عن متجرك وأدائه" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {storeInfo?.businessName ? ` إحصائيات ${storeInfo.businessName}` : 'إحصائيات المتجر'}
          </h1>
          
        </motion.div>

        {/* شبكة بطاقات الإحصائيات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {statCards.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl p-6 shadow-md bg-white transition-all duration-300"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-blue-50 ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              <div className={`text-2xl font-bold ${stat.color}`}>
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  decimals={stat.isMoney ? 2 : 0}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم الطلبات الحديثة */}
       
      </div>
    </div>
  );
}
