/* ============================================
   Hero Section
   Displays the profile photo, name, and subtitle
   with elegant animations and glow effects
============================================ */

interface HeroSectionProps {
  name: string;
  subtitle: string;
  imageSrc: string;
}

const HeroSection = ({ name, subtitle, imageSrc }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Profile Image Container */}
      <div className="animate-fade-in-up opacity-0 delay-200">
        <div className="relative animate-float">
          {/* Outer glow ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-xl animate-pulse-soft" />
          
          {/* Profile image */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden profile-glow border-2 border-primary/40">
            <img
              src={imageSrc}
              alt={`Memorial photo of ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="mt-10 font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground text-glow text-center animate-fade-in-up opacity-0 delay-500">
        {name}
      </h1>

      {/* Decorative line */}
      <div className="mt-6 w-24 memorial-divider animate-fade-in opacity-0 delay-700" />

      {/* Subtitle */}
      <p className="mt-6 font-sans text-xl md:text-2xl text-primary/90 italic text-center animate-fade-in-up opacity-0 delay-700">
        {subtitle}
      </p>

      {/* Birth & Death dates placeholder */}
      <p className="mt-4 font-sans text-base text-muted-foreground tracking-widest animate-fade-in opacity-0 delay-1000">
        ✦ 1990 — 2024 ✦
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
