"use client";

import { useEffect } from "react";
import { initScrollAnimations, initParallaxEffect, initProductHoverEffects } from '../lib/animate';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-inter bg-background";

    // Initialize animations and effects once on mount
    initScrollAnimations();
    const cleanupParallax = initParallaxEffect();
    initProductHoverEffects();

    // Cleanup parallax effect on unmount
    return () => {
      if (cleanupParallax) cleanupParallax();
    };
  }, []);

  return <div className="antialiased font-inter">{children}</div>;
}
