"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuickView from './QuickView';
import WishlistButton from './WishlistButton';

const FeaturedProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'new', 'popular', 'sale'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <div className="flex justify-center space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <WishlistButton productId={product.id} />
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    -{product.discount}%
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary font-bold text-xl">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through ml-2">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default FeaturedProducts; 