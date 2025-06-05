'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "[Fitness Center Name] isn't just a gym, it's a game-changer. The trainers are incredibly knowledgeable, and the atmosphere is so positive. I've never felt stronger or more confident!",
      author: "Sarah L.",
      memberSince: "Member since 2023",
      image: "👩‍💼"
    },
    {
      quote: "I was looking for a professional environment with serious equipment and expert guidance. [Fitness Center Name] delivered on all fronts. The personalized training program has been phenomenal.",
      author: "Mark D.",
      memberSince: "Member since 2022",
      image: "👨‍💻"
    },
    {
      quote: "The variety of classes keeps me engaged, and the community here is amazing. I've made friends and achieved fitness milestones I never thought possible.",
      author: "Priya K.",
      memberSince: "Member since 2024",
      image: "👩‍🎓"
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

  const cardVariants = {
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
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real People, Real <span className="text-accent-400">Transformations</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hear from our members who have experienced the [Fitness Center Name] difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-success-500"></div>
              
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-4xl text-accent-400 mb-6"
              >
                "
              </motion.div>

              {/* Testimonial text */}
              <p className="text-neutral-200 mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-accent-400">
                    {testimonial.memberSince}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-success-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "98%", label: "Member Satisfaction" },
            { number: "85%", label: "Goal Achievement Rate" },
            { number: "92%", label: "Membership Retention" },
            { number: "4.9★", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border border-neutral-700 rounded-lg p-6"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
