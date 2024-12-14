import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import dynamic from 'next/dynamic'

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xelorate | Web Design & Development, SEO, and Marketing Experts",
  description: "Web Design & Development, SEO, and Marketing Experts",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <Hero />
      
      <div className="relative transition-all ease-in duration-100  bg-[#FCFCFC] dark:bg-black w-full">
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      </div>
    </>
  );
  
}
