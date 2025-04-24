// import { db } from '@/lib/db'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/authOptions'
// import { cookies } from 'next/headers'
// import jwt from 'jsonwebtoken'

// const getUserFromRequest = async (req) => {
//   const session = await getServerSession(authOptions)
//   if (session?.user?.id) {
//     return { id: session.user.id, role: 'VENDOR' }
//   }

//   const cookie = cookies().get('customer_token')?.value
//   if (!cookie) return null

//   try {
//     const decoded = jwt.verify(cookie, process.env.JWT_SECRET)
//     return { id: decoded.id, role: 'CUSTOMER' }
//   } catch (err) {
//     return null
//   }
// }

// // ✅ GET: استرجاع إشعارات المستخدم الحالي
// export async function GET(req) {
//   const user = await getUserFromRequest(req)
//   if (!user) return new Response('Unauthorized', { status: 401 })

//   const notifications = await db.notification.findMany({
//     where: {
//       userId: user.id,
//     },
//     orderBy: { createdAt: 'desc' },
//   })

//   return Response.json(notifications)
// }

// // ✅ POST: إنشاء إشعار جديد
// export async function POST(req) {
//   const user = await getUserFromRequest(req)
//   if (!user) return new Response('Unauthorized', { status: 401 })

//   const data = await req.json()

//   const notification = await db.notification.create({
//     data: {
//       title: data.title,
//       body: data.body,
//       type: data.type,
//       userId: data.userId,
//       storeId: data.storeId || null,
//       orderId: data.orderId || null,
//       productId: data.productId || null,
//       couponId: data.couponId || null,
//       bannerId: data.bannerId || null,
//     },
//   })

//   return Response.json(notification)
// }


// import { NextResponse } from 'next/server'
// import db from '@/lib/db'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/authOptions'
// import { cookies } from 'next/headers'
// import jwt from 'jsonwebtoken'

// const getUserFromRequest = async () => {
//   const session = await getServerSession(authOptions)
//   if (session?.user?.id) {
//     return { id: session.user.id, role: 'VENDOR' }
//   }

//   const cookieStore = cookies()
//   const token = cookieStore.get('customer_token')?.value
//   if (!token) return null

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     return { id: decoded.id, role: 'CUSTOMER' }
//   } catch {
//     return null
//   }
// }

// // GET: استرجاع الإشعارات + عدد غير المقروءة
// export async function GET() {
//   const user = await getUserFromRequest()
//   if (!user) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const [notifications, unreadCount] = await Promise.all([
//     db.notification.findMany({
//       where: { userId: user.id },
//       orderBy: { createdAt: 'desc' },
//       take: 50,
//     }),
//     db.notification.count({
//       where: { userId: user.id, read: false },
//     }),
//   ])

//   return NextResponse.json({ notifications, unreadCount })
// }

// // POST: إنشاء إشعار جديد
// export async function POST(request) {
//   const user = await getUserFromRequest()
//   if (!user) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const data = await request.json()

//   const notification = await db.notification.create({
//     data: {
//       title:      data.title,
//       body:       data.body,
//       type:       data.type,
//       userId:     data.userId,
//       storeId:    data.storeId  || null,
//       orderId:    data.orderId  || null,
//       productId:  data.productId|| null,
//       couponId:   data.couponId || null,
//       bannerId:   data.bannerId || null,
//     },
//   })

//   return NextResponse.json(notification)
// }

// // app/api/notifications/route.js
// import { NextResponse } from 'next/server'
// import db from '@/lib/db'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/authOptions'
// import { cookies } from 'next/headers'
// import jwt from 'jsonwebtoken'
// import Pusher from 'pusher-js'

// // === تهيئة عميل Pusher ===
// const pusher = new Pusher({
//   appId:   process.env.PUSHER_APP_ID,
//   key:     process.env.NEXT_PUBLIC_PUSHER_KEY,
//   secret:  process.env.PUSHER_SECRET,
//   cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
//   useTLS:  true,
// })

// const getUserFromRequest = async () => {
//   const session = await getServerSession(authOptions)
//   if (session?.user?.id) {
//     return { id: session.user.id, role: 'VENDOR' }
//   }

//   const cookieStore = cookies()
//   const token = cookieStore.get('customer_token')?.value
//   if (!token) return null

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     return { id: decoded.id, role: 'CUSTOMER' }
//   } catch {
//     return null
//   }
// }

