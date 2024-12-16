'use client';
import { Feature } from "@/types/feature";
import { useRef } from "react";
import { motion, useInView } from "motion/react"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, id } = feature;
  const sectionRef = useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { once: false, margin: "-50% 0px" });

  return (


    <div ref={sectionRef}>
      <motion.div variants={{
        hidden: { 
          transition: {
            duration: 3,
            ease: "easeOut",
          },
          

        }, show: {
          opacity: 1, scale: [0.8, 1],
          translateY: [0, -30, 0],
          borderRadius: ["10%", "10%", "50%", "10%"],
        },

      }} className="w-full "
        initial="hidden"
        whileInView="show" // Animation starts when in view
        viewport={{ once: true, amount: 0.5 }} // Triggers only once,
        animate={isInView ? "show" : "hidden"}
        transition={{
          duration: 3,
          ease: "easeInOut",

        }}>


        <div className="wow fadeInUp" data-wow-delay=".15s">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </motion.div>
    </div>

  );
};

export default SingleFeature;
