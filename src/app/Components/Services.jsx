'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Expert Personal Training",
      description: "Accelerate your results with one-on-one coaching from our certified trainers. Receive a customized fitness plan, nutritional advice, and unwavering motivation tailored to your specific objectives.",
      cta: "Meet Our Trainers",
      icon: "🎯",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      title: "Dynamic Group Fitness",
      description: "Experience the energy of our diverse group classes. From high-intensity interval training (HIIT) and strength conditioning to mindful yoga and invigorating cycling, find the perfect class to challenge and inspire you.",
      cta: "View Class Schedule",
      icon: "🔥",
      gradient: "from-success-500 to-success-600"
    },
    {
      title: "Premium Equipment & Facilities",
      description: "Train with the best. Our facility boasts the latest cardio and strength training equipment, spacious workout zones, and pristine amenities designed for your comfort and performance.",
      cta: "Take a Virtual Tour",
      icon: "💪",
      gradient: "from-secondary-600 to-secondary-700"
    },
    {
      title: "Holistic Wellness & Recovery",
      description: "We believe in a balanced approach. Explore services like nutritional counseling, mobility workshops, and recovery zones to complement your workouts and enhance overall well-being.",
      cta: "Learn More",
      icon: "🧘",
      gradient: "from-warning-500 to-warning-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Tailored Solutions for Your Unique Fitness Journey
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to cater to all fitness levels and aspirations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-accent-600 hover:text-accent-700 font-semibold flex items-center group transition-colors duration-200"
                >
                  {service.cta}
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
