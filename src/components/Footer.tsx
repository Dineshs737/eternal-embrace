/* ============================================
   Footer Section
   Simple, elegant footer with "In loving memory"
   message and dynamic year display
============================================ */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
      {/* Decorative top border */}
      <div className="mb-10 mx-auto w-48 memorial-divider" />

      {/* Main memorial text */}
      <p className="font-sans text-xl text-foreground/80">
        In loving memory
        <span className="mx-2 text-primary/60">🤍</span>
      </p>

      {/* Year */}
      <p className="mt-4 font-sans text-sm text-muted-foreground tracking-widest">
        {currentYear}
      </p>

      {/* Small decorative element */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="text-primary/30 text-xs">✦</span>
        <span className="text-accent/30 text-xs">✦</span>
        <span className="text-primary/30 text-xs">✦</span>
      </div>

      {/* Subtle credit (optional) */}
      <p className="mt-10 font-sans text-xs text-muted-foreground/50">
        Forever remembered, forever loved
      </p>
    </footer>
  );
};

export default Footer;
