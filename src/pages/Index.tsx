/* ============================================
   Memorial Page - Main Index Component
   A beautiful, respectful tribute page for a
   beloved brother who has passed away
============================================ */

import { useEffect, useState } from 'react';
import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import MemorySection from '@/components/MemorySection';
import PoemSection from '@/components/PoemSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import memorialPortrait from '@/assets/memorial-portrait.jpeg';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Content data - can be customized
  const memorialData = {
    name: "Ramanathan Sharmilan",
    subtitle: "Forever in our hearts",
    imageSrc: memorialPortrait,
    
    memories: [
      "He was more than a brother—he was a best friend, a confidant, and a guiding light in our lives. His laughter filled every room, his kindness touched every soul, and his spirit was as gentle as a summer breeze.",
      "He taught us to find joy in the little things, to love without reservation, and to always see the good in others. Though he walks with the stars now, his love remains with us, woven into every cherished memory we hold dear.",
    ],

    poemLines: [
      "Though you have gone to a place we cannot see,",
      "Your soul forever lives inside of me.",
      "In the whisper of the wind, I hear your voice,",
      "In the beauty of each day, I feel your joy.",
      "",
      "You are the star that guides me through the night,",
      "A gentle warmth, an everlasting light.",
      "Until we meet again on that distant shore,",
      "You live within my heart, forevermore.",
    ],

    quote: "Those we love never truly leave us. There are things that death cannot touch.",
  };

  return (
    <main 
      className={`relative min-h-screen overflow-x-hidden transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Starry background */}
      <StarField />

      {/* Page content */}
      <div className="relative z-10">
        {/* Hero - Profile, Name, Subtitle */}
        <HeroSection
          name={memorialData.name}
          subtitle={memorialData.subtitle}
          imageSrc={memorialData.imageSrc}
        />

        {/* Memory/About Section */}
        <MemorySection paragraphs={memorialData.memories} />

        {/* Poem Section */}
        <PoemSection
          title="A Soul at Peace"
          lines={memorialData.poemLines}
        />

        {/* Quote Section */}
        <QuoteSection quote={memorialData.quote} />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Index;
