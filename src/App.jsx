import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CafeDivider from "./components/CafeDivider";
import Navbar from "./components/Navbar";
import Carpet from "./components/Carpet";
import Brands from "./components/Brands";
import Cafe from "./components/Cafe";
import CarpetDivider from "./components/CarpetDivider";
import About from "./components/About";
import Mag from "./components/Mag";
import MagDivider from "./components/MagDivider";
import Footer from "./components/Footer";
import First from "./components/First";
import useWindowSize from "./hooks/useWinowsize";

import BrandDivider from "./components/BrandDivider";
export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const { width } = useWindowSize();

  const scrollable = useRef();

  useEffect(() => {
    const container = document.getElementById("main");
    const itemToScroll = document.getElementById("scrollable");

    const scroll = (e) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        itemToScroll.scrollLeft += e.deltaY;
        setScrollPercent(itemToScroll.scrollLeft / itemToScroll.scrollWidth);
      }
    };

    container.addEventListener("wheel", scroll);
    return () => container.removeEventListener("wheel", scroll);
  }, []);

  useEffect(() => {
    scrollable.current.scrollLeft = scrollPercent * width * 18.5;
  }, [width]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <main
      id="main"
      className="scroll-smooth h-[100svh] fixed w-screen anjoman-title"
    >
      <Navbar />
      <VideoPlayer />
      <div
        ref={scrollable}
        id="scrollable"
        className="overflow-y-hidden relative z-10 h-full w-full overflow-x-scroll "
      >
        <div id="section-container" className="w-[1850vw] h-full flex">
          <First />
          <About />
          <CarpetDivider />
          <Carpet />
          <BrandDivider />
          <Brands />
          <CafeDivider />
          <Cafe />
          <MagDivider />
          <Mag />
          <Footer />
          <div className="w-[50vw]  h-full flex items-center justify-center text-white bg-zinc-900/70">
            <a className="text-2xl md:text-4xl cursor-pointer" href="#start">
              برگشت به اول
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
