import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { MapPinned, Mail } from 'lucide-react';

interface FormatProps{
    icon: React.ReactNode;
    title:string;
    detail:string;
}

const Format = ({ icon, title, detail }: FormatProps)=>{
    return(
        <div className='flex flex-row items-center gap-7'>
            <div className='h-20 w-20 text-[#8C52FF] shadow-md shadow-[#8C52FF] rounded-full flex items-center justify-center'>
                {icon}
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-semibold'>
                    {title}
                </h1>
                <p className='text-lg font-semibold dark:text-white/80 dark:hover:text-[#8C52FF]/80 hover:text-[#8C52FF]/80 duration-100 cursor-pointer'>
                    {detail}
                </p>
            </div>
        </div>
    )
}

const ContactMe = () => {
    return (
        <Layout id='contact' className=' w-[100%] flex flex-col items-center gap-[9rem] md:px-5 md:py-20 py-10 dark:bg-[#191627] bg-[#FBFBFE]'>
            <div>
                <Heading title='Contact Me' subtitle='Say Hello!' />
            </div>
            <div>
                <p className='text-3xl font-bold'>Don't be shy! Hit me up! 👇</p>
            </div>
            <div className='flex flex-row gap-20'>
                <Format icon={<MapPinned/>} title='Location' detail='Bhopal (M.P.), INDIA'/>
                <Format icon={<Mail/>} title='Mail' detail='itsadarshofficial1@gmail.com'/>
            </div>
            
        </Layout>
    )
}

export default ContactMe