import useObserver from "../hooks/useObserver";

export default function Cafe() {
  const { ref, progress: y } = useObserver();

  return (
    <div className="relative w-[150vw] h-full flex">
      <div className="z-3 sticky left-0 w-[100vw] h-full pt-24 bg-[#b28e69]">
        <div className="w-[100vw] h-full">
          <div className="w-full h-full bg-[url(imgs/cafe-pazyryc-4.webp)] bg-no-repeat bg-top-left bg-[length:auto_calc(100%)]">
            <div className="w-full h-full bg-gradient-to-l from-[#b28e69]">
              <div dir="rtl" className="w-full h-full">
                <div className="w-1/2 min-w-[320px]">
                  <div
                    style={{ transform: `translate(0px,${y * 30}px)` }}
                    className="w-full text-orange-100 pr-[10%]"
                  >
                    <h1 className="text-4xl md:text-6xl pb-4">کافه پازیریک</h1>
                    <p className="bg-orange-100 text-[rgb(129,96,66)] p-4">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="absolute left-[100vw] w-[50vw] h-full text-4xl pt-[60vh] pl-8"
      >
        <p className="bg-orange-100 text-[rgb(129,96,66)] p-4">طبقه اول</p>
      </div>
    </div>
  );
}
