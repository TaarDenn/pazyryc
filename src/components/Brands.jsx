import useObserver from "../hooks/useObserver";

export default function Brands() {
  const { ref, progress } = useObserver();

  return (
    <div id="brands" ref={ref} className="w-[300vw] h-full">
      <div className="h-full w-full relative bg-white/90">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgb(216,203,194)]">
          <div style={{ opacity: progress * 3 }}>
            {/* <div className="basis-4/5 pt-24 pb-4"> */}
            <div className="sticky left-0 w-[100vw] h-full flex flex-col">
              <div className="px-2 py-2 h-48 flex items-center justify-end text-2xl text-white text-end bg-zinc-700/50">
                <p className="pt-24"> معتبرترین برندهای فرش</p>
              </div>
              <p className="px-2 py-2 h-12 flex items-center justify-end text-zinc-700/50 text-end ">
                در بیش از ۵۰ فروشگاه فعال
              </p>
            </div>
            <div className="flex-auto items-center h-full max-h-[300px] flex w-full p-4 justify-between gap-4 pb-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  className="p-2 h-full w-full max-w-[200px] flex items-center"
                  key={`brand-image-${i}`}
                >
                  <img src="./brands/0.svg" className="h-full w-full" />
                </div>
              ))}
            </div>
            {/* <div className="sticky left-0 h-36 w-[100vw] flex items-center justify-center">
              <button className="text-white p-2 bg-red-900">
                مشاهده تمام فروشگاه‌ها
              </button>
            </div> */}
          </div>
          {/* <div className="border-t-1 border-l-1 border-b-1"></div> */}
        </div>
      </div>
    </div>
  );
}
