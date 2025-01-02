import { useState, useRef } from "react";
export default function VideoPlayer() {
  const [sourceIndex, setSourceIndex] = useState(0);

  const player = useRef(null);

  const handleSource = () => {
    if (sourceIndex === 2) setSourceIndex(0);
    else setSourceIndex(sourceIndex + 1);

    player.current.load();
    player.current.play();
  };

  return (
    <div className="z-1 fixed top-0 w-full h-[100dvh] bg-black">
      <video
        preload="auto"
        onEnded={handleSource}
        ref={player}
        className="w-full h-full object-cover object-center"
        muted
        autoPlay
        playsInline
      >
        <source
          src={`./videos/p-${sourceIndex}.mp4`}
          type="video/mp4"
          className="w-full h-full object-cover"
        />
        <source
          src={`./videos/p-${sourceIndex}.webm`}
          type="video/webm"
          className="w-full h-full object-cover"
        />
      </video>
    </div>
  );
}
