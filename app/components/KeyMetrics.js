"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const KeyMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const metrics = [
    {
      title: 'Years of Experience',
      value: 5,
      icon: '⏱️',
      suffix: '+'
    },
    {
      title: 'Projects Completed',
      value: 50,
      icon: '🚀',
      suffix: '+'
    },
    {
      title: 'Happy Clients',
      value: 30,
      icon: '😊',
      suffix: '+'
    },
    {
      title: 'Industries Served',
      value: 7,
      icon: '🏭',
      suffix: '+'
    }
  ];
  
  // State to track animated count values
  const [counts, setCounts] = useState(metrics.map(() => 0));
  
  // Animate counts when in view
  useEffect(() => {
    if (isInView) {
      // For each metric
      metrics.forEach((metric, index) => {
        // Start from 0 and count up to the target value
        let startValue = 0;
        const endValue = metric.value;
        // Animation duration in ms (faster for smaller numbers)
        const duration = Math.min(50 * endValue, 2000);
        const step = Math.max(1, Math.floor(endValue / 30));
        
        // Start interval
        const timer = setInterval(() => {
          startValue += step;
          
          // Update counts state with new value for this metric
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = startValue >= endValue ? endValue : startValue;
            return newCounts;
          });
          
          // End animation when target reached
          if (startValue >= endValue) {
            clearInterval(timer);
          }
        }, duration / (endValue / step));
        
        // Cleanup
        return () => clearInterval(timer);
      });
    }
  }, [isInView, metrics]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="key-metrics" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Metrics</h2>
          <p className="max-w-2xl mx-auto text-white text-opacity-90">
            Numbers that reflect my professional journey and achievements.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                {counts[index]}{metric.suffix}
              </div>
              <div className="text-xl text-white text-opacity-90 font-medium">{metric.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyMetrics; 