import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import { servicesItems } from '../data/constants';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-800">
            <AnimatedSectionTitle>Keahlian Saya</AnimatedSectionTitle>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    initial: {},
                    whileInView: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {servicesItems.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={FadeInUp}
                        whileHover={{ y: -10 }}
                        className="bg-gray-900/50 p-8 rounded-2xl shadow-xl hover:shadow-pink-500/10 border border-gray-800 hover:border-pink-500/30 transition-colors transition-shadow duration-300 group"
                    >
                        <div className="text-pink-500 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-400">
                            {service.icon}
                        </div>
                        <h2 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">{service.title}</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
