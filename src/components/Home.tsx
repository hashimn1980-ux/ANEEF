'use client';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-midnight-navy">
      <div className="absolute inset-0 z-0">
        <img
          alt="Immersive masterpiece shot"
          className="object-cover w-full h-full opacity-40"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-midnight-navy/50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl text-white font-serif tracking-widest uppercase">
            ANEEF
          </h1>
          <p className="mt-4 text-sm md:text-base tracking-[0.4em] uppercase text-cool-silver font-sans">
            ONE-OF-ONE PHOTOGRAPHY
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-cool-silver/80">
            SCROLL TO ENTER
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
