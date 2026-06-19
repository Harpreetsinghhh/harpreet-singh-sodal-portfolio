import { useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-white/20 pb-4">
        <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors" data-cursor="HOME">
          Harpreet
          <span className="text-primary ml-2 font-sans text-sm">創</span>
        </a>

        <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest uppercase">
          <a href="#about" className="nav-link text-foreground" data-cursor="VIEW">About</a>
          <a href="#projects" className="nav-link text-foreground" data-cursor="VIEW">Works</a>
          <a href="#journey" className="nav-link text-foreground" data-cursor="VIEW">Journey</a>
          <a href="#contact" className="nav-link text-foreground" data-cursor="OPEN">Contact</a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden font-mono text-sm uppercase tracking-widest text-foreground"
          data-cursor="MENU"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4 font-mono text-sm uppercase tracking-widest">
          <a href="#about" onClick={closeMenu} className="nav-link text-foreground">About</a>
          <a href="#projects" onClick={closeMenu} className="nav-link text-foreground">Works</a>
          <a href="#journey" onClick={closeMenu} className="nav-link text-foreground">Journey</a>
          <a href="#contact" onClick={closeMenu} className="nav-link text-foreground">Contact</a>
        </div>
      </div>
    </nav>
  );
}
