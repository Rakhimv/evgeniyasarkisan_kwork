import React from "react";
import ActionButton from "./ActionBtn";

const Problems: React.FC = () => {

    const problems = [
        "ЛИДЫ ЕСТЬ, А СДЕЛКИ НЕ ЗАКРЫВАЮТСЯ",
        "МЕНЕДЖЕРЫ «СЛИВАЮТ» КЛИЕНТОВ И ТЕКУЧКА ЗАШКАЛИВАЕТ",
        "ПРИХОДИТСЯ САМОМУ ВСЁ КОНТРОЛИРОВАТЬ",
        "СИСТЕМА ПРОДАЖ ДЕРЖИТСЯ ТОЛЬКО «НА РУЧНИКЕ»",
    ];





    return (
        <section className="py-12 px-6 bg-[#EDF6FA] w-full">

            <div className="flex flex-col xs550:flex-row gap-[10px] items-center ml-[5%]">
                <div className="flex gap-[5px]" >
                    <img src="/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-4xl font-bold  uppercase txs">Проблемы и боли </h2>
                </div>
                <h2 className="text-6xl txs font-bold  uppercase">знакомо?</h2>

            </div>

            <div className="grid grid-cols-2 xs850:grid-cols-4 gap-[20px] mt-[30px]">
                {problems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[10px]">
                        <img src={`p${index + 1}.png`} alt="" className="w-full h-[150px] xs550:h-[200px] object-cover" />
                        <div className="flex gap-[10px]">
                            <div className="min-w-[10px] min-h-[10px] rounded-full max-h-[10px] mt-[10px] bgp"></div>
                            <span className="txp text-[15px] xs550:text-xl font-bold uppercase">{item}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ml-[5%] max-w-[300px] mt-[20px]">
                <ActionButton
                    text="хочу решить эти проблемы"
                    icon="/idea.svg"
                />
            </div>

        </section>
    );
};

export default Problems;
