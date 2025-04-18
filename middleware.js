// import { withAuth } from "next-auth/middleware"

// export default withAuth({
// //Matches the pages config in [...nextauth]
//     pages:{
//         signIn: '/login',
//      //   error: '/error',
//     }
// })

// export const config = { matcher: [ "/dashboard/:path*" , "/checkout", "/:path*/checkout"]}

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (token) {
    // المستخدم مسجل دخول، يكمل عادي
    return NextResponse.next();
  }

  // تقسيم الرابط لاستخراج slugDomain
  const pathParts = pathname.split("/");
  const slugDomain = pathParts[1] || "default";

  // إذا المسار يبدأ بـ /dashboard → توجهه إلى /login
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // إذا المسار فيه checkout → توجهه إلى /slugDomain/loginCustomer
  if (pathname.includes("/checkout")) {
    return NextResponse.redirect(new URL(`/${slugDomain}/loginCustomer`, req.url));
  }

  return NextResponse.next();
}

// تحديد المسارات اللي ينطبق عليها الميدل وير
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/checkout",
    "/:slugDomain/checkout"
  ]
};
