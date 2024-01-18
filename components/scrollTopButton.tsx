"use client"
import React,{useState,useEffect} from 'react'
import { Button } from './ui/button'
import { ArrowUpFromLine } from 'lucide-react';
import Scroll from './subcomponents/scroll';


const ScrollTopButton = () => {

  const [visible,setVisible] = useState<boolean>(false);

  const handleVisibility =()=>{
    const ScrollY = window.scrollY
    setVisible(ScrollY > 120)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <div className={`bottom-0 hidden md:block float-right right-5 sticky group text-white ${visible ? 'visible -translate-y-20 duration-150 ease-in' :'invisible translate-y-20 duration-100 ease-out hover:text-[#8c52ff] '}`}>
      <Scroll scrollToId='homeSection'>
        <Button variant={'outline'} className='w-max bg-[#8c52ff] border border-solid border-[#8c52ff] rounded-lg group-hover:text-[#8c52ff] '>
          <ArrowUpFromLine className='h-[1.4rem] w-[1.4rem] '/>
        </Button>
      </Scroll>
    </div>
  )
}

export default ScrollTopButton