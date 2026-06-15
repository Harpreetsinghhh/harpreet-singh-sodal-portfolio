import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef({ value: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            onComplete
          });
        }
      });

      tl.to(percentRef.current, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.floor(percentRef.current.value).toString();
          }
        }
      });
      
      tl.to(counterRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.in"
      }, "+=0.2");
      
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center text-foreground"
    >
      <div className="overflow-hidden flex items-end">
        <div ref={counterRef} className="font-serif text-[12vw] leading-none tracking-tighter">0</div>
        <div className="font-serif text-[4vw] leading-none mb-4 tracking-tighter">%</div>
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-sm tracking-widest text-muted-foreground flex items-center gap-2">
        <span>読</span>
        <span>LOADING RITUAL</span>
      </div>
    </div>
  );
}
