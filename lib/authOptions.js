// // pages/api/auth/[...nextauth].ts
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { compare } from "bcrypt";
// import db from "@/lib/db";

// export default NextAuth({
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { strategy: "jwt" },
//   pages: { signIn: "/login" },
//   providers: [
//     CredentialsProvider({
//       id: "credentials-or-otp",
//       name: "كلمة المرور أو رمز التحقق",
//       credentials: {
//         email:    { label: "البريد الإلكتروني", type: "email" },
//         password: { label: "كلمة المرور",    type: "password" },
//         code:     { label: "رمز التحقق",     type: "text" },
//       },
//       async authorize({ email, password, code }) {
//         if (!email) throw new Error("الرجاء إدخال البريد الإلكتروني");

//         // 1) جرب إيجاد التاجر
//         const vendor = await db.vendor.findUnique({ where: { email } });
//         if (vendor) {
//           if (!password) throw new Error("الرجاء إدخال كلمة المرور");
//           const valid = await compare(password, vendor.password);
//           if (!valid) throw new Error("كلمة المرور غير صحيحة");
//           return { id: vendor.id, email, name: vendor.name, role: "VENDOR" };
//         }

//         // 2) تعامل مع العميل عبر OTP
//         if (!code) throw new Error("الرجاء إدخال رمز التحقق");
//         const cust = await db.customer.findUnique({ where: { email } });
//         if (
//           !cust ||
//           cust.verificationCode !== code ||
//           !cust.verificationCodeExpiresAt ||
//           cust.verificationCodeExpiresAt < new Date()
//         ) {
//           throw new Error("رمز التحقق غير صحيح أو منتهي الصلاحية");
//         }

//         // 3) امسح الكود بعد الاستخدام
//         await db.customer.update({
//           where: { email },
//           data: {
//             verificationCode: null,
//             verificationCodeExpiresAt: null,
//             emailVerified: true,
//           },
//         });

//         // 4) إذا عميل جديد (يمكن تخزين الاسم/الهاتف لاحقاً في Profile Complete)
//         return {
//           id:    cust.id,
//           email: cust.email,
//           name:  cust.firstName ? `${cust.firstName} ${cust.lastName}` : "",
//           role:  "CUSTOMER",
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id    = user.id;
//         token.email = user.email;
//         token.name  = user.name;
//         token.role  = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id    = token.id;
//       session.user.email = token.email;
//       session.user.name  = token.name;
//       session.user.role  = token.role;
//       return session;
//     },
//   },
// });


// //lib/authOption.js

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";

// //import { compare } from "bcrypt";
// import { compare} from 'bcrypt';
// import db from "./db";
// // import { UserRole } from "@prisma/client";
// export const    authOptions = {
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "jb@gmail.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           console.log("Authorize function received credentials:", credentials);
//           // Check if user credentials are they are Not empty
//           if (!credentials?.email || !credentials?.password) {
//             throw { error: "No Inputs Found", status: 401 };
//           }
//           console.log("Passed Check 1");
        
//           // Check if user exists in Vendors or Customers
//           let existingUser = await db.vendor.findUnique({
//             where: { email: credentials.email },
//             include: {
//               store: true, // تضمين المتجر المرتبط بالبائع
//             },
//           });
        
//           let userType = "VENDOR";
        
//           if (!existingUser) {
//             console.log("User not found in Vendors, checking Customers...");
//             existingUser = await db.customer.findUnique({
//               where: { email: credentials.email },
//             });
//             userType = "CUSTOMER";
//           }
        
//           if (!existingUser) {
//             console.log("No user found");
//             throw { error: "No user found", status: 401 };
//           }
        
//           console.log("Passed Check 2");
        
//           // Check if Password is correct
//           const passwordMatch = await compare(credentials.password, existingUser.password);
//           if (!passwordMatch) {
//             console.log("Password incorrect");
//             throw { error: "Password Incorrect", status: 401 };
//           }
        
//           console.log("Pass 3 Checked");

//           if (existingUser.store && existingUser.store.vendorId !== existingUser.id) {
//             console.log("User does not own the store");
//             throw { error: "User does not own the store", status: 403 };
//           }
        
//           const user = {
//             id: existingUser.id,
//             name: existingUser.name,
//             email: existingUser.email,
//             role: existingUser.role || userType,
//             image: existingUser.image,
//             emailVerified: existingUser.emailVerified,
//           };
        
//           console.log("User Compiled:", user);
//           return user;
        
//         } catch (error) {
//           console.log("All Failed");
//           console.log(error);
//           throw { error: "Something went wrong", status: 401 };
//         }
        
      
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token) {
//         console.log(`token:${token} in session`);
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.role = token.role;
//         session.user.image = token.picture;
//         session.user.emailVerified = token.emailVerified;
//       }
//       console.log(`session:${session.user}`);
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.role = user.role;
//         token.image = user.picture;
//         token.emailVerified = user.emailVerified;
//       }
//       console.log(`token:${token}`);
//       return token;
//     },
//   },
// };


//   try {
//           console.log("Authorize function recieved credentials:", credentials);
//           // Check if user credentials are they are Not empty
//           if (!credentials?.email || !credentials?.password) {
//             throw { error: "No Inputs Found", status: 401 };
//           }
//           console.log("Passed Check 1 ");
//           //Check if user exists
//           const existingUser = await db.vendor.findUnique({
//             where: { email: credentials.email },
//           });
//           if (!existingUser) {
//             console.log("No user found");
//             throw { error: "No user found", status: 401 };
//           }

//           console.log("Passed Check 2");

//           //Check if Password is correct
//           const passwordMatch = await compare(
//             credentials.password,
//             existingUser.password
//           );
//           if (!passwordMatch) {
//             console.log("Password incorrect");
//             throw { error: "Password Incorrect", status: 401 };
//           }
//           console.log("Pass 3 Checked");
//           const user = {
//             id: existingUser.id,
//             name: existingUser.name,
//             email: existingUser.email,
//             role: existingUser.role,
//             image: existingUser.image,
//             emailVerified: existingUser.emailVerified,
//           };
//           //
//           console.log("User Compiled");
//           // console.log(user);
//           return user;
//         } catch (error) {
//           console.log("aLL Failed");
//           console.log(error);
//           throw { error: "Something went wrong", status: 401 };
//         }

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";

// export const authOptions = {
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           console.log("Received credentials:", credentials);

//           // تأكد من أن المدخلات غير فارغة
//           if (!credentials?.email || !credentials?.password) {
//             throw new Error("Email and password are required.");
//           }

//           // محاولة العثور على المستخدم في جدول البائعين أولاً
//           let existingUser = await db.vendor.findUnique({
//             where: { email: credentials.email },
//             include: {
//               store: true,
//             },
//           });

//           let userType = "VENDOR";

//           // // إذا لم يتم العثور على المستخدم، حاول في جدول العملاء
//           // if (!existingUser) {
//           //   console.log("Vendor not found, checking in customers...");
//           //   existingUser = await db.customer.findUnique({
//           //     where: { email: credentials.email },
//           //   });
//           //   userType = "CUSTOMER";
//           // }

//           if (!existingUser) {
//             throw new Error("No user found with that email.");
//           }

//           // تحقق من صحة كلمة المرور
//           const passwordMatch = await compare(credentials.password, existingUser.password);
//           if (!passwordMatch) {
//             throw new Error("Invalid password.");
//           }

//           // إذا كان المستخدم بائعًا وتديره المتجر
//           if (existingUser.store && existingUser.store.vendorId !== existingUser.id) {
//             throw new Error("User does not own the store.");
//           }

//           const user = {
//             id: existingUser.id,
//             name: existingUser.name,
//             email: existingUser.email,
//             role: existingUser.role || userType,
//             image: existingUser.image,
//             emailVerified: existingUser.emailVerified,
//           };

//           return user;

//         } catch (error) {
//           console.error("Authorization failed:", error);
//           throw new Error("Authentication failed.");
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.role = token.role;
//         session.user.image = token.image;
//         session.user.emailVerified = token.emailVerified;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.role = user.role;
//         token.image = user.image;
//         token.emailVerified = user.emailVerified;
//       }
//       return token;
//     },
//   },
// };


export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Received credentials:", credentials);

          // تأكد من أن المدخلات غير فارغة
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          console.log("Passed Check 1");

          let existingUser = null;
          let userType = null;
          
          // 🔍 Check if user is Admin
          existingUser = await db.admin.findUnique({
            where: { email: credentials.email },
          });
          if (existingUser) {
            userType = "ADMIN";
          } else {
            // 🔍 Check if user is Vendor
            existingUser = await db.vendor.findUnique({
              where: { email: credentials.email },
              include: {
                store: true, // تضمين المتجر المرتبط بالبائع
              },
            });
          
            if (existingUser) {
              userType = "VENDOR";
            } 
          }
          
          console.log("✅ Existing User:", existingUser);
          console.log("🔍 User Type:", userType);
          
          if (!existingUser) {
            console.log("No user found");
            throw { error: "No user found", status: 401 };
          }
          
        
          // محاولة العثور على المستخدم في جدول البائعين أولاً
       

          // // إذا لم يتم العثور على المستخدم، حاول في جدول العملاء
          // if (!existingUser) {
          //   console.log("Vendor not found, checking in customers...");
          //   existingUser = await db.customer.findUnique({
          //     where: { email: credentials.email },
          //   });
          //   userType = "CUSTOMER";
          // }

          if (!existingUser) {
            throw new Error("No user found with that email.");
          }

          console.log("Passed Check 2", existingUser);

          // تحقق من صحة البيانات بناءً على نوع المستخدم
          if (userType === "ADMIN" || userType === "VENDOR") {
            // تحقق من كلمة المرور للإداري أو البائع
            const passwordMatch = await compare(credentials.password, existingUser.password);
            if (!passwordMatch) {
              console.log(`Password incorrect for ${userType}`);
              throw new Error("كلمة المرور غير صحيحة");
            }
            console.log(`✅ Password matched for ${userType}`);
          }

       

          // إذا كان المستخدم بائعًا وتديره المتجر
          if (existingUser.store && existingUser.store.vendorId !== existingUser.id) {
            throw new Error("User does not own the store.");
          }

          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role || userType,
            image: existingUser.image,
            emailVerified: existingUser.emailVerified,
          };

          return user;

        } catch (error) {
          console.error("Authorization failed:", error);
          if (error instanceof Error) {
            throw new Error(error.message);
          }
        
          // إذا كان الخطأ عبارة عن كائن مخصص برسالة
          throw new Error(typeof error === "string" ? error : "حدث خطأ في تسجيل الدخول");
        
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.emailVerified = token.emailVerified;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.emailVerified = user.emailVerified;
      }
      return token;
    },
  },
};