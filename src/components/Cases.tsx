import React from "react";
import ActionButton from "./ActionBtn";

const Cases: React.FC = () => {
    const advantages = [
        "НЕ ТЕОРИЯ, А РАБОЧИЕ ИНСТРУМЕНТЫ И ПОШАГОВЫЕ СХЕМЫ",
        "РАБОТАЮ «РУКА ОБ РУКУ»: ОТ АУДИТА ДО ЗАПУСКА И СОПРОВОЖДЕНИЯ",
        "ФОКУС НА РЕЗУЛЬТАТЕ В ЦИФРАХ, А НЕ В КРАСИВЫХ СЛОВАХ"
    ];


    return (
        <section className="py-12 px-6 bg-[#EDF6FA] w-full">

            <div className="flex gap-[10px] items-end justify-between px-[5%]">
                <div className="flex gap-[5px]" >
                    <img src="/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-4xl font-bold uppercase txp">кейсы и результаты</h2>
                </div>
                <h2 className="text-4xl uppercase bb2">результаты клиентов</h2>
            </div>

            <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
                {advantages.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[10px]">
                        <img src={`/с${index + 1}.png`} alt="" className="w-full h-[250px] object-cover" />
                        <div className="flex gap-[10px]">
                            <div className="min-w-[20px] min-h-[20px] rounded-full max-h-[10px] mt-[10px] bgp"></div>
                            <span className="txp text-2xl font-bold uppercase">{item}</span>
                        </div>
                    </div>
                ))}
            </div>



            <div className="flex gap-[10px] items-end justify-between mt-[50px] px-[5%]">
                <div className="flex gap-[5px]" >
                    <img src="/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-4xl font-bold uppercase txp">отзывы клиентов</h2>
                </div>
                <h2 className="text-4xl uppercase bb2">результаты клиентов</h2>
            </div>

            <div className="grid grid-cols-4 gap-[20px] mt-[30px]">
                {Array.from({ length: 4 }).map((item, index) => (
                    <div key={index} className="flex flex-col gap-[10px]">
                        <img src={`https://static.vecteezy.com/system/resources/thumbnails/053/238/675/small_2x/white-blank-page-on-bright-green-background-creating-copy-space-for-advertisement-png.png`} alt="" className="w-full h-[250px] object-cover" />
                        <div className="flex gap-[10px]">
                            <span className="bb2 text-2xl font-bold uppercase">ЦИТАТА/ОТЗЫВ</span>
                        </div>
                    </div>
                ))}
            </div>




            <div className="ml-[5%] max-w-[300px] mt-[30px]">
                <ActionButton
                    text="хочу такие же результаты"
                    icon="/zur.svg"
                />
            </div>


        </section>
    );
};

export default Cases;
