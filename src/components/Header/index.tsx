"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
// import MenuItem from "./menuItem";

const MenuItem =  dynamic(() => import('@/components/Header/menuItem'), { ssr: false })
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
	});

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
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
