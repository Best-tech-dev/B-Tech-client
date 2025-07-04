"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useSmoothScroll = () => {
  const router = useRouter();

  const scrollToElement = (targetId: string, offset: number = 100) => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigateAndScroll = (
    url: string,
    targetId?: string,
    offset: number = 100
  ) => {
    // Check if it's the same page
    if (window.location.pathname === url.split("#")[0]) {
      if (targetId) {
        scrollToElement(targetId, offset);
      }
    } else {
      // Navigate to new page with hash if targetId is provided
      const navigationUrl = targetId ? `${url}#${targetId}` : url;
      router.push(navigationUrl);

      // Wait for navigation and then scroll
      if (targetId) {
        setTimeout(() => {
          scrollToElement(targetId, offset);
        }, 500); // Increased timeout to ensure page is loaded
      }
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    }
  }, []);

  return { scrollToElement, navigateAndScroll };
};

export default useSmoothScroll;
