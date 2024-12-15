import Link from "next/link";

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
                <h1 className="mb-5 text-3xl font-bold leading-tight  text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Building Scalable and User-Centric Software Solutions
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark/[.99] sm:text-lg md:text-xl">
                We design, develop, and deliver custom software solutions tailored to your business needs
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Explore Our Work
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
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
        <video  playsInline autoPlay loop muted className="w-full">
          <source className="fixed -z-1 h-fit"   src='/videos/intro.mp4' type="video/mp4"></source>

        </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
