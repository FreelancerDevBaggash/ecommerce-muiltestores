import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "fallbackSecret";

export function signToken(data, expiresIn = "7d") {
  return jwt.sign(data, secret, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}
