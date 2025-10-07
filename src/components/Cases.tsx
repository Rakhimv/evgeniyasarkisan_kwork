import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/swiper-bundle.css";
import ActionButton from "./ActionBtn";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
const Cases: React.FC = () => {
    const advantages = [
        "Издательство «Логос» — Запуск Отдела с Нуля",
        "Поставки Авто из Германии — Рост на 60%",
        "Компания «Вектор» — Прорыв до 11 млн ₽"
    ];

    const reviews = [
        "/otz/1.jpg",
        "/otz/2.jpg",
        "/otz/3.jpg",
        "/otz/4.jpg",
        "/otz/5.jpg",
        "/otz/6.jpg",
        "/otz/7.jpg",
        "/otz/8.jpg",
        "/otz/9.jpg",
        "/otz/10.jpg",
        "/otz/11.png",
        "/otz/12.png",
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [selectedCase, setSelectedCase] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const openCaseModal = (caseIndex: number) => {
        setSelectedCase(caseIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeCaseModal = () => {
        setSelectedCase(null);
        document.body.style.overflow = '';
    };


    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);


    const casesData = [
        {
            id: 16,
            title: "Издательство «Логос» — Запуск Отдела с Нуля",
            videoUrl: "/otz/otz2.mp4",
            content: {
                pointA: "Отдела продаж как такового не было, компания не понимала, с чего начать и как выстроить систему.\nОтсутствовали регламенты, аналитика и понимание, как организовать работу менеджеров.\nНе было представления, как правильно нанимать сотрудников и контролировать их эффективность.",
                whatWasDone: "Даны пошаговые рекомендации, как создавать отдел продаж с нуля.\nВнедрены дашборды для наглядного контроля показателей и понимания динамики.\nПоказано, как выстраивать систему аналитики, чтобы руководитель видел реальную картину воронки.\nРазработан алгоритм найма МОП: от подбора кандидатов до их обучения и адаптации.\nСформировано понимание, как строятся продажи в отделе: воронка, скрипты, KPI, контроль.",
                pointB: "Компания получила чёткую стратегию запуска отдела продаж.\nЕсть готовые инструменты: дашборды, аналитика, система найма.\nРуководитель теперь понимает, как управлять отделом продаж и масштабировать результат.\nИздательство вышло на новый уровень организации, получив фундамент для дальнейшего роста."
            }
        },
        {
            id: 12,
            title: "Поставки Авто из Германии — Рост на 60%",
            videoUrl: "/otz/otz1.mp4",
            content: {
                pointA: "В отделе продаж работали всего 2 МОП, но без системы.\nНе велась работа с клиентской базой — многие клиенты «сливались».\nCRM отсутствовала, как и телефония.\nВоронка продаж не была выстроена, из-за чего сделки терялись.",
                whatWasDone: "Внедрена система B2B «Мой склад» для ведения базы и контроля процессов.\nНаняты ещё 2 менеджера, что усилило отдел продаж.\nПроведено обучение сотрудников: продажи по скриптам, работа с возражениями, системное сопровождение клиента.\nВыстроена воронка продаж и единая структура обработки лидов.\nНастроена система контроля работы отдела: прозрачная статистика и KPI.",
                pointB: "Отдел продаж стал структурным и управляемым.\nКлиентская база ведётся системно, сделки не теряются.\nМОП замотивированы и работают по регламентам.\nПлан перевыполнен на 134%."
            }
        },
        {
            id: 5,
            title: "Компания «Вектор» — Прорыв до 11 млн ₽",
            imageUrl: "/otz/6.jpg",
            content: {
                pointA: "В отделе продаж работали: старший менеджер + 2 МОП.\nПри плане 6 000 000 ₽ выполнено всего 1 000 000 ₽.\nНизкий уровень качества обслуживания клиентов.\nМенеджеры не понимали процесс продаж, не умели закрывать сделки.\nCRM велась неправильно, сделки и данные терялись.",
                whatWasDone: "Старший менеджер прошёл обучение и был подготовлен до уровня РОПа, чтобы управлять командой и контролировать выполнение планов.\nПроведено обучение менеджеров: скрипты, работа с возражениями, развитие уверенности в переговорах.\nНанято ещё +2 менеджера, что усилило отдел продаж.\nНастроена системная работа с клиентской базой и корректное ведение CRM.\nВнедрены эффективные навыки продаж и контроль исполнения KPI.",
                difficulties: "Пришлось полностью менять мышление менеджеров: от «принимаем заявки» → к «активно продаём».\nСопротивление старшего менеджера переходу в роль руководителя (РОПа) — требовалась перестройка навыков.\nНужно было быстро вывести новых сотрудников на результат.",
                pointB: "При плане 3 000 000 ₽ выполнено 11 000 000 ₽.\nСтарший менеджер стал полноценным РОПом, который управляет командой и обеспечивает результат.\nВсе менеджеры обучены и работают по системе, показывая стабильное перевыполнение планов.\nCRM ведётся корректно, сделки прозрачны и контролируемы.\nКомпания вышла на качественно новый уровень обслуживания клиентов."
            }
        }
    ];

    return (
        <>
            <section className="py-12 px-6 bg-[#EDF6FA] w-full">
                <div className="flex flex-col xs1000:flex-row xs750:gap-[10px] items-center xs1000:items-end justify-between px-[5%]">
                    <div className="ml-[-40px] xs750:ml-[0%] flex gap-[5px]">
                        <img src="/media/wt.svg" className="w-[40px]" alt="" />
                        <h2 className="text-[35px] xs430:text-[40px] xs1000:text-4xl font-bold uppercase txp">кейсы и результаты</h2>
                    </div>
                    <h2 className="text-3xl text-center xs1000:text-4xl uppercase bb2">результаты клиентов</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-[30px] xs658:grid-cols-3 gap-[20px] mt-[30px]">
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-[10px] cursor-pointer group"
                            onClick={() => openCaseModal(index)}
                        >
                            <img
                                src={`/media/f${index + 1}.png`}
                                alt=""
                                className="w-full h-[180px] xs1000:h-[250px] object-cover rounded-lg shadow-md "
                            />
                            <div className="flex gap-[10px]">
                                <div className="min-w-[20px] min-h-[20px] rounded-full max-h-[10px] mt-[10px] bgp"></div>
                                <span className="txp text-2xl xs658:text-xl xs1000:text-2xl font-bold uppercase group-hover:text-[#1e3d2a] transition-colors duration-300">{item}</span>
                            </div>


                            <button className="w-full p-[10px] bgp rounded-[10px] text-white cursor-pointer transition-transform duration-300 hover:scale-101 hover:opacity-80 text-2xl">
                                Посмотреть
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex gap-[10px] items-end justify-center xs1000:justify-between mt-[50px] px-[5%]">
                    <div className="flex gap-[5px]">
                        <img src="/media/wt.svg" className="w-[40px]" alt="" />
                        <h2 className="text-4xl font-bold uppercase txp">отзывы клиентов</h2>
                    </div>
                </div>

                <div className="mt-[30px] px-[5%]">
                    <div className="relative mx-auto">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                1350: { slidesPerView: 3 },
                            }}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="cursor-pointer" onClick={() => openLightbox(index)}>
                                        <img
                                            src={review}
                                            alt="Отзыв клиента"
                                            className="w-full h-[250px] xs1350:h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-101"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-[#2E5943] text-white p-3 rounded-full shadow-lg hover:bg-[#1e3d2a] transition-colors duration-300 z-10">
                            <MdOutlineKeyboardArrowLeft color="white" />
                        </button>
                        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-[#2E5943] text-white p-3 rounded-full shadow-lg hover:bg-[#1e3d2a] transition-colors duration-300 z-10">
                            <MdOutlineKeyboardArrowRight color="white" />
                        </button>
                    </div>
                </div>

                <div className="ml-[5%] max-w-[300px] mt-[30px]">
                    <ActionButton
                        text="хочу такие же результаты"
                        icon="/media/zur.svg"
                        openForm
                    />
                </div>

                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={reviews.map(src => ({ src }))}
                />



            </section>


            <AnimatePresence>
                {selectedCase !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCaseModal}
                    >
                        <motion.div
                            className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto "
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">

                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-3xl font-bold txp font-sans!">
                                        {casesData[selectedCase].title}
                                    </h2>
                                    <button
                                        onClick={closeCaseModal}
                                        className="cursor-pointer text-gray-500 hover:text-blackfont-normal text-[50px]"
                                    >
                                        ×
                                    </button>
                                </div>


                                {casesData[selectedCase].videoUrl &&
                                    <div className="mb-6">
                                        <div className="bg-gray-100 rounded-lg p-4 text-center font-sans!">
                                            <video className="w-full h-[400px]" controls src={casesData[selectedCase].videoUrl} />
                                        </div>
                                    </div>
                                }

                                {casesData[selectedCase].imageUrl &&
                                    <div className="mb-6 w-full">
                                        <div className="bg-gray-100 rounded-lg p-4 w-full text-center font-sans!">
                                            <img className="w-full" src={casesData[selectedCase].imageUrl} />
                                        </div>
                                    </div>
                                }



                                <div className="space-y-6">

                                    <div>
                                        <h3 className="text-xl font-bold txp mb-3 font-sans!">Точка А (ситуация до консультации)</h3>
                                        <div className="bg-black/5 p-4 rounded-lg">
                                            <p className="text-black text-[20px] font-normal font-sans! whitespace-pre-line">{casesData[selectedCase].content.pointA}</p>
                                        </div>
                                    </div>


                                    <div>
                                        <h3 className="text-xl font-bold txp mb-3 font-sans!">Что было сделано (на консультации)</h3>
                                        <div className="bg-black/5 p-4 rounded-lg">
                                            <p className="text-black text-[20px] font-normal font-sans! whitespace-pre-line ">{casesData[selectedCase].content.whatWasDone}</p>
                                        </div>
                                    </div>


                                    {selectedCase === 2 && casesData[selectedCase].content.difficulties && (
                                        <div>
                                            <h3 className="text-xl font-bold txp mb-3 font-sans!">Трудности в процессе</h3>
                                            <div className="bg-black/5 p-4 rounded-lg">
                                                <p className="text-black text-[20px] font-normal font-sans! whitespace-pre-line">{casesData[selectedCase].content.difficulties}</p>
                                            </div>
                                        </div>
                                    )}


                                    <div>
                                        <h3 className="text-xl font-bold txp mb-3 font-sans!">
                                            {selectedCase === 2 ? "Точка Б (результат за 2 месяца)" : "Точка Б (результаты после консультации)"}
                                        </h3>
                                        <div className="bg-black/5 p-4 rounded-lg">
                                            <p className="text-black text-[20px] font-normal font-sans! whitespace-pre-line">{casesData[selectedCase].content.pointB}</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full flex justify-center xs750:justify-start py-[10px]">
                                    <div className="flex flex-col xs750:items-start mt-[30px] font-bold text-left gap-[10px] w-[320px]">
                                        <ActionButton
                                            icon="/media/call.svg"
                                            iconSize={40}
                                            text="Записаться на консультацию"
                                            padding="p-2"
                                            openForm
                                        />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </>
    );
};

export default Cases;