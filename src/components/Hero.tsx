import React from "react";
import ActionButton from "./ActionBtn";

const Hero: React.FC = () => {


    return (
        <section className="w-full pr-[5%] xs1350:pr-[0%] text-center bgone relative xs1350:pb-[50px]">

            <img src="./logo.svg" className="absolute mt-[20px] w-[150px] left-[calc(50%-75px)] xs1350:left-0 xs1350:w-[14%] xs1350:ml-[2.5%] xs1350:mt-[2%] " />
            <div className="flex items-center gap-[5%]">



                <div className=" hidden xs1350:flex xs1350:max-w-[40%] mt-[200px] ml-[7%] xs1350:mt-[5%] xs1350:ml-[20%]  items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-2xl text-[#475763] font-bold text-left  xs1350:text-5xl">
                        ВЫСТРАИВАЮ ОТДЕЛЫ ПРОДАЖ <br />
                        БЕЗ ХАОСА, ТЕКУЧКИ <br /> И РУЧНОГО КОНТРОЛЯ
                    </h1>
                </div>



            </div>


            <div className="flex flex-col items-start ml-[7%] mt-[230px] xs1350:mt-[8%]  font-bold text-left ">
                <h2 className="text-3xl xs1350:text-5xl font-bold txp">
                    Я — ЕВГЕНИЯ САРКИСЯН, <span className="txs text-2xl xs1350:text-4xl">РОП с <span className="txp text-3xl xs1350:text-5xl">10+</span> ЛЕТ ПРАКТИКИ.</span>
                </h2>

                <div className="max-w-[700px] xs1350:hidden mt-[20px] flex items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-2xl text-[#475763] font-bold text-left  xs1350:text-5xl">
                        ВЫСТРАИВАЮ ОТДЕЛЫ ПРОДАЖ БЕЗ ХАОСА, ТЕКУЧКИ И РУЧНОГО КОНТРОЛЯ
                    </h1>
                </div>


                <div className="max-w-[700px] mt-[20px] flex items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <p className="text-2xl xs1350:text-[30px]  text-[#475763] uppercase font-bold text-left bb2">
                        Только за прошлый год я провела более <span className="txp text-3xl xs1350:text-4xl">5000+</span> онлайн-встреч и помогла более <span className="txp text-3xl xs1350:text-4xl">300</span> бизнесам навести порядок в продажах.
                    </p>
                </div>


            </div>

            <div className="flex flex-col items-start ml-[6%] mt-[30px] font-bold text-left gap-[10px] w-[320px]">
                <ActionButton
                    icon="/call.svg"
                    iconSize={40}
                    text="Записаться на консультацию"
                    padding="p-2"
                    openForm
                />
                <ActionButton
                    openForm
                    icon="/block.svg" text="посмотреть кейсы" />
                <ActionButton
                    openTg
                    icon="/tg.svg"
                    text="Вступить в TELEGRAM канал" />
            </div>



            <div className="flex flex-col w-auto items-start ml-[10%] mt-[20px] mb-[50px] xs1350:mt-[2%]  text-left ">
                <p className="text-[17px] uppercase font-thin bb2 ">
                    В канале я делюсь рабочими инструментами, схемами и кейсами по продажам.  <br className="hidden xs1350:block" />
                    Подпишитесь, чтобы получать пользу бесплатно.
                </p>

            </div>

            <div className="flex justify-center xs550:absolute xs550:right-0 xs550:w-[50%] xs550:bottom-0 xs1350:hidden">
                <img src="/evgeniya.png" className="w-[70%]" />
            </div>
        </section >
    );
};

export default Hero;
