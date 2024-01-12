import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from '../ui/button'
import { MenuSquare } from 'lucide-react';

interface BottomNavProps{
    navLinks:{title: string,icon:React.ReactNode}[],
}

const BottonNav = ({navLinks}:BottomNavProps) => {

  return (
    <div>
          <Drawer>
              <DrawerTrigger>
                <Button variant={'ghost'} size="icon" className='p-2' asChild>
                      <MenuSquare className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all " />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                  <div className='p-5 sm:p-10'>
                    <ul className="grid grid-cols-3 gap-x-5 gap-y-5">
                        {navLinks.map((nav,i)=>{
                            return (
                                <li key={i} className="flex text-center flex-col items-center capitalize  hover:text-[#6D57E0] cursor-pointer">
                                    {nav.icon}
                                    <span>{nav.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                  </div>
              </DrawerContent>
          </Drawer>

    </div>
  )
}

export default BottonNav
