"use client"

import React,{useState} from 'react'
import Scroll from "@/components/subcomponents/scroll"

interface BottomNavProps {
  navLinks: { title: string, icon: React.ReactNode, scrollToId: string }[];
  children:React.ReactNode;
}

const Drawer = ({ navLinks,children }: BottomNavProps) => {

  const[active,setActive] = useState<Boolean>(false)

  const OpenDrawer=()=>{
    setActive(true)
  }
  const CloseDrawer=()=>{
    setActive(false)
  }

  return (
    <>
    <div onClick={OpenDrawer}>
      {children}
    </div>
    {active && (
      <div 
        onClick={CloseDrawer}
        className='  absolute h-[120vh] w-screen top-0 left-0 -mt-[50rem] bg-black/80 '
      >
          <div className={` p-5 sm:p-10 sm:translate-y-[43rem] translate-y-[45rem] dark:bg-[#191627] bg-[white] rounded-t-lg duration-300" `} >
            <ul className="grid grid-cols-3 gap-x-5 gap-y-5">
              {navLinks.map((nav, i) => {
            return (
              <Scroll scrollToId={nav.scrollToId} key={i}>
                <li className="flex text-center flex-col items-center capitalize  hover:text-[#6D57E0] cursor-pointer">
                {nav.icon}
                <span>{nav.title}</span>
                </li>
                </Scroll>
            )
          })}
            </ul>
          </div>
      </div>
    )}
    </>
  )
}

export default Drawer
