// "use client"

// import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// // تعريف نوع البيانات للمنتج
// interface Product {
//   id: string
//   title: string
//   imageUrl?: string
//   salePrice: number
//   productPrice?: number
//   slug: string
//   [key: string]: any // للسماح بخصائص إضافية
// }

// // تعريف حالة المفضلة
// interface WishlistState {
//   items: Product[]
// }

// // الحالة الأولية
// const initialState: WishlistState = {
//   items: [],
// }

// // إنشاء شريحة المفضلة
// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     // إضافة منتج إلى المفضلة
//     addToWishlist: (state, action: PayloadAction<Product>) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id)
//       if (!existingItem) {
//         state.items.push(action.payload)
//       }
//     },

//     // إزالة منتج من المفضلة
//     removeFromWishlist: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload)
//     },

//     // تبديل حالة المنتج في المفضلة (إضافة إذا غير موجود، إزالة إذا موجود)
//     toggleWishlistItem: (state, action: PayloadAction<Product>) => {
//       const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
//       if (existingItemIndex >= 0) {
//         state.items.splice(existingItemIndex, 1)
//       } else {
//         state.items.push(action.payload)
//       }
//     },

//     // مسح جميع المنتجات من المفضلة
//     clearWishlist: (state) => {
//       state.items = []
//     },
//   },
// })

// // تصدير الأفعال
// export const { addToWishlist, removeFromWishlist, toggleWishlistItem, clearWishlist } = wishlistSlice.actions

// // تصدير المُخفض
// export default wishlistSlice.reducer


// import { createSlice } from "@reduxjs/toolkit"

// // الحالة الأولية
// const initialState = {
//   items: [],
// }

// // إنشاء شريحة المفضلة
// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     // إضافة منتج إلى المفضلة
//     addToWishlist: (state, action) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id)
//       if (!existingItem) {
//         state.items.push(action.payload)
//       }
//     },

//     // إزالة منتج من المفضلة
//     removeFromWishlist: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload)
//     },

//     // تبديل حالة المنتج في المفضلة
//     toggleWishlistItem: (state, action) => {
//       const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
//       if (existingItemIndex >= 0) {
//         state.items.splice(existingItemIndex, 1)
//       } else {
//         state.items.push(action.payload)
//       }
//     },

//     // مسح جميع المنتجات من المفضلة
//     clearWishlist: (state) => {
//       state.items = []
//     },
//   },
// })

// // تصدير الأفعال
// export const { addToWishlist, removeFromWishlist, toggleWishlistItem, clearWishlist } = wishlistSlice.actions

// // تصدير المُخفض
// export default wishlistSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

// الحالة الأولية مع نوع بيانات صريح
const initialState = {
  items: [], // مصفوفة لتخزين كائنات المنتجات الكاملة
}

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // إضافة منتج مع منع التكرار
    addToWishlist: (state, action) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },

    // إزالة منتج بواسطة ID
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    // تبديل الحالة باستخدام المنتج الكامل
    toggleWishlistItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      index === -1 
        ? state.items.push(action.payload)
        : state.items.splice(index, 1)
    },

    // إفراغ المفضلة مع إعادة تعيين الحالة
    clearWishlist: (state) => {
      state.items = []
    }
  },
})

// تصدير مُنشئي الأفعال
export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlistItem,
  clearWishlist
} = wishlistSlice.actions

// تصدير المُخفض الرئيسي
export default wishlistSlice.reducer