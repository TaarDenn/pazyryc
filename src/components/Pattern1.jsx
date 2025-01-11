import useWindowSize from "../hooks/useWinowsize";
import useObserver from "../hooks/useObserver";
import { constrainAndMap } from "../lib/lib";

export default function Pattern1() {
  const { progress, ref } = useObserver();
  const { height, width } = useWindowSize();

  const row = 7;

  const col = (() => {
    if (width < 600) return 3;
    else if (width < 720) return 5;
    else if (width < 1024) return 7;
    else if (width < 1440) return 9;
    else return 11;
  })();

  return (
    <div
      ref={ref}
      className="relative bg-red-100 w-[50vw] h-[100dvh] pt-24 pb-8"
    >
      {/* bg */}
      <div
        id="pattern-1-bg"
        className="absolute w-full h-full flex top-0 left-0"
      >
        <div className="basis-1/2 bg-gradient-to-l from-black/70"></div>
        <div className="basis-1/2 bg-black/70"></div>
      </div>
      {/* bg */}
      <div className="w-full relative" id="pattern-1-container">
        <div
          style={{
            clipPath: `inset(0 ${
              100 - constrainAndMap(progress, 0.5, 1) * 100
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
    </div>
  );
}
