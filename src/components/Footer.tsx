import React from "react";

const Footer: React.FC = () => {


    const info = [
        {
            icon: "itel.svg",
            text: "+7 989 806-71-20",
            rd: "tel:+79898067120"
        },
        {
            icon: "imail.svg",
            text: "Sales@Sarkisian-prodazhi.ru",
            rd: "mailto:Sales@Sarkisian-prodazhi.ru"
        },
        {
            icon: "itg.svg",
            text: "@Evsarkisyan",
            rd: "https://t.me/+79898067120"
        },
    ]

    return (
        <footer className="footer bg4 bg-[#F2F2F2] xs658:bg-[#E1E3E2] w-full">
            <div className="h-auto ml-[5%] xs850:ml-0 grid grid-cols-1 xs658:grid-cols-2 xs850:grid-cols-3">
                <div className="h-[80vw] max-h-[200px] xs750:h-auto flex justify-center">
                    <img src="./media/logo2.svg" className="w-[32%] xs658:hidden absolute left-1/2 -translate-x-1/2 top-[2.5%]" />
                </div>
                <div className="mt-[30px] text-[25px] xs750:text-[32px] gap-2 flex flex-col xs750:m-auto text-[#565757] py-[30px]">
                    <div>
                        <p>КОНТАКТНАЯ ИНФОРМАЦИЯ:</p>
                        {info.map((item) =>
                            <a href={item.rd} className="cursor-pointer">
                                <div className="flex items-center gap-[10px]">
                                    <img className="w-[30px] h-[30px] xs750:w-[40px] xs750:h-[40px]" src={`/media/${item.icon}`} />
                                    <p className="text-[20px] bb2">{item.text}</p>
                                </div>
                            </a>

                        )}
                    </div>


                    {/* <div className="flex mt-[20px] gap-[10px] items-center">

                        <a href="https://vk.ru">
                            <img className="cursor-pointer hover:scale-[1.1] transition-all w-[45px] h-[45px]" src={`/wk.svg`} />
                        </a>

                        <a href="https://ok.ru">
                            <img className="cursor-pointer hover:scale-[1.1] transition-all w-[40px] h-[40px]" src={`/ok.svg`} />
                        </a>
                    </div> */}



                    <div className="max-w-[300px] mb-[20px] mt-[20px] flex items-start gap-2">
                        <div className="w-[3px] bg-[#565757] self-stretch"></div>
                        <p className="text-[15px]  text-[#565757] uppercase text-left bb2">
                            ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ: <br /> ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ <br /> САРКИСЯН ЕВГЕНИЯ РУДОЛЬФОВНА <br />ИНН 237102420347
                        </p>
                    </div>
                </div>
                <div></div>
                {/* <div className="hidden xs850:flex h-full items-end justify-center">
                    <img src="/media/ev2.png" className="w-full max-w-[500px]" />
                </div> */}
            </div>

            <div className="hidden xs658:hidden h-full items-end justify-center">
                <img src="/media/ev2.png" className="w-full max-w-[500px]" />
            </div>
        </footer>
    );
};

export default Footer;
