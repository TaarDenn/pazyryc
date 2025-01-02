import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";
import { useRef } from "react";
export default function Farsh() {
  const { ref, progress } = useObserver();
  const reff = useRef(null);
  const a = `${(100 - constrainAndMap(progress, 0, 1) * 80).toFixed(4)}%`;
  const x = `${100 - constrainAndMap(progress, 0.3, 0.65) * 100}%`;
  //   console.log(
  //     Math.abs(
  //       reff?.current?.getBoundingClientRect().x /
  //         reff?.current?.getBoundingClientRect().width
  //     ).toFixed(2)
  //   );

  return (
    <div ref={reff} className="bg-black/70 w-[200vw] h-full">
      <div className="w-full h-full relative">
        <div ref={ref} className="absolute w-[50%] left-[50%] h-full"></div>
        <div className="sticky h-full w-[100vw] max-w-[900px] left-0">
          <div
            style={{ transform: `translate(0px,${x})` }}
            className="absolute h-full w-full max-w-[900px] bg-emerald-900 -z-10"
          ></div>
          <div className="w-full sm:w-1/2 pt-24 px-4 pb-4 sm:right-10 z-30">
            <p className="text-white border-2 border-white text-8xl py-2 text-center">
              فرش
            </p>
            <p className="bg-white text-emerald-900 text-4xl py-2 border-2 border-white text-center">
              ماشینی | دستباف
            </p>
            <p className="border-2 text-white text-8xl w-[200px] py-2 border-white text-center">
              گلیم
            </p>
            <p className="border-t-2 h-12 text-white bg-yellow-900 text-2xl w-[200px] py-2 border-b-2 border-x-2 border-white text-center"></p>
            <p className="text-white text-2xl w-[300px] py-2 border-b-2 border-x-2 border-t-8 border-white text-center">
              گبه / جاجیم
            </p>
            <div className="absolute left-0 top-0 center w-4/5 h-full min-w-[320px] max-w-[800px] mix-blend-lighten">
              <img
                style={{ transform: `translate(0px,${a})` }}
                src="./imgs/pazyryk-carpet.jpg"
                className="w-full h-full object-top object-contain sm:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
