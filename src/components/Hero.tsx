import { splitTextToSpans } from "@/lib/utils";
import heroImg from "@/assets/hero.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!title1Ref.current || !title2Ref.current) return;
    
    // Split text
    splitTextToSpans(title1Ref.current);
    splitTextToSpans(title2Ref.current);

    const chars1 = title1Ref.current.querySelectorAll('.split-char');
    const chars2 = title2Ref.current.querySelectorAll('.split-char');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to([...chars1, ...chars2], {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out"
      });

      if (imgWrapperRef.current) {
        tl.fromTo(imgWrapperRef.current, {
          clipPath: "inset(100% 0 0 0)"
        }, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.5,
          ease: "expo.out"
        }, "-=1");
      }

      if (imgRef.current) {
        tl.fromTo(imgRef.current, {
          scale: 1.3
        }, {
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }, "-=1.5");
        
        // Parallax scroll
        gsap.to(imgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      <div className="z-10 flex flex-col items-start max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter uppercase mb-4 relative z-20 mix-blend-difference">
          <div className="overflow-hidden">
            <span ref={title1Ref} className="block text-foreground">Harpreet</span>
          </div>
          <div className="overflow-hidden flex items-start gap-4 md:gap-8">
            <span className="text-[4vw] md:text-[3vw] text-primary font-sans mt-2 md:mt-4 opacity-80">創造</span>
            <span ref={title2Ref} className="block text-foreground ml-8 md:ml-24">Singh</span>
          </div>
        </h1>
        
        <div className="max-w-md text-muted-foreground font-mono text-sm md:text-base mt-12 md:mt-0 md:absolute md:right-12 md:bottom-32 md:text-right mix-blend-difference z-20">
          <p className="mb-2 uppercase tracking-widest text-xs opacity-70">Creative Developer</p>
          <p>Building interfaces the way a sword gets forged: slow, obsessive, a little dramatic.</p>
        </div>
      </div>

      <div 
        ref={imgWrapperRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[60vh] md:h-[80vh] z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
        <img 
          ref={imgRef}
          src={heroImg}
          alt="Harpreet Singh" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-border bg-background z-20">
        <div className="marquee-container font-mono text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap">
          <span>FRONTEND DEVELOPER <span className="text-primary mx-4">·</span> AWWWARDS <span className="text-primary mx-4">·</span> MOTION <span className="text-primary mx-4">·</span> GSAP <span className="text-primary mx-4">·</span> CREATIVE DEVELOPER <span className="text-primary mx-4">·</span> </span>
          <span>FRONTEND DEVELOPER <span className="text-primary mx-4">·</span> AWWWARDS <span className="text-primary mx-4">·</span> MOTION <span className="text-primary mx-4">·</span> GSAP <span className="text-primary mx-4">·</span> CREATIVE DEVELOPER <span className="text-primary mx-4">·</span> </span>
          <span>FRONTEND DEVELOPER <span className="text-primary mx-4">·</span> AWWWARDS <span className="text-primary mx-4">·</span> MOTION <span className="text-primary mx-4">·</span> GSAP <span className="text-primary mx-4">·</span> CREATIVE DEVELOPER <span className="text-primary mx-4">·</span> </span>
        </div>
      </div>
    </section>
  );
}
