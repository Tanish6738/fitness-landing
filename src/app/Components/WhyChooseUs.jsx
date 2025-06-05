'use client'
import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "🏆",
      title: "Certified Professionals",
      description: "Our team of trainers and instructors are highly qualified, experienced, and dedicated to your success."
    },
    {
      icon: "📊",
      title: "Results-Driven Approach",
      description: "We focus on tangible outcomes, helping you set, achieve, and surpass your fitness goals."
    },
    {
      icon: "🤝",
      title: "Supportive Community",
      description: "Join a welcoming and motivating environment where members encourage and inspire one another."
    },
    {
      icon: "✨",
      title: "Modern & Clean Facility",
      description: "Enjoy a spotless, well-maintained space equipped with top-tier amenities for an exceptional workout experience."
    },
    {
      icon: "🔄",
      title: "Flexible Options",
      description: "We offer a variety of membership plans and programs to fit your lifestyle and budget."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            The <span className="text-accent-500">[Fitness Center Name]</span> Difference
          </h2>
          <p className="text-xl text-neutral-600">
            Invest in Yourself
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-5xl mb-6"
              >
                {advantage.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional highlight section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied members who have transformed their lives with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-accent-600 font-bold py-3 px-8 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
