import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
  onOutsideClick: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onOutsideClick]);

  return ref;
}
