import React from 'react'
import MarketsCarousel from './MarketsCarousel'
import {getData} from '../../lib/getData'

export default async function MarketList() {
  const mainCategories =await getData('mainCategories')
  return (
    <div className='text-white py-6'> 
      {/*Market Slider */}
      <div className="bg-slate-50 dark:bg-lime-900 rounded-lg p-4">
      <h2 className='py-2 text-clip text-2xl text-slate-900 dark:text-slate-50 mb-4 '>Shop By Market</h2>
      <MarketsCarousel mainCategories={mainCategories} />
      </div>
    </div>
  )
}
