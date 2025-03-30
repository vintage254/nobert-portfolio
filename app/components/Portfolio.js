"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const projects = [
    {
      id: 1,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets using React and D3.js.',
      imageUrl: '/project1.jfif',
      tags: ['React', 'D3.js', 'Data Visualization']
    },
    {
      id: 2,
      title: 'Machine Learning API',
      description: 'A REST API for machine learning model predictions using Python, Flask, and TensorFlow.',
      imageUrl: '/project2.jfif',
      tags: ['Python', 'Flask', 'TensorFlow']
    },
    {
      id: 3,
      title: 'E-commerce Analytics Platform',
      description: 'Real-time analytics platform for e-commerce businesses to track sales and customer behavior.',
      imageUrl: '/project3.jfif',
      tags: ['Node.js', 'MongoDB', 'Chart.js']
    },
    {
      id: 4,
      title: 'IoT Data Processing System',
      description: 'A system for collecting, processing, and analyzing data from IoT devices.',
      imageUrl: '/project4.jfif',
      tags: ['Kafka', 'Spark', 'Python']
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Portfolio</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills in data engineering and software development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 border-2 border-gray-300 rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 