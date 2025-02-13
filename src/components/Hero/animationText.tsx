'use client';
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimationText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const occupation = "Software Engineer & Full Stack Developer";

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
    
          
		<motion.h1
            variants={itemVariants}
          >
				</motion.h1>
		 <h1 className="mb-5 text-3xl font-bold leading-tight  text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
				Build Your Websites

                </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "visible"}
        className="relative flex flex-col z-50 w-full items-center justify-center text-center sm:px-6 md:px-8"
      >
          
			
          <motion.h1
            variants={itemVariants}
            className="mb-5 text-3xl flex flex-row ml-20 w-full font-bold leading-tight  text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight "
          >
		  <span className="mr-3">With</span>
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row w-full">
              <div className="inline-flex w-full items-center justify-start overflow-hidden ">
				<span className="animate-gradient bg-gradient-to-r from-primary via-black to-[#c8afe3] bg-[length:500%] bg-clip-text text-transparent whitespace-nowrap">
				  {typewriterText}
				</span>
                <Cursor cursorStyle="|" />
              </div>
            </div>
          </motion.h1>

     
      </motion.div>
    </>

  );
};

export default AnimationText;
