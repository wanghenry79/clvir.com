import Hero from "../components/Hero";
import Problem from "../components/Problem";
import WhyLinkedIn from "../components/WhyLinkedIn";
import OurProcess from "../components/OurProcess";
import Link from "next/link";
import ClientResults from "../components/ClientResults";
import MeetTheFounder from "../components/MeetTheFounder";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Problem />
            <WhyLinkedIn />
            <OurProcess />
            <ClientResults />
            <MeetTheFounder />
            <Faqs />
            <Footer />
            <FloatingCTA />
        </div>
    );
}
