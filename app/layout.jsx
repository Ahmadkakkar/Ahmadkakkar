"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/headerNav";
import ScrollToTop from "@/components/ScrollToTop/scrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { RecoilRoot } from "recoil";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className="dark:bg-black">
          <Providers>
            <Header />
            <Toaster position='bottom-center' />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </body>
      </html>
    </RecoilRoot>
  );
}

import { Providers } from "./providers";
