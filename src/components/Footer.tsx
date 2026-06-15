export function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="font-serif text-2xl font-bold tracking-tighter text-foreground">
          HS <span className="text-primary font-sans text-sm ml-2">終</span>
        </div>
        
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="https://www.linkedin.com/in/harpreet-singh-sodal-699a3423a/" className="hover:text-foreground transition-colors" data-cursor="LINK">Linkedin</a>
          <a href="https://www.instagram.com/harpreetsinghsodal/" className="hover:text-foreground transition-colors" data-cursor="LINK">Instagram</a>
          <a href="https://wa.me/919877095889" className="hover:text-foreground transition-colors" data-cursor="LINK">Whatsapp</a>
        </div>
        
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Harpreet Singh.
        </div>
        
      </div>
    </footer>
  );
}
