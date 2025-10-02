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
const App: React.FC = () => {
    return (
        <div className="font-sans flex flex-col items-center max-w-[1560px] m-auto gap-[50px] overflow-hidden">
            <Hero />
            <Problems />
            <Results />
            {/* 
         
            <TelegramChannel />
            <WhyMe />
            <Products />
            <Cases />
            <AboutMe />
            <HowWeWork />
            <PodFooter />
            <Footer /> */}
        </div>
    );
};

export default App;
