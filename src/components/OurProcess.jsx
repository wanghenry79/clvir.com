"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const steps = [
    {
        id: 0,
        title: "Founder Deep Dive",
        description:
            "To produce content on your behalf, we must connect with who you are. We start with a 1:1 interview to uncover your story, mission, and business case. This gives us the raw material to craft authentic content that feels true to you and resonates with your ICP.",
        image: "/ourprocess/0A.svg",
        height: 120,
        overlap: 0,
    },
    {
        id: 1,
        title: "Profile Audit & Revamp",
        description:
            "Your LinkedIn profile becomes your digital landing page. We audit your entire profile and overhaul everything that's weak so that decision makers instantly understand your value and see you as the authority that you are.",
        image: "/ourprocess/1A.svg",
        height: 140,
        overlap: -30,
    },
    {
        id: 2,
        title: "Content Archetype",
        description:
            "We build a comprehensive content strategy that tells us what to post, who to tailor it to, and how we'll position your expertise. It's the same proven framework that puts B2B founders in front of hundreds of their ideal clients, now tailored to your brand and goals.",
        image: "/ourprocess/2B.svg",
        height: 160,
        overlap: -60,
    },
    {
        id: 3,
        title: "Content Engine",
        description:
            "This is where the system runs. We host a focused Content Call every 2 weeks to extract your latest ideas and updates. Our team then crafts high-impact, authority content, refined from hundreds of successful posts. We only publish once you approve, keeping your voice consistent, real, and trusted at scale.",
        image: "/ourprocess/3D.svg",
        height: 200,
        overlap: -120,
    },
    {
        id: 4,
        title: "Identity-Verified ICP Ledger",
        description:
            "We look at every post and track recognition from your ICP (likes, comments, and more). We turn this into an identity-verified ledger with their names, titles, and companies to shows exactly who you're getting on front of. This allows you to turn awareness into opportunity across other marketing channels.",
        image: "/ourprocess/4E.svg",
        height: 320,
        overlap: -160,
    },
];

function TowerSegment({ step, index, activeIndex, cumulativeHeights }) {

    const topOffset = cumulativeHeights[index];

    const isVisible = index <= activeIndex;

    return (
        <div
            style={{
                top: topOffset,
                height: step.height,
                marginTop: step.overlap,
                opacity: isVisible ? 1 : 0
            }}
            className="absolute w-full flex justify-start pl-10"
        >
            <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={step.height}
                className="w-auto h-auto object-contain"
                style={{ maxHeight: `${step.height}px` }}
            />
        </div>
    );
}

function TextSegment({ step, index, textRef, activeIndex }) {
    const isActive = index === activeIndex;
    const isPast = index < activeIndex;

    return (
        <div
            className="h-[65vh] flex flex-col justify-start"
        >
            <div
                style={{ opacity: isActive ? 1 : 0.3 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-full border border-[#4A494B] ${i <= index
                                ? (index > 1 ? "bg-white" : "bg-[#AD92AD]")
                                : "bg-transparent"
                                }`}
                        />
                    ))}
                </div>

                <h3
                    ref={textRef}
                    className="text-[30px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#AD92AD] to-[#46264F] mb-4"
                >
                    {step.title}
                </h3>
                <p
                    className="text-[16px] md:text-[18px] text-[#DFDBE4] leading-relaxed max-w-xl"
                >
                    {step.description}
                </p>
            </div>
        </div>
    );
}

export default function OurProcess() {
    const sectionRef = useRef(null);
    const textRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;
            let activeIdx = 0;

            const debugInfo = [];

            for (let index = 0; index < textRefs.current.length; index++) {
                const ref = textRefs.current[index];
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const headingCenter = rect.top + rect.height / 2;

                    debugInfo.push(`[${index}] top:${rect.top.toFixed(0)} center:${headingCenter.toFixed(0)}`);

                    if (headingCenter <= viewportCenter) {
                        activeIdx = index;
                    }
                }
            }

            console.log(`VPCenter:${viewportCenter.toFixed(0)} | ${debugInfo.join(' | ')} | ACTIVE:${activeIdx}`);

            setActiveIndex(activeIdx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cumulativeHeights = steps.reduce((acc, step, index) => {
        if (index === 0) {
            acc.push(0);
        } else {
            acc.push(acc[index - 1] + 10);
        }
        return acc;
    }, []);

    const totalHeight = cumulativeHeights[cumulativeHeights.length - 1] + steps[steps.length - 1].height;

    return (
        <section
            id="solution"
            ref={sectionRef}
            className="relative bg-[#181818] text-white h-auto lg:min-h-[350vh]"
        >
            <div className="hidden lg:block container mx-auto px-4 pb-40">
                <div
                    className="text-center pt-20"
                >
                    <h2
                        className="text-[50px] font-semibold mb-6 text-[#F8F3FD]"
                    >
                        Our Process
                    </h2>
                    <p
                        className="text-[24px] text-[#949297] max-w-2xl mx-auto"
                    >
                        Here&apos;s how we turn you into a <br />
                        trusted partner on LinkedIn:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    <div className="hidden lg:block lg:w-1/2">
                        <div className="absolute top-0 h-screen flex items-center justify-center pt-70">
                            <div
                                className="relative w-full"
                                style={{ height: totalHeight }}
                            >
                                {steps.map((step, index) => (
                                    <TowerSegment
                                        key={step.id}
                                        step={step}
                                        index={index}
                                        activeIndex={activeIndex}
                                        cumulativeHeights={cumulativeHeights}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full mt-50">
                        {steps.map((step, index) => (
                            <TextSegment
                                key={step.id}
                                step={step}
                                index={index}
                                textRef={(el) => (textRefs.current[index] = el)}
                                activeIndex={activeIndex}
                            />
                        ))}
                    </div>

                </div>
            </div>

            <div className="lg:hidden px-6 py-20">
                <div
                    className="text-center mb-12"
                >
                    <h2
                        className="text-[50px] font-semibold mb-6 text-[#F8F3FD]"
                    >
                        Our Process
                    </h2>
                    <p
                        className="text-[24px] text-[#949297] max-w-2xl mx-auto"
                    >
                        Here&apos;s how we turn you into a trusted partner on LinkedIn:
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col gap-6">
                            <div className="w-full flex justify-center">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={300}
                                    height={step.height}
                                    className="w-auto h-auto max-w-[80%] object-contain"
                                />
                            </div>

                            <div>
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                    <h3
                                        className="text-[30px] font-medium leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#AD92AD] to-[#46264F]"
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p
                                    className="text-[16px] md:text-[18px] text-[#DFDBE4] text-base pl-12 leading-relaxed"
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
