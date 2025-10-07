import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="w-full px-4 py-6 bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/media/logo.svg" alt="Логотип" className="w-12 h-12" />
                        <span className="text-2xl font-bold txp">Евгения Саркисян</span>
                    </Link>
                    <Link 
                        to="/" 
                        className="bgp text-white px-6 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
                    >
                        На главную
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl xs1350:text-5xl font-bold txp mb-6">
                        Политика обработки персональных данных
                    </h1>
                    
                    <div className="flex items-start gap-4 mb-8">
                        <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                        <p className="text-lg xs1350:text-xl text-[#475763] font-bold bb2">
                            Настоящая Политика обработки персональных данных разработана в соответствии с требованиями
                            Федерального закона №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению их безопасности.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl xs1350:text-3xl font-bold txp mb-4">1. Общие положения</h2>
                        <div className="flex items-start gap-4">
                            <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                            <p className="text-lg xs1350:text-xl text-[#475763] font-bold bb2">
                                Индивидуальный предприниматель Саркисян Евгения Рудольфовна (ИНН 237102420347)
                                обеспечивает защиту персональных данных пользователей сайта.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl xs1350:text-3xl font-bold txp mb-4">2. Сбор и использование данных</h2>
                        <div className="flex items-start gap-4">
                            <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                            <p className="text-lg xs1350:text-xl text-[#475763] font-bold bb2">
                                Мы собираем только ту информацию, которая необходима для связи с клиентом: имя и номер
                                телефона. Данные используются исключительно для обратной связи и не передаются третьим лицам.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl xs1350:text-3xl font-bold txp mb-4">3. Согласие на обработку</h2>
                        <div className="flex items-start gap-4">
                            <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                            <p className="text-lg xs1350:text-xl text-[#475763] font-bold bb2">
                                Отправляя форму на сайте, пользователь подтверждает своё согласие на обработку указанных им
                                персональных данных в соответствии с настоящей Политикой.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl xs1350:text-3xl font-bold txp mb-4">4. Контакты</h2>
                        <div className="flex items-start gap-4">
                            <div className="min-w-[5px] bg-[#2E5943] self-stretch"></div>
                            <p className="text-lg xs1350:text-xl text-[#475763] font-bold bb2">
                                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу
                                электронной почты: <span className="font-bold txp">info@example.com</span>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col xs1350:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-600">
                            © 2024 Евгения Саркисян. Все права защищены.
                        </p>
                        <Link 
                            to="/" 
                            className="bgp text-white px-6 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
                        >
                            Вернуться на главную
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
