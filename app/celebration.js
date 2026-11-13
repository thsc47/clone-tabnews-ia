"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const COLORS = ["#f6c453", "#faf6eb", "#86b6a0", "#e38b65"];
const STYLE = { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 };

export default function Celebration() {
  const [viewport, setViewport] = useState(null);
  const [finished, setFinished] = useState(false);

  // Animação única e curta: lê o viewport uma vez, sem listeners de resize.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!viewport || finished) return null;

  return (
    <Confetti
      width={viewport.width}
      height={viewport.height}
      numberOfPieces={180}
      recycle={false}
      gravity={0.18}
      colors={COLORS}
      onConfettiComplete={() => setFinished(true)}
      aria-hidden="true"
      style={STYLE}
    />
  );
}
