import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xelora | Web Design & Development, SEO, and Marketing Experts",
  description: "Web Design & Development, SEO, and Marketing Experts",
  // other metadata
  keywords:
    "web design, web development, SEO, marketing, digital marketing, branding",
  authors: [{ name: "Xelara", url: "https://www.xelora.tech" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Xelora | Web Design & Development, SEO, and Marketing Experts",
    description: "Web Design & Development, SEO, and Marketing Experts",
    type: "website",
    url: "https://www.xelora.tech",
    images: "https://www.xelora.tech/images/op.jpg",
  },

  twitter: {
    card: "summary_large_image",
    site: "@xelora",
    title: "Xelora | Web Design & Development, SEO, and Marketing Experts",
    description: "Web Design & Development, SEO, and Marketing Experts",
    images: "https://www.xelorate.com/images/twitter-image.jpg",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <Hero />

      <div className="relative w-full bg-[#FCFCFC] transition-all  duration-100 ease-in dark:bg-black">
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
