import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import { awardsItems } from '../data/constants';
import { Link } from 'react-router-dom';

const Awards = () => {
    return (
        <section id="awards" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-900">
            <AnimatedSectionTitle>Penghargaan & Sertifikasi</AnimatedSectionTitle>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    initial: {},
                    whileInView: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {awardsItems.map((award, index) => (
                    <motion.div
                        key={index}
                        variants={FadeInUp}
                        whileHover={{ y: -10 }}
                        className="bg-gray-800 rounded-2xl shadow-lg group transition-colors transition-shadow duration-300 overflow-hidden border border-gray-700 hover:border-pink-500/50"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={award.image}
                                alt={award.title}
                                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-pink-500 mt-1 bg-pink-500/10 p-2 rounded-lg">{award.icon}</div>
                                <div>
                                    <h2 className="text-xl font-bold text-white leading-tight mb-1 group-hover:text-pink-400 transition-colors">{award.title}</h2>
                                    <h3 className="text-violet-400 font-medium text-sm">{award.organizer}</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{award.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Awards;
