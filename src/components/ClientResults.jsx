"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Chris Cooper",
        handle: "@Rougemont Security",
        bgImage: "/people/Chris(FullColor).png",
        profileImage: "/profile/chris.png",
        quote: "I've worked with Henry for just over a year. In that time, we've reached 1M+ people, added thousands of industry/ideal-fit followers, and got recognized from orgs like Microsoft, Flo Health, and Gartner. He quickly learnt my writing style & educated himself on my subject area, and I've almost taught him how to spell in proper British English! Henry has been a valuable partner in my business, and I've been pleasantly (and repeatedly) surprised by his skills.",
    },
    {
        id: 2,
        name: "Spencer Duke",
        handle: "@Windgrove",
        bgImage: "/people/Spencer(FullColor).png",
        profileImage: "/profile/spencer.png",
        quote: "Henry & Clvir completely changed how I show up online. They rebuilt my profile, tightened my positioning, and set up a content architecture for me to build upon. More importantly, Henry helped me articulate who I am, what I do, and why it matters. Opportunities started coming to me instead of the other way around. If you want to sharpen your presence and grow with true founder-led marketing, Henry is the guy to show you how.",
    },
    {
        id: 3,
        name: "Deejai Riangkrul",
        handle: "@Volantt",
        bgImage: "/people/deejai(FullColor).png",
        profileImage: "/profile/deejai.png",
        quote: "Henry has an incredible gift for turning your story into something meaningful. When I needed help refining my LinkedIn presence, he gave me frameworks and insights that made my posts more human, more personal, and far more resonant. His guidance helped me communicate my journey with clarity and impact. Highly recommend him for anyone serious about personal branding.",
    },
    {
        id: 4,
        name: "Antoine Froidevaux",
        handle: "@Velm",
        bgImage: "/people/Antonie(FullColor).png",
        profileImage: "/profile/antonie.png",
        quote: "He helped me turn life experiences I never even considered \"content-worthy\" into engaging posts. I also learned a lot from him about how to build a personal brand that makes people trust you as an authority in your field.",
    },
];

