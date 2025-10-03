import ActionButton from "./ActionBtn"

const PodFooter = () => {
    return (
        <section className="px-[5%] w-full">
            <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-[15px]">
                    <p className="text-3xl xs1350:text-5xl txs font-bold uppercase">
                        ХВАТИТ ТУШИТЬ ПОЖАРЫ — ПОРА УПРАВЛЯТЬ ПРОДАЖАМИ, А НЕ ХАОСОМ!
                    </p>
                </div>
                <h2 className="text-3xl xs1350:text-[32px] txp uppercase bb2 mt-[20px] xs750:text-center">
                    ОСТАВЬ ЗАЯВКУ ИЛИ ПОДПИШИСЬ НА МОЙ TELEGRAM-КАНАЛ, ЧТОБЫ ПОЛУЧАТЬ РАБОЧИЕ ИНСТРУМЕНТЫ ПРЯМО СЕЙЧАС.
                </h2>
            </div>



            <div className="mt-[40px] flex flex-col xs550:flex-row items-start xs550:items-center justify-center gap-[20px] xs550:gap-[50px] ml-[7%] xs658:ml-auto">
                <div className="max-w-[300px]">
                    <ActionButton
                        text="ХОЧУ ТАКИЕ ЖЕ РЕЗУЛЬТАТЫ"
                        icon="/list.svg"
                        openForm
                    />
                </div>
                <div className="max-w-[300px]">
                    <ActionButton
                        openTg
                        text="ХОЧУ ТАКИЕ ЖЕ РЕЗУЛЬТАТЫ"
                        icon="/tg.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default PodFooter