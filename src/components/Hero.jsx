import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FadeInUp } from './Shared';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Designer', 'Developer', 'Content Creator', 'UI/UX Enthusiast'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 1000,
    });

    return (
        <motion.header
            id="header"
            className="w-full min-h-screen flex items-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/user.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm"></div>
            <div className="px-6 md:px-[8%] w-full z-10 pt-20">
                <motion.div
                    className="text-left max-w-3xl"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={FadeInUp}
                >
                    <motion.p variants={FadeInUp} className="text-xl md:text-2xl text-pink-400 font-medium mb-2 min-h-[2rem]">
                        <span>{text}</span>
                        <Cursor cursorStyle='|' />
                    </motion.p>
                    <motion.h1 variants={FadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Rizqy</span>
                    </motion.h1>
                    <motion.p variants={FadeInUp} className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                        Saya senang mengubah ide menjadi produk digital yang menarik dan fungsional. Saat ini berdomisili di Klaten, Indonesia.
                    </motion.p>
                    <motion.a
                        variants={FadeInUp}
                        href="/images/CV_Rizqy_Oxinos.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-block bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
                    >
                        Lihat CV
                    </motion.a>
                </motion.div>
            </div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </motion.header>
    );
};

export default Hero;
