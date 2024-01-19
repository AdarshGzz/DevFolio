
import React from 'react'
import Layout from './subcomponents/layout'
import Link from "next/link"

import { ModeToggle } from './subcomponents/modeButton';
import Confeti from './subcomponents/confeti';
import { Home, User, FileText, GraduationCap, FolderGit2, Send } from 'lucide-react';
import NavScroll from './subcomponents/navbarScroll';
import Scroll from './subcomponents/scroll';


import { Button } from '@/components/ui/button'
import { MenuSquare } from 'lucide-react';
import Drawer from './subcomponents/drawer';



function Navbar() {


    const navLinks = [
        { title: 'Home', icon: <Home />, scrollToId: 'homeSection' },
        { title: 'About', icon: <User />, scrollToId: 'about' },
        { title: 'Skills', icon: <FileText />, scrollToId: 'skills' },
        { title: 'qualification', icon: <GraduationCap />, scrollToId: 'qualification' },
        { title: 'projects', icon: <FolderGit2 />, scrollToId: 'project' },
        { title: 'contact me', icon: <Send />, scrollToId: 'contact' },
    ]


    return (
        <>  
        <NavScroll>
                <Layout className=' lg:px-[6rem] py-5 w-full z-10 dark:bg-[#191627] bg-[#FBFBFE] hidden md:block' >
                <div className='flex flex-row items-center justify-between md:px-4 '>
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
                                    <li key={i} className='hover:text-[#6D57E0] duration-100 capitalize cursor-pointer'><Scroll scrollToId={nav.scrollToId}>{nav.title}</Scroll></li>
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
            <Layout className='md:hidden fixed dark:bg-[#191627] bg-[#FBFBFE] inset-x-0 bottom-0 flex flex-row justify-between p-3 z-10'>
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
                    <Drawer navLinks={navLinks}>
                    <Button variant={'ghost'} size="icon" className='p-2' asChild>
                        <MenuSquare className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all " />
                    </Button>
                    </Drawer>
                </div>
            </Layout>
        </>
    );
}

export default Navbar
