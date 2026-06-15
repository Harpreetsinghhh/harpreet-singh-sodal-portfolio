import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !btnRef.current) return;
    
    // Magnetic Button logic
    const btn = btnRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    
    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,15,29,0.1)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="font-mono text-primary tracking-widest text-sm mb-12">
          <span>連絡</span>
        </div>
        
        <h2 className="contact-title font-serif text-[10vw] md:text-[8vw] leading-none tracking-tighter text-foreground uppercase mb-16">
          LET'S BUILD<br/>SOMETHING
        </h2>
        
        <a 
          ref={btnRef}
          href="mailto:preettt074@gmail.com" 
          className="inline-block px-12 py-6 border border-primary/50 text-foreground font-mono uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 relative group"
          data-cursor="EMAIL"
        >
          <span className="relative z-10">preettt074@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
