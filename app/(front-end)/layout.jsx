import "./globals.css"
import ClientLayout from "./clientLayout"

export const metadata = {
  title: "أتجر - منصة التجارة الإلكترونية الأكثر تطوراً",
  description: "أنشئ متجرك الإلكتروني بسهولة واحترافية مع أتجر",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}
