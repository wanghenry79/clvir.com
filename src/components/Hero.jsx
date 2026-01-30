"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SponsorMarquee from "./SponsorMarquee";
import GetStartedModal from "./GetStartedModal";

const stories = [
    "/Hero/story-01.png",
    "/Hero/story-02.png",
];

const STORY_DURATION = 5000;
const DELAY_BEFORE_NEXT = 1500;

export default function Hero() {
    const [currentStory, setCurrentStory] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentStory((prev) => (prev + 1) % stories.length);
        }, STORY_DURATION + DELAY_BEFORE_NEXT);

        return () => clearTimeout(timer);
    }, [currentStory]);

    return (
        <section className="relative w-full h-210 lg:h-350 lg:min-h-[120vh] bg-[#111111] overflow-hidden flex flex-col items-center pt-12 md:pt-20">

            <div
                className="absolute top-0 left-0 w-full h-[20%] z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(180deg, #111111 0%, rgba(17,17,17,0) 100%)",
                }}
            />

            <div
                className="absolute inset-0 z-0 pointer-events-none
        bg-[linear-gradient(to_top,#eae4ea_0%,#775275_40%,#321A40_70%,transparent_100%)]
        lg:bg-[radial-gradient(100%_80%_at_50%_100%,#eae4ea_10%,#775275_40%,#321A40_70%,transparent_100%)]"
                style={{ filter: "blur(60px)" }}
            />

            <div className="relative z-0 text-center max-w-4xl px-6 mb-8 md:mb-16">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 md:mb-10 leading-snug py-2">
                    Turn Your Expertise
                    <br />
                    Into{" "}
                    <span
                        className="p-1 text-white backdrop-blur-sm border border-white/20 inline-block "
                        style={{
                            background:
                                "linear-gradient(90deg, #AD92AD 6.03%, #683967 95.5%)",
                        }}
                    >
                        Reputation At Scale
                    </span>
                </h1>

                <p className="text-gray-400 text-[14px] md:text-[30px] font-medium lg:max-w-4xl max-w-[18rem] mx-auto mb-8 md:mb-10 leading-tight">
                    Go from &apos;just another vendor&apos; to the trusted industry partner. <br className="md:block hidden" />
                    Craft authority content using your professional experiences that puts
                    you in front of ideal clients.
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-3 md:px-8 md:py-4 bg-transparent hover:bg-white/5 text-[#E0C0E0] border border-[#E0C0E0] lg:rounded-2xl rounded-[12px] transition-all backdrop-blur-md flex items-center gap-3 mx-auto group text-[14px] md:text-xl font-medium"
                >
                    <Image
                        src="/icon/phone-light.svg"
                        alt="Phone"
                        width={20}
                        height={20}
                        className="w-6 h-6 rotate-90"
                    />
                    <span>Get Started</span>
                </button>

                <GetStartedModal key={isModalOpen ? "open" : "closed"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>

            <div
                className="relative z-20 mx-auto"
                style={{
                    maskImage: "linear-gradient(to bottom, #000000 45%, transparent 60%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, #000000 45%, transparent 60%)",
                }}
            >
                <div className="relative w-[250px] md:w-[480px] mx-auto">

                    <div
                        className="absolute z-30 overflow-hidden"
                        style={{
                            inset: "8% 6.5% 40% 6.5%",
                        }}
                    >

                        <div
                            className="absolute z-40 flex gap-2 mt-2"
                            style={{
                                top: "10px",
                                left: "12px",
                                right: "12px",
                            }}
                        >
                            {stories.map((_, index) => (
                                <div
                                    key={index}
                                    className="relative h-[8px] flex-1 bg-white/30 rounded-full overflow-hidden"
                                >
                                    {index === currentStory && (
                                        <div
                                            className="absolute inset-y-0 left-0 bg-white"
                                            style={{ width: "100%" }}
                                        />
                                    )}

                                    {index < currentStory && (
                                        <div className="absolute inset-0 bg-white" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div
                            className="absolute inset-0"
                            style={{
                                top: "40px",
                            }}
                        >
                            <div
                                className="absolute inset-0"
                            >
                                {stories.map((story, idx) => (
                                    <Image
                                        key={idx}
                                        src={story}
                                        alt="story"
                                        fill
                                        className="object-cover"
                                        style={{ opacity: 0.5 }}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    <Image
                        src="/Hero/iPhone-16-Pro1.png"
                        alt="phone"
                        width={420}
                        height={840}
                        className="relative z-10 w-full h-auto"
                        priority
                        style={{
                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                        }}
                    />
                </div>
            </div>

            <div className="absolute bottom-0 w-full z-30 mb-4">
                <SponsorMarquee />
            </div>
        </section>
    );
}
