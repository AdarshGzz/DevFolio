
import React from 'react'
import Layout from './subcomponents/layout'
import Link from "next/link"

import { ModeToggle } from './subcomponents/modeButton';
import Confeti from './subcomponents/confeti';
import BottonNav from './subcomponents/drawer';
import { Home, User, FileText, GraduationCap, FolderGit2, Send } from 'lucide-react';
import NavScroll from './subcomponents/navbarScroll';



function Navbar() {

    const navLinks = [
        { title: 'Home', icon: <Home /> },
        { title: 'About', icon: <User /> },
        { title: 'Skills', icon: <FileText /> },
        { title: 'qualification', icon: <GraduationCap /> },
        { title: 'projects', icon: <FolderGit2 /> },
        { title: 'contact me', icon: <Send /> },
    ]


    return (
        <>  
        <NavScroll>
                <Layout className=' lg:px-[6rem] py-5 w-full z-[1000] dark:bg-[#191627] bg-[#FBFBFE]' >
                <div className='md:flex flex-row items-center justify-between md:px-4 hidden  '>
                    <div>
                        <Confeti>
                            <Link
                                href="./"
                                className='font-semibold text-xl duration-100 hover:text-[#6D57E0] cursor-pointer p-1'
                            >
                                Adarsh
                            </Link>
                        </Confeti>
                    </div>
                    <div className='flex flex-row gap-10 items-center font-semibold '>
                        <ul className='flex flex-row justify-evenly lg:gap-10 md:gap-5 '>
                            {navLinks.map((nav, i) => {
                                return (
                                    <li key={i} className='hover:text-[#6D57E0] duration-100 capitalize cursor-pointer'>{nav.title}</li>
                                )
                            })}
                        </ul>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>

            </Layout>
        </NavScroll>
            <Layout className='md:hidden fixed dark:bg-[#191627] bg-[#FBFBFE] inset-x-0 bottom-0 flex flex-row justify-between p-3'>
                <div>
                    <Confeti>
                        <Link
                            href="./"
                            className='font-semibold text-xl duration-100 hover:text-[#6D57E0] cursor-pointer p-1'
                        >
                            Adarsh
                        </Link>
                    </Confeti>
                </div>
                <div className='flex flex-row '>
                    <ModeToggle />
                    <BottonNav navLinks={navLinks} />
                </div>
            </Layout>
        </>
    );
}

export default Navbar
