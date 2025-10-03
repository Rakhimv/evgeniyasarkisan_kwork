import React from "react";
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
const App: React.FC = () => {
    return (
        <div className="font-sans flex flex-col items-center max-w-[1560px] m-auto gap-[50px] overflow-hidden">
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

            <ScrollAnimation direction="up" delay={0.2}>
                <Cases />
            </ScrollAnimation>

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

export default App;
