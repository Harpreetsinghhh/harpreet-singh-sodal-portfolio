export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-white/20 pb-4">
        <div className="font-serif text-2xl font-bold tracking-tighter text-foreground" data-cursor="HOME">
          Harpreet
          <span className="text-primary ml-2 font-sans text-sm">創</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest uppercase">
          <a href="#about" className="nav-link text-foreground" data-cursor="VIEW">About</a>
          <a href="#projects" className="nav-link text-foreground" data-cursor="VIEW">Works</a>
          <a href="#journey" className="nav-link text-foreground" data-cursor="VIEW">Journey</a>
          <a href="#contact" className="nav-link text-foreground" data-cursor="OPEN">Contact</a>
        </div>
        
        <div className="md:hidden font-mono text-sm uppercase tracking-widest text-foreground" data-cursor="MENU">
          Menu
        </div>
      </div>
    </nav>
  );
}
