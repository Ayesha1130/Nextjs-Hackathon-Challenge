import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-10'>
        {/* Part One* */}
        <div className='relative w-full lg:w-1/2'>
            <Image
                src='/images/heropic.jpg'
                alt='Hero Image'
                layout='responsive'
                width={1440}
                height={740}
                className='w-full h-full object-cover' 
            />
        </div>
        <div className=' bg-[#F6F6F6] p-6 flex flex-col justify-center w-full lg:w-1/2'>
            <div className='text-center space-y-4 md:mx-40'>
                <h1 className='text-2xl font-bold'>
                    Homeware that puts quality and
                     style at the heart of its brand
                </h1>
                <p className='text-base'>
                    With our new collection, view over 400 bespoke pieces from homeware through to furniture today.
                </p>
                <button className='bg-[#FFFFFF]  py-[16px] px-[32px] text-center border border-gray-300 hover:bg-[#F1F1F1] focus:outline-none'>
                    View collection
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero


