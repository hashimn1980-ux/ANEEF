'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-0 bg-midnight-navy">
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <img
          alt="Luxury leather background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1605732822223-452fe8f4a3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
        <div className="absolute inset-0 bg-midnight-navy/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-serif text-rose-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            One-of-One Photography
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide mb-2">
            Commission a<br />
            <span className="italic text-rose-gold">Masterpiece</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full flex flex-col gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="group relative">
            <label className="block mb-2 font-serif text-rose-gold text-xs tracking-[0.2em] uppercase font-bold">
              Name
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-cool-silver/30 text-cool-silver text-base py-3 px-0 focus:ring-0 focus:border-rose-gold placeholder-cool-silver/30 transition-colors duration-500 font-sans tracking-wide"
              placeholder="Your Full Name"
              required
              type="text"
            />
          </div>
          <div className="group relative">
            <label className="block mb-2 font-serif text-rose-gold text-xs tracking-[0.2em] uppercase font-bold">
              Vision
            </label>
            <textarea
              className="w-full bg-transparent border-0 border-b border-cool-silver/30 text-cool-silver text-base py-3 px-0 focus:ring-0 focus:border-rose-gold placeholder-cool-silver/30 resize-none transition-colors duration-500 font-sans tracking-wide"
              placeholder="Describe your vision..."
              required
              rows={1}
            ></textarea>
          </div>
          <div className="group relative">
            <label className="block mb-2 font-serif text-rose-gold text-xs tracking-[0.2em] uppercase font-bold">
              Date
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-cool-silver/30 text-cool-silver text-base py-3 px-0 focus:ring-0 focus:border-rose-gold placeholder-cool-silver/30 transition-colors duration-500 font-sans tracking-wide"
              placeholder="Preferred Date"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              type="text"
            />
          </div>
          <div className="pt-8">
            <button
              className="w-full bg-rose-gold hover:bg-white text-midnight-navy transition-all duration-500 py-4 px-6 group relative overflow-hidden shadow-lg shadow-black/20"
              type="submit"
            >
              <span className="relative z-10 font-serif font-bold tracking-[0.25em] text-sm uppercase">
                Submit Commission
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
