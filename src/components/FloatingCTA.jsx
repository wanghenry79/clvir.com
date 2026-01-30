"use client";

import { useState } from "react";
import Image from "next/image";
import GetStartedModal from "./GetStartedModal";

export default function FloatingCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-8 right-8 z-50 flex items-center gap-3 bg-[#AD92AD] text-[#F8F3FD] lg:px-6 lg:py-5 px-5 py-4
                 rounded-2xl shadow-2xl hover:bg-[#8D6B8C] transition-colors group cursor-pointer border-2 border-[#EAE4EA]"
            >
                <Image
                    src="/icon/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="w-6 h-6 rotate-90"
                />
                <span className="text-lg font-bold">Get Started</span>
            </button>

            <GetStartedModal key={isModalOpen ? "open" : "closed"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
