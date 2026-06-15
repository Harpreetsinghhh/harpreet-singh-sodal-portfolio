import { useEffect, useRef } from "react";
import gsap from "gsap";

const MILESTONES = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "Started my professional journey in web development and software engineering.",
    kanji: "始"
  },
  {
    year: "2023",
    title: "First Professional Projects",
    desc: "Worked on real-world client projects and strengthened my frontend and backend development skills.",
    kanji: "成"
  },
  {
    year: "2024",
    title: "Senior Developer",
    desc: "Led development initiatives and delivered scalable web applications.",
    kanji: "導"
  },
  {
    year: "2025",
    title: "Industry Recognition",
    desc: "Earned an Awwwards Honorable Mention while taking on team leadership responsibilities.",
    kanji: "賞"
  },
  {
    year: "2026",
    title: "Building the Future",
    desc: "Focused on innovation, leadership, and creating impactful digital products.",
    kanji: "続"
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.journey-item');
      items.forEach((item: any) => {
        gsap.fromTo(item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="journey" className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[6vw] md:text-[4vw] leading-none tracking-tighter text-foreground uppercase mb-24">
          THE PATH <span className="text-primary font-sans">道</span>
        </h2>
        
        <div className="flex flex-col gap-12 border-l border-primary/30 pl-8 md:pl-12">
          {MILESTONES.map((m, i) => (
            <div key={i} className="journey-item relative group" data-cursor="READ">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border border-primary group-hover:bg-primary transition-colors duration-300" />
              
              <div className="font-mono text-primary tracking-widest text-sm mb-2">
                {m.year}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 flex items-center gap-4">
                {m.title}
                <span className="font-sans text-muted-foreground text-sm opacity-50">{m.kanji}</span>
              </h3>
              <p className="font-mono text-muted-foreground text-sm max-w-lg">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
