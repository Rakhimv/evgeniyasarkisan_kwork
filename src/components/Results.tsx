import React from "react";

const Results: React.FC = () => {
    return (
        <section className="py-12 px-6 bg-[#EDF6FA] w-full">
            <div className="flex flex-col-reverse xs658:flex-row gap-[50px]">
                <img src="/stat.png" className="min-w-[45%] object-cover" />


                <div className="flex flex-col w-full">
                    <div className="flex justify-center xs658:justify-start gap-[5px]" >
                        <img src="/wt.svg" className="w-[40px]" alt="" />
                        <h2 className="text-[7vw] xs658:text-2xl xs850:text-3xl xs1000:text-4xl xs1350:text-5xl font-bold  uppercase txs"> Что получаешь на выходе?</h2>
                    </div>

                    <div className="w-full flex flex-col items-center xs658:items-start">
                        <p className="txp text-[5vw] xs658:text-2xl xs850:text-3xl xs1000:text-4xl xs1350:text-[45px] font-bold mt-[40px] text-center xs658:text-start ">Что изменится после работы со мной?</p>

                        <ul className="uppercase mt-[10px]  text-[4vw] xs658:text-lg xs850:text-xl xs1000:text-2xl xs1350:text-3xl txs list-disc ml-[15px] bb2 font-thin! w-max">
                            <li>Понятная структура отдела продаж</li>
                            <li>Рост выручки за счет выстроенной системы</li>
                            <li>Мотивированная команда и управляемые процессы</li>
                            <li>Прозрачная аналитика и прогнозируемый результат</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;