'use client';

import Intro from '@/components/Intro';
import Home from '@/components/Home';
import HorizontalGallery from '@/components/HorizontalGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // Must match the duration in Intro.tsx

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <>
      {showIntro && <Intro />}
      <main className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Home />
        <HorizontalGallery />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
