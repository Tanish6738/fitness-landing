'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Welcome to <span className="text-accent-500">[Fitness Center Name]</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-secondary-700 mb-8">
            Where Potential Meets Performance
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed text-center">
            At <span className="font-semibold text-accent-600">[Fitness Center Name]</span>, we're more than just a gym; 
            we're a dedicated partner in your pursuit of a healthier, stronger, and more vibrant self. We've meticulously 
            crafted an environment that blends cutting-edge fitness technology with personalized support, ensuring every 
            visit moves you closer to your goals. Our commitment is to provide an unparalleled fitness experience that 
            inspires results and fosters a community of well-being.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5000+", label: "Members" },
            { number: "50+", label: "Expert Trainers" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Access" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
