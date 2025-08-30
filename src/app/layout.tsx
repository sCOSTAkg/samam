import type { Metadata, Viewport } from "next";
// Using system fonts during build to avoid network font fetching issues
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Animations from './animations';


export const metadata: Metadata = {
  title: {
    template: "%s | GRANDTEX Кожа",
    default: "GRANDTEX | Ваш партнёр по кожевенному производству, ориентированный на будущее",
  },
  description: "GRANDTEX — ваш партнёр по высококачественным кожаным изделиям, уделяющий особое внимание устойчивости и инновационным решениям для мировых брендов.",
  keywords: ["кожа", "кожевенный завод", "устойчивая кожа", "кожа для обуви", "премиальная кожа", "производство кожи"],
  authors: [{ name: "GRANDTEX" }],
  creator: "GRANDTEX",
  publisher: "GRANDTEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grandtex-leather.netlify.app"),
  openGraph: {
    title: "GRANDTEX | Ваш партнёр по кожевенному производству, ориентированный на будущее",
    description: "GRANDTEX — ваш партнёр по высококачественным кожаным изделиям, уделяющий особое внимание устойчивости и инновационным решениям для мировых брендов.",
    url: "https://grandtex-leather.netlify.app",
    siteName: "GRANDTEX Leather",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://ext.same-assets.com/1118492138/3414069527.jpeg",
        width: 1200,
        height: 630,
        alt: "GRANDTEX Leather",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRANDTEX | Ваш партнёр по кожевенному производству, ориентированный на будущее",
    description: "GRANDTEX — ваш партнёр по высококачественным кожаным изделиям, уделяющий особое внимание устойчивости и инновационным решениям для мировых брендов.",
    images: ["https://ext.same-assets.com/1118492138/3414069527.jpeg"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
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
