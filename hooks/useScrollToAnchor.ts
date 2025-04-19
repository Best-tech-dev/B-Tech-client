"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useScrollToAnchor = (
  offset = 100,
  behavior: ScrollBehavior = "smooth"
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const scrollTo = searchParams.get("scroll");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);

      if (element) {
        setTimeout(() => {
          const top =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior });

          // Remove scroll param from URL without reloading
          const newParams = new URLSearchParams(searchParams.toString());
          newParams.delete("scroll");

          const newUrl = `${pathname}?${newParams.toString()}`;
          router.replace(newUrl, { scroll: false });
        }, 100); // Delay ensures DOM is fully loaded
      }
    }
  }, [searchParams, offset, behavior, router, pathname]);
};

export default useScrollToAnchor;
