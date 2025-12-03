import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import { portfolioItems } from '../data/constants';

const PortfolioModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[60] p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border border-gray-800"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors">
                    <FaTimes />
                </button>
                <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-6" />
                <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.desc}</p>
            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section id="portfolio" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-800">
                <AnimatedSectionTitle>Portofolio Saya</AnimatedSectionTitle>
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
                    {portfolioItems.map(item => (
                        <motion.div key={item.id} variants={FadeInUp}>
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                glareColor="#ffffff"
                                glarePosition="all"
                                scale={1.02}
                                className="rounded-2xl relative group overflow-hidden shadow-xl cursor-pointer h-full"
                            >
                                <div onClick={() => openModal(item)}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 rounded-2xl">
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                            {item.desc}
                                        </p>
                                        <Link
                                            className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2 transition-colors"
                                            to={`/portfolio/${item.category}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Lihat Detail
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <PortfolioModal project={selectedProject} onClose={closeModal} />
                )}
            </AnimatePresence>
        </>
    );
};

export default Portfolio;
