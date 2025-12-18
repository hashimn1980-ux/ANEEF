'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulate a 4-second loading time

    return () => clearTimeout(timer);
  }, []);

  const calligraphyVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 3, ease: 'easeInOut' },
    },
  };

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-navy"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 1, delay: 3.5 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 100 Q100 50 150 100" // Replace with actual Arabic calligraphy path
          fill="none"
          stroke="#cfa986"
          strokeWidth="3"
          variants={calligraphyVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
};

export default Intro;
