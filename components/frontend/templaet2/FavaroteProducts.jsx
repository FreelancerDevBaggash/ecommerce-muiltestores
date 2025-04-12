'use client';
import React, { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, ChevronLeft, ChevronRight, Filter, X, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};

export default function FeaturedProducts({
  products: initialProducts = [],
  customization = {},
  categories: initialCategories = [],
  slugDomain,
}) {
  // تحويل البيانات إلى مصفوفات إذا لم تكن كذلك
  const products = Array.isArray(initialProducts) ? initialProducts : [];
  const categories = Array.isArray(initialCategories) ? initialCategories : [];
  
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [discountFilter, setDiscountFilter] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  // Memoized colors configuration
  const colors = useMemo(() => ({
    primary: customization?.primaryColor || "#4CAF50",
    secondary: customization?.secondaryColor || "#2C3E50",
    accent: customization?.accentColor || "#FFC107",
    lightBackground: customization?.backgroundColor || "#FFFFFF",
    darkBackground: customization?.darkBackground || "#1E293B",
    fontFamily: customization?.fontFamily || "sans-serif",
    currentBackground: theme === "dark" 
      ? (customization?.darkBackground || "#1E293B") 
      : (customization?.backgroundColor || "#FFFFFF"),
    primaryRgb: hexToRgb(customization?.primaryColor || "#4CAF50"),
    accentRgb: hexToRgb(customization?.accentColor || "#FFC107")
  }), [customization, theme]);

  // دالة إضافة/إزالة من المفضلة
  const toggleWishlist = useCallback((e, product) => {
    e.stopPropagation();
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const productIndex = wishlist.findIndex(item => item.id === product.id);
    
    if (productIndex !== -1) {
      wishlist.splice(productIndex, 1);
      toast.success('تمت إزالة المنتج من المفضلة');
    } else {
      wishlist.push({
        id: product.id,
        title: product.title,
        price: product.salePrice || product.productPrice,
        imageUrl: product.imageUrl,
        description: product.descripti,
        rating: product.rating,
        slug: product.slug
      });
      toast.success('تمت إضافة المنتج إلى المفضلة');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('storage'));
  }, []);

  // التحقق مما إذا كان المنتج في المفضلة
  const isInWishlist = useCallback((productId) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.some(item => item.id === productId);
  }, []);

  // Calculate max price for range slider with safe checks
  const maxPrice = useMemo(() => {
    if (!products || products.length === 0) return 1000;
    
    const prices = products
      .filter(p => p) // إزالة أي عناصر null أو undefined
      .map(p => {
        const salePrice = parseFloat(p.salePrice);
        const productPrice = parseFloat(p.productPrice);
        return !isNaN(salePrice) ? salePrice : (!isNaN(productPrice) ? productPrice : 0);
      });
      
    return Math.ceil(Math.max(...prices, 0)) || 1000;
  }, [products]);

  // Filter and sort products with safe checks
  const { filteredProducts, displayedGroups } = useMemo(() => {
    // Apply filters
    let filtered = (products || []).filter(product => {
      if (!product) return false;
      
      const matchesCategory = activeCategory === "all" || product.categoryId === activeCategory;
      const productPrice = parseFloat(product.salePrice) || parseFloat(product.productPrice) || 0;
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const matchesRating = (product.rating || 0) >= ratingFilter;
      const matchesDiscount = !discountFilter || (product.salePrice && product.salePrice < product.productPrice);
      
      return matchesCategory && matchesPrice && matchesRating && matchesDiscount;
    });

    // Apply sorting
    switch(sortOption) {
      case "price-asc":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.salePrice) || parseFloat(a.productPrice) || 0;
          const priceB = parseFloat(b.salePrice) || parseFloat(b.productPrice) || 0;
          return priceA - priceB;
        });
        break;
      case "price-desc":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.salePrice) || parseFloat(a.productPrice) || 0;
          const priceB = parseFloat(b.salePrice) || parseFloat(b.productPrice) || 0;
          return priceB - priceA;
        });
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "discount":
        filtered.sort((a, b) => {
          const discountA = a.salePrice ? ((parseFloat(a.productPrice) - parseFloat(a.salePrice)) / parseFloat(a.productPrice)) : 0;
          const discountB = b.salePrice ? ((parseFloat(b.productPrice) - parseFloat(b.salePrice)) / parseFloat(b.productPrice)) : 0;
          return discountB - discountA;
        });
        break;
      default:
        // Default sorting
        break;
    }

    // Group by category with safe checks
    const grouped = (categories || []).reduce((acc, category) => {
      if (category && category.id) {
        acc[category.id] = filtered.filter(p => p && p.categoryId === category.id);
      }
      return acc;
    }, {});

    const groups = activeCategory === "all" 
      ? [{ category: { id: "all", name: "الكل" }, products: filtered }]
      : (categories.find(c => c && c.id === activeCategory) 
          ? [{ 
              category: categories.find(c => c.id === activeCategory), 
              products: grouped[activeCategory] || [] 
            }] 
          : []);

    return { filteredProducts: filtered, displayedGroups: groups };
  }, [products, categories, activeCategory, priceRange, ratingFilter, discountFilter, sortOption]);

  // Add to cart handler with flying image effect
  const handleAddToCart = useCallback((event, product) => {
    event.stopPropagation();
    const productCard = event.currentTarget.closest('.product-card');
    const createFlyingImage = () => {
      const imageElement = productCard?.querySelector('img');
      const cartIcon = document.getElementById("navbar-cart");
      if (!imageElement || !cartIcon) return;
      const imageRect = imageElement.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();
      const flyingImage = new Image();
      flyingImage.src = imageElement.src;
      flyingImage.className = 'fixed z-50 rounded-lg shadow-lg pointer-events-none';
      document.body.appendChild(flyingImage);
      flyingImage.animate([
        {
          transform: `translate(${imageRect.left}px, ${imageRect.top}px) scale(1)`,
          opacity: 1,
          width: `${imageRect.width}px`,
          height: `${imageRect.height}px`
        },
        {
          transform: `translate(${cartRect.left + cartRect.width/2}px, ${cartRect.top + cartRect.height/2}px) scale(0.1)`,
          opacity: 0
        }
      ], {
        duration: 800,
        easing: 'ease-in-out'
      }).onfinish = () => flyingImage.remove();
    };
    createFlyingImage();
    dispatch(addToCart(product));
    toast.success("تمت الإضافة إلى السلة!");
  }, [dispatch]);

  // Carousel navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % displayedGroups.length);
  }, [displayedGroups.length]);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + displayedGroups.length) % displayedGroups.length);
  }, [displayedGroups.length]);

  // Discount calculation helper
  const calculateDiscount = useCallback((productPrice, salePrice) => {
    return Math.round(((productPrice - salePrice) / productPrice) * 100);
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setPriceRange([0, maxPrice]);
    setRatingFilter(0);
    setDiscountFilter(false);
    setSortOption("default");
  }, [maxPrice]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') prevSlide();
      if (e.key === 'ArrowLeft') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section 
      className="py-16 px-4 lg:px-8 relative"
      style={{ 
        fontFamily: colors.fontFamily,
        direction: 'rtl',
        backgroundColor: colors.currentBackground
      }}
    >
      <div className="max-w-9xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-6xl font-bold" style={{ 
              color: colors.primary,
              background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              المنتجات المميزة
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              اكتشف أفضل العروض والمنتجات الحصرية
            </p>
          </div>
          
          {/* Desktop Filter Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.1)`
                }}
              >
                <Sliders className="w-5 h-5" />
                <span>الفلاتر</span>
              </button>
              
              {/* Desktop Filter Dropdown */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      boxShadow: `0 10px 25px -5px rgba(${colors.primaryRgb}, 0.1)`
                    }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">تصفية المنتجات</h3>
                      <button 
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        onClick={() => setShowFilters(false)}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Price Range Filter */}
                      <div>
                        <label className="block mb-2 font-medium">نطاق السعر</label>
                        <RangeSlider
                          min={0}
                          max={maxPrice}
                          step={10}
                          value={priceRange}
                          onInput={setPriceRange}
                          className="range-slider"
                        />
                        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{priceRange[0]} ر.س</span>
                          <span>{priceRange[1]} ر.س</span>
                        </div>
                      </div>
                      
                      {/* Rating Filter */}
                      <div>
                        <label className="block mb-2 font-medium">التقييم</label>
                        <div className="flex items-center gap-2">
                          {[4, 3, 2, 1, 0].map((rating) => (
                            <button
                              key={rating}
                              className={`px-3 py-1 rounded-full text-sm ${ratingFilter === rating ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                              onClick={() => setRatingFilter(rating)}
                            >
                              {rating > 0 ? `${rating}+` : 'الكل'}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Discount Filter */}
                      <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={discountFilter}
                            onChange={(e) => setDiscountFilter(e.target.checked)}
                            className="w-4 h-4 rounded text-primary focus:ring-primary"
                          />
                          <span>عروض فقط</span>
                        </label>
                      </div>
                      
                      {/* Sort Options */}
                      <div>
                        <label className="block mb-2 font-medium">ترتيب حسب</label>
                        <select
                          value={sortOption}
                          onChange={(e) => setSortOption(e.target.value)}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                        >
                          <option value="default">الافتراضي</option>
                          <option value="price-asc">السعر: من الأقل للأعلى</option>
                          <option value="price-desc">السعر: من الأعلى للأقل</option>
                          <option value="rating">الأعلى تقييماً</option>
                          <option value="discount">أكبر خصم</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between pt-2">
                        <button
                          onClick={resetFilters}
                          className="text-sm text-primary hover:underline"
                        >
                          إعادة تعيين الفلاتر
                        </button>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                          style={{
                            background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                            boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.2)`
                          }}
                        >
                          تطبيق الفلاتر
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-5 py-2 rounded-full text-sm md:text-base transition-all ${
                    activeCategory === "all"
                      ? "text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  style={{
                    backgroundColor: activeCategory === "all" ? colors.primary : undefined,
                    background: activeCategory === "all" 
                      ? `linear-gradient(145deg, ${colors.primary}, ${colors.accent})` 
                      : undefined,
                    minWidth: '90px',
                    boxShadow: activeCategory === "all" 
                      ? `0 4px 6px rgba(${colors.primaryRgb}, 0.2)` 
                      : undefined
                  }}
                >
                  الكل
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-full text-sm md:text-base transition-all ${
                      activeCategory === category.id
                        ? "text-white shadow-lg"
                        : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                    style={{
                      backgroundColor: activeCategory === category.id ? colors.primary : undefined,
                      background: activeCategory === category.id 
                        ? `linear-gradient(145deg, ${colors.primary}, ${colors.accent})` 
                        : undefined,
                      minWidth: '120px',
                      boxShadow: activeCategory === category.id 
                        ? `0 4px 6px rgba(${colors.primaryRgb}, 0.2)` 
                        : undefined
                    }}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${100 / (categories.length + 1)}%`,
                    transform: `translateX(${activeCategory === "all" ? 0 : (categories.findIndex(c => c.id === activeCategory) + 1) * 100}%)`,
                    background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Filter & Category Controls */}
        <div className="lg:hidden flex items-center justify-between mb-5 gap-4">
          {/* Mobile Category Filter */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-max">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === "all"
                    ? "text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                style={{
                  backgroundColor: activeCategory === "all" ? colors.primary : undefined,
                  background: activeCategory === "all" 
                    ? `linear-gradient(145deg, ${colors.primary}, ${colors.accent})` 
                    : undefined,
                  boxShadow: activeCategory === "all" 
                    ? `0 4px 6px rgba(${colors.primaryRgb}, 0.2)` 
                    : undefined
                }}
              >
                الكل
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category.id
                      ? "text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? colors.primary : undefined,
                    background: activeCategory === category.id 
                      ? `linear-gradient(145deg, ${colors.primary}, ${colors.accent})` 
                      : undefined,
                    boxShadow: activeCategory === category.id 
                      ? `0 4px 6px rgba(${colors.primaryRgb}, 0.2)` 
                      : undefined
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="p-2 rounded-full shadow-lg"
            aria-label="Open filters"
            style={{
              background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
              boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.2)`
            }}
          >
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Products Carousel */}
        <div className="relative">
          {displayedGroups.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold" style={{ 
                      color: colors.secondary,
                      background: `linear-gradient(145deg, ${colors.secondary}, ${colors.primary})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}>
                      {displayedGroups[currentSlide]?.category?.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                        disabled={displayedGroups.length <= 1}
                        aria-label="Previous category"
                        style={{
                          background: `linear-gradient(145deg, ${colors.lightBackground}, ${colors.currentBackground})`,
                          boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.1)`
                        }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                        disabled={displayedGroups.length <= 1}
                        aria-label="Next category"
                        style={{
                          background: `linear-gradient(145deg, ${colors.lightBackground}, ${colors.currentBackground})`,
                          boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.1)`
                        }}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {displayedGroups[currentSlide]?.products?.map((product, index) => (
                      <motion.div
                        key={product.id}
                        className="product-card group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden relative h-full flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          y: -5,
                          boxShadow: `0 10px 25px -5px rgba(${colors.primaryRgb}, 0.1)`
                        }}
                        aria-label={`Product: ${product.title}`}
                        style={{
                          boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.05)`
                        }}
                      >
                        {/* Product Badges */}
                        <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
                          <button
                            onClick={(e) => toggleWishlist(e, product)}
                            className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:text-red-500 transition-colors shadow-sm"
                            aria-label={isInWishlist(product.id) ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
                          >
                            {isInWishlist(product.id) ? (
                              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                            ) : (
                              <Heart className="w-4 h-4" />
                            )}
                          </button>
                          {product.salePrice && (
                            <div 
                              className="px-3 py-1 rounded-lg text-white text-xs font-bold shadow-md"
                              style={{ 
                                background: `linear-gradient(145deg, ${colors.accent}, ${colors.primary})`,
                                boxShadow: `0 2px 4px rgba(${colors.accentRgb}, 0.3)`
                              }}
                            >
                              {calculateDiscount(product.productPrice, product.salePrice)}% خصم
                            </div>
                          )}
                        </div>
                        
                        {/* Product Image */}
                        <Link 
                          href={`${slugDomain}/products/${product.slug}`}
                          className="block relative aspect-square"
                          aria-label={`View details for ${product.title}`}
                        >
                          <Image
                            src={product.imageUrl || '/placeholder.jpg'}
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            loading={index < 4 ? "eager" : "lazy"}
                            priority={index < 4}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        
                        {/* Product Details */}
                        <div className="p-4 flex flex-col flex-grow">
                          <div className="mb-2 flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`w-4 h-4 ${i < (product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">({product.reviewCount || 0})</span>
                          </div>
                          
                          <Link href={`${slugDomain}/products/${product.slug}`}>
                            <h3 className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                              {product.title}
                            </h3>
                          </Link>
                          
                          {product.descripti && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                              {product.descripti}
                            </p>
                          )}
                          
                          <div className="mt-auto flex items-center justify-between">
                            <div className="space-y-1">
                              <span 
                                className="text-lg font-bold block"
                                style={{ 
                                  color: colors.accent,
                                  textShadow: `0 2px 4px rgba(${colors.accentRgb}, 0.1)`
                                }}
                              >
                                {product.salePrice || product.productPrice} ر.س
                              </span>
                              {product.salePrice && (
                                <span className="text-sm text-gray-500 dark:text-gray-400 line-through block">
                                  {product.productPrice} ر.س
                                </span>
                              )}
                            </div>
                            <motion.button
                              onClick={(e) => handleAddToCart(e, product)}
                              className="p-2 rounded-full hover:scale-110 transition-transform shadow-md"
                              style={{
                                background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                                boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.2)`
                              }}
                              aria-label="Add to cart"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ShoppingCart className="w-5 h-5 text-white" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              {displayedGroups.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {displayedGroups.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all ${index === currentSlide ? 'w-6' : 'w-3'}`}
                      style={{
                        backgroundColor: index === currentSlide ? colors.primary : '#D1D5DB',
                        background: index === currentSlide 
                          ? `linear-gradient(90deg, ${colors.accent}, ${colors.primary})` 
                          : undefined
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 space-y-4">
              <motion.div 
                className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [`0 0 0 rgba(${colors.primaryRgb}, 0)`, `0 0 20px rgba(${colors.primaryRgb}, 0.2)`, `0 0 0 rgba(${colors.primaryRgb}, 0)`]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShoppingCart className="w-10 h-10 text-gray-400" />
              </motion.div>
              <h3 className="text-xl font-medium text-gray-500">
                لا توجد منتجات متاحة حالياً
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                يمكنك تصفح الأقسام الأخرى أو تعديل فلاتر البحث
              </p>
              <motion.button
                onClick={resetFilters}
                className="px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors mt-4"
                style={{
                  background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                  boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.2)`,
                  color: 'white'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إعادة تعيين الفلاتر
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showFilters && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFilters(false)}
          >
            <motion.div 
              className="h-full max-w-xs w-full bg-white dark:bg-gray-800 p-4 absolute left-0"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: `0 0 20px rgba(${colors.primaryRgb}, 0.2)`
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold" style={{
                  background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                  تصفية المنتجات
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6 h-[calc(100%-60px)] overflow-y-auto pb-6">
                {/* Price Range Filter */}
                <div>
                  <label className="block mb-2 font-medium">نطاق السعر</label>
                  <RangeSlider
                    min={0}
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onInput={setPriceRange}
                    className="range-slider"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{priceRange[0]} ر.س</span>
                    <span>{priceRange[1]} ر.س</span>
                  </div>
                </div>
                
                {/* Rating Filter */}
                <div>
                  <label className="block mb-2 font-medium">التقييم</label>
                  <div className="flex flex-wrap gap-2">
                    {[4, 3, 2, 1, 0].map((rating) => (
                      <motion.button
                        key={rating}
                        className={`px-3 py-1 rounded-full text-sm ${ratingFilter === rating ? 'text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                        onClick={() => setRatingFilter(rating)}
                        style={{
                          background: ratingFilter === rating 
                            ? `linear-gradient(145deg, ${colors.primary}, ${colors.accent})` 
                            : undefined,
                          boxShadow: ratingFilter === rating 
                            ? `0 2px 4px rgba(${colors.primaryRgb}, 0.2)` 
                            : undefined
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {rating > 0 ? (
                          <>
                            {rating}+ <Star className="w-3 h-3 inline fill-yellow-400 text-yellow-400" />
                          </>
                        ) : 'الكل'}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Discount Filter */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discountFilter}
                      onChange={(e) => setDiscountFilter(e.target.checked)}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                    <span>عروض فقط</span>
                  </label>
                </div>
                {/* Sort Options */}
                <div>
                  <label className="block mb-2 font-medium">ترتيب حسب</label>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  >
                    <option value="default">الافتراضي</option>
                    <option value="price-asc">السعر: من الأقل للأعلى</option>
                    <option value="price-desc">السعر: من الأعلى للأقل</option>
                    <option value="rating">الأعلى تقييماً</option>
                    <option value="discount">أكبر خصم</option>
                  </select>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <motion.button
                    onClick={resetFilters}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    إعادة تعيين
                  </motion.button>
                  <motion.button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 px-4 py-2 text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    style={{
                      background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                      boxShadow: `0 4px 6px rgba(${colors.primaryRgb}, 0.2)`
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    عرض النتائج
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
