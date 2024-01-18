import React from 'react'
import Layout from './subcomponents/layout'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    
    return (
        <Layout className='w-full flex flex-col gap-10  bg-gradient-to-r from-[#6426C7] to-[#8C52FF]  md:px-[10rem] md:py-20 py-10 px-5 text-xl font-bold'>
            <div className='flex items-center text-4xl justify-center'>
                '' The only way to do great work is to love what you do. ''
            </div>
            <div className='flex flex-row justify-between items-center'>
            <div>
                Copyright © {currentYear}. All rights are reserved
            </div>
            <div className='flex flex-row gap-5'>
                <Link href={'./'} className='hover:scale-150 duration-150'>
                    <Github />
                </Link>
                <Link href={'./'} className='hover:scale-150 duration-150'>
                    <Linkedin />
                </Link>
            </div>
            </div>
        </Layout>
    )
}

export default Footer