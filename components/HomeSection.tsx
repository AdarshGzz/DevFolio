"use client"
import React from 'react'
import Layout from './subcomponents/layout'
import { Linkedin, Github, Twitter, Instagram, Send, Mouse, ArrowBigDownDash } from 'lucide-react';
import Link from 'next/link'
import { Button } from './ui/button';
import Image from 'next/image';
import Blob from './subcomponents/blob';
import Typewriter from '@/components/subcomponents/typewriterText';
import LavitationBox from './subcomponents/lavitation';
import Scroll from './subcomponents/scroll';

// import ProfileImage from '@/public/assets/fImage.png'
const HomeSection = () => {

    const socialInfo = [
        { link: 'https://www.linkedin.com/in/adarsh-kumar-gupta-a96b54228/', icon: <Linkedin className='h-[1.5rem] w-[1.5rem]' /> },
        { link: 'https://github.com/AdarshGzz', icon: <Github className='h-[1.5rem] w-[1.5rem]' /> },
        // { link: './', icon: <Twitter className='h-[1.5rem] w-[1.5rem]' /> },
        { link: 'https://www.instagram.com/adarshgzz/', icon: <Instagram className='h-[1.5rem] w-[1.5rem]' /> },
    ]

    const Words = ["Frontend", "Backend", "Web3"]


    // const Scroll =()=>{
    //     window.scrollTo({ top:800, behavior: 'smooth' })
    // }

    return (
        <Layout id={'homeSection'} className=' w-[100%] flex flex-col items-center gap-[9rem] md:px-5 md:py-20 py-10 top-0 dark:bg-[#191627] bg-[#FBFBFE]' >
            <div className=" w-full flex flex-row justify-center md:items-center items-start  md:px-[15rem] ">
                <div className="flex md:flex-row items-center justify-around flex-col w-full gap-5 ">
                    <div className='w-full md:w-max flex flex-row items-center justify-around gap-3 '>
                        <div>
                            <ul className='flex flex-col gap-7'>
                                {socialInfo.map((social, i) => {
                                    return (
                                        <li key={i} >
                                            <Link className='text-[#6D57E0] hover:text-[#6D57E0]/70 ' href={social.link}>{social.icon}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='md:hidden '>
                            <Blob />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 py-5 md:w-[25rem] w-[21rem]'>
                        <h1 className='text-4xl lg:text-6xl font-bold leading-[3rem] '>Hi, I&apos;m <br className='hidden md:block' /> Adarsh</h1>
                        <div className='text-xl lg:text-2xl font-semibold dark:text-[#F2F1F3]/70 flex flex-row'>
                            <p className=' whitespace-nowrap'>I am a &nbsp;</p>
                            <Typewriter Words={Words} />
                            <p className=' whitespace-nowrap'>&nbsp; Developer</p>
                        </div>
                        <p className='text-lg lg:text-xl capitalize dark:text-[#F2F1F3]/70'>Open-Source enthusiast and self learner, <br className='hidden md:block' /> believes in the power of community.</p>
                        <Scroll scrollToId='contact'>
                        <Button variant={'default'} size="lg" className='gap-2 w-[10rem] '>
                            Contact Me <Send className='h-[1rem] w-[1rem]' />
                        </Button>
                        </Scroll>
                    </div>
                </div>
                <div className='md:block hidden ' >
                    {/* <Image 
                  src={ProfileImage}
                  alt="Picture of the author"
                  width={400}
                  height={400}
              /> */}
                    <Blob />
                </div>
            </div>
            <LavitationBox>
                <Scroll scrollToId={'about'}>
                 <div className='hidden md:flex flex-row gap-3'>
                        <Mouse className='text-[#6D57E0]' />
                        <span className='font-semibold dark:text-[#F2F1F3]/70'>
                            Scroll Down
                        </span>
                        <ArrowBigDownDash className='text-[#6D57E0]' />
                    </div>
                </Scroll>
            </LavitationBox>
        </Layout>
    )
}

export default HomeSection
