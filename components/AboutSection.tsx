import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import Image from 'next/image';
import { Button } from './ui/button';
import ProfileImage from '@/public/assets/programmer.svg';
import LavitationBox from './subcomponents/lavitation';
import { ScrollText } from 'lucide-react';
import Confeti from './subcomponents/confeti';

const About = () => {
    return (
        <Layout id='about' className=' w-[100%] md:h-[100vh] h-[160vh] px-2  md:px-5 md:py-20 py-20 sm:py-10 flex flex-col items-center  dark:bg-[#191627] bg-[#FBFBFE]  '>
            <Heading title="About" subtitle="My Introduction" />
            <div className='grid md:grid-cols-2 grid-rows-2 place-content-center px-5 md:gap-5 py-5 sm:py-10 md:py-20'>
                <div className='flex items-center justify-center'>
                    <LavitationBox>
                        <Image
                            width={400}
                            height={400}
                            alt="NextUI hero Image"
                            src={ProfileImage}
                        />
                    </LavitationBox>
                </div>

                <div className='flex flex-col items-start justify-center text-left text-xl gap-5'>
                    <p>
                        Hi! 👋 I&apos;m Adarsh Kumar Gupta, a Prefinal year undergrad engineering sophomore pursuing BTech in Computer Science. I am a passionate self-learner, Open source enthusiast, exploring and building projects👨‍💻 using various technologies. I am a frontend web developer well versed in HTML, CSS, JavaScript and stand at a beginner-intermediate level of React and Decentralized Web Applications.
                    </p>
                    <div>
                        <Confeti>
                            <Button variant={'default'} size={'lg'} className='gap-1'>
                                Resume <ScrollText />
                            </Button>
                        </Confeti>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
