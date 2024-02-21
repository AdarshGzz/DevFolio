"use client"
import React,{useState} from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import { EduCard } from './subcomponents/educationCard'
import { GraduationCap, FileCheck } from 'lucide-react';
import { CerfCard } from './subcomponents/certificateCard'
import Certificate2 from "@/public/assets/certificate/cer1.png";
import Certificate1 from "@/public/assets/certificate/cer2.png";
import Certificate3 from "@/public/assets/certificate/cer3.png";
import Certificate4 from "@/public/assets/certificate/cer4.png";

const Qualification = () => {

  const EducationDetais = [
    { title: 'BTech Computer Science', provider:"Vellore Institute of Technology,Bhopal", duration:"2021 - Enrolled" },
    { title: 'Senior Secondary School', provider:"Maharishi Vidya Mandir, Shahdol", duration:"2018 - 2020" },
    { title: 'Secondary School', provider:"Maharishi Vidya Mandir, Shahdol", duration:"2016 - 2018" },
  ]

  const CertificationDetails = [
    { title: 'ReactJS Certification', image: Certificate4, provider: "Infosys", issued: "22 Feb 2024", id: 'NA', validation:'https://verify.onwingspan.com/' },
    { title: 'The Bits and Bytes of Computer Networking', image: Certificate3, provider: "Google", issued: "7 Jan 2024", id: 'AKKPZHNBQIGL', validation:'https://www.coursera.org/account/accomplishments/verify/AKKPZHNBQIGL' },
    { title: 'Mern Full Stack Internship Program',image:Certificate1, provider: "Ethnus <Codemithra/>", issued: "8 Dec 2023", id: '7CN4LTV9', validation:'https://ethnus.com/certverify' },
    { title: 'React and Redux Certification Test',image:Certificate2, provider: "KG Coding", issued: "Dec 2023", id: 'YNQQUIVB', validation:'https://www.kgcoding.in/verify-certificate?serialno=YNQQUIVB' },
  ]
  
  const [Certification,setCertification] = useState<boolean>(false)

  return (
    <Layout id={'qualification'} className='flex flex-col gap-12 items-center   w-[100%] md:px-5 md:py-20 py-10  dark:bg-[#191627] bg-[#FBFBFE]'>
      <div>
        <Heading title={'Qualifications'} subtitle={'My Educational Qualification & Work Experience'} />
      </div>
      <div className='flex flex-col gap-20'>
        <div className='flex flex-row md:gap-20 gap-5 justify-center'>
          <div onClick={() => setCertification(false)} className={` ${Certification ? "bg-transparent" : "bg-[#8C52FF] text-white"} flex flex-row gap-2 hover:bg-[#8C52FF] hover:text-white duration-100 ease-in-out cursor-pointer items-center px-4 py-2 border-2 dark:border-white border-black rounded-lg`}>
            <GraduationCap/>Education
          </div>
          <div onClick={() => setCertification(true)} className={` ${Certification ? "bg-[#8C52FF] text-white" : "bg-transparent"} flex flex-row gap-2 hover:bg-[#8C52FF] hover:text-white duration-100 ease-in-out cursor-pointer items-center px-4 py-2 border-2 dark:border-white border-black rounded-lg`} >
            <FileCheck/>Certification
          </div>
        </div>
        {
          Certification?(
            <div className='flex flex-col gap-4 items-center'>
              {CertificationDetails.map((cerf, i) => {
                return (
                  <CerfCard title={cerf.title} provider={cerf.provider} duration={cerf.issued} Vid={cerf.id} Vlink={cerf.validation} image={cerf.image} key={i}/>
                )
              })}
            </div>
          ):(
              <div className='flex flex-col gap-4 justify-center items-center '>
                {EducationDetais.map((edu, i) => {
                  return (<EduCard title={edu.title} provider={edu.provider} duration={edu.duration} key={i} />)
                })}
              </div>
          )
        }
        
      </div>
      
    </Layout>
  )
}

export default Qualification
