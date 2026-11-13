"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Celebration() {
  const [viewport, setViewport] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updateViewport() {
      setViewport(preference.matches ? null : {
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    updateViewport();
    window.addEventListener("resize", updateViewport);
    preference.addEventListener("change", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      preference.removeEventListener("change", updateViewport);
    };
  }, []);

  if (!viewport || finished) return null;

  return (
    <Confetti
      width={viewport.width}
      height={viewport.height}
      numberOfPieces={180}
      recycle={false}
      gravity={0.18}
      colors={["#f6c453", "#faf6eb", "#86b6a0", "#e38b65"]}
      onConfettiComplete={() => setFinished(true)}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}
    />
  );
}
