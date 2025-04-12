import React from 'react'

export default function Brands() {
    return (
        <div class="bg-gray-100 px-4 py-12 font-sans">
        <div class="max-w-4xl max-sm:max-w-sm mx-auto">
          <h2 class="text-gray-800 text-4xl max-sm:text-2xl font-extrabold mb-8">Application Metrics</h2>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
            <div class="bg-white rounded-xl border px-7 py-8">
              <p class="text-gray-400 text-base font-semibold mb-1">Total free services</p>
              <h3 class="text-blue-600 text-3xl font-extrabold">5.4M+</h3>
            </div>
            <div class="bg-white rounded-xl border px-7 py-8">
              <p class="text-gray-400 text-base font-semibold mb-1">Revenue a month</p>
              <h3 class="text-blue-600 text-3xl font-extrabold">$80K</h3>
            </div>
            <div class="bg-white rounded-xl  border px-7 py-8">
              <p class="text-gray-400 text-base font-semibold mb-1">Engagement</p>
              <h3 class="text-blue-600 text-3xl font-extrabold">100K</h3>
            </div>
            <div class="bg-white rounded-xl border px-7 py-8">
              <p class="text-gray-400 text-base font-semibold mb-1">Server Uptime</p>
              <h3 class="text-blue-600 text-3xl font-extrabold">99.9%</h3>
            </div>
          </div>
        </div>
      </div>   
    )
}


