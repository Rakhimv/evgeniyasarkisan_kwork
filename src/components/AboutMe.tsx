import React, { useEffect, useState } from "react";

const AboutMe: React.FC = () => {
    const stats = [
        {
            text: "10+",
            sub: "ЛЕТ УПРАВЛЕНЧЕСКОЙ ПРАКТИКИ"
        },
        {
            text: "5000+",
            sub: "ОНЛАЙН-ВСТРЕЧ ТОЛЬКО ЗА ГОД"
        },
        {
            text: "300+",
            sub: "КЕЙСОВ В РАЗНЫХ НИШАХ"
        },
        {
            text: "ЭКСПЕРТ ПО СИСТЕМНЫМ ПРОДАЖАМ"
        }
    ];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth <= 750);
        checkWidth(); 
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);


    return (
        <section className="py-12 px-6 w-full">
            <div className="flex flex-col xs750:flex-row gap-[50px]">
                <img src={isMobile ? "/media/whoim2.png" : "/media/whoim.png"} className="w-full xs750:w-[30%] xs850:min-w-[30%]" />


                <div className="flex flex-col gap-[20px] w-full justify-around relative">
                    <img src="/media/logo.svg" className="absolute w-[60%] left-1/2 -translate-x-1/2 inset-0 opacity-20" />
                    {stats.map((item, index) =>
                        <div className="flex items-center gap-[10px]" key={index}>
                            <img src="/media/check.svg" className="min-w-[40px] xs550:min-w-[60px] xs750:w-[50px] xs1000:w-[70px]" />
                            <p className="text-3xl xs430:text-3xl xs550:text-4xl xs750:text-[30px] xs1000:text-[40px] xs1350:text-6xl txp">{item.text}</p>
                            <p className="text-[20px] xs430:text-2xl xs550:text-3xl xs750:text-[25px] xs1000:text-[35px] xs1350:text-5xl txp">{item.sub}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
