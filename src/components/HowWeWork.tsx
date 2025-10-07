import React from "react";
import ActionButton from "./ActionBtn";

const HowWeWork: React.FC = () => {

    const steps = [
        "ОСТАВЛЯЕШЬ ЗАЯВКУ",
        "ПОЛУЧАЕШЬ АУДИТ ОТДЕЛА ПРОДАЖ",
        "ЗАПУСКАЕМ СИСТЕМНЫЕ ИЗМЕНЕНИЯ",

    ]

    return (
        <section className="pt-12 pb-6 xs750:py-12  px-6 bg3 w-full">

            <div className="flex flex-col xs1000:flex-row gap-[10px] items-center xs750:items-start xs1000:items-end justify-between px-[5%]">
                <div className="ml-[-60px] xs750:ml-[0%] flex gap-[5px]" >
                    <img src="/media/wt.svg" className="w-[40px]" alt="" />
                    <h2 className="text-4xl font-bold uppercase txp">как мы работаем?</h2>
                </div>
                <h2 className="text-center text-3xl xs750:text-left xs750:text-4xl uppercase bb2">как начать работать со мной?</h2>
            </div>



            <div className="xs750:px-[5%] mt-[40px] flex flex-col gap-[15px]">
                {steps.map((item, index) =>

                    <div className="flex items-center gap-[10px]">
                        <div className={`relative rounded-full`}>
                            <div className=" inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">
                                <div className="w-[30px] h-[30px] xs750:h-[45px] xs750:w-[45px] rounded-full bgp flex items-center justify-center text-[23px] xs750:text-[37px] font-bold text-white">
                                    {index + 1}
                                </div>

                            </div>
                        </div>


                        <div>
                            <h3 className="text-2xl xs750:text-3xl txs font-bold uppercase ">
                                {item}
                            </h3>
                        </div>
                    </div>

                )}
            </div>




            <div className="ml-[5%] max-w-[300px] mt-[30px]">
                <ActionButton
                    text="ЗАПИСАТЬСЯ НА АУДИТ"
                    icon="/media/find.svg"
                    openForm
                />
            </div>


            <div className="w-[calc(100%+48px)] xs750:hidden -translate-x-[24px]">
                <img src="/media/hww.png" className="w-full" />
            </div>


        </section>
    );
};

export default HowWeWork;
