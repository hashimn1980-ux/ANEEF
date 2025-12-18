'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1490649354966-c8d62a4a492f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1535955569534-7e0e7a26992a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
];

const HorizontalGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-midnight-navy">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative h-[80vh] w-[60vw] md:w-[40vw] lg:w-[30vw] overflow-hidden">
              <img src={src} alt={`Image ${i + 1}`} className="h-full w-full object-cover"/>
              <div className="absolute bottom-0 left-0 p-4 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <p>Capture ID: 00{i + 1}</p>
                <p>Location: Unsplash</p>
                <p>Settings: f/1.8, 1/200s, ISO 100</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
