import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import { Link } from 'react-router-dom';

const About = () => {
    const [tab, setTab] = useState("skills");

    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-900">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    className="lg:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/images/27.jpg"
                            alt="Tentang Saya"
                            loading="lazy"
                            decoding="async"
                            className="relative rounded-2xl w-full shadow-2xl transform transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="lg:w-2/3"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <AnimatedSectionTitle>Tentang Saya</AnimatedSectionTitle>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-justify mb-8 leading-relaxed text-gray-300 text-lg"
                    >
                        Saya lulusan SMK Multimedia dan saat ini melanjutkan pendidikan S1 di bidang Rekayasa Perangkat Lunak.
                        Memiliki pengalaman di dunia desain visual, UI/UX, serta produksi foto dan video untuk mendukung berbagai kebutuhan kreatif.
                    </motion.p>

                    {/* TAB BUTTONS */}
                    <motion.div
                        variants={FadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 md:gap-4 text-white mb-8 bg-gray-800/50 p-2 rounded-xl backdrop-blur-sm border border-gray-700"
                    >
                        {['skills', 'experience', 'education'].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`flex-1 py-3 px-6 rounded-lg text-sm md:text-base font-medium transition-all duration-300 capitalize ${tab === t
                                    ? "bg-gradient-to-r from-pink-600 to-violet-600 shadow-lg text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                                    }`}
                            >
                                {t === 'skills' ? 'Keahlian' : t === 'experience' ? 'Pengalaman' : 'Pendidikan'}
                            </button>
                        ))}
                    </motion.div>

                    {/* TAB CONTENT */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-white bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 min-h-[180px] backdrop-blur-sm"
                        >
                            {tab === "skills" && (
                                <p className="text-center text-gray-300 text-lg leading-relaxed">
                                    Menguasai desain grafis, UI/UX, fotografi & video, serta pengembangan website dengan fokus pada pengalaman pengguna yang optimal.
                                </p>
                            )}
                            {tab === "experience" && (
                                <ul className="space-y-4">
                                    <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-2">
                                        <span className="font-semibold text-pink-400 text-lg">Kasir / Pramuniaga | Wishmart HPJ</span>
                                        <span className="text-gray-400 text-sm">(Jun 2024 - Ags 2024)</span>
                                    </li>
                                    <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-2">
                                        <span className="font-semibold text-pink-400 text-lg">Desainer | Almira Bakul Akrilik</span>
                                        <span className="text-gray-400 text-sm">(Mei 2023 - Jul 2023)</span>
                                    </li>
                                    <li className="flex flex-col md:flex-row md:items-center justify-between">
                                        <span className="font-semibold text-pink-400 text-lg">Desainer Multimedia | Studio E&E</span>
                                        <span className="text-gray-400 text-sm">(Jan 2022 - Apr 2022)</span>
                                    </li>
                                </ul>
                            )}
                            {tab === "education" && (
                                <ul className="space-y-4">
                                    <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-2">
                                        <span className="font-semibold text-pink-400 text-lg">S1 Rekayasa Perangkat Lunak | UPI</span>
                                        <span className="text-gray-400 text-sm">(2023 - Sekarang)</span>
                                    </li>
                                    <li className="flex flex-col md:flex-row md:items-center justify-between">
                                        <span className="font-semibold text-pink-400 text-lg">SMK Multimedia</span>
                                        <span className="text-gray-400 text-sm">(2020 - 2023)</span>
                                    </li>
                                </ul>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
