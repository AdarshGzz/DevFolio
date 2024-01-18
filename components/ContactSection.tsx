import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { MapPinned, Mail } from 'lucide-react';
import Link from 'next/link';

interface FormatProps {
    icon: React.ReactNode;
    title: string;
    detail: string;
    link?: string;
}

const Format = ({ icon, title, detail, link }: FormatProps) => {
    return (
        <div className='flex flex-row items-center gap-7'>
            <div className='md:h-20 md:w-20 h-10 w-10 text-[#8C52FF] md:text-2xl shadow-md shadow-[#8C52FF] rounded-full flex items-center justify-center'>
                {icon}
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='md:text-2xl text-xl font-semibold'>
                    {title}
                </h1>
                {link ? (
                    <Link href={link}>
                        <p className='md:text-lg text-md font-semibold dark:text-white/80 dark:hover:text-[#8C52FF]/80 hover:text-[#8C52FF]/80 duration-100 cursor-pointer'>
                            {detail}
                        </p>
                    </Link>
                ) : (
                    <p className='md:text-lg text-md font-semibold dark:text-white/80 dark:hover:text-[#8C52FF]/80 hover:text-[#8C52FF]/80 duration-100 cursor-pointer'>
                        {detail}
                    </p>
                )}
            </div>
        </div>
    )
}

const ContactMe = () => {
    return (
        <Layout id='contact' className=' w-[100%]  gap-[9rem] md:px-5 md:py-20 py-10 dark:bg-[#191627] bg-[#FBFBFE]'>
            <div>
                <Heading title='Contact Me' subtitle='Say Hello!' />
            </div>
            <div className='flex flex-col items-start gap-20 md:p-10 p-5 pt-10 md:pt-10 '>
                <div>
                    <p className='md:text-3xl text-2xl font-bold'>Don't be shy! Hit me up! 👇</p>
                </div>
                <div className='flex md:flex-row flex-col md:gap-20 gap-10'>
                    <Format icon={<MapPinned />} title='Location' detail='Bhopal (M.P.), INDIA' />
                    <Format icon={<Mail />} title='Mail' detail='itsadarshofficial1@gmail.com' link='mailto:itsadarshofficial1@gmail.com' />
                </div>
            </div>
        </Layout>
    )
}

export default ContactMe