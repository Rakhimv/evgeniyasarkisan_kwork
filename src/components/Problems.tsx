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

            <div className="flex flex-col xs430:flex-row gap-[10px] items-center xs658:ml-[5%]">
                <div className="flex gap-[5px]" >
                    <img src="/media/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-2xl xs658:text-4xl font-bold  uppercase txs">Проблемы и боли </h2>
                </div>
                <h2 className="text-5xl xs658:text-6xl txs font-bold  uppercase">знакомо?</h2>

            </div>

            <div className="grid grid-cols-1 xs658:grid-cols-2 xs850:grid-cols-4 gap-[20px] mt-[30px]">
                {problems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[10px]">
                        <img src={`/media/p${index + 1}.png`} alt="" className="w-full h-[180px] xs550:h-[200px] object-cover" />
                        <div className="flex gap-[10px]">
                            <div className="min-w-[10px] min-h-[10px] rounded-full max-h-[10px] mt-[10px] bgp"></div>
                            <span className="txp text-2xl font-bold uppercase">{item}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-[20px] xs658:justify-start">
                <div className="ml-[5%] max-w-[300px] mt-[20px]">
                    <ActionButton
                        openForm
                        text="хочу решить эти проблемы"
                        icon="/media/idea.svg"

                    />
                </div>
            </div>

        </section>
    );
};

export default Problems;
