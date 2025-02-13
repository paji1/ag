import Link from "next/link";
import AnimationText from "./animationText";

const Hero = () => {
  return (
    <>
      <section
        id="home"

        className="sticky flex top-0 z-0  overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
               
				<AnimationText />
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark/[.99] sm:text-lg md:text-xl">
                We design, develop, and deliver custom software solutions tailored to your business needs
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
				  <Link
					href="/about"
					className="rounded-sm border-2 border-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary hover:text-white bg-primary/30"
				  >
					🔥 Explore Our Work
				  </Link>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 bg-white/30 rounded dark:text-white dark:hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
			<div className="w-full bg-black  z-[-1] ">

		<video playsInline autoPlay loop muted className="opacity-55">
		  <source className="fixed -z-1 h-fit" src='/videos/intro.mp4' type="video/mp4"></source>
		</video>
			</div>
        </div>

      </section>
    </>
  );
};

export default Hero;
