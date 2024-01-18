import React from 'react'

interface HeadingProps{
    title: string;
    subtitle: string;
}
const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className='flex flex-col text-center gap-1'>
          <h1 className='md:text-5xl text-3xl font-bold'>{title}</h1>
          <p className='md:text-lg text-md font-semibold dark:text-[#F9FAFB]/70 text-[#242329]/70'>{subtitle}</p>
    </div>
  )
}

export default Heading
