"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stackCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL', 'R', 'Java', 'C++']
    },
    {
      category: 'Data Engineering',
      skills: ['Apache Spark', 'Airflow', 'Kafka', 'ETL', 'Data Pipelines', 'AWS Glue']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'D3.js', 'Chart.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Django', 'Flask', 'Express', 'FastAPI', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
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
    <section id="stack" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Tech Stack</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            These are the technologies, frameworks, and tools I specialize in.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stackCategories.map((stackCategory, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              variants={categoryVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{stackCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stackCategory.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-800 rounded-full text-sm font-medium"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, backgroundColor: '#EBF4FF' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stack; 