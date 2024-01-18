import React from 'react'
import ProjectDemo from '@/public/assets/Project/projectDemo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps{
    image:any;
    title:string;
    link:string;
}

const ProjectCard = ({ image, title, link }: ProjectCardProps) => {
  return (
    <div className={`h-full w-full text-white border-solid border-2 border-[#8c52ff] rounded-lg overflow-hidden`} >
          <div className=" rounded-lg flex flex-col gap-4 ">
              <Image className="rounded-lg h-full w-full" height={700} width={700} src={image} alt="" />
              <div className='flex flex-col gap-3'>
                  <h5 className="text-xl font-bold ">{title}</h5>
                  <Link href={link} className="inline-flex items-center text-sm font-medium text-center text-white rounded-lg" >
                    <Button  className='flex flex-row items-center gap-2'>
                          Visit <FaArrowUpRightFromSquare />
                    </ Button>
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default ProjectCard