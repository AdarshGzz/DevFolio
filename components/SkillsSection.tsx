import React from 'react'
import { 
   SolidityImg,TailwindImg, TypescriptImg, 
   TruffleImg, BootstrapImg, 
   CppImg, CssImg, ExpressImg, 
   GitImg, GitHubImg, HtmlImg, 
   JsImg, MongodbImg, NextjsImg,
    NodeJsImg, ReactImg } from '@/components/stackImport';
import Layout from './subcomponents/layout';
import Heading from './subcomponents/sectionHeading';
import { Progress } from "@/components/ui/progress"
import  Image  from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface SkillCardsProps{
  title: string,
  logo:any,
  key:any,
  progress:number,
}


const SkillCards = ({ title, logo,key,progress }: SkillCardsProps) =>{
   return(
     <div key={key} >
       <HoverCard>
         <HoverCardTrigger asChild>
           <Image unselectable='on' src={logo} height={150} width={150} className='hover:-translate-y-2 duration-100 ease-in-out' alt='skill-logo' />
         </HoverCardTrigger>
         <HoverCardContent className="w-80">
           <div className="flex justify-between space-x-4">
            
             <div className="space-y-1 w-full">
               <h4 className="text-sm font-semibold">{title}</h4>
               <div className="flex items-center pt-2">
                 <Progress value={progress} />
               </div>
             </div>
           </div>
         </HoverCardContent>
       </HoverCard>
     </div>
   )
}

const Skills = () => {

  const TechStack = [
    {title:"C++" , logo: CppImg, h:55, w:55, progress:90},
    { title: "HTML", logo: HtmlImg, h: 55, w: 55, progress: 90 },
    { title: "CSS", logo: CssImg, h: 55, w: 55, progress: 90 },
    { title: "Tailwind CSS", logo: TailwindImg, h: 55, w: 55, progress: 90 },
    { title: "Bootstrap", logo: BootstrapImg, h: 55, w: 55, progress: 90 },
    { title: "Javascript", logo: JsImg, h: 55, w: 55, progress: 90 },
    { title: "Typescript", logo: TypescriptImg, h: 55, w: 55, progress: 90 },
    { title: "Solidity", logo: SolidityImg, h: 55, w: 55, progress: 90 },
    { title: "ReactJs", logo: ReactImg, h: 55, w: 55, progress: 90 },
    { title: "NextJs", logo: NextjsImg, h: 55, w: 55, progress: 90 },
    { title: "Truffle", logo: TruffleImg, h: 50, w: 50, progress: 90 },
    { title: "NodeJs", logo: NodeJsImg, h: 55, w: 55, progress: 90 },
    { title: "ExpressJs", logo: ExpressImg, h: 55, w:55, progress: 90 },
    { title: "MongoDB", logo: MongodbImg, h: 55, w: 55, progress: 90 },
    { title: "Git", logo: GitImg, h: 55, w: 55, progress: 90 },
    { title: "Github", logo: GitHubImg, h: 55, w: 55, progress: 90 },
  ]

  return (
    <Layout id={'skills'} className=' sm:h-[140vh] h-[160vh]  md:h-[120vh] w-[100%] gap-[4rem] flex flex-col md:py-10 py-20 items-center dark:bg-[#191627] bg-[#FBFBFE] '>
      <div>
      <Heading title={'Skills'} subtitle={'Tech Stack'}/>
      </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10   grid-rows-3 lg:gap-20 place-content-center'>
          {TechStack.map((tech, i) => {
            return (
              <SkillCards title={tech.title} logo={tech.logo} key={i} progress={tech.progress}/>
            )
          })}
       </div>
    
    </Layout>
  )
}

export default Skills