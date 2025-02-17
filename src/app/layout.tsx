
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link
          rel="icon"
          href="/favicon-black.png"
          type="image/png"
          sizes="any"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-white.png"
          type="image/png"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
			
          <Header />
		
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
		

      </body>
	  <Script id="highleads-script" >
        {`
		(async function () {
		window.__ch = { id: "20efd750-5ecd-4e7c-aa47-1e7df0d83096", url: "https://console.highleads.co" };
		const response = await fetch("https://console.highleads.co/api/chatbot/20efd750-5ecd-4e7c-aa47-1e7df0d83096");
		if (!response.ok) return;
		(function () {
		  var be = document.createElement('script');
		  be.type = "text/javascript";
		  be.src = '/widgets/index.js';
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(be, s);
		})();
		})();
	  `}
      </Script>
	  
	  
    </html>
  );
}

import { Providers } from "./providers";import Script from "next/script";

