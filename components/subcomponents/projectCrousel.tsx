"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import ProjectCard from "./projectCard"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import Link from "next/link"

interface CarouselPluginProps{
    Details:any[];
}


export function CarouselPlugin({ Details }: CarouselPluginProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    )

    return (
            <Carousel 
                plugins={[plugin.current]}
                className=" md:w-[80%] w-[95%] "
            >
                <CarouselContent className="-ml-1">
                    {Details.map((data, index) => {return(
                        <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex  rounded-lg overflow-hidden bg-[#8c52ff] p-6 items-center justify-center ">
                                        <ProjectCard image={data.image} title={data.title} link={data.link}/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )})}
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                        <div className="p-1">
                            <Card className=" bg-transparent border-none">
                                <CardContent className="flex h-[20rem] rounded-lg overflow-hidden p-6 items-center justify-center ">
                                    <Link href={'/projects'}><Button className="text-xl font-semibold">View All Projects</Button></Link> 
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
    )
}
