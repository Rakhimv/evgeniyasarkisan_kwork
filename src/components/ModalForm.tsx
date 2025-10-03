import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { motion, AnimatePresence } from "framer-motion";
import "react-phone-input-2/lib/style.css";

type ModalFormProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (isOpen) document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, [isOpen]);

    const validate = () => {
        let newErrors: { name?: string; phone?: string } = {};
        if (!name.trim()) newErrors.name = "Введите имя";
        if (!phone.trim()) newErrors.phone = "Введите телефон";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        try {
            setLoading(true);
            await axios.post("https://example.com/api/form", {
                name,
                phone,
            });

            setSuccess(true);
            setName("");
            setPhone("");
            setErrors({});
        } catch (err) {
            alert("❌ Ошибка при отправке");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setSuccess(false);
        setName("");
        setPhone("");
        setErrors({});
        setLoading(false);
        onClose();
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-6 w-[90%] xs658:w-[400px] shadow-lg relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-black"
                            onClick={handleClose}
                        >
                            ✖
                        </button>

                        {success ? (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-center"
                            >
                                <div className="text-6xl mb-4">✅</div>
                                <h2 className="text-2xl font-semibold mb-4 text-green-600">
                                    Заявка отправлена!
                                </h2>
                                <p className="text-gray-600 mb-6">Мы свяжемся с вами скоро</p>
                                <button
                                    onClick={handleClose}
                                    className="bgp text-white py-2 px-6 rounded-lg hover:opacity-[0.9] transition cursor-pointer"
                                >
                                    OK
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                <h2 className="text-xl font-semibold mb-4">Оставить контакты</h2>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Имя"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`w-full border rounded-lg px-3 py-2 ${errors.name ? "border-red-500" : "border-gray-300"
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <PhoneInput
                                            country={"ru"}
                                            value={phone}
                                            onChange={(val) => setPhone(val)}
                                            inputStyle={{
                                                width: "100%",
                                                height: "40px",
                                                border: errors.phone
                                                    ? "1px solid #ef4444"
                                                    : "1px solid #d1d5db",
                                            }}
                                            dropdownStyle={{ zIndex: 9999 }}
                                            inputClass={errors.phone ? "border-red-500" : ""}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bgp text-white py-2 rounded-lg hover:opacity-[.9] cursor-pointer transition disabled:opacity-50"
                                    >
                                        {loading ? "Отправка..." : "Отправить"}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default ModalForm;
