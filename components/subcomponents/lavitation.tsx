"use client"
import React from 'react'
import { motion } from "framer-motion"

interface LavitationProps{
    children: React.ReactNode;
}

const LavitationBox = ({ children }: LavitationProps) => {
  return (
    <motion.div
        initial={{
            transform:"translateY(-1rem)",
        }}
        animate={{
            transform:"translateY(-2rem)"
        }}
        transition={{
            repeat:Infinity,
            repeatType:"mirror",
            duration:1,
            ease:"easeInOut"
        }}
    >
      {children}
    </motion.div>
  )
}

export default LavitationBox
