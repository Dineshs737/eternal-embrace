/* ============================================
   Memory/About Section
   A heartfelt paragraph describing the beloved
   person's character and lasting impact
============================================ */

interface MemorySectionProps {
  paragraphs: string[];
}

const MemorySection = ({ paragraphs }: MemorySectionProps) => {
  return (
    <section className="relative px-6 py-24 flex justify-center">
      <div className="max-w-3xl w-full glass-card p-8 md:p-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
        {/* Section title */}
        <h2 className="font-serif text-2xl md:text-3xl text-primary text-glow-soft text-center mb-8">
          In Loving Memory
        </h2>

        {/* Decorative flourish */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary/60">✦</span>
          <div className="w-16 memorial-divider" />
          <span className="text-primary/60">✦</span>
          <div className="w-16 memorial-divider" />
          <span className="text-primary/60">✦</span>
        </div>

        {/* Memory paragraphs */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-lg md:text-xl text-foreground/90 leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom flourish */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <span className="text-primary/40 text-sm">❦</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
