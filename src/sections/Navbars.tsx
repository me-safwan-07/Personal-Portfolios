import { NavBar } from '@/components/ui/tubelight-navbar';
import { Contact, Home, Projector, User } from 'lucide-react';

function Navbar({scrollToSection}: {scrollToSection: (sectionId: string) => void}) {
    // add the related icon for each section

    const navItems = [
        { name: 'Home', url: '#hero-section', icon: Home },
        { name: 'About', url: '#about-section', icon: User },
        { name: 'Projects', url: '#projects-section', icon: Projector },
        { name: 'Contact', url: '#contact-section', icon: Contact   },
        // { name: 'Skills', url: 'skills-section', icon: Code   },
    ];
    
    return <NavBar items={navItems} scrollToSection={scrollToSection}/>
}

export default Navbar;
