// import "./globals.css"
// import ClientLayout from "./clientLayout"

// export const metadata = {
//   title: "أتجر - منصة التجارة الإلكترونية الأكثر تطوراً",
//   description: "أنشئ متجرك الإلكتروني بسهولة واحترافية مع أتجر",
//     generator: 'لايت تكنلوجي اليمن'
// }

// export default function RootLayout({ children }) {
//   return <ClientLayout>{children}</ClientLayout>
// }

// app/layout.jsx
import "./globals.css";
import ClientLayout from "./clientLayout";

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const defaultImage = `${baseUrl}/default-og-image.png`;

  return {
    title: "أتجر - منصة التجارة الإلكترونية الأكثر تطوراً",
    description: "أنشئ متجرك الإلكتروني بسهولة واحترافية مع أتجر",
    generator: "لايت تكنلوجي اليمن",
    keywords: [
      "أتجر",
      "منصة تجارة إلكترونية",
      "إنشاء متجر إلكتروني",
      "سيو",
      "ecommerce platform",
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
      languages: {
        "ar-YE": baseUrl,       // الإصدار اليمني
        "ar": baseUrl,          // العربية العامة
      },
    },
    openGraph: {
      title: "أتجر - منصة التجارة الإلكترونية الأكثر تطوراً",
      description: "أنشئ متجرك الإلكتروني بسهولة واحترافية مع أتجر",
      url: baseUrl,
      siteName: "أتجر",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "أتجر - بناء متاجر إلكترونية",
        },
      ],
      locale: "ar_YE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "أتجر - منصة التجارة الإلكترونية الأكثر تطوراً",
      description: "أنشئ متجرك الإلكتروني بسهولة واحترافية مع أتجر",
      images: [defaultImage],
      // site: "@atjar_platform",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    themeColor: "#0d47a1",
    viewport: "width=device-width, initial-scale=1.0",
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "أتجر",
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar-YE">
      <head />
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