function TestimonialCard({ person, isHovered, onHover, onLeave, className = "" }) {
    return (
        <motion.div

            className={`relative shrink-0 w-[300px] lg:w-[450px] h-[550px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer bg-white  snap-center ${className}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}

        >
            {/* Image */}
            <div className="absolute inset-0">
                <Image
                    src={person.bgImage}
                    alt={person.name}
                    fill
                    className={`object-cover object-top transition-all duration-700 ${isHovered ? "grayscale-0 scale-105 -translate-x-4 -translate-y-2" : "grayscale scale-100"}`}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered
                    ? ""
                    : "bg-transparent"
                    }`} />
            </div>

            {/* Pre-hover Label (Name + Icon) - Hidden on hover */}
            <div
                className={`absolute bottom-6 left-6 z-10 transition-opacity duration-300 hidden lg:flex items-center gap-3 pointer-events-none
                    ${isHovered ? "opacity-0" : "opacity-100"}
                `}
            >
                <Image
                    src="/icon/verified.svg"
                    alt="Verified"
                    width={20}
                    height={20}
                    className="w-8 h-8 brightness-0 invert"
                />
                <h3
                    className="text-[32px] text-[#F8F3FD] leading-none font-medium"
                >
                    {person.name}
                </h3>
            </div>

            {/* Info Card - Always visible on mobile, show on hover for desktop */}
            <div className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-300 transform
                ${isHovered ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-4 lg:opacity-0"}
                translate-y-0 opacity-100
                `}>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-black">
                            <Image
                                src={person.profileImage}
                                alt={person.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <h4 className="text-gray-900 font-bold text-base leading-none">{person.name}</h4>
                                <Image
                                    src="/icon/verified.svg"
                                    alt="Verified"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                            </div>
                            <p className="text-gray-500 text-xs">{person.handle}</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-800 text-sm leading-relaxed line-clamp-5 lg:line-clamp-none">
                        {person.quote}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function Testimonials() {
    const [hoveredId, setHoveredId] = useState(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // Motion value for x-axis translation
    const x = useMotionValue(0);

    const scroll = (direction) => {
        if (!containerRef.current || !contentRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const maxScroll = Math.max(0, contentWidth - containerWidth);
        const moveAmount = window.innerWidth >= 1024 ? 750 : 344;

        const currentX = x.get();
        let newX = direction === "left" ? currentX + moveAmount : currentX - moveAmount;

        // Clamp newX
        // standard behavior: 0 is start, -maxScroll is end
        newX = Math.max(Math.min(newX, 0), -maxScroll);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
    };

    return (
        <section
            id="results"
            className="py-20 text-white overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #775275 0%, #8D6B8C 50%, #775275 100%)' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                    <div>
                        <h2
                            className="text-[32px] lg:text-[50px] font-medium text-[#CDBCCD] leading-tight"
                        >
                            15+ Personal Brands Transformed.
                        </h2>
                        <h3
                            className="text-[32px] lg:text-[50px] font-semibold text-[#F8F3FD] leading-tight"
                        >
                            Hear their stories.
                        </h3>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden lg:flex items-center gap-3 self-end">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Carousel Frame - Full width window */}
            <div
                ref={containerRef}
                className="w-full h-[550px] lg:h-[600px] cursor-grab active:cursor-grabbing overflow-hidden"
            >
                <motion.div
                    ref={contentRef}
                    drag="x"
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                    dragTransition={{ power: 0.2, timeConstant: 200 }}
                    style={{ x }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setTimeout(() => setIsDragging(false), 10)}
                    className="flex gap-6 w-max px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
                >
                    {testimonials.map((person, index) => (
                        <TestimonialCard
                            key={person.id}
                            person={person}
                            isHovered={hoveredId === person.id}
                            onHover={() => !isDragging && setHoveredId(person.id)}
                            onLeave={() => setHoveredId(null)}
                            className=""
                        />
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Mobile Navigation */}
                <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}

function StatCard({ number, label, suffix = "" }) {
    return (
        <div className="flex flex-col items-center text-center">
            <h3
                className="text-[56px] lg:text-[72px] font-medium tracking-tighter text-transparent bg-clip-text"
                style={{
                    backgroundImage: "radial-gradient(121.22% 921.9% at 50% 50%, #AD92AD 13.02%, #1F1621 100%)"
                }}
            >
                {number}
                {suffix && <span className="text-[56px] lg:text-[72px] font-medium ml-1">{suffix}</span>}
            </h3>
            <p
                className="text-[#181818] font-medium lg:text-[24px] text-[18px]"
            >
                {label}
            </p>
        </div>
    );
}

export default function ClientResults() {
    return (
        <>
            <Testimonials />

            {/* Stats Section */}
            <section className="py-24 bg-[#FAF5FF]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        className="text-[50px] font-semibold text-center text-[#181818] mb-8 lg:mb-10 tracking-tight"
                    >
                        Client Results
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                        <StatCard
                            number="2.7"
                            suffix="M"
                            label="People Influenced"
                        />
                        <StatCard
                            number="8"
                            suffix="x"
                            label="ICP Recognition (vs. DIY)"
                        />
                        <StatCard
                            number="23"
                            label="Industries Reached"
                        />
                    </div>
                </div>
            </section>

            {/* What It Takes Section */}
            <section className="py-24 bg-[#181818] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        className="text-[50px] font-semibold text-[#F8F3FD] mb-15"
                    >
                        What It Takes
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
                        {/* Group 1: 14 days to launch */}
                        <div className="flex-1">
                            {/* Header Line */}
                            <div className="flex items-center gap-4 mb-6">
                                <span
                                    className="text-[24px] font-medium text-[#F8F3FD] shrink-0"
                                >
                                    14 days to launch
                                </span>
                                <div className="h-[4px] bg-white flex-grow relative rounded-full">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>

                            {/* Visualization */}
                            <div className="flex gap-4">
                                {/* Onboarding */}
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="h-12 bg-[#AD92AD] rounded-full w-full opacity-90" />
                                    <span
                                        className="text-center text-[20px] text-[#F8F3FD]"
                                    >
                                        Onboarding
                                    </span>
                                </div>
                                {/* Setup */}
                                <div className="flex-[1.5] flex flex-col gap-3">
                                    <div className="h-12 bg-[#AD92AD] rounded-full w-full opacity-90" />
                                    <span
                                        className="text-center text-[20px] text-[#F8F3FD]"
                                    >
                                        Setup
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Group 2: 90 minutes per week */}
                        <div className="flex-1">
                            {/* Header Line */}
                            <div className="flex items-center gap-4 mb-6">
                                <span
                                    className="text-[24px] font-medium text-[#F8F3FD] shrink-0"
                                >
                                    90 minutes per week
                                </span>
                                <div className="h-[4px] bg-white flex-grow relative rounded-full">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>

                            {/* Visualization */}
                            <div className="flex flex-col gap-3">
                                <div className="h-12 bg-[#8D6B8C] rounded-full w-full relative flex items-center justify-between px-4 lg:px-4 opacity-80">
                                    {/* Dots inside */}
                                    <div className="w-8 h-8 bg-[#AD92AD] rounded-full" />
                                    <div className="w-8 h-8 bg-[#AD92AD] rounded-full" />
                                    <div className="w-8 h-8 bg-[#AD92AD] rounded-full" />
                                    <div className="w-8 h-8 bg-[#AD92AD] rounded-full" />
                                </div>
                                <span
                                    className="text-center text-[20px] text-[#F8F3FD]"
                                >
                                    Weekly Maintenance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
