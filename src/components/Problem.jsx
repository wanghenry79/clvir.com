"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, TrendingUp, Search } from "lucide-react";

const DangerIcon = ({ className, fill, stroke, strokeWidth }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={fill} stroke={stroke} strokeWidth={strokeWidth} className={className}>
        <path d="M364.2-111.87q-18.16 0-34.69-6.84-16.53-6.83-29.21-19.51L138.22-300.3q-12.68-12.68-19.51-29.21-6.84-16.53-6.84-34.69v-231.6q0-18.16 6.84-34.69 6.83-16.53 19.51-29.21L300.3-821.78q12.68-12.68 29.21-19.51 16.53-6.84 34.69-6.84h231.6q18.16 0 34.69 6.84 16.53 6.83 29.21 19.51L821.78-659.7q12.68 12.68 19.51 29.21 6.84 16.53 6.84 34.69v231.6q0 18.16-6.84 34.69-6.83 16.53-19.51 29.21L659.7-138.22q-12.68 12.68-29.21 19.51-16.53 6.84-34.69 6.84H364.2ZM480-421.37l83.61 83.61q11.72 11.72 29.31 11.6 17.6-.12 29.32-11.84 11.72-11.72 11.72-29.32 0-17.59-11.72-29.31L538.63-480l83.61-83.61q11.72-11.72 11.72-29.31 0-17.6-11.72-29.32-11.72-11.72-29.32-11.72-17.59 0-29.31 11.72L480-538.63l-83.61-83.61q-11.72-11.72-29.19-11.72-17.48 0-29.2 11.72-11.72 11.72-11.72 29.32 0 17.59 11.72 29.31L421.37-480l-83.61 83.61q-11.72 11.72-11.6 29.19.12 17.48 11.84 29.2 11.72 11.72 29.32 11.72 17.59 0 29.31-11.72L480-421.37Z" />
    </svg>
);

const problems = [
    {
        id: 1,
        title: "B2B Leaders Are Well-Known Offline But Invisible Online",
        description: "You're well-recognized within your local community but a digital ghost online. Without reputation and credibility, buyers lack reasons to trust you over other vendors.",
        image: "/theproblem/01.png",
        color: "bg-purple-900",
        icon: User
    },
    {
        id: 2,
        title: "Scaling Reputation In-Person is Slow, Expensive, and Unscalable",
        description: "Industry events cost €10k+ and tens of founder hours. Digital platforms cost €0 to use and put you in front of more ICP at scale.",
        image: "/theproblem/02.png",
        color: "bg-blue-900",
        icon: TrendingUp
    },
    {
        id: 3,
        title: "Buyer Attention Is Shifting Digital, But Vendors Are Stuck In The Past",
        description: "Your decision makers Google, lurk, and definitely scroll. Founders without visibility online leave influence, opportunity, and growth on the table.",
        image: "/theproblem/03.png",
        color: "bg-emerald-900",
        icon: Search
    },
];

export default function Problem() {
    const [activeCard, setActiveCard] = useState(0);
    const sectionRef = useRef(null);

    return (
        <section id="problem" ref={sectionRef} className="relative w-full h-auto bg-[#111111] py-20">
            <div className="hidden lg:flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full relative">

                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-10">The Problem</h2>

                    <div className="flex flex-col gap-12">

                        <div className="relative h-[400px] w-full items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-full max-w-lg aspect-square bg-white/5 rounded-[2.5rem] overflow-hidden relative backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                                    <div className="relative w-full h-full p-4 overflow-y-auto">
                                        {problems.map((p, i) => (
                                            <div key={i} className="mb-4">
                                                <Image src={p.image} alt={p.title} width={100} height={100} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between relative z-10 w-full">
                            {problems.map((problem, index) => (
                                <div
                                    key={problem.id}
                                    className={`mb-8 border-b border-white/10 pb-8`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <DangerIcon
                                            className="flex-shrink-0 w-8 h-8"
                                            fill="#775275"
                                            stroke="#313031"
                                            strokeWidth="40"
                                        />
                                        <h3 className={`text-xl md:text-2xl font-semibold leading-tight text-white`}>
                                            {problem.title}
                                        </h3>
                                    </div>
                                    <p className={`text-base md:text-lg pl-12 leading-relaxed text-gray-600`}>
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:hidden px-6">
                <h2 className="text-4xl font-semibold text-white mb-12 text-center">The Problem</h2>

                <div className="flex flex-col gap-16">
                    {problems.map((problem, index) => (
                        <div key={problem.id} className="flex flex-col gap-6">
                            <div className="w-full aspect-square rounded-[20px] border border-[#AD92AD] bg-white/5 overflow-hidden relative backdrop-blur-sm">
                                {problem.image ? (
                                    <Image
                                        src={problem.image}
                                        alt={problem.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : null}
                            </div>

                            <div>
                                <div className="flex items-start gap-4 mb-3">
                                    <DangerIcon
                                        className="flex-shrink-0 w-8 h-8 mt-1"
                                        fill="#775275"
                                        stroke="none"
                                        strokeWidth="40"
                                    />
                                    <h3 className="text-xl font-semibold leading-tight text-[#E0C0E0]">
                                        {problem.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-base pl-10 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
