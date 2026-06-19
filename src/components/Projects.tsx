import { useEffect, useRef } from "react";
import gsap from "gsap";
import proj1 from "@/assets/project-1.png";
import proj2 from "@/assets/project-2.png";
import proj3 from "@/assets/project-3.png";

const PROJECTS = [
  {
    id: "01",
    title: "IP BLACKLIST CHECKER",
    category: "WEB APPLICATION",
    year: "2025",
    image: proj1,
    kanji: "検査"
  },
  {
    id: "02",
    title: "NUMBERPLATESEXPRESS",
    category: "E-COMMERCE PLATFORM",
    year: "2025",
    image: proj2,
    kanji: "販売"
  },
  {
    id: "03",
    title: "VPS MANAGEMENT",
    category: "SERVER MANAGEMENT",
    year: "2025",
    image: proj3,
    kanji: "管理"
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Title reveal
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Project cards stagger
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any, i) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-24 flex items-end justify-between">
          <h2 className="font-serif text-[8vw] md:text-[6vw] leading-none tracking-tighter text-foreground uppercase">
            SELECTED<br/>WORKS
          </h2>
          <div className="font-mono text-primary text-xl hidden md:block mb-4">
            創造
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-16">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="project-card group relative overflow-hidden bg-secondary/20 border border-border flex flex-col md:flex-row items-center justify-between p-8 md:p-12 hover:bg-secondary/40 transition-colors duration-500"
              data-cursor="EXPLORE"
            >
              <div className="z-10 relative flex flex-col gap-4 w-full md:w-auto">
                <div className="font-mono text-primary tracking-widest text-sm flex items-center gap-4">
                  <span>{project.id}</span>
                  <div className="w-12 h-px bg-primary" />
                  <span>{project.kanji}</span>
                </div>
                <h3 className="font-serif text-4xl md:text-6xl text-foreground uppercase group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              </div>
              
              <div className="absolute inset-0 md:relative md:w-[400px] md:h-[250px] w-full h-full md:inset-auto z-0 opacity-0 group-hover:opacity-10 md:group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] scale-110 group-hover:scale-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply md:hidden" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
