"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const getWhatsAppLink = () => {
    const baseUrl = 'https://wa.me/254792267262';
    let text = 'Hello Nobert, I saw your portfolio and would like to connect.';
    
    if (formData.name || formData.email || formData.subject || formData.message) {
      text = `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nSubject: ${formData.subject || 'Not provided'}\nMessage: ${formData.message || 'Not provided'}`;
    }
    
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: '✉️',
      link: 'mailto:nobert@example.com',
      label: 'nobert@example.com'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      link: 'https://wa.me/254792267262',
      label: '+254 792 267262'
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      link: 'https://www.linkedin.com/in/nobert-kanini-127a28222/',
      label: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      icon: '</>',
      link: 'https://github.com/',
      label: 'GitHub Profile'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      link: 'https://twitter.com/',
      label: 'Twitter Profile'
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border-2 border-gray-300 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{link.name}</h3>
                  <p className="text-gray-800">{link.label}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-16 p-8 bg-white border-2 border-gray-300 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-800 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message via WhatsApp</span>
                <span>💬</span>
              </motion.a>
              
              <div className="mt-2 text-center text-sm text-gray-700">
                Message will be sent directly to my WhatsApp (+254 792 267262)
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 