"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/headerNav";
import ScrollToTop from "@/components/ScrollToTop/scrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
