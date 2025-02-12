"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Loader fallback with a slow right-to-left slide and fade-out effect using styled-jsx
const MenuItem = dynamic(() => import("@/components/Header/menuItem"), {
  ssr: false,
  loading: () => (
    <>
      <div className="loader-animation fixed right-0 top-0 h-1 w-full bg-blue-500" />
      <style jsx>{`
        .loader-animation {
          animation: slideFade 3s ease-in-out infinite;
        }
        @keyframes slideFade {
          0% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  ),
});

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <MenuItem sticky={sticky} />
        </div>
      </header>
    </>
  );
};

export default Header;
