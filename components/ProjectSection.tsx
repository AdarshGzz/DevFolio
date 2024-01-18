import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { CarouselPlugin } from './subcomponents/projectCrousel'
import ProjectDemo from '@/public/assets/Project/projectDemo.png'


const Project = () => {


    const ProjecDetails = [
        {image:ProjectDemo, title:"Project 1" ,link:"./"},
        {image:ProjectDemo, title:"Project 2" ,link:"./"},
        {image:ProjectDemo, title:"Project 3" ,link:"./"},
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