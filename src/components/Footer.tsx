import React from "react";

const Footer: React.FC = () => {


    const info = [
        {
            icon: "itel.svg",
            text: "+7(999) 999 88 77",
            rd: "tel:+79999998877"
        },
        {
            icon: "imail.svg",
            text: "ESARKISYN@YANDEX.RU",
            rd: "mailto:ESARKISYN@YANDEX.RU"
        },
        {
            icon: "itg.svg",
            text: "+7(999) 999 88 77",
            rd: "https://t.me/+79999998877"
        },
    ]

    return (
        <footer className="footer bg4 bg-[#E1E3E2] w-full">
            <div className="h-[400px] grid grid-cols-1 xs658:grid-cols-2 xs850:grid-cols-3">
                <div className="hidden xs658:block"></div>
                <div className="mt-[30px] text-[32px] flex flex-col m-auto text-[#565757]">
                    <p>КОНТАКТНАЯ ИНФОРМАЦИЯ:</p>
                    {info.map((item) =>
                        <a href={item.rd} className="cursor-pointer">
                            <div className="flex items-center gap-[10px]">
                                <img className="w-[40px] h-[40px]" src={`/${item.icon}`} />
                                <p className="bb2">{item.text}</p>
                            </div>
                        </a>

                    )}


                    <div className="flex mt-[20px] gap-[10px] items-center">

                        <a href="https://vk.ru">
                            <img className="cursor-pointer hover:scale-[1.1] transition-all w-[45px] h-[45px]" src={`/wk.svg`} />
                        </a>

                        <a href="https://ok.ru">
                            <img className="cursor-pointer hover:scale-[1.1] transition-all w-[40px] h-[40px]" src={`/ok.svg`} />
                        </a>
                    </div>



                    <div className="max-w-[300px] mt-[20px] flex items-start gap-2">
                        <div className="w-[3px] bg-[#565757] self-stretch"></div>
                        <p className="text-[15px]  text-[#565757] uppercase text-left bb2">
                            ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ: ИНН, ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                        </p>
                    </div>
                </div>
                <div className="hidden xs850:flex h-full items-end justify-center">
                    <img src="/ev2.png" className="w-full max-w-[500px]" />
                </div>
            </div>

            <div className="block xs658:hidden h-full items-end justify-center">
                <img src="/ev2.png" className="w-full max-w-[500px]" />
            </div>
        </footer>
    );
};

export default Footer;
