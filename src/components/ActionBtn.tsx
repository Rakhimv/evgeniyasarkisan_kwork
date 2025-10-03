import { useState } from "react";
import ModalForm from "./ModalForm";

type ActionButtonProps = {
    icon: string;
    iconSize?: number;
    text: string;
    padding?: string;
    openForm?: boolean;
    openTg?: boolean;
};

const ActionButton: React.FC<ActionButtonProps> = ({
    icon,
    iconSize = 30,
    text,
    padding = "p-3",
    openForm,
    openTg
}) => {

    const [open, setOpen] = useState(false);


    return (
        <>
            <div
                onClick={() => {
                    if (openForm) {
                        setOpen(true)
                    }
                    if(openTg) {
                        window.open("https://t.me/+79999998877")
                    }
                }}
                className="flex w-full items-center cursor-pointer  hover:scale-[1.02] active:scale-[1.02] transition-all">
                <div className={`relative z-[3] scale-[1.1] ${padding} rounded-full aspect-square flex items-center justify-center`}>
                    <div className="absolute  inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">
                        <div className="h-full w-full rounded-full bgp"></div>
                    </div>
                    <img className="relative z-[2]" src={icon} style={{ width: iconSize }} />
                </div>
                <div className="relative w-full p-2 h-[40px] px-[40px] rounded-xl ml-[-30px]">
                    <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">
                        <div className="h-full w-full rounded-xl bgp"></div>
                    </div>
                    <div className="relative z-10 font-body">
                        <p className="text-white uppercase text-[16px] xs658:text-xl text-center">{text}</p>
                    </div>
                </div>
            </div>

            <ModalForm isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default ActionButton