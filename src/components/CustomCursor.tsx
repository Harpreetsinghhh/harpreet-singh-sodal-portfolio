import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updateTouchDevice = () => setIsTouchDevice(mediaQuery.matches);

    updateTouchDevice();
    mediaQuery.addEventListener?.("change", updateTouchDevice);

    return () => {
      mediaQuery.removeEventListener?.("change", updateTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.set(dot, { x: mouse.x, y: mouse.y });
    };

    const updateRing = () => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      gsap.set(ring, { x: pos.x, y: pos.y });
    };

    window.addEventListener("mousemove", onMouseMove);
    gsap.ticker.add(updateRing);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const cursorTarget = target.closest("[data-cursor]");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor");
        setCursorText(text || "VIEW");
        ring.classList.add("active");
      } else if (target.closest("a") || target.closest("button")) {
        setCursorText("");
        ring.classList.add("active");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      if (target.closest("[data-cursor]") || target.closest("a") || target.closest("button")) {
        ring.classList.remove("active");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(updateRing);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span ref={textRef} className="custom-cursor-text">{cursorText}</span>
      </div>
    </>
  );
}
