import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.scss"
import Problems from "./components/Problems";
import Results from "./components/Results";
import TelegramChannel from "./components/TelegramChannel";
import WhyMe from "./components/WhyMe";
import Products from "./components/Products";
import Cases from "./components/Cases";
import AboutMe from "./components/AboutMe";
import HowWeWork from "./components/HowWeWork";
import PodFooter from "./components/PodFooter";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";
import PrivacyPolicy from "./components/PrivacyPolicy";

const HomePage: React.FC = () => {
    return (
        <div className="font-sans flex flex-col items-center max-w-[1560px] m-auto overflow-hidden">
            <ScrollAnimation direction="up" delay={0.2}>
                <Hero />
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.1}>
                <Problems />
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.2}>
                <Results />
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.1}>
                <TelegramChannel />
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
                <WhyMe />
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.1}>
                <Products />
            </ScrollAnimation>

        
                <Cases />


            <ScrollAnimation direction="left" delay={0.1}>
                <AboutMe />
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
                <HowWeWork />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
                <PodFooter />
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.2}>
                <Footer />
            </ScrollAnimation>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
    );
};

export default App;
