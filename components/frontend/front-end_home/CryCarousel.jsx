"use client"

import {
  ChevronLeft,
  ChevronRight,
  Utensils,
  Coffee,
  Heart,
  Gem,
  Smartphone,
  Package,
  ShoppingBag,
  Globe,
} from "lucide-react"

export default function CryCarousel({ activeCategory, setActiveCategory }) {
  const categories = [
    "المطاعم",
    "المطاعم والكافيهات",
    "العناية والتجميل",
    "المجوهرات",
    "الإلكترونيات",
    "الصحة واللياقة",
    "المنتجات الرقمية",
    "عبايات وأزياء",
    "المواقع الشخصية",
  ]

  const categoryIcons = {
    المطاعم: <Utensils className="h-6 w-6" />,
    "المطاعم والكافيهات": <Coffee className="h-6 w-6" />,
    "العناية والتجميل": <Heart className="h-6 w-6" />,
    المجوهرات: <Gem className="h-6 w-6" />,
    الإلكترونيات: <Smartphone className="h-6 w-6" />,
    "الصحة واللياقة": <Heart className="h-6 w-6" />,
    "المنتجات الرقمية": <Package className="h-6 w-6" />,
    "عبايات وأزياء": <ShoppingBag className="h-6 w-6" />,
    "المواقع الشخصية": <Globe className="h-6 w-6" />,
  }

  const navigateCategory = (direction) => {
    const currentIndex = categories.indexOf(activeCategory)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % categories.length
    } else {
      newIndex = (currentIndex - 1 + categories.length) % categories.length
    }

    setActiveCategory(categories[newIndex])
  }

  return (
    <div className="bg-primary/40 py-6 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 overflow-x-auto pb-4 relative">
          {/* Navigation arrows */}
          <button
            onClick={() => navigateCategory("prev")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Previous category"
          >
            <ChevronRight className="h-6 w-6 text-indigo-800" />
          </button>

          {categories.map((category) => (
            <CategoryButton
              key={category}
              icon={categoryIcons[category]}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}

          <button
            onClick={() => navigateCategory("next")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Next category"
          >
            <ChevronLeft className="h-6 w-6 text-indigo-800" />
          </button>
        </div>
      </div>
    </div>
  )
}

function CategoryButton({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex flex-col items-center justify-center p-4 rounded-xl min-w-[120px] transition-colors ${
        active ? "bg-indigo-900 text-white" : "bg-white text-indigo-900 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <span className="mb-2">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

 