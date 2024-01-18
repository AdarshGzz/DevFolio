import React from "react";
import { EduCard } from "./educationCard";

interface PathProps{
    DetailArray:object[];
}

const Path = ({ DetailArray }: PathProps) => {
    
    return (
        <div className="grid grid-cols-5 grid-rows-5 ">
            <div className="col-start-3 row-start-1 row-span-2">
                < div className='flex flex-col items-center' >
                    <div className='h-7 w-7 bg-white rounded-full ' />
                    <div className='h-[9rem] w-2 bg-white -mt-1' />
                </div >
            </div>
            <div className="col-start-2 row-start-1">
                <EduCard title='Btech' provider='srm' duration='2000-2000' />
            </div>
            <div className="col-start-3 row-start-2">
                < div className='flex flex-col items-center' >
                    <div className='h-7 w-7 bg-white rounded-full ' />
                    <div className='h-[9rem] w-2 bg-white -mt-1' />
                </div >
            </div>
            <div className="col-start-4 row-start-2">
                <EduCard title='Btech' provider='srm' duration='2000-2000' />
            </div>
            <div className="col-start-3 row-start-3">
                < div className='flex flex-col items-center' >
                    <div className='h-7 w-7 bg-white rounded-full ' />
                </div >
            </div>
            <div className="col-start-2 row-start-3">
                <EduCard title='Btech' provider='srm' duration='2000-2000' />
            </div>
        </div>

    )
}

export default Path

