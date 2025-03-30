"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      title: 'Data Engineering',
      description: 'Design and build data pipelines, ETL processes, and data warehousing solutions to transform raw data into valuable insights.',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Software Development',
      description: 'Create custom software solutions, web applications, and APIs using modern frameworks and best practices.',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Data Analysis',
      description: 'Extract meaningful insights from data through statistical analysis, visualization, and reporting.',
      icon: '📈'
    },
    {
      id: 4,
      title: 'Machine Learning',
      description: 'Develop and deploy machine learning models to solve complex business problems and make data-driven predictions.',
      icon: '🤖'
    },
    {
      id: 5,
      title: 'Database Design',
      description: 'Design efficient database schemas and optimize database performance for both SQL and NoSQL databases.',
      icon: '🗃️'
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Provide expert advice on data strategy, architecture, and implementation to help organizations leverage their data effectively.',
      icon: '🔍'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Services</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            I offer a range of services to help businesses leverage data and technology to solve complex problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl mb-4 bg-blue-50 h-16 w-16 flex items-center justify-center rounded-full mx-auto md:mx-0 border border-blue-200">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-800">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 