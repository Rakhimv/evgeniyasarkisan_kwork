import React from "react";
import ActionButton from "./ActionBtn";

const Hero: React.FC = () => {


    return (
        <section className="w-full pr-[5%] xs1350:pr-[0%] text-center bgone relative overflow-hidden bg-[#EDF6FA]">



            <img src="./media/logo.svg" className="absolute mt-[2%] xs750:mt-[20px] w-[33%] xs750:w-[200px] left-1/2 -translate-x-1/2 xs750:translate-x-0 xs750:left-[calc(50%-75px)]  xs1350:left-0 xs1350:w-[14%] xs1350:ml-[2.5%] xs1350:mt-[2%] " />


            <div className="flex items-center gap-[5%]">



                <div className=" hidden xs1350:flex xs1350:max-w-[40%] mt-[200px] ml-[7%] xs1350:mt-[5%] xs1350:ml-[20%]  items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-2xl text-[#475763] font-bold text-left  xs1350:text-5xl">
                        ВЫСТРАИВАЮ ОТДЕЛЫ ПРОДАЖ <br />
                        БЕЗ ХАОСА, ТЕКУЧКИ <br /> И РУЧНОГО КОНТРОЛЯ
                    </h1>
                </div>



            </div>


            <div className="flex flex-col items-start ml-[7%] mt-[36%] xs750:mt-[260px] xs1350:mt-[8%]  font-bold text-left ">

                <div className="max-w-[700px] xs1350:hidden mt-[20px] flex items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-3xl text-[#475763] font-bold text-left  xs1350:text-5xl">
                        ВЫСТРАИВАЮ ОТДЕЛЫ ПРОДАЖ БЕЗ ХАОСА, ТЕКУЧКИ И РУЧНОГО КОНТРОЛЯ
                    </h1>
                </div>



                <h2 className="text-xl xs750:text-2xl xs1350:text-5xl mt-[2%] xs1350:mt-[-1%] font-bold txp">
                    Я — ЕВГЕНИЯ САРКИСЯН, <span className="txs text-xl xs750:text-2xl xs1350:text-4xl">РОП с <span className="txp text-[22px] xs750:text-3xl xs1350:text-5xl">10+</span> ЛЕТ ПРАКТИКИ.</span>
                </h2>



                <div className="max-w-[400px] xs750:mt-[20px] flex items-start gap-2 xs750:gap-4">
                    <div className="min-w-[2px] bg-[#2E5943] self-stretch "></div>
                    <p className="text-[14px] xs750:text-xl xs1350:text-[30px] text-[#475763] uppercase font-bold text-left bb2">
                        Только за прошлый год я провела более <span className="txp text-[14px]  xs750:text-2xl xs1350:text-3xl">5000+</span> онлайн-встреч и помогла более <span className="txp text-[14px]  xs750:text-2xl xs1350:text-3xl">300</span> бизнесам навести порядок в продажах.
                    </p>
                </div>




            </div>


            <div className="xs750:hidden mt-[50px] w-full flex justify-center relative">
                <img src="/media/evgeniya_mb.png" className="w-[70%] max-w-[300px]" />
                <div className="absolute w-full h-[40px] bg-gradient-to-b from-transparent to-[#EDF6FA] bottom-[0%] left-0"></div>
            </div>

            <div className="w-full flex justify-center xs750:justify-start">
                <div className="flex flex-col xs750:items-start ml-[6%] mt-[30px] font-bold text-left gap-[10px] w-[320px]">
                    <ActionButton
                        icon="/media/call.svg"
                        iconSize={40}
                        text="Записаться на консультацию"
                        padding="p-2"
                        openForm
                    />
                    <ActionButton
                        openTg2
                        icon="/media/block.svg" text="посмотреть отзывы" />
                    <ActionButton
                        openTg
                        icon="/media/tg.svg"
                        text="Вступить в TELEGRAM канал" />
                </div>
            </div>



            <div className="hidden xs750:flex flex-col w-auto items-start ml-[10%] mt-[20px] mb-[50px] xs1350:mt-[2%]  text-left ">
                <p className="text-[17px] uppercase font-thin bb2 ">
                    В канале я делюсь рабочими инструментами, схемами и кейсами по продажам.  <br className="hidden xs1350:block" />
                    Подпишитесь, чтобы получать пользу бесплатно.
                </p>

            </div>

            <div className="max-w-[400px] mt-[20px] xs750:hidden ml-[7%] xs750:mt-[20px] flex items-start gap-2 xs750:gap-4">
                <div className="min-w-[2px] bg-[#2E5943] self-stretch "></div>
                <p className="text-[14px] xs750:text-xl xs1350:text-[30px] text-[#475763] uppercase font-bold text-left bb2">
                    В канале я делюсь рабочими инструментами, схемами и кейсами по продажам. Подпишитесь, чтобы получать пользу бесплатно.
                </p>
            </div>


            <div className="hidden xs750:flex  justify-center xs550:absolute xs550:right-0 xs550:w-[50%] xs550:bottom-0 xs1350:hidden">
                <img src="/media/evgeniya.png" className="w-[70%]" />
            </div>
        </section >
    );
};

export default Hero;
