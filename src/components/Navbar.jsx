"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, id, children, activeSection, scrollToSection }) => {
    const isActive = activeSection === id;

    return (
        <a
            href={href}
            onClick={(e) => scrollToSection(e, id)}
            className="group relative flex items-center cursor-pointer"
        >
            <span className={`absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#AD92AD] transition-all duration-300 ease-out
             ${isActive ? 'opacity-100 translate-x-0 bg-[#8D6B8C]' : 'opacity-100 -translate-x-4'}`}
            />

            <span className={`transition-colors duration-300 ${isActive ? 'text-[#8D6B8C]' : 'text-[#F8F3FD] group-hover:text-[#AD92AD]'}`}>
                {children}
            </span>
        </a>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleActiveSection = () => {
            const sections = ['problem', 'why-linkedin', 'solution', 'results', 'founder'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleActiveSection, { passive: true });
        handleActiveSection();

        return () => window.removeEventListener("scroll", handleActiveSection);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false);
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    };

    const getLinkClass = (sectionId) => {
        const baseClass = "transition-colors cursor-pointer";
        const activeClass = "text-[#AD92AD]";
        const inactiveClass = "hover:text-[#AD92AD] text-[#F8F3FD]";

        return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
    };


    return (
        <nav
            style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
            className="absolute top-0 z-50 bg-[#111111] text-white border-b border-white/5 w-full"
        >
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-40 lg:py-9 py-4">
                <div className="text-4xl md:text-5xl font-serif italic tracking-wide cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Image src="/LOGO(W).svg" alt="Logo" width={100} height={100} />
                </div>

                <div className="hidden lg:flex gap-8 font-medium text-xl xl:text-2xl">
                    <NavLink href="#problem" id="problem" activeSection={activeSection} scrollToSection={scrollToSection}>The Problem</NavLink>
                    <NavLink href="#why-linkedin" id="why-linkedin" activeSection={activeSection} scrollToSection={scrollToSection}>Why LinkedIn?</NavLink>
                    <NavLink href="#solution" id="solution" activeSection={activeSection} scrollToSection={scrollToSection}>Our Solution</NavLink>
                    <NavLink href="#results" id="results" activeSection={activeSection} scrollToSection={scrollToSection}>Client Results</NavLink>
                    <NavLink href="#founder" id="founder" activeSection={activeSection} scrollToSection={scrollToSection}>Meet the Founder</NavLink>
                </div>

                <button
                    className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-[#F8F3FD]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="lg:hidden overflow-hidden bg-[#111111] border-b border-white/10"
                >
                    <div className="flex flex-col items-center gap-6 py-8 text-xl font-medium text-[#F8F3FD]">
                        <a href="#problem" onClick={(e) => scrollToSection(e, 'problem')} className={getLinkClass('problem')}>The Problem</a>
                        <a href="#why-linkedin" onClick={(e) => scrollToSection(e, 'why-linkedin')} className={getLinkClass('why-linkedin')}>Why LinkedIn?</a>
                        <a href="#solution" onClick={(e) => scrollToSection(e, 'solution')} className={getLinkClass('solution')}>Our Solution</a>
                        <a href="#results" onClick={(e) => scrollToSection(e, 'results')} className={getLinkClass('results')}>Client Results</a>
                        <a href="#founder" onClick={(e) => scrollToSection(e, 'founder')} className={getLinkClass('founder')}>Meet the Founder</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
