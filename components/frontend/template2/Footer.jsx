"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import { getData } from '../../../lib/getData';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = ({ slugDomain={}, customization = {}, categories,}) => {        
    const { data: session, status } = useSession();
    const { theme } = useTheme();
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [businessHours, setBusinessHours] = useState([]);
    const [storePaymentSettings, setStorePaymentSettings] = useState([]);

    useEffect(() => {
        async function fetchStoreData() {
            if (slugDomain) {
                try {
                    const storeData = await getData(`stores/store/${slugDomain}`);
                    setStore(storeData);
                    
                    if (storeData?.id) {
                        const paymentSettings = await getData(`/storePaymentSetting?storeId=${storeData.id}`);
                        setStorePaymentSettings(paymentSettings);
                    }
                    
                    if (storeData?.businessHours) {
                        setBusinessHours(JSON.parse(storeData.businessHours));
                    }
                } catch (error) {
                    console.error("Error fetching store data:", error);
                } finally {
                    setLoading(false);
                }
            }
        }
        fetchStoreData();
    }, [slugDomain]);

    const colors = {
        primary: customization?.primaryColor || '#1a5b2a',
        secondary: customization?.secondaryColor || '#f0a500',
        accent: customization?.accentColor || '#1a5b2a',
        background: theme === 'dark' 
            ? customization?.darkBackgroundColor || '#111827'
            : customization?.backgroundColor || '#f8f9fa',
        text: theme === 'dark'
            ? customization?.darkTextColor || '#f3f4f6'
            : customization?.textColor || '#1f2937',
        cardBg: theme === 'dark'
            ? customization?.darkCardBackground || '#1e293b'
            : customization?.cardBackground || '#ffffff',
        border: theme === 'dark'
            ? customization?.darkBorderColor || '#374151'
            : customization?.borderColor || '#e5e7eb',
        inputBg: theme === 'dark'
            ? customization?.darkInputBackground || '#1f2937'
            : customization?.inputBackground || '#ffffff',
        inputText: theme === 'dark'
            ? customization?.darkInputTextColor || '#f9fafb'
            : customization?.inputTextColor || '#111827',
        linkHover: theme === 'dark'
            ? customization?.darkLinkHoverColor || '#f0a500'
            : customization?.linkHoverColor || '#1a5b2a'
    };

    function hexToRgba(hex, opacity = 1) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    storeId: store?.id,
                    storeName: store?.businessName 
                }),
            });
            
            if (response.ok) {
                setIsSubscribed(true);
                setEmail('');
            }
        } catch (error) {
            console.error("Subscription error:", error);
        }
    };

    if (status === "loading" || loading) {
        return (
            <div className="py-20 flex justify-center">
                <div className="animate-pulse flex space-x-4">
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        );
    }

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-12 pb-8 transition-colors duration-300"
            style={{
                backgroundColor: colors.background,
                color: colors.text,
                borderTop: `1px solid ${hexToRgba(colors.border, 0.2)}`
            }}
        >
            <div className="container mx-auto px-4">
                {/* Main Footer Content - Responsive layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Store Info - First column (stays first on all devices) */}
                    <div className="lg:w-1/4 space-y-6 order-1">
                        <Link href="/" className="flex items-center space-x-4">
                            <motion.div 
                                whileHover={{ rotate: 5 }}
                                className="relative w-16 h-16 rounded-lg overflow-hidden border-2 shadow-md"
                                style={{ 
                                    borderColor: colors.primary,
                                    backgroundColor: colors.cardBg
                                }}
                            >
                                <Image 
                                    src={store?.profileImageUrl || "/default-store-logo.png"} 
                                    alt={`${store?.businessName} logo`}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                    sizes="64px"
                                />
                            </motion.div>
                            <h2 
                                className="text-xl font-bold hover:underline"
                                style={{ color: colors.primary }}
                            >
                                {store?.businessName}
                            </h2>
                        </Link>

                        <p className="leading-relaxed" style={{ color: hexToRgba(colors.text, 0.8) }}>
                            {store?.description || "متجرنا يقدم أفضل المنتجات بأعلى جودة وخدمة عملاء ممتازة."}
                        </p>

                        <div className="space-y-3">
                            {store?.email && (
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5" style={{ color: colors.secondary }} />
                                    <a 
                                        href={`mailto:${store.email}`}
                                        className="hover:underline"
                                        style={{ color: colors.text }}
                                    >
                                        {store.email}
                                    </a>
                                </div>
                            )}
                            {store?.phone && (
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5" style={{ color: colors.secondary }} />
                                    <a 
                                        href={`tel:${store.phone}`}
                                        className="hover:underline"
                                        style={{ color: colors.text }}
                                    >
                                        {store.phone}
                                    </a>
                                </div>
                            )}
                            {store?.physicalAddress && (
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 mt-0.5" style={{ color: colors.secondary }} />
                                    <span>{store.physicalAddress}</span>
                                </div>
                            )}
                            {businessHours.length > 0 && (
                                <div className="flex items-start space-x-3">
                                    <Clock className="h-5 w-5 mt-0.5" style={{ color: colors.secondary }} />
                                    <div>
                                        {businessHours.map((hours, index) => (
                                            <p key={index}>
                                                {hours.days}: {hours.hours}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social Media - Second column on mobile */}
            

                    {/* Categories - Third column on mobile */}
                    <div className="lg:w-1/4 space-y-6 order-3 lg:order-2">
                        <h3 
                            className="text-lg font-semibold uppercase tracking-wider"
                            style={{ color: colors.primary }}
                        >
                            أقسام المتجر
                        </h3>
                        <ul className="space-y-3">
                            {categories.slice(0, 6).map((category) => (
                                <motion.li 
                                    key={category.id}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Link 
                                        href={`/category/${category.slug}`}
                                        className="flex items-center py-1.5 transition-colors group"
                                        style={{ color: colors.text }}
                                    >
                                        <span 
                                            className="w-1.5 h-1.5 rounded-full mr-3 transition-all group-hover:w-2 group-hover:h-2"
                                            style={{ backgroundColor: colors.secondary }}
                                        ></span>
                                        <span className="group-hover:font-medium">
                                            {category.title}
                                        </span>
                                        <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links - Fourth column on mobile */}
                    <div className="lg:w-1/4 space-y-6 order-4 lg:order-3">
                        <h3 
                            className="text-lg font-semibold uppercase tracking-wider"
                            style={{ color: colors.primary }}
                        >
                            روابط التاجر
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "لوحة التحكم", path: "/dashboard", vendorOnly: true },
                                { name: "منتجاتي", path: "/dashboard/products", vendorOnly: true },
                                { name: "طلباتي", path: "/dashboard/orders", vendorOnly: true },
                                { name: "إحصائيات المتجر", path: "/dashboard/analytics", vendorOnly: true },
                                { name: "إعدادات المتجر", path: "/dashboard/settings", vendorOnly: true },
                                { name: "الشروط والأحكام", path: "/terms" },
                                { name: "سياسة الخصوصية", path: "/privacy" },
                                { name: "اتصل بنا", path: "/contact" }
                                
                            ].filter(link => !link.vendorOnly || session?.user?.role === 'VENDOR').map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Link 
                                        href={item.path}
                                        className="flex items-center py-1.5 transition-colors group"
                                        style={{ color: colors.text }}
                                    >
                                        <span 
                                            className="w-1.5 h-1.5 rounded-full mr-3 transition-all group-hover:w-2 group-hover:h-2"
                                            style={{ backgroundColor: colors.secondary }}
                                        ></span>
                                        <span className="group-hover:font-medium">
                                            {item.name}
                                        </span>
                                        <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="my-8 h-px"
                    style={{ backgroundColor: hexToRgba(colors.primary, 0.2) }}
                ></motion.div>
        <div className="lg:w-1/4 space-y-6 order-2 lg:order-4">
                        <div className="pt-0 lg:pt-6">
                            <h3 
                                className="text-lg font-semibold uppercase tracking-wider lg:hidden"
                                style={{ color: colors.primary }}
                            >
                                تواصل معنا
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {[
                                    { name: "فيسبوك", icon: <Facebook className="h-6 w-6" />, url: store?.socialMedia?.facebook || '#' },
                                    { name: "تويتر", icon: <Twitter className="h-6 w-6" />, url: store?.socialMedia?.twitter || '#' },
                                    { name: "إنستغرام", icon: <Instagram className="h-6 w-6" />, url: store?.socialMedia?.instagram || '#' },
                                    { name: "يوتيوب", icon: <Youtube className="h-6 w-6" />, url: store?.socialMedia?.youtube || '#' },
                                    { name: "لينكدإن", icon: <Linkedin className="h-6 w-6" />, url: store?.socialMedia?.linkedin || '#' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className="p-2 rounded-full transition-all"
                                        style={{ 
                                            backgroundColor: hexToRgba(colors.secondary, 0.1),
                                            color: colors.secondary
                                        }}
                                        whileHover={{ 
                                            y: -3, 
                                            backgroundColor: colors.secondary,
                                            color: '#ffffff'
                                        }}
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                {/* Footer Bottom - Responsive order */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Payment Methods - First on mobile */}
                    <div className="w-full md:w-auto order-1 md:order-2 mb-4 md:mb-0">
                        <div className="flex overflow-x-auto pb-2 hide-scrollbar justify-center md:justify-start">
                            <div className="flex space-x-4">
                                {storePaymentSettings
                                    .filter(setting => setting.isActive && setting.paymentProvider?.isActive)
                                    .slice(0, 5)
                                    .map((setting) => (
                                        <motion.div
                                            key={setting.paymentProvider.id}
                                            whileHover={{ scale: 1.1 }}
                                            className="flex-shrink-0 relative w-10 h-6"
                                            style={{ 
                                                filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                                            }}
                                            title={setting.paymentProvider.name}
                                        >
                                            {setting.paymentProvider.imageUrl ? (
                                                <Image
                                                    src={setting.paymentProvider.imageUrl}
                                                    alt={setting.paymentProvider.name}
                                                    fill
                                                    className="object-contain"
                                                    sizes="40px"
                                                />
                                            ) : (
                                                <div 
                                                    className="flex items-center justify-center w-full h-full rounded"
                                                    style={{
                                                        backgroundColor: hexToRgba(colors.secondary, 0.1),
                                                        color: colors.secondary,
                                                    }}
                                                >
                                                    <span className="text-xs font-medium">
                                                        {setting.paymentProvider.name.substring(0, 2)}
                                                    </span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright - Second on mobile */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <p style={{ color: hexToRgba(colors.text, 0.6) }}>
                            © {new Date().getFullYear()} {store?.businessName}. جميع الحقوق محفوظة.
                        </p>
                        {store?.commercialRegistration && (
                            <p className="text-xs mt-1" style={{ color: hexToRgba(colors.text, 0.5) }}>
                                السجل التجاري: {store.commercialRegistration}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;