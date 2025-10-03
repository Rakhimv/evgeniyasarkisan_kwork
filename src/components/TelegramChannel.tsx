import React from "react";
import ActionButton from "./ActionBtn";

const TelegramChannel: React.FC = () => {
    return (
        <section className="relative py-8 px-6 bg-white text-center bgtwo">

            <div className="flex flex-col xs850:max-w-[60%] xs1350:max-w-none">
                <p className="txp text-[30px] leading-8  xs1350:text-[40px] font-bold text-center xs1350:text-left uppercase">
                    Больше инсайтов и инструментов — в моём Telegram-канале
                </p>



                <div className="max-w-[93%] xs1350:max-w-[40%] mt-[5%] ml-[2%] xs1350:ml-[7%] flex items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-2xl xs1350:text-3xl text-[#475763] text-left uppercase bb2">
                        Каждую неделю я делюсь кейсами, пошаговыми схемами и практическими
                        материалами, которые помогают собственникам выстраивать отделы продаж.
                    </h1>
                </div>
            </div>



            <div className="ml-[2%] xs1350:ml-[5%] max-w-[300px] mt-[30px]">
                <ActionButton
                    openTg
                    icon="/tg.svg" text="Подписаться на канал" />
            </div>


            <div className="flex justify-end items-end mt-[40px] mr-[-32px] mb-[-24px] xs550:mr-auto xs550:mb-auto xs550:absolute xs550:right-0 xs550:w-[50%] xs550:bottom-0 xs1350:hidden">
                <img src="/tghead.png" className="w-[70%]" />
            </div>

        </section>
    );
};

export default TelegramChannel;
