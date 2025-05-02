import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SpecialOffers = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative h-[400px]">
              <img
                src="/images/offer-1.jpg"
                alt="Special Offer 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Summer Collection</h3>
                <p className="text-lg mb-4">Up to 50% off on selected items</p>
                <Link href="/collection/summer">
                  <span className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative h-[400px]">
              <img
                src="/images/offer-2.jpg"
                alt="Special Offer 2"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">New Arrivals</h3>
                <p className="text-lg mb-4">Discover our latest collection</p>
                <Link href="/new-arrivals">
                  <span className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    Explore Now
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 