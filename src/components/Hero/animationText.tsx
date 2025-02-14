"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const AnimationText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const [typewriterText] = useTypewriter({
    words: [
      "Limitless Potential",
      "Boundless Opportunities",
      "Infinite Possibilities",
      "Innovative Solutions",
      "Seamless Integration",
      "Market Leadership",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 110,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold leading-tight   text-black dark:text-white sm:text-4xl  sm:leading-tight sm:text-white md:text-5xl md:leading-tight">
        Build Your Websites
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "visible"}
        className="relative z-50 flex w-full flex-col  items-center justify-center text-center sm:px-6 md:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex w-full flex-row text-3xl font-bold leading-tight text-white  sm:ml-32 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight "
        >
          <span className="mr-3 hidden text-black dark:text-white sm:flex  sm:text-white">
            With
          </span>
          <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
            <span className="flex w-full justify-center text-center text-black dark:text-white sm:hidden sm:text-white ">
              With
            </span>

            <div className="inline-flex  w-full items-center justify-center sm:justify-start  ">
              <span className="animate-gradient whitespace-nowrap bg-gradient-to-r  from-primary via-black to-[#c8afe3] bg-[length:500%] bg-clip-text text-transparent ">
                {typewriterText}
              </span>
              <Cursor cursorStyle="|" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimationText;
