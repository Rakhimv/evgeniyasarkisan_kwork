import React from "react";

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


    return (
        <section className="py-12 px-6 w-full">
            <div className="flex gap-[50px]">
                <img src="/whoim.png" className="min-w-[30%]" />


                <div className="flex flex-col w-full justify-around">
                    {stats.map((item, index) =>
                        <div className="flex items-end gap-[10px]" key={index}>
                            <img src="/check.svg" className="w-[70px]"/>
                            <p className="text-6xl txp">{item.text}</p>
                            <p className="text-5xl txp">{item.sub}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
