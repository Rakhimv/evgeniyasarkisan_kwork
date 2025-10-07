import React from "react";

const WhyMe: React.FC = () => {

    const advantages = [
        "НЕ ТЕОРИЯ, А РАБОЧИЕ ИНСТРУМЕНТЫ И ПОШАГОВЫЕ СХЕМЫ",
        "РАБОТАЮ «РУКА ОБ РУКУ»: ОТ АУДИТА ДО ЗАПУСКА И СОПРОВОЖДЕНИЯ",
        "ФОКУС НА РЕЗУЛЬТАТЕ В ЦИФРАХ, А НЕ В КРАСИВЫХ СЛОВАХ"
    ];


    return (
        <section className="py-12 px-6 bg-[#EDF6FA] w-full">

            <div className="flex flex-col xs1000:flex-row gap-[10px] items-center  xs1000:items-end justify-between px-[5%]">
                <div className="ml-[-40%] xs750:ml-[0%] flex gap-[5px]" >
                    <img src="/media/wt.svg" className="w-[40px]" alt="" />
                    <h2 className=" text-[30px] xs750:text-[40px] xs1000:text-4xl font-bold uppercase txp">Чем я отличаюсь? </h2>
                </div>
                <h2 className="ml-[-30px] xs750:ml-[0%] text-2xl xs750:text-3xl text-center xs1000:text-4xl font-bold uppercase txs">Почему мне доверяют <span className="txp text-3xl xs750:text-5xl xs1000:text-6xl">300+</span> компаний?</h2>
            </div>

            <div className="grid grid-cols-1 xs658:grid-cols-3 gap-[20px] mt-[30px]">
                {advantages.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[10px]">
                        <img src={`/media/a${index + 1}.png`} alt="" className="w-full h-[180px] xs1000:h-[250px] object-cover" />
                        <div className="flex gap-[10px]">
                            <div className="min-w-[20px] min-h-[20px] rounded-full max-h-[10px] mt-[10px] bgp"></div>
                            <span className="txp text-2xl xs658:text-xl xs1000:text-2xl font-bold uppercase">{item}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default WhyMe;
