import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";

export default function AboutMessy() {
  const { ref: frame, progress: frameProgress } = useObserver();
  const { ref: banner, progress: bannerProgress } = useObserver();

  const mappedBannerProgress = constrainAndMap(bannerProgress, 0.5, 1) * 2;

  return (
    <div dir="rtl" ref={frame} className="w-[200vw] h-full">
      <div
        style={{ opacity: frameProgress * 2 }}
        className="relative h-full w-full"
      >
        <div
          id="about"
          className="relative h-full pb-8 px-8 pt-24 w-full flex text-white"
        >
          <div className="w-[75%] h-full flex flex-col">
            <div dir="ltr" className="relative text-5xl sm:text-6xl">
              <div
                style={{
                  opacity: mappedBannerProgress,
                }}
                className="w-full h-full absolute top-0 left-0 ring-2 ring-white"
              ></div>
              <div
                className="h-[90px] sm:h-[120px]"
                style={{ color: "white" }}
                // style={{
                //   color: `rgb(${255 - mappedBannerProgress * 200},${
                //     255 - mappedBannerProgress * 200
                //   },${255 - mappedBannerProgress * 200})`,
                // }}
              >
                <p className="sticky left-0 w-fit">SARAY</p>
                <p className="sticky left-0 w-fit">PAZIRIK</p>
              </div>
            </div>
            <div
              ref={banner}
              className="h-full flex text-4xl sm:text-4xl items-center"
            >
              <div className="flex flex-col relative">
                <h2 className="w-2/5 flex items-end pb-4">درباره ما</h2>
                <div className="relative w-full text-[3vw] sm:text-[2vw] lg:text-[1.2vw] leading-relaxed text-zinc-700 h-fit flex ">
                  <p className="px-2 relative z-100 bg-white/70 py-12">
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                  </p>

                  {/* <div className="bg-white/70 absolute z-10 -right-1/3 top-0 h-full w-1/3">
                  </div> */}
                </div>
              </div>

              <div className="relative w-[80%] h-full"></div>
              <div className="w-[35%] border-t-2 border-r-2 border-b-2 h-full flex flex-col">
                <div className="h-full">
                  <p className=" h-[12vw] sm:h-[10vw] text-[12vw] sm:text-[10vw] flex items-center">
                    سرای
                  </p>
                  <p className="text-[5vw] pt-4 sm:text-[3vw] h-[5vw] sm:h-[3vw] flex items-center">
                    فرش / گلیم / گبه
                  </p>
                  <p className="text-[12vw] sm:text-[10vw] pt-6 h-[12vw] sm:h-[10vw]  flex items-center">
                    پازیریک
                  </p>
                </div>
                <div className="relative w-full h-full border-t-2 visible sm:invisible">
                  <img
                    src="./assets/pazyryc-logo.svg"
                    alt="logo"
                    className="absolute w-full h-full object-center object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] border-2 h-full p-4 flex items-centerr justify-center">
            <img
              src="./assets/pazyryc-logo.svg"
              alt="logo"
              className="w-full h-full max-w-[350px] object-center object-contain invisible sm:visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
