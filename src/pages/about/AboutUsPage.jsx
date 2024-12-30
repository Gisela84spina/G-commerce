import React from 'react'

export function AboutUs() {
  return (
    
      <div className='flex flex-col h-auto mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden text-gray-400 w-[55vw]'>
        <div className='p-10'>
        <div className='text-center flex flex-col items-center font-extrabold'>
          <h1 className='text-4xl'>Welcome to G-commerce</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p className='text-2xl'>
            Our goal is to remove any technical or financial barriers that can
            prevent you from making your own website. Our powerful tools empower
            individuals and business owners to create a website, sell online, or
            reach global audiences. Whether you're a beginner or website expert,
            we're excited to help you on your journey!
          </p>
        </div>
      </div>
    </div>
  )
}