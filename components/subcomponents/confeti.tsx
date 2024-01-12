"use client"
import React, { useState } from 'react'
import Confetti from 'react-dom-confetti';

interface ConfetiProps{
    children:React.ReactNode
}

const Confeti = ({children}:ConfetiProps) => {

  const [isConfettiActive, setIsConfettiActive] = useState(false);

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 100,
        elementCount: 300,
        decay: 0.9,
    };

    const handleClick = () => {
        setIsConfettiActive(true);

        // Reset the confetti after a delay (in this example, 3 seconds)
        setTimeout(() => {
            setIsConfettiActive(false);
        }, 3000);
    };
  return (
    <div onClick={handleClick}>
          {children}
          <Confetti active={isConfettiActive} config={config} />
    </div>
  )
}

export default Confeti
