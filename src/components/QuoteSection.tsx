/* ============================================
   Quote Section
   Displays a meaningful, centered quote
   with elegant typography and glow effect
============================================ */

interface QuoteSectionProps {
  quote: string;
  attribution?: string;
}

const QuoteSection = ({ quote, attribution }: QuoteSectionProps) => {
  return (
    <section className="relative px-6 py-24 flex justify-center">
      <div className="max-w-4xl w-full text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
        {/* Decorative stars */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-primary/50 animate-twinkle" style={{ animationDelay: '0s' }}>✦</span>
          <span className="text-accent/50 animate-twinkle" style={{ animationDelay: '0.5s' }}>✦</span>
          <span className="text-primary/50 animate-twinkle" style={{ animationDelay: '1s' }}>✦</span>
        </div>

        {/* Quote text */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed text-glow-soft">
          "{quote}"
        </blockquote>

        {/* Attribution if provided */}
        {attribution && (
          <p className="mt-8 font-sans text-lg text-muted-foreground italic">
            — {attribution}
          </p>
        )}

        {/* Decorative divider */}
        <div className="mt-12 mx-auto w-32 memorial-divider" />
      </div>
    </section>
  );
};

export default QuoteSection;
