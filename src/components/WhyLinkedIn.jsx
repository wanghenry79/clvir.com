"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
    {
        id: 1,
        title: "1",
        description: "67M+ companies across 434 industries are active on LinkedIn. It's the single most powerful place to build reputation and trust.",
        stats: [
            { id: "s1", value: "4 in 5", label: "LinkedIn Members Drive Business Decisions", large: true },
            { id: "s2", value: "1.6M", label: "Feed Update View Per Minute" },
            { id: "s3", value: "880k", label: "European SMEs" },
        ],
        image: "/whylinkein/01.png",
        imageColor: "bg-gradient-to-br from-purple-700 to-indigo-900",
    },
    {
        id: 2,
        title: "2",
        description: "Reputation on LinkedIn opens doors, turns cold efforts into warm recognitions, and positions you as a trusted voice in the buying process.",
        stats: [
            { id: "s4", value: "54%", label: "CxOs Spend 1h/Week On Thought Leadership Content" },
            { id: "s5", value: "86%", label: "Execs Are More Receptive To Leadership Who Publish Content" },
        ],
        image: "/whylinkein/02.png",
        imageColor: "bg-gradient-to-br from-indigo-700 to-purple-800",
    },
    {
        id: 3,
        title: "3",
        description: "Nurturing a consistent POV gives you influence over your buyer's self-education and decision making process. One strong post can impact multiple stakeholders.",
        stats: [
            { id: "s6", value: "61%", label: "B2B Buyers Prefer a Rep-free Experience" },
            { id: "s7", value: "72%", label: "Buyers Share Useful Content With Teammates" },
        ],
        image: "/whylinkein/03.png",
        imageColor: "bg-gradient-to-br from-purple-800 to-pink-800",
    },
];

export default function WhyLinkedIn() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="why-linkedin"
            className="min-h-[945px] py-12 text-white overflow-hidden flex items-center"
            style={{ background: 'linear-gradient(0deg, #522D58 0%, #775275 80%, #8D6B8C 100%)' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-semibold lg:mb-16 mb-8 text-center lg:text-left">Why LinkedIn?</h2>

                <div className="flex flex-col-reverse gap-8 ">
                    <div className="relative w-full aspect-square rounded-4xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5 bg-black/20 backdrop-blur-sm">
                        <div
                            className="w-full h-full flex items-center justify-center"
                        >
                            {tabs[activeTab].image ? (
                                <Image
                                    src={tabs[activeTab].image}
                                    alt={`Why LinkedIn ${activeTab + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="text-center p-6 border border-white/10 rounded-3xl bg-white/5 w-full h-full flex flex-col items-center justify-center border-dashed">
                                    <p className="text-white/40 font-mono text-lg mb-2">Visualization {activeTab + 1}</p>
                                    <p className="text-white/20 text-sm">(Place content here)</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-start">
                        <div className="grid grid-cols-3 mb-7 relative border-b border-white/20 shrink-0">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative pb-3 text-center text-[30px] transition-colors duration-300 ${activeTab === index ? "text-[#F8F3FD]" : "text-[#F8F3FD]/40 hover:text-[#F8F3FD]/60"
                                        }`}
                                >
                                    {tab.title}
                                    {activeTab === index && (
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1 bg-[#F8F3FD] rounded-t-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 relative flex flex-col min-h-0">
                            <div
                                className="h-full flex flex-col"
                            >
                                <p
                                    className="text-[20px] text-[#F8F3FD] leading-snug mb-7 shrink-0"
                                >
                                    {tabs[activeTab].description}
                                </p>

                                <div className={`flex flex-col gap-5`}>
                                    {tabs[activeTab].stats.map((stat) => (
                                        <div
                                            key={stat.id}
                                            className={`bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-center text-center gap-2 h-full`}
                                        >
                                            <div
                                                className="text-[36px] md:text-[48px] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#F8F3FD] to-[#CDBCCD]"
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                className="lg:text-[18px] text-[14px] text-[#EAE4EA] font-medium leading-tight"
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
