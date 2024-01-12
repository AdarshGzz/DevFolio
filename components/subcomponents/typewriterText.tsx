"use client"

import Typed from "typed.js";
import { useEffect, useRef } from "react";


interface TypewriterProps{
    Words: string[];
   className?:string;
}

export default function Typewriter({ Words,className }: TypewriterProps) {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            // strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
            strings: Words, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 150,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, [Words]);

    return (
        <div className={`${className}`}>
            <span ref={el}></span>
        </div>
    );
}