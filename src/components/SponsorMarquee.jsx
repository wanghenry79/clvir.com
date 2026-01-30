"use client";

import Image from "next/image";

const sponsors = [
    { src: "/partner/01.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/02.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/03.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/04.svg", width: 160, height: 60, mobileWidth: 100, mobileHeight: 40 },
    { src: "/partner/05.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/06.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/07.svg", width: 60, height: 60, mobileWidth: 40, mobileHeight: 40 },
    { src: "/partner/08.svg", width: 60, height: 60, mobileWidth: 40, mobileHeight: 40 },
    { src: "/partner/09.svg", width: 60, height: 60, mobileWidth: 40, mobileHeight: 40 },
    { src: "/partner/10.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/11.svg", width: 130, height: 60, mobileWidth: 90, mobileHeight: 40 },
    { src: "/partner/12.svg", width: 130, height: 60, mobileWidth: 90, mobileHeight: 40 },
    { src: "/partner/13.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/14.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
    { src: "/partner/16.svg", width: 130, height: 60, mobileWidth: 90, mobileHeight: 40 },
    { src: "/partner/17.svg", width: 120, height: 48, mobileWidth: 80, mobileHeight: 32 },
];

export default function SponsorMarquee() {
    return (
        <div className="relative w-full overflow-hidden py-6 lg:pt-12 lg:px-20 px-4">
            <div className="text-center lg:text-[24px] text-[18px] text-white font-medium mb-10">
                Our clients are recognized <br className="lg:hidden block" /> by industry leaders at:
            </div>

            <div
                className="flex w-full items-center overflow-x-auto"
                style={{
                }}
            >
                <div
                    className="flex min-w-full shrink-0 lg:gap-[72px] gap-[25px] px-8 items-center justify-around"
                >
                    {sponsors.map((partner, index) => (
                        <div key={index} className="relative shrink-0 flex items-center justify-center">
                            <Image
                                src={partner.src}
                                alt={`Partner logo ${index}`}
                                width={partner.width}
                                height={partner.height}
                                className="object-contain transition-opacity grayscale hover:grayscale-0 w-[var(--mobile-w)] h-[var(--mobile-h)] lg:w-[var(--desktop-w)] lg:h-[var(--desktop-h)]"
                                style={{
                                    "--mobile-w": `${partner.mobileWidth || partner.width}px`,
                                    "--mobile-h": `${partner.mobileHeight || partner.height}px`,
                                    "--desktop-w": `${partner.width}px`,
                                    "--desktop-h": `${partner.height}px`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div
                    className="flex min-w-full shrink-0 lg:gap-[72px] gap-[25px] px-8 items-center justify-around"
                >
                    {sponsors.map((partner, index) => (
                        <div key={`dup-${index}`} className="relative shrink-0 flex items-center justify-center">
                            <Image
                                src={partner.src}
                                alt={`Partner logo ${index}`}
                                width={partner.width}
                                height={partner.height}
                                className="object-contain transition-opacity grayscale hover:grayscale-0 w-[var(--mobile-w)] h-[var(--mobile-h)] lg:w-[var(--desktop-w)] lg:h-[var(--desktop-h)]"
                                style={{
                                    "--mobile-w": `${partner.mobileWidth || partner.width}px`,
                                    "--mobile-h": `${partner.mobileHeight || partner.height}px`,
                                    "--desktop-w": `${partner.width}px`,
                                    "--desktop-h": `${partner.height}px`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
