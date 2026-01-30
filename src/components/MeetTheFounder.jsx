"use client";

import Image from "next/image";

export default function MeetTheFounder() {
    return (
        <section id="founder" className="py-24 text-white" style={{ background: "linear-gradient(0deg, #683967 0%, #775275 100%)" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                    {/* Image Column */}
                    <div className="w-full lg:w-5/12 shrink-0">
                        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white/10">
                            {/* Placeholder for Henry's image */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-medium bg-[#5b4056]">
                                Founder Image (3:4)
                            </div>
                            {/* If you have the image, uncomment and use this:
                            <Image
                                src="/path/to/henry.jpg" 
                                alt="Henry, Founder of Clvir"
                                fill
                                className="object-cover"
                            />
                             */}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-7/12 pt-4">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#F8F3FD]">
                            Meet the Founder
                        </h2>

                        <div className="space-y-6 text-base lg:text-[16px] leading-relaxed text-[#EAE4EA]">
                            <p className="font-medium">
                                I&apos;m Henry, the Founder of Clvir.
                            </p>

                            <p>
                                I&apos;ve spent the last 3 years building founder-led brands that are recognized by some of the biggest names in business, including Microsoft, Morgan Stanley, and Gartner.
                            </p>

                            <p>
                                But my journey started long before that.
                            </p>

                            <p>
                                At 13, I ran an Instagram page for my book review blog. At 14, I made $2,000+ flipping sneakers on Facebook. At 15, I was closing $10,000 deals for a $20M/yr e-learning company. At 16, I became one of their top closers with ~$550k in sales. At 18, I began building founder-led brands at Switzerland&apos;s largest personal branding agency. At 19, I walked away to go back to what I always knew I&apos;d do: build something of my own.
                            </p>

                            <p>
                                Now, I&apos;m 21 and run Clvir (clair): a founder-led branding agency that helps B2B leaders get in front of and build trust with their ideal clients. We help them go from another vendor to the trusted voice in their niche so that they become top of mind when their target audience looks for the solutions they provide.
                            </p>

                            <p className="border-t border-white/20 pt-6 mt-8 text-sm lg:text-base text-white/70 italic">
                                Outside of work: You&apos;ll usually find me studying spirituality, chasing apexes on a winding road, or sharing cigars and late-night ideas with close friends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
