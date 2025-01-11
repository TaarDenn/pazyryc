import useWindowSize from "../hooks/useWinowsize";
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

  const { height, width } = useWindowSize();

  const row = 5;
  const col = (() => {
    if (width < 600) return 3;
    else if (width < 1440) return 5;
    else return 7;
  })();

  return (
    <div
      ref={patternContainerRef}
      className="relative w-[150vw] h-[100dvh] pt-24 pb-8"
    >
      <div
        style={{ opacity: 1 - opacity }}
        className="absolute left-0 top-0 h-full w-full bg-red-900"
      ></div>
      {/* bg */}
      <div className="absolute w-full h-full flex top-0 left-0">
        <div className="basis-1/2 bg-gradient-to-l from-black/70"></div>
        <div className="basis-1/2 bg-black/70"></div>
      </div>
      {/* bg */}
      <div className="w-full h-full flex">
        <div className="sticky left-2 relative w-1/3" id="pattern-container">
          <div
            style={{
              opacity: 1 - constrainAndMap(opacity, 0.5, 1),
              clipPath: `inset(0 ${
                100 - constrainAndMap(inset, 0, 0.5) * 100
              }% 0 0 round 1000px)`,
            }}
            className="absolute -left-44 top-0 flex"
          >
            {Array.from({ length: col }).map((_, i) => (
              <div key={`col-${i}`}>
                {Array.from({ length: row }).map((_, j) => (
                  <div
                    key={`row-${i}-${j}`}
                    className="w-full px-4"
                    style={{
                      height: `${(height - 144) / row}px`,
                      width: `${(height - 144) / row}px`,
                      opacity: 1 - i / col,
                    }}
                  >
                    {(i * col + j) % 2 === 0 && (
                      <img
                        src="./assets/patern3-white.svg"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          ref={textContainerRef}
          className="z-10 w-2/3 min-w-[320px] justify-center h-full flex items-center text-[6vw] text-white"
        >
          <h2 className="w-fit sticky left-0">معتبرترین برندها</h2>
        </div>
      </div>
    </div>
  );
}
