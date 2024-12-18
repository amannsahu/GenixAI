import React from 'react'
import Section from "../Components/Section"
import {smallSphere, stars} from "../assets/"
import Heading from "../Components/Heading"
import PricingList from '../Components/PricingList'
import {LeftLine, RightLine} from "../Section/design/Pricing"

const Pricing = () => {
  return (
    <Section id='pricing' className='overflow-hidden'>
        <div className='container relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img
                src={smallSphere}
                className='relative z-1'
                width={225} height={225}
                alt='small-sphere'
                />
                <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <img
                    src={stars}
                    className='w-full'
                    width={950}
                    height={400}
                    alt='stars'
                    />
                </div>
            </div>
            <Heading
            tag='Get started with Brainwave'
            title='Pay once, use forever'
            />

            <div className='relative'>
                <PricingList/>
                <LeftLine/>
                <RightLine/>
            </div>

            <div className='flex justify-center mt-10'>
                <a href="/pricing" className='text-xs font-code font-bold tracking-wider uppercase border-b'>See the full details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing
