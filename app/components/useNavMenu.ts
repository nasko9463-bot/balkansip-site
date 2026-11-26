"use client";

import { useEffect, useRef, useState } from "react";

// Мобилното меню: затваря се при докосване извън горната лента
// или с Escape.
export function useNavMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isNavOpen) return;

    function onPointerDown(event: PointerEvent) {
      const header = headerRef.current;
      if (header && !header.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsNavOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isNavOpen]);

  return { isNavOpen, setIsNavOpen, headerRef };
}
