import React from "react";
import ActionButton from "./ActionBtn";

const TelegramChannel: React.FC = () => {
    return (
        <section className="py-8 px-6 bg-white text-center bgtwo">

            <div className="flex flex-col">
                <p className="txp text-[40px] font-bold text-left uppercase">
                    Больше инсайтов и инструментов — в моём Telegram-канале
                </p>



                <div className="max-w-[40%] mt-[5%] ml-[7%] flex items-start gap-4">
                    <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                    <h1 className="text-3xl text-[#475763] text-left uppercase bb2">
                        Каждую неделю я делюсь кейсами, пошаговыми схемами и практическими
                        материалами, которые помогают собственникам выстраивать отделы продаж.
                    </h1>
                </div>

                <div className="flex flex-col items-start ml-[6%] mt-[60px] font-bold text-left gap-[10px] w-[22%]">
                    <ActionButton icon="/tg.svg" text="Подписаться на канал" />
                </div>

            </div>

        </section>
    );
};

export default TelegramChannel;
