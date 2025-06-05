'use client'
import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Embark on Your <span className="text-yellow-200">Transformation?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Your journey to peak fitness starts now. Take the first step with a complimentary pass 
            to experience [Fitness Center Name] firsthand. Discover our facilities, meet our team, 
            and feel the difference.
          </p>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-accent-600 font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
          >
            Claim Your Free Day Pass
          </motion.button>
        </motion.div>

        {/* Alternative options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-yellow-200 transition-colors duration-200 underline underline-offset-4"
          >
            Schedule a Consultation
          </motion.button>
          <span className="hidden sm:block text-white/50">•</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-yellow-200 transition-colors duration-200 underline underline-offset-4"
          >
            View Membership Options
          </motion.button>
          <span className="hidden sm:block text-white/50">•</span>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+1234567890"
            className="text-white hover:text-yellow-200 transition-colors duration-200 underline underline-offset-4"
          >
            Call Us: (123) 456-7890
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success-400 rounded-full"></div>
            <span>No Commitment Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success-400 rounded-full"></div>
            <span>Expert Guidance Included</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success-400 rounded-full"></div>
            <span>Full Facility Access</span>
          </div>
        </motion.div>

        {/* Urgency element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block"
        >
          <div className="text-yellow-200 font-semibold mb-1">
            ⏰ Limited Time Offer
          </div>
          <div className="text-sm opacity-90">
            Join this month and get your first personal training session FREE!
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
