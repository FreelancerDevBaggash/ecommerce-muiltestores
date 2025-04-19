import jwt from "jsonwebtoken";
import { cookies } from "next/headers"; // ✅ استيراد cookies

export function getCustomerSession() {
  const token = cookies().get("customer_token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ترجع session بنفس تنسيق next-auth
    return {
      user: {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
        firstName: decoded.firstName,
        lastName: decoded.lasttName,
        phone: decoded.phone,
        profileImage: decoded.profileImage,

        
      }
    };
  } catch (error) {
    return null;
  }
}
