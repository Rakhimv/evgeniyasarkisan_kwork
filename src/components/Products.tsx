import React from "react";
import ActionButton from "./ActionBtn";

const Products: React.FC = () => {
    const formats = [
        {
            id: 1,
            title: "КОНСУЛЬТАЦИЯ",
            subtitle: "(ДИАГНОСТИЧЕСКАЯ, 60–90 МИН)",
            description: "ЭКСПРЕСС-АНАЛИЗ, 3–5 КЛЮЧЕВЫХ ПРОБЛЕМ, ОТВЕТЫ НА ВОПРОСЫ, МИНИ-ДОРОЖНАЯ КАРТА НА 30 ДНЕЙ."
        },
        {
            id: 2,
            title: "ПОЛНЫЙ АУДИТ ОТДЕЛА ПРОДАЖ",
            subtitle: "(DEEP-DIVE)",
            description: "АНАЛИЗ CRM, СКРИПТОВ, ВХОДЯЩИХ ЛИДОВ, ПРОСЛУШКА ЗВОНКОВ, ИНТЕРВЬЮ С КОМАНДОЙ. ИТОГ: ОТЧЁТ + ПРЕЗЕНТАЦИЯ + РАЗБОР."
        },
        {
            id: 3,
            title: "НАСТАВНИЧЕСТВО СОБСТВЕННИКА",
            subtitle: "(3 МЕС)",
            description: "ЕЖЕНЕДЕЛЬНЫЕ ОНЛАЙН-ВСТРЕЧИ, БАЗА ШАБЛОНОВ (РЕГЛАМЕНТЫ, KPI, МОТИВАЦИЯ), КОНТРОЛЬ ВНЕДРЕНИЯ, ПОДДЕРЖКА В TELEGRAM, ИТОГОВЫЙ СТРАТЕГИЧЕСКИЙ ПЛАН."
        },
        {
            id: 4,
            title: "КУРАТОРСТВО ОТДЕЛА ПРОДАЖ",
            subtitle: "(FULL RETAINER)",
            description: "ВЕДЕНИЕ ОТДЕЛА «ПОД КЛЮЧ»: ПЛАНЫ, KPI, РАЗБОР ЗВОНКОВ, АДАПТАЦИЯ И ОБУЧЕНИЕ МЕНЕДЖЕРОВ, ПОДБОР НОВЫХ, ЕЖЕМЕСЯЧНЫЙ ОТЧЁТ С ПОКАЗАТЕЛЯМИ."
        },
        {
            id: 5,
            title: "ОБУЧЕНИЕ ВНУТРЕННЕГО РОПА / СТАРШЕГО МЕНЕДЖЕРА",
            subtitle: "",
            description: "ПРОГРАММА «ИЗ МЕНЕДЖЕРА В РУКОВОДИТЕЛЯ»: РАЗРАБОТКА KPI-СИСТЕМЫ, КОНТРОЛЬ И ОТЧЁТНОСТЬ, ЛИЧНЫЙ КОУЧИНГ ПО ЛИДЕРСКИМ НАВЫКАМ."
        },
        {
            id: 6,
            title: "РАЗБОР КЕЙСОВ + ОБУЧЕНИЕ ОТДЕЛА ПРОДАЖ (3–4 ЧАСА)",
            subtitle: "",
            description: "ПРАКТИЧЕСКАЯ ОТРАБОТКА ВОЗРАЖЕНИЙ, РАЗБОР 3–4 РЕАЛЬНЫХ КЕЙСОВ КЛИЕНТА, ЧЕК-ЛИСТЫ И ГОТОВЫЕ СКРИПТЫ, ВИДЕО-ЗАПИСЬ."
        }
    ];

    return (
        <section className="py-12 px-[5%] bg-[#EDF6FA] w-full">
            <div className="mb-12 w-full flex flex-col items-center">
                <div className="flex items-center flex-col xs550:flex-row gap-[15px]">
                    <img src="/products.svg " className="w-[120px] xs550:w-[60px]" />
                    <p className="text-[30px] text-center xs550:text-left xs550:text-3xl xs658:text-5xl txs font-bold uppercase">
                        ПРОДУКТЫ И ФОРМАТЫ РАБОТЫ
                    </p>
                </div>
                <h2 className="text-2xl uppercase bb2">
                    ФОРМАТЫ РАБОТЫ СО МНОЙ
                </h2>
            </div>

            <div className="grid grid-cols-1 xs658:grid-cols-2 xs1000:grid-cols-3 gap-y-[30px] gap-x-[20px]">
                {formats.map((format) => (
                    <div key={format.id}>
                        <div className="flex items-start mb-2 gap-[10px]">


                            <div className={`relative rounded-full`}>
                                <div className=" inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">

                                    <div className="h-[60px] w-[60px] rounded-full bgp flex items-center justify-center text-[45px] font-bold text-white">
                                        {format.id}
                                    </div>

                                </div>
                            </div>


                            <div>
                                <h3 className="text-2xl xs850:text-3xl txs font-bold uppercase">
                                    {format.title}
                                </h3>
                                {format.subtitle && (
                                    <p className="text-2xl xs850:text-3xl txs font-bold uppercase">
                                        {format.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>


                        <p className="text-black text-xl xs850:text-2xl leading-7 ml-[50px] bb2">
                            {format.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="ml-[2%] max-w-[400px] mt-[30px]">
                <ActionButton
                    text="подобрать формат под мой бизнес"
                    icon="/st.svg"
                    openForm
                />
            </div>
        </section>
    );
};

export default Products;
