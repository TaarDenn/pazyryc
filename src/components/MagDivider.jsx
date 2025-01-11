import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";

// function generateRandomNumbers(count, min, max) {
//   let uniqueNumbers = new Set();
//   while (uniqueNumbers.size < count) {
//     uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
//   return Array.from(uniqueNumbers);
// }

export default function BrandDivider() {
  const { progress: inset, ref: patternContainerRef } = useObserver();
  const { progress: opacity, ref: textContainerRef } = useObserver();

  return (
    <div
      ref={patternContainerRef}
      className="relative w-[150vw] h-[100dvh] pt-24 pb-8"
    >
      <div
        style={{ opacity: 1 - opacity }}
        className="absolute left-0 top-0 h-full w-full bg-emerald-900"
      ></div>
      {/* bg */}
      <div className="absolute w-full h-full flex top-0 left-0">
        <div className="basis-1/2 bg-gradient-to-l from-black/70"></div>
        <div className="basis-1/2 bg-black/70"></div>
      </div>
      {/* bg */}
      <div className="w-full h-full flex">
        <div className="sticky left-2 relative w-full" id="pattern-container">
          <div
            style={{
              opacity: 1 - constrainAndMap(opacity, 0.5, 1),
              clipPath: `inset(0 ${
                100 - constrainAndMap(inset, 0, 0.5) * 100
              }% 0 0 round 0 1000px 1000px 0)`,
            }}
            className="absolute left-0 top-0 flex h-full"
          >
            <div aria-hidden="true" className="w-full h-full">
              <img
                src="./assets/patern-black-corrected.svg"
                className="w-full h-full object-cover"
                alt="pattern"
              />
            </div>
          </div>
        </div>
        <div
          ref={textContainerRef}
          className="z-10 w-2/3 min-w-[320px] justify-center h-full flex items-center text-[6vw] text-white"
        >
          <h2 className="w-fit sticky left-0">در مورد فرش بدانید</h2>
        </div>
      </div>
    </div>
  );
}
