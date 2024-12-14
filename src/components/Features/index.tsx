'use client';
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "motion/react"

const Features = () => {
  return (
    <>
      <div
        id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <motion.section variants={{
            hidden: {
              opacity: 0,


            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              }
            }
          }}
            initial="hidden"
            animate="show" className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
