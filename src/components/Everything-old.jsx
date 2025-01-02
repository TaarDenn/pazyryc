import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWinowsize";
import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";

export default function Everything({ offset }) {
  const { progress, ref } = useObserver();
  //   const mappedProgress = constrainAndMap(progress, 0.2, 1);

  const grid = useRef(null);
  const [height, setHeight] = useState(0);
  const [col, setCol] = useState(0);

  const { width } = useWindowSize();

  useEffect(() => {
    if (!grid.current) return;

    const cw = grid.current.getBoundingClientRect().width;

    let col;

    if (cw < 600) {
      col = 8;
    } else if (cw < 720) {
      col = 10;
    } else if (cw < 1024) {
      col = 12;
    } else {
      col = 14;
    }
    setCol(col);
    setHeight((cw - (col + 1) * offset) / col);
    // setHeight("90px")
  }, [width]);

  return (
    <div ref={ref} className="relative w-[100vw] h-[100dvh] pt-24 pb-8">
      <div
        style={{ opacity: constrainAndMap(progress, 0, 0.5) }}
        className="absolute w-full h-full flex top-0 left-0"
      >
        <div className="basis-1/2 bg-gradient-to-l from-black/70"></div>
        <div className="basis-1/2 bg-black/70"></div>
      </div>
      <div className="relative z-20 w-full h-1/2">
        <div
          ref={grid}
          className="px-[8px] flex gap-[8px] w-full"
        >
          {Array.from({ length: col }).map((_, i) => (
            <div
              key={"g" + i}
              className="w-full h-full"
              style={{
                height,

                opacity: (() => {
                  const o = constrainAndMap(
                    progress - 0.1,
                    i / col,
                    (i + 1.5) / col
                  );
                  return o;
                })(),
              }}
            >
              <img
                src="./assets/patern3-white.svg"
                className="w-full h-full object-center object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full h-1/2 flex items-end">
        <div
          style={{ height }}
          className="flex justify-between gap-2 w-full px-[8px]"
        >
          {Array.from({ length: col }).map((_, i) => (
            <div
              key={"g" + i}
              className="w-full h-full"
              style={{
                height,

                opacity: (() => {
                  const o = constrainAndMap(progress, i / col, (i + 5) / col);
                  return o;
                })(),
              }}
            >
              <img
                src="./assets/patern3-white.svg"
                className="w-full h-full object-center object-contain"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
