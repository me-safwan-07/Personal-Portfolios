import { cn } from '@/lib/utils'
import Navbar from '@/sections/Navbars';
import React from 'react'

function Wrapper({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className={cn("w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8", className)}>
        <Navbar scrollToSection={scrollToSection}/>
        <div className="mt-10">
            {children}
        </div>
    </div>
  )
}

export default Wrapper
