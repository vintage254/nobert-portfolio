"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ElevatorSpeech = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Optional: Add any video-specific effects or controls here
    }
  }, []);

  return (
    <section id="elevator-speech" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Elevator Speech
        </motion.h2>

        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="w-full md:w-2/3 lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Watch My Introduction</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/xBpqDVfVFks"
                  title="Elevator Speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Learn about my professional journey, skills, and what drives me as a developer in this brief introduction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorSpeech;