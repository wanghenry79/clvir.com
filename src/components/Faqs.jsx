"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What's the pricing?",
        answer: "Our founder-led branding packages range from €6,000–12,000 per quarter depending on goals and scope. We will assess your goals on our intro call and recommend what level of partnership best helps you get there."
    },
    {
        question: "Will this scale with me?",
        answer: "Yes, our systems are built to grow with you. As your authority and audience expand, we adapt our strategies to leverage that growth for bigger opportunities."
    },
    {
        question: "I don't want to put my face online.",
        answer: "We understand. However, people buy from people. Founder-led branding is about building trust through authenticity. We guide you on how to show up in a way that feels comfortable and professional for you."
    },
    {
        question: "How much time does this require?",
        answer: "We aim to minimize your time investment. After the initial onboarding, we typically need about 90 minutes of your time per week for content review and strategy calls."
    },
    {
        question: "What will X views on LinkedIn do for me?",
        answer: "Views create awareness, but the right views create opportunity. We focus on getting you in front of your ICP (Ideal Customer Profile) to drive inbound leads, partnerships, and industry recognition."
    },
    {
        question: "How will I know the content is written in my tone of voice?",
        answer: "We spend time studying your previous communications and interviewing you to capture your unique voice. You always have final approval on all content before it goes live."
    },
    {
        question: "How do you differ from a lead gen or appointment booking agency?",
        answer: "We focus on building long-term brand equity and trust, which attracts high-quality inbound opportunities. Unlike lead gen agencies that often use cold outreach spam, we help you become the authority that prospects come to find."
    }
];

function FaqItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b border-[#2F1F33]">
            <button
                onClick={onClick}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <span className="text-lg lg:text-2xl font-medium text-white/90 transition-colors">
                    {question}
                </span>
                <span className="shrink-0 ml-6 text-[#CDBCCD] ">
                    {isOpen ? (
                        <Minus className="w-6 h-6" />
                    ) : (
                        <Plus className="w-6 h-6" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div
                    className="overflow-hidden"
                >
                    <p className="pb-8 text-base lg:text-lg text-white/70 leading-relaxed max-w-7xl">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <section className="py-32 bg-[#181818]">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-[#F8F3FD]">
                    FAQs
                </h1>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
