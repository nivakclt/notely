
"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
