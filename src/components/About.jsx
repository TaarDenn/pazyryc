import useObserver from "../hooks/useObserver";
// import { constrainAndMap } from "../lib/lib";
import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "../hooks/useWinowsize";

export default function About() {
  const { ref: frame, progress: frameProgress } = useObserver();
  // const { ref: banner, progress: bannerProgress } = useObserver();
  const [logoContainerHeight, setLogoContainerHeight] = useState(0);
  // const mappedBannerProgress = constrainAndMap(bannerProgress, 0.5, 1) * 2;

  const { width, height } = useWindowSize();
  const paddingLeft = width > 1032 ? (width - 1032) / 2 : 0;

  const logoContainer = useRef(null);

  useLayoutEffect(() => {
    const top = logoContainer.current.getBoundingClientRect().top;
    setLogoContainerHeight(height - 60 - top);
  }, [height, width]);

  return (
    <div dir="rtl" ref={frame} className="w-[200vw] h-full">
      <div
        style={{ opacity: frameProgress * 2 }}
        className="relative h-full w-full"
      >
        <div
          dir="ltr"
          id="about"
          className="relative h-full pb-8 px-8 pt-24 w-full text-white"
        >
          <div
            id="latin-title"
            style={{ paddingLeft }}
            className="relative leading-tight w-full text-[10vw] md:text-[4vw] flex flex-col"
          >
            <p className="sticky left-0 w-fit">SARAY</p>
            <p className="sticky left-0 w-fit">PAZYRYK</p>
          </div>

          <div className="flex w-full">
            <div dir="rtl" className="w-1/2 flex justify-center">
              <div
                id="frame-container"
                className="border-2 border-white w-full max-w-[1000px] flex flex-col md:flex-row"
              >
                <div id="persian-title">
                  <div className="flex flex-row md:flex-col items-center md:items-start">
                    <p className="text-[12vw] md:text-[8vw]">سرای</p>
                    <p className="text-[3vw] md:text-[2vw]">گلیم / گبه / فرش</p>
                  </div>
                  <p className="text-[12vw] md:text-[10vw]">پازیریک</p>
                </div>
                <div
                  id="logo-container"
                  ref={logoContainer}
                  style={{ height: logoContainerHeight + "px" }}
                  className="border-t-2 md:border-r-2 md:border-t-0 w-full flex justify-center"
                >
                  <img
                    src="./assets/pazyryc-logo.svg"
                    alt="logo"
                    className="p-4 w-full h-full object-center object-contain max-w-[350px]"
                  />
                </div>
              </div>
            </div>
            <div
              // ref={banner}
              dir="rtl"
              className="w-1/2 pl-8"
            >
              <h2 className="text-4xl py-6">درباره ما</h2>
              <p className="leading-relaxed px-2 relative z-100 bg-white/70 py-12 w-full max-w-[600px] text-zinc-700">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد. لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
