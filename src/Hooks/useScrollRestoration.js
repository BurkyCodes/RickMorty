// src/hooks/useScrollRestoration.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const savedPositions = {};

    // Restore scroll position on back/forward
    window.history.scrollRestoration = "manual";

    const handlePopState = () => {
      const pos = savedPositions[location.key];
      if (pos !== undefined) {
        window.scrollTo(0, pos);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      // Save scroll position before navigating
      savedPositions[location.key] = window.scrollY;
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);
}
