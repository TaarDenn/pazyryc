import { useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CafeDivider from "./components/CafeDivider";
import Navbar from "./components/Navbar";
import Farsh from "./components/Farsh";
import Brands from "./components/Brands";
import Cafe from "./components/Cafe";
import CarpetDivider from "./components/CarpetDivider";
import About from "./components/About";
import Mag from "./components/Mag";
import MagDivider from "./components/MagDivider";
import Footer from "./components/Footer";
// import Divider from "./components/Divider";
// import Pattern1 from "./components/Pattern1";

import BrandDivider from "./components/BrandDivider";
export default function App() {
  useEffect(() => {
    const container = document.getElementById("main");
    const itemToScroll = document.getElementById("scrollable");

    const scroll = (e) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        itemToScroll.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", scroll);
    return () => container.removeEventListener("wheel", scroll);
  }, []);

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
        id="scrollable"
        className="overflow-y-hidden relative z-10 h-full w-full overflow-x-scroll "
      >
        <div id="section-container" className="w-[1850vw] h-full flex">
          <div className="w-[100vw] h-full flex items-end justify-end text-white text-4xl p-8 ">
            <div className="animate-ping"><img src="assets/arrow.svg" width={100}/></div>
          </div>
          <About />
          <CarpetDivider />
          <Farsh />
          <BrandDivider />
          <Brands />
          <CafeDivider />
          <Cafe />
          <MagDivider />
          <Mag />
          <Footer />
          <div className="w-[50vw] h-full flex items-end justify-end text-white bg-zinc-900/70 text-4xl p-8 "></div>
        </div>
      </div>
    </main>
  );
}
