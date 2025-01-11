import useObserver from "../hooks/useObserver";

export default function Mag() {
  const { progress, ref } = useObserver();

  return (
    <div id="mag" className="relative w-[150vw] h-full flex">
      <div className="sticky left-0  overflow-hidden h-full w-[100vw] bg-red-900">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-900 "></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <img
            src="imgs/pattern.jpg"
            className="-mr-[20%] w-full object-cover h-full object-right mix-blend-darken md:object-contain"
          />
        </div>
        <div
          style={{ transform: `translate(0px,${progress * 50}px)` }}
          className="absolute top-24 left-0 h-full px-8 z-200 text-left"
        >
          <p className="text-red-900 py-2 bg-[rgb(216,203,194)] text-4xl md:text-6xl">
            مجله پازیریک
          </p>
          <p className="text-[rgb(216,203,194)] border-2 w-[300px] border-[rgb(216,203,194)] py-2 text-2xl md:text-4xl">
            PAZIRIK MAG
          </p>
          <p dir="rtl" className="w-[320px] text-[rgb(216,203,194)] pt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده
          </p>
          <div
            style={{ transform: `translate(0px,${progress * 50}px)` }}
            className="w-full pt-8"
          >
            <button className="bg-emerald-900 text-white px-4 py-2">
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
      <div ref={ref} className="absolute left-[100vw] w-[50vw] h-full"></div>
    </div>
  );
}
