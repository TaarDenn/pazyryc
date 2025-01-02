import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { useWindowSize } from "../hooks/useWinowsize";
import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";

function generateRandomNumbers(count, min, max) {
  // 1: Create a `Set` object
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    // 2: Generate each random number
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  // 3: Immediately insert them numbers into the Set...
  return Array.from(uniqueNumbers);
}

export default function Everything2() {
  const { progress: inset, ref: patternContainerRef } = useObserver();
  const { progress: opacity, ref: textContainerRef } = useObserver();

  const { height, width } = useWindowSize();

  const row = 7;
  const col = (() => {
    if (width < 600) return 3;
    else if (width < 720) return 5;
    else if (width < 1024) return 7;
    else if (width < 1440) return 9;
    else return 11;
  })();

  // const visible = useMemo(
  //   () => generateRandomNumbers(row * col/3, 0, row * col),
  //   [col]
  // );
  // console.log(visible);
  return (
    <div
      ref={patternContainerRef}
      className="relative w-[150vw] h-[100dvh] pt-24 pb-8"
    >
      {/* bg */}
      <div
        // style={{ opacity: constrainAndMap(progress, 0, 0.5) }}
        className="absolute w-full h-full flex top-0 left-0"
      >
        <div className="basis-1/2 bg-gradient-to-l from-black/70"></div>
        <div className="basis-1/2 bg-black/70"></div>
      </div>
      <div className="w-full h-full flex">
        <div className="sticky left-0 relative w-1/3" id="pattern-container">
          <div
            style={{
              opacity: 1 - constrainAndMap(opacity, 0.5, 1),
              clipPath: `inset(0 ${
                100 - constrainAndMap(inset, 0.2, 0.5) * 100
              }% 0 0)`,
            }}
            className="absolute left-0 top-0 flex"
          >
            {Array.from({ length: col }).map((_, i) => (
              <div>
                {Array.from({ length: row }).map((_, j) => (
                  <>
                    <div
                      className="w-full"
                      style={{
                        height: `${(height - 144) / row}px`,
                        width: `${(height - 144) / row}px`,
                        opacity: 1 - i / col,
                        // opacity: ((i + 1) * (j + 1)) * progress / 18,
                        // opacity: constrainAndMap(
                        //   constrainAndMap(progress, 0.2, 1),
                        //   (i * j) / 18,
                        //   ((i + 1) * (j + 1)) / 18
                        // ),
                      }}
                    >
                      {(i * col + j) % 2 === 0 && i <= j && (
                        <img
                          src="./assets/patern3-white.svg"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          ref={textContainerRef}
          className="relative z-10 w-2/3 min-w-[320px] justify-center h-full flex items-center text-[6vw] text-white"
        >
          هر آنچه بخواهید
        </div>
        {/* <div 
        style={{clipPath:'inset(0 0 0 0)'}}
        className="w-full h-full absolute top-0 -left-[32px]">
          <img
            src="./assets/patern-black.svg"
            className="w-1/2 h-full object-cover object-right"
          />
        </div> */}
      </div>
    </div>
  );
}
