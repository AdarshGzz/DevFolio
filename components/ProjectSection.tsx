import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { CarouselPlugin } from './subcomponents/projectCrousel'
// import ProjectDemo from '@/public/assets/Project/projectDemo.png'
import Wheels4Rent from '@/public/assets/Project/Wheels4Rent.png'
import BmiCalculator from '@/public/assets/Project/BmiCalculator.png'
import DateAsk from '@/public/assets/Project/DateAsk.png'
import Animeverse from '@/public/assets/Project/animeverse.png'
import EmailAuth from '@/public/assets/Project/emailAuth.png'
import IphoneWeb from '@/public/assets/Project/iphoneWeb.png'
import QRify from '@/public/assets/Project/Qrify.png'
const Project = () => {


    const ProjecDetails = [
        { image: QRify, title: "QRify", link: "https://qrify-pi.vercel.app/"},
        { image: IphoneWeb, title: "Apple Web Clone", link: "https://iphone-henna.vercel.app/"},
        { image: EmailAuth, title: "Email-OTP Authentication", link: "https://email-auth-system.vercel.app"},
        { image: Animeverse, title: "Animeverse", link:"https://github.com/AdarshGzz/Anime-Webapp"},
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