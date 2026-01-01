/* ============================================
   Poem Section
   Displays a meaningful poem with elegant
   italic styling and soft glow effects
============================================ */

interface PoemSectionProps {
  title?: string;
  lines: string[];
  author?: string;
}

const PoemSection = ({ title, lines, author }: PoemSectionProps) => {
  return (
    <section className="relative px-6 py-24 flex justify-center">
      <div className="max-w-2xl w-full text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
        {/* Optional title */}
        {title && (
          <h3 className="font-serif text-xl md:text-2xl text-primary/80 mb-10 tracking-wide">
            {title}
          </h3>
        )}

        {/* Poem container with subtle background */}
        <div className="relative py-12 px-8">
          {/* Decorative quotes */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif leading-none">
            "
          </span>

          {/* Poem lines */}
          <div className="space-y-4 relative z-10">
            {lines.map((line, index) => (
              <p
                key={index}
                className="font-sans text-lg md:text-xl text-foreground/85 italic leading-loose text-glow-blue"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Closing quote */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif leading-none rotate-180">
            "
          </span>
        </div>

        {/* Author attribution */}
        {author && (
          <p className="mt-8 font-sans text-base text-muted-foreground">
            — {author}
          </p>
        )}

        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
