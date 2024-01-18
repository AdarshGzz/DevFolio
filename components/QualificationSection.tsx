import React from 'react'
import Layout from './subcomponents/layout'
import Heading from './subcomponents/sectionHeading'
import Path from './subcomponents/qualificationPath'
import { EduCard } from './subcomponents/educationCard'


const Qualification = () => {

  const EducationDetais = [
    { title: 'BTech Information Technology', provider:"VIT University", duration:"2021-2025" },
    { title: 'Senior Secondary School', provider:"Maharishi Vidya Mandir", duration:"2018-2020" },
    { title: 'Secondary School', provider:"Maharishi Vidya Mandir", duration:"2016-2018" },
  ]

  return (
    <Layout id={'qualification'} className='flex flex-col gap-12 items-center mt-[15rem] md:mt-0 h-[100vh] w-[100%] md:px-5 md:py-20 py-10 top-0 dark:bg-[#191627] bg-[#FBFBFE]'>
      <div>
        <Heading title={'Qualifications'} subtitle={'My Educational Qualification & Work Experience'} />
      </div>
      <Path DetailArray={EducationDetais}/>
      {/* <EduCard title='Btech' provider='srm' duration='2000-2000'/> */}

    </Layout>
  )
}

export default Qualification
