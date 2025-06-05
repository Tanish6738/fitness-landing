'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-secondary-800 to-primary-950 text-white overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black/20"></div>
        {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-white"
            >
              Elevate Your Fitness.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-accent-400 mt-2"
            >
              Transform Your Life.
            </motion.span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover <span className="text-accent-300 font-semibold">[Fitness Center Name]</span>, where state-of-the-art facilities, 
            expert guidance, and a motivating community converge to help you achieve peak physical condition and lasting wellness.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Pass
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Explore Memberships
            </motion.button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-neutral-300"
          >
            {[
              { text: "Certified Trainers" },
              { text: "Premium Equipment" },
              { text: "Proven Results" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 right-20 w-32 h-32 bg-accent-500/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-secondary-500/10 rounded-full blur-xl"
      ></motion.div>
    </div>
  )
}

export default Hero