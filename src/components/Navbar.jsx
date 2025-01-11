export default function Navbar() {
  return (
    <nav className="fixed top-0 z-20 w-full h-24 flex justify-center">
      <ul className="relatove flex justify-around text-sm sm:text-base text-white items-center h-24 w-full max-w-[600px] px-8 md:px-0">
        <li className="hidden sm:flex absolute left-4">
          <a href="#start">
            <img
              src="./assets/pazyryc-logo.svg"
              alt="logo"
              className="object-center object-contain w-16 h-16"
            />
          </a>
        </li>
        <li>
          <a
            className="hidden sm:flex hover:underline hover:underline-offset-8"
            href="#about"
          >
            درباره پازیریک
          </a>
          <a
            className="flex sm:hidden"
            href="#about"
          >
            <img
              src="./assets/pazyryc-logo.svg"
              alt="logo"
              className="object-center object-contain w-16 h-16"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-8"
            href="#brands"
          >
            برندها
          </a>
        </li>
        <li>
          <a className="hover:underline hover:underline-offset-8" href="#mag">
            مجله
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-8"
            href="#footer"
          >
            ساعات کاری/آدرس
          </a>
        </li>
      </ul>
    </nav>
  );
}
