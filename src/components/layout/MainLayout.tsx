import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface MainLayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export default function MainLayout({
  children,
  transparentHeader = false
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={transparentHeader} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
