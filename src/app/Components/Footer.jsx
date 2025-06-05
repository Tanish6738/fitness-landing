'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Classes', href: '#classes' },
    { name: 'Personal Training', href: '#training' },
    { name: 'Contact', href: '#contact' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cancellation Policy', href: '#cancellation' },
    { name: 'Health & Safety', href: '#safety' }
  ]

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent-400">[Fitness Center Name]</span>
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
              Your dedicated partner in achieving peak physical condition and lasting wellness. 
              Join our community of fitness enthusiasts and transform your life today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="text-accent-400">📍</span>
                <span>123 Fitness Street, Downtown District</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent-400">📞</span>
                <a href="tel:+1234567890" className="hover:text-accent-400 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent-400">✉️</span>
                <a href="mailto:info@fitnesscenter.com" className="hover:text-accent-400 transition-colors">
                  info@fitnesscenter.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-all duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs & Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Support</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-all duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-accent-400">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-accent-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-accent-400">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className="text-2xl hover:text-accent-400 transition-all duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Operating Hours Quick View */}
            <div className="text-center md:text-right">
              <div className="text-sm text-neutral-400 mb-1">Open Today</div>
              <div className="text-accent-400 font-semibold">5:00 AM - 10:00 PM</div>
              <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-sm text-success-400">Open Now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-primary-950 py-6"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div>
              Copyright © {currentYear} [Fitness Center Name]. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
