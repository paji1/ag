"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export default function LoadingScreen() {
  return (
	<motion.div
	  initial={{ opacity: 1 }}
	  animate={{ opacity: 0 }}
	  transition={{ duration: 1, delay: 2 }}
	  className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-dark"
	  role="progressbar"
	  aria-label="Loading portfolio"
	  aria-valuetext="Please wait while the portfolio loads"
	>
	  <div className="relative flex flex-col items-center justify-center">
		<div className="flex items-center justify-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]">
		  <motion.svg
			width="200%"
			height="200%"
			viewBox="0 0 219 220"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		  >
			<motion.path
			  d="M47.9846 43.4878C48.5508 44.306 51.728 48.9201 55.0448 53.7413C60.9699 62.3537 77.2021 85.9412 89.1858 103.353C92.5317 108.215 94.0523 110.503 94.0523 110.503C94.0666 110.668 57.6512 153.261 44.0529 169.063C40.49 173.204 54.3433 157.078 44.0529 169.063C39.3439 174.548 44.2355 168.864 44.0529 169.063L52.0493 169.057L62.5021 169.051C65.538 165.504 84.6074 142.882 102.259 122.349C105.482 127.015 116.687 143.298 125.863 156.65L134.387 169.055L152.694 169.059L171 169.063L170.689 168.621C170.518 168.378 168.51 165.464 166.227 162.147C151.273 140.415 141.336 125.977 140.377 124.591C139.766 123.706 137.996 121.137 136.444 118.881C134.892 116.625 130.785 110.654 127.316 105.612C123.847 100.57 120.884 96.2517 120.733 96.0165L121.569 97.2442C117.353 102.15 122.511 96.1524 121.569 97.2442C125.784 92.3379 153.675 57.9764 153.675 57.9764L157.113 74.972L158.627 44.9464C156.662 45.4374 159.854 44.7008 158.627 44.9464L126.176 57.4853L143.649 54.031C135.958 62.3163 116.113 84.9782 114.431 86.9319C110.897 91.0454 116.827 84.1454 114.431 86.9319C112.035 89.7185 116.446 84.5877 114.431 86.9319C112.417 89.2762 114.534 86.9319 114.431 86.9319C114.328 86.9319 113.507 85.5592 110.982 81.8881C108.456 78.2169 103.251 70.6535 99.4145 65.0804C95.5777 59.5073 90.4413 52.0369 88.0002 48.4794L83.5617 42.0113L65.2583 42.0056L46.9549 42L47.9846 43.4878Z"
			  stroke="#4A6CF7"
			  strokeWidth="3"
			  initial={{ pathLength: 0 }}
			  animate={{ pathLength: 1 }}
			  transition={{ duration: 2, ease: "easeInOut" }}
			/>
			<defs>
			  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="50%" stopColor="#ffffff" />
				<stop offset="100%" stopColor="#ffffff" />
			  </linearGradient>
			</defs>
		  </motion.svg>
		</div>
	  </div>
	</motion.div>
  );
}
