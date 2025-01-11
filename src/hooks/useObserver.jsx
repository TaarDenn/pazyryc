import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useObserver() {
  const [progress, setProgress] = useState(0);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "0%",
    threshold: Array.from({ length: 999 }, (_, i) => i / 1000),
  });

  useEffect(() => {
    if (inView) {
      entry.intersectionRect.width < window.innerWidth &&
        entry.intersectionRect.x !== 0 &&
        setProgress(entry.intersectionRatio);
    } else {
      setProgress((prev) => (prev < 0.2 ? 0 : 1));
    }
  }, [entry]);

  return { ref, progress };
}
