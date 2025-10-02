import React from "react";
import ActionButton from "./ActionBtn";

const HowWeWork: React.FC = () => {

    const steps = [
        "ОСТАВЛЯЕШЬ ЗАЯВКУ",
        "ПОЛУЧАЕШЬ АУДИТ ОТДЕЛА ПРОДАЖ",
        "ЗАПУСКАЕМ СИСТЕМНЫЕ ИЗМЕНЕНИЯ",

    ]

    return (
        <section className="py-12 px-6 bg3 w-full">

            <div className="flex gap-[10px] items-end justify-between px-[5%]">
                <div className="flex gap-[5px]" >
                    <img src="/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-4xl font-bold uppercase txp">как мы работаем?</h2>
                </div>
                <h2 className="text-4xl uppercase bb2">как начать работать со мной?</h2>
            </div>



            <div className="px-[5%] mt-[40px] flex flex-col gap-[15px]">
                {steps.map((item, index) =>

                    <div className="flex items-center gap-[10px]">
                        <div className={`relative rounded-full`}>
                            <div className=" inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">
                                <div className="h-[45px] w-[45px] rounded-full bgp flex items-center justify-center text-[37px] font-bold text-white">
                                    {index+1}
                                </div>

                            </div>
                        </div>


                        <div>
                            <h3 className="text-3xl txs font-bold uppercase ">
                                {item}
                            </h3>
                        </div>
                    </div>

                )}
            </div>




            <div className="ml-[5%] max-w-[300px] mt-[30px]">
                <ActionButton
                    text="ЗАПИСАТЬСЯ НА АУДИТ"
                    icon="/find.svg"
                />
            </div>


        </section>
    );
};

export default HowWeWork;
