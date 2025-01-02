export default function Navbar() {
  return (
    <nav className="fixed top-0 z-20 w-full h-24 flex justify-center">
      <ul className="flex justify-around text-white items-center h-24 w-full max-w-[600px]">
        <li>
          <a href="#about">درباره ما</a>
        </li>
        <li>
          <a href="#brands">برندها</a>
        </li>
        <li>
          <a href="#mag">مجله</a>
        </li>
        <li>
          <a href="#footer">ساعات کاری</a>
        </li>
        <li>
          <a href="#footer">آدرس</a>
        </li>
      </ul>
    </nav>
  );
}