// // GET: استرجاع الإشعارات + عدد غير المقروءة
// export async function GET() {
//   const user = await getUserFromRequest()
//   if (!user) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const [notifications, unreadCount] = await Promise.all([
//     db.notification.findMany({
//       where: { userId: user.id },
//       orderBy: { createdAt: 'desc' },
//       take: 50,
//     }),
//     db.notification.count({
//       where: { userId: user.id, read: false },
//     }),
//   ])

//   return NextResponse.json({ notifications, unreadCount })
// }

// // POST: إنشاء إشعار جديد + إرسال real-time عبر Pusher
// export async function POST(request) {
//   const user = await getUserFromRequest()
//   if (!user) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const data = await request.json()

//   // 1) إنشاء الإشعار في قاعدة البيانات
//   const notification = await db.notification.create({
//     data: {
//       title:     data.title,
//       body:      data.body,
//       type:      data.type,
//       userId:    data.userId,
//       storeId:   data.storeId   || null,
//       orderId:   data.orderId   || null,
//       productId: data.productId || null,
//       couponId:  data.couponId  || null,
//       bannerId:  data.bannerId  || null,
//     },
//   })

//   // 2) إطلاق الحدث عبر Pusher للقناة الخاصة بالمستخدم
//   try {
//     await pusher.trigger(
//       `user-${data.userId}`,       // اسم القناة
//       'new-notification',          // اسم الحدث
//       {
//         id:        notification.id,
//         title:     notification.title,
//         body:      notification.body,
//         type:      notification.type,
//         createdAt: notification.createdAt,
//         link:      data.link || null
//       }
//     )
//   } catch (err) {
//     console.error('Pusher trigger error:', err)
//   }

//   // 3) إرجاع الإشعار المنشأ
//   return NextResponse.json(notification)
// }

// app/api/notifications/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/db'                // أو db إذا هو الـ default export
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import Pusher from 'pusher'                  // ← استيراد الحزمة الصحيحة للـ server

// === تهيئة Pusher Server SDK ===
const pusher = new Pusher({
  appId:   process.env.PUSHER_APP_ID,
  key:     process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret:  process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS:  true,
})

// سرّ JWT (يمكن استخدام NEXTAUTH_SECRET إذا تريد)
const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT secret is not defined in env (JWT_SECRET or NEXTAUTH_SECRET)')
}

async function getUserFromRequest() {
  // 1) تحقق من NextAuth (البائع)
  const session = await getServerSession(authOptions)
  if (session?.user?.id) {
    return { id: session.user.id, role: 'VENDOR' }
  }

  // 2) جرب توكن العميل من الكوكيز
  const token = cookies().get('customer_token')?.value
  if (!token) return null

  try {
    // نمرّر {} كـ options ثالثاً لتجنب الخطأ if secret موجود
    const decoded = jwt.verify(token, JWT_SECRET, {})
    return { id: decoded.id, role: 'CUSTOMER' }
  } catch (err) {
    console.error('JWT verify error:', err)
    return null
  }
}

// GET /api/notifications
export async function GET(request) {
  const user = await getUserFromRequest()
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const [notifications, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
    prisma.notification.count({
      where: { userId: user.id, read: false },
    }),
  ])

  return NextResponse.json({ notifications, unreadCount })
}

// POST /api/notifications
export async function POST(request) {
  const user = await getUserFromRequest()
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const data = await request.json()

  // 1) إنشاء الإشعار في قاعدة البيانات
  const notification = await prisma.notification.create({
    data: {
      title:     data.title,
      body:      data.body,
      type:      data.type,
      userId:    data.userId,
      storeId:   data.storeId   || null,
      orderId:   data.orderId   || null,
      productId: data.productId || null,
      couponId:  data.couponId  || null,
      bannerId:  data.bannerId  || null,
    },
  })

  // 2) Trigger real-time عبر Pusher
  try {
    await pusher.trigger(
      `user-${data.userId}`,      // قناة المستخدم
      'new-notification',         // اسم الحدث
      {
        id:        notification.id,
        title:     notification.title,
        body:      notification.body,
        type:      notification.type,
        createdAt: notification.createdAt,
        link:      data.link || null,
      }
    )
  } catch (err) {
    console.error('Pusher trigger error:', err)
  }

  // 3) إرجاع النتيجة
  return NextResponse.json(notification)
}
