"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TrendingProducts = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
          <p className="text-gray-600">Discover what s hot this season</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add trending products */}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts; 