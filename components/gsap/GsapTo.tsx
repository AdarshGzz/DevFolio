"use client"
import { gsap } from "gsap";
import React from 'react'
import { useGSAP } from "@gsap/react"
interface GsapToType{
    id:string;
    children:React.ReactNode;
    animate:any;
    className:string;

}

const GsapTo = ({id,children,animate,className}: GsapToType) => {
    console.log({ id, children, animate, className })

   useGSAP(()=>{
    gsap.to(`#${id}`,animate)
   },[])

  return (
    <div id={id} className={className}>{children}</div>
  )
}

export default GsapTo