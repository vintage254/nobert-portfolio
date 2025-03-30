"use client";
import { motion } from 'framer-motion';

const LogoAnimation = () => {
  // Define animation variants for the logo
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.2,
        ease: 'easeInOut'
      }
    }
  };

  // Letter animation for sequenced animations
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Split the name into individual letters for animation
  const nameArray = "NK".split("");

  return (
    <motion.div 
      className="flex items-center justify-center"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex">
        {nameArray.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="text-4xl font-bold text-blue-600"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="w-3 h-3 bg-blue-600 rounded-full ml-1"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default LogoAnimation; 