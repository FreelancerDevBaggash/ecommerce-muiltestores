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

// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: NEXTAUTH_SECRET });

  // 1) منع Vendors من الوصول لـ /dashboard/SubscriptionPlan
  const adminOnlyPages = [
    "/dashboard/SubscriptionPlan",
    // "/dashboard/Settings",
    // "/dashboard/Billing",
    // "/dashboard/AdminTools",
  ];

  if (adminOnlyPages.some(page => pathname.startsWith(page))) {
    if (token?.role !== "ADMIN") {
      // إعادة التوجيه إلى لوحة التحكم إذا كان Vendor
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next(); // يسمح للـ Admin
  }


  // 2) حماية لوحة التحكم (للتجار والمسؤولين حسب الصلاحيات)
  if (pathname.startsWith("/dashboard")) {
    if (token?.role === "ADMIN" || token?.role === "VENDOR") {
      return NextResponse.next();
    }
    // إذا لم يكن مسجلاً نهائياً، نرسله لصفحة تسجيل الدخول
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 3) مسارات الدفع (للعملاء فقط)
  if (pathname === "/checkout" || pathname.match(/^\/[^/]+\/checkout$/)) {
    const customerToken = req.cookies.get("customer_token")?.value;
    if (customerToken) {
      return NextResponse.next();
    }
    const parts = pathname.split("/").filter(Boolean);
    const slug = parts.length === 2 ? parts[0] : null;
    const redirectTo = slug ? `/${slug}/loginCustomer` : `/loginCustomer`;
    return NextResponse.redirect(new URL(redirectTo, req.url));
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


// // middleware.js
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// // استخدم متغيرات البيئة لتعريف الدومين والـ secrets
// const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
// const ROOT_DOMAIN = process.env.ROOT_DOMAIN; // مثل 'yourdomain.com'

// export async function middleware(req) {
//   const { headers, cookies, nextUrl: originalUrl } = req;
//   const hostname = headers.get("host") || "";
//   const pathname = originalUrl.pathname;
  
//   // 1) استخرج slugDomain فقط للـ subdomains الفعلية
//   let slugDomain = null;
//   if (hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`) {
//     slugDomain = null;
//   } else if (hostname.includes("localhost")) {
//     // دعم محلي للـ subdomains مثل mobile.localhost
//     slugDomain = hostname.split(".")[0]; 
//   } else if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
//     slugDomain = hostname.slice(0, hostname.indexOf(`.${ROOT_DOMAIN}`));
//   }
//   console.log("hostname:", hostname);
//   console.log("slugDomain:", slugDomain);
//   console.log("pathname:", pathname);
  
//   // 2) مسارات dashboard محمية بتوكن التاجر
//   if (pathname.startsWith("/dashboard")) {
//     const vendorToken = await getToken({ req, secret: NEXTAUTH_SECRET });
//     if (!vendorToken) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//     return NextResponse.next();
//   }

//   // 3) مسارات checkout محمية بتوكن العميل، وهي خاصة بالمتجر سواء بالسوب دومين أو بالمسار
//   const isCheckout = pathname === "/checkout" || /^\/[^/]+\/checkout$/.test(pathname);
//   if (isCheckout) {
//     const customerToken = cookies.get("customer_token")?.value;
//     if (!customerToken) {
//       // slug من المسار (إذا لم يكن subdomain)
//       const parts = pathname.split("/").filter(Boolean);
//       const slugInPath = parts.length === 2 ? parts[0] : null;
//       const loginPath = slugDomain || slugInPath;
//       const redirectTo = loginPath ? `/${loginPath}/loginCustomer` : "/loginCustomer";
//       return NextResponse.redirect(new URL(redirectTo, req.url));
//     }
//     return NextResponse.next();
//   }

//   // 4) إعادة كتابة المسار لطلبات Subdomain
//   const isStaticFile =
//     pathname.startsWith("/_next/static") ||
//     pathname.startsWith("/_next/image") ||
//     pathname === "/favicon.ico" ||
//     pathname.startsWith("/_next/data");

//   if (slugDomain && !isStaticFile && !pathname.startsWith("/api/")) {
//     const url = originalUrl.clone();
//     url.pathname = `/${slugDomain}${pathname}`;
//     url.search = originalUrl.search;
//     url.hash = originalUrl.hash;
//     return NextResponse.rewrite(url);
//   }

//   // 5) باقي الحالات بدون تغيير
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/_next/static/:path*",
//     "/_next/image/:path*",
//     "/_next/data/:path*",
//     "/favicon.ico",
//     "/api/:path*",
//     "/:path*"
//   ],
// };
