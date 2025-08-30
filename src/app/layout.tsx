import type { Metadata, Viewport } from "next";
// Using system fonts during build to avoid network font fetching issues
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Animations from "./animations";

export const metadata: Metadata = {
  title: {
    template: "%s | GRANDTEX",
    default:
      "GRANDTEX - Производство одежды полного цикла в Бишкеке | Швейная фабрика",
  },
  description:
    "Швейная фабрика GRANDTEX в Бишкеке - производство одежды полного цикла. От лекал до готовой продукции. 50,000+ изделий/месяц. 15+ лет опыта. Контроль качества.",
  keywords: [
    "швейная фабрика",
    "производство одежды",
    "пошив одежды",
    "лекала",
    "Бишкек",
    "Кыргызстан",
    "текстиль",
    "униформа",
    "качественный пошив",
  ],
  authors: [{ name: "GRANDTEX" }],
  creator: "GRANDTEX",
  publisher: "GRANDTEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grandtex.ru"),
  openGraph: {
    title: "GRANDTEX - Производство одежды полного цикла",
    description:
      "Швейная фабрика GRANDTEX - производство качественной одежды с гарантией. Полный цикл от лекал до готовой продукции.",
    url: "https://grandtex.ru/",
    siteName: "GRANDTEX",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://ext.same-assets.com/1118492138/3414069527.jpeg",
        width: 1200,
        height: 630,
        alt: "GRANDTEX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRANDTEX - Производство одежды полного цикла",
    description:
      "Швейная фабрика GRANDTEX - производство качественной одежды с гарантией. Полный цикл от лекал до готовой продукции.",
    images: ["https://ext.same-assets.com/1118492138/3414069527.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* TODO: Bundle same-runtime via npm to avoid runtime CDN dependence */}
        <Script
          crossOrigin="anonymous"
          src="https://unpkg.com/same-runtime@0.0.1/dist/index.global.js"
          defer
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Animations />
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
