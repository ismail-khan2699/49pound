import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './clientside/scrollanimation';
import { animationData } from './data';

function Break() {
  return (
    <div>
        
        <section className="py-auto my-8  sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Quality Doesn't Have To Break The Bank.</h2>
                <h2 className="text-xl font-bold leading-tight text-black my-4 sm:text-2xl lg:text-2xl">At 49 Pound Social, we believe in delivering top-notch quality without the hefty price tag. With our affordable rates, you can enjoy premium services that won't break the bank.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">In today’s busy business world, managing social media can be a challenge. Our dedicated team handles your social media presence, allowing you to focus on your core operations while we ensure your brand stays active and engaged online. Let us take care of your social media, so you can focus on growing your business.</p>
                <Link href="#" title="" className="inline-flex items-center justify-center px-6 py-3 mt-8 font-bold text-black hover:text-custom-yello transition-all duration-200 bg-custom-yello border border-transparent rounded-md lg:mt-12 hover:bg-custom-magenta" role="button">
                GET STARTED
            </Link>
            </div>
            <div className="relative px-6 sm:pl-6 md:px-0 h-full overflow-y-hidden">
            <ScrollAnimation animationData={animationData[2]}>
                <div className="relative w-full max-w-xs mt-4 mb-10 mx-auto">
                    <Image height={700} width={200} className=" w-auto" src="/assets/Dboost.jpg" alt="" />

                </div>
            </ScrollAnimation>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}

export default Break