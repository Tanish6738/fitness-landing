'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Head Personal Trainer",
      specialization: "Strength Training & Nutrition",
      experience: "8+ Years",
      image: "👨‍💪",
      certifications: ["NASM-CPT", "CSCS", "Nutrition Coach"]
    },
    {
      name: "Sarah Chen",
      role: "Group Fitness Director",
      specialization: "HIIT & Functional Training",
      experience: "6+ Years",
      image: "👩‍🏋️",
      certifications: ["ACE-CPT", "TRX", "Yoga Alliance"]
    },
    {
      name: "Michael Johnson",
      role: "Wellness Coordinator",
      specialization: "Recovery & Mobility",
      experience: "10+ Years",
      image: "👨‍⚕️",
      certifications: ["LMT", "NASM-CES", "FMS"]
    },
    {
      name: "Emma Thompson",
      role: "Nutrition Specialist",
      specialization: "Sports Nutrition & Meal Planning",
      experience: "7+ Years",
      image: "👩‍🔬",
      certifications: ["RD", "CSSD", "Precision Nutrition"]
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
            Meet Our <span className="text-accent-500">World-Class</span> Trainers
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
            Our certified fitness professionals are the cornerstone of [Fitness Center Name]. 
            With diverse specializations and a shared passion for empowering clients, they are here 
            to guide, motivate, and ensure you reach your full potential safely and effectively.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              {/* Profile Image */}
              <div className="relative bg-gradient-to-br from-accent-500 to-accent-600 p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-6xl"
                >
                  {member.image}
                </motion.div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {member.experience}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-accent-600 font-semibold mb-2">
                  {member.role}
                </div>
                <div className="text-neutral-600 mb-4">
                  {member.specialization}
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-neutral-700 mb-2">
                    Certifications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-success-100 text-success-700 text-xs px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Book Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-900 to-secondary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a consultation to find the perfect trainer for your fitness goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
