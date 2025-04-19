// import { withAuth } from "next-auth/middleware"

// export default withAuth({
// //Matches the pages config in [...nextauth]
//     pages:{
//         signIn: '/login',
//      //   error: '/error',
//     }
// })

// export const config = { matcher: [ "/dashboard/:path*" , "/checkout", "/:path*/checkout"]}

// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req) {
//   const token = await getToken({ req });
//   const { pathname } = req.nextUrl;

//   if (token) {
//     // المستخدم مسجل دخول، يكمل عادي
//     return NextResponse.next();
//   }

//   // تقسيم الرابط لاستخراج slugDomain
//   const pathParts = pathname.split("/");
//   const slugDomain = pathParts[1] || "default";

//   // إذا المسار يبدأ بـ /dashboard → توجهه إلى /login
//   if (pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // إذا المسار فيه checkout → توجهه إلى /slugDomain/loginCustomer
//   if (pathname.includes("/checkout")) {
//     return NextResponse.redirect(new URL(`/${slugDomain}/loginCustomer`, req.url));
//   }

//   return NextResponse.next();
// }

// // تحديد المسارات اللي ينطبق عليها الميدل وير
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/checkout",
//     "/:slugDomain/checkout"
//   ]
// };


// middleware.js (في جذر المشروع أو /app)
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// احرص أن NEXTAUTH_SECRET معرف في .env.local
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // 1) تحقق من جلسة next-auth (Vendor)
  const vendorToken = await getToken({ req, secret: NEXTAUTH_SECRET });

  // 2) تحقق من JWT الكوكي للعملاء
  const customerToken = req.cookies.get("customer_token")?.value;

  // إذا وجد أيٍ من الجلستين → اترك المستخدم يمر
  if (vendorToken || customerToken) {
    return NextResponse.next();
  }

  // خلاف ذلك → يحتاج لتسجيل الدخول
  // مثال: منع لوحة التحكم
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // مثال: منع checkout للمتجر
  if (pathname.includes("/checkout")) {
    // نقرأ slug من المسار
    const slug = pathname.split("/")[1] || "default";
    return NextResponse.redirect(new URL(`/${slug}/loginCustomer`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/checkout",
    "/:slug/checkout"
  ],
};
