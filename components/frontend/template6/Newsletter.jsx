import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get exclusive offers, new arrival alerts, and special discounts directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <img
              src="/images/newsletter-illustration.svg"
              alt="Newsletter"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 