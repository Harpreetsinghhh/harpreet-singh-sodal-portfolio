import { useEffect, useRef } from "react";
import gsap from "gsap";
import { splitTextToSpans } from "@/lib/utils";
import heroImg from "@/assets/hero.png";
import aboutHover from "@/assets/about-hover.png";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;
    
    splitTextToSpans(textRef.current);
    const chars = textRef.current.querySelectorAll('.split-char');

    const ctx = gsap.context(() => {
      gsap.to(chars, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-background relative" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        <div className="w-full md:w-1/2">
          <div className="font-mono text-primary tracking-widest text-sm mb-8 flex items-center gap-4">
            <span>01</span>
            <div className="h-px bg-primary flex-grow" />
            <span>哲学</span>
          </div>
          <p ref={textRef} className="font-serif text-2xl md:text-5xl leading-tight tracking-tight text-foreground">
            I don't just write code. I forge digital experiences. Every pixel, every easing curve, every micro-interaction is placed with intent. The quiet parts of a product are where the soul lives.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-16 font-mono text-sm">
            <div>
              <div className="text-4xl text-foreground mb-2">03<span className="text-primary">+</span></div>
              <div className="text-muted-foreground uppercase tracking-widest text-xs">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl text-foreground mb-2">20<span className="text-primary">+</span></div>
              <div className="text-muted-foreground uppercase tracking-widest text-xs">Projects Crafted</div>
            </div>
            <div>
              <div className="text-4xl text-foreground mb-2">02</div>
              <div className="text-muted-foreground uppercase tracking-widest text-xs">Awwwards</div>
            </div>
            <div>
              <div className="text-4xl text-foreground mb-2">∞</div>
              <div className="text-muted-foreground uppercase tracking-widest text-xs">Cups of Coffee</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative group" data-cursor="REVEAL">
          <div className="aspect-[3/4] w-full max-w-md mx-auto relative overflow-hidden">
            <img 
              src={heroImg} 
              alt="Mina Portrait" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            />
            <img 
              src={aboutHover} 
              alt="Digital Mask" 
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
