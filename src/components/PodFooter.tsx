import ActionButton from "./ActionBtn"

const PodFooter = () => {
    return (
        <section className="px-[5%] w-full">
            <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-[15px]">
                    <p className="text-5xl txs font-bold uppercase">
                        ХВАТИТ ТУШИТЬ ПОЖАРЫ — ПОРА УПРАВЛЯТЬ ПРОДАЖАМИ, А НЕ ХАОСОМ!
                    </p>
                </div>
                <h2 className="text-[32px] txp uppercase bb2 mt-[20px]">
                    ОСТАВЬ ЗАЯВКУ ИЛИ ПОДПИШИСЬ НА МОЙ TELEGRAM-КАНАЛ, ЧТОБЫ ПОЛУЧАТЬ РАБОЧИЕ ИНСТРУМЕНТЫ ПРЯМО СЕЙЧАС.
                </h2>
            </div>



            <div className="mt-[40px] flex items-center justify-center gap-[50px]">
                <div className="max-w-[300px]">
                    <ActionButton
                        text="ХОЧУ ТАКИЕ ЖЕ РЕЗУЛЬТАТЫ"
                        icon="/list.svg"
                    />
                </div>
                <div className="max-w-[300px]">
                    <ActionButton
                        text="ХОЧУ ТАКИЕ ЖЕ РЕЗУЛЬТАТЫ"
                        icon="/tg.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default PodFooter