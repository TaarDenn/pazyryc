export default function Divider({ children }) {
  return (
    <div className="bg-black/70 w-[100vw] min-w-[320px] justify-center h-full flex border-l-2 items-center text-[6vw] text-white">
      {children}
    </div>
  );
}
