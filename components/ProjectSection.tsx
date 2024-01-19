import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { CarouselPlugin } from './subcomponents/projectCrousel'
// import ProjectDemo from '@/public/assets/Project/projectDemo.png'
import Wheels4Rent from '@/public/assets/Project/Wheels4Rent.png'
import BmiCalculator from '@/public/assets/Project/BmiCalculator.png'
import DateAsk from '@/public/assets/Project/DateAsk.png'


const Project = () => {


    const ProjecDetails = [
        { image: Wheels4Rent, title: "Car Rental Website", link:"https://github.com/AdarshGzz/OnroadzCars"},
        { image: BmiCalculator, title: "BMI Calculator", link:"https://github.com/AdarshGzz/BMI_Calculator"},
        { image: DateAsk, title: "Date Ask Website", link:"https://github.com/AdarshGzz/DateAsk"},
    ]

  return (
      <Layout id='project' className='w-full md:px-5 md:py-20 py-10 flex flex-col gap-20  dark:bg-[#191627] bg-[#FBFBFE]'>
        <div>
            <Heading title='Projects' subtitle='My Work'/>
        </div>
        <div className='flex  justify-center'>
            <CarouselPlugin Details={ProjecDetails}/>
        </div>
    </Layout>
  )
}

export default Project