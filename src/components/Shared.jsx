import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
};

export const AnimatedSectionTitle = ({ children }) => {
    return (
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
            {children}
        </motion.h1>
    );
};
