import useObserver from "../hooks/useObserver";

export default function Footer() {
  const { ref, progress } = useObserver();

  return (
    <footer
      id="footer"
      dir="rtl"
      ref={ref}
      className="bg-zinc-900/70 h-[100svh] w-[100vw] relative z-200 pt-24 px-8 pb-8"
    >
      <div className="relative w-full h-full">
        <div className="flex w-full h-full border-2 bg-zinc-900/70">
          <div className="basis-1/2 border-l text-white">
            <p className="p-4 ">آدرس</p>
            <p className="p-4 border-b-2 ">تهران - خیابان تهران - پلاک ۱۲۲۳</p>
            <p className="p-4 border-b-2 text-end">Tel: +98 21 1223 3333</p>
            <div className="w-full h-2/3">
              <img
                src="assets/pazyryc-logo.svg"
                alt="logo"
                className="w-full h-full object-center object-contain p-4 sm:p-16"
              />
            </div>
          </div>
          <div className="basis-1/2 text-white">
            <p className="p-4 border-b-2">ساعات کاری</p>
            <div className="text-sm flex flex-col w-full h-full items-center justify-center">
              <WorkHour progress={progress} />
              <div>
                <p className="text-center w-full pt-4 border-b-[1px] pb-1">
                  شنبه تا چهارشنبه
                </p>
                <p className="text-center w-full pt-4 border-b-[1px] pb-1">پنج شنبه</p>
                <p className="text-center">12:00 - 8:00</p>
                <p className="text-center w-full pt-4 border-b-[1px] pb-1">جمعه‌ها</p>
                <p className="text-center">12:00 - 8:00</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-3 left-3 w-full h-full border-2"></div> */}
      </div>
    </footer>
  );
}

const WorkHour = ({ progress }) => {
  const minute = progress * 960;
  const hour = progress * 400;
  const clock = progress * 100;

  return (
    <div className="relative top-0 right-0 w-[100px] h-[100px]">
      <div
        style={{ transform: `rotateZ(${minute}deg)` }}
        className="absolute top-[50px] left-[50px] w-[25px] h-[2px] bg-white origin-left"
      ></div>

      <div
        style={{ transform: `rotateZ(${hour}deg)` }}
        className="absolute top-[50px] left-[50px] w-[40px] h-[2px] bg-white origin-left"
      ></div>

      <div
        style={{ transform: `rotateZ(${clock}deg)` }}
        className="absolute top-0 left-0 w-[100px] h-[100px] border-l-transparent border-2 rounded-t-full rounded-b-full border-white"
      ></div>
    </div>
  );
};
