import Benefits from '@/components/Benefits/Benefits'
import BrandDiffer from '@/components/BrandDiffer/BrandDiffer'
import Hero from '@/components/Hero/Hero'
import Idea from '@/components/Idea/Idea'

import Product from '@/components/Product/Product'
import TopNav from '@/components/TopNav/TopNav'
import React from 'react'

export default function Home() {
  return (
    <div>
      <TopNav/>
      <Hero/>
      <BrandDiffer/>
      <Product/>
      <Idea/>
      <Benefits/>

      
      
    </div>
  )
}
