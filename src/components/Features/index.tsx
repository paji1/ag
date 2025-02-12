'use client';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion, useInView } from "motion/react"

const Features = () => {
  const sectionRef = useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { once: false, margin: "-50% 0px" });
  return (
    <>
      <div ref={sectionRef}
        id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Xelora builds fast, secure, and scalable web solutions—custom apps, seamless integrations, and cloud optimization to elevate your business. 🚀"
            center
          />

          <motion.section variants={{
            hidden: {
              opacity: 0,
              transition: {
                duration: 3,
                ease: "easeOut",
              },
            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              }
            }
          }}
          
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
             className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Features;
