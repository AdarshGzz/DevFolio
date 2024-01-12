"use client"
import React from 'react';

interface ScrollProps {
    children: React.ReactNode;
    scrollToId:string;
}

const Scroll = ({ children, scrollToId }: ScrollProps) => {
    const scrollToSection = () => {
        // Replace 'targetSection' with the ID of the section you want to scroll to
        const targetSection = document.getElementById(scrollToId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth', // Optional: Add smooth scrolling effect
            });
        }
    };

    return (
        <div onClick={scrollToSection} className=' cursor-pointer'>
            {children}
        </div>
    );
};

export default Scroll;