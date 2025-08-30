"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initScrollAnimations, initParallaxEffect, initProductHoverEffects } from '../lib/animate';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  const pathname = usePathname();
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-inter bg-background";

    // Initialize animations and effects when the route changes
    initScrollAnimations();
    const cleanupParallax = initParallaxEffect();
    initProductHoverEffects();

    // Cleanup parallax effect on unmount or route change
    return () => {
      if (cleanupParallax) cleanupParallax();
    };
  }, [pathname]);

  return <div className="antialiased font-inter">{children}</div>;
}
