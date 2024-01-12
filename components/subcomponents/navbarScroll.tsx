"use client"
import React, { useState, useEffect } from 'react';


interface NavScrollProps{
    children: React.ReactNode
}

const NavScroll = ({ children }: NavScrollProps) => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled beyond a certain point
            if (window.scrollY > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ?  'md:fixed transition-opacity w-full shadow-lg' : ''}`}>
            {children}
        </nav>
    );
};

export default NavScroll;






