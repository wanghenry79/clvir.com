"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#111111] pt-12 pb-12">
            <div className="max-w-6xl mx-auto px-6">

                <div className="relative rounded-[3rem] overflow-hidden px-2 py-12 text-center mb-12">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "linear-gradient(180deg, #A78BA6 0%, #683967 100%)"
                        }}
                    />
                    <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none overflow-hidden">
                        <span className="text-[25rem] font-serif italic text-white leading-none whitespace-nowrap blur-sm transform translate-y-35">
                            Clvir
                        </span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-5xl lg:text-6xl font-bold text-[#F8F3FD] mb-4">
                            Ready to scale your<br />reputation online?
                        </h2>
                        <p className="text-[#CDBCCD] text-2xl mb-8 max-w-xl mx-auto">
                            Turn LinkedIn into your #1 B2B awareness <br className="lg:block hidden" />and <br className="lg:hidden block" />trust-building channel.
                        </p>

                        <button className="bg-white text-[#683967] lg:px-6 lg:py-5 px-5 py-4 text-lg rounded-xl font-bold flex items-center gap-2 hover:bg-white/90 transition-colors shadow-lg">
                            <Image
                                src="/icon/phone.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                                className="w-6 h-6 rotate-90"
                            />
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-col items-start gap-12">

                    <div className="lg:max-w-sm">
                        <div className="text-5xl font-serif italic text-white mb-6 tracking-wide">
                            Clvir
                        </div>
                        <p className="text-white text-lg leading-relaxed mb-35">
                            Turning B2B leaders into trusted industry authorities who drive awareness and influence for their companies at scale.
                        </p>
                        <p className="text-gray-500 text-sm mt-auto">
                            Copyright 2025 Clvir. All Rights Reserved.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'The Problem', 'Why LinkedIn?', 'The Solution', 'Client Results', 'What it Takes', 'Meet the Founder'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-xl mb-4">Find me at</h3>
                        <Link href="#" className="inline-block text-black p-1 rounded-sm hover:opacity-80 transition-opacity">
                            <Image
                                src="/icon/LinkedIn.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
