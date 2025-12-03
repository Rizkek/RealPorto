import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import { designTools, programmingSkills } from '../data/constants';
import { Link } from 'react-router-dom';

const SkillCard = ({ tool }) => (
    <motion.div
        variants={FadeInUp}
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-800/50 flex flex-col items-center justify-center p-4
               shadow-lg hover:shadow-xl overflow-hidden cursor-pointer border border-gray-700 hover:border-pink-500/50 group backdrop-blur-sm transition-colors transition-shadow duration-300"
    >
        <div className="text-4xl md:text-5xl z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
            {tool.icon}
        </div>
        <span className="absolute bottom-2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {tool.name}
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-900">
            <AnimatedSectionTitle>Skillset & Tools</AnimatedSectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Design Tools */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left pl-2 border-l-4 border-pink-500">Design Tools</h3>
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            initial: {},
                            whileInView: { transition: { staggerChildren: 0.05 } }
                        }}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center"
                    >
                        {designTools.map((tool, idx) => (
                            <SkillCard key={idx} tool={tool} />
                        ))}
                    </motion.div>
                </div>

                {/* Programming Skills */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left pl-2 border-l-4 border-violet-500">Programming</h3>
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            initial: {},
                            whileInView: { transition: { staggerChildren: 0.05 } }
                        }}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center"
                    >
                        {programmingSkills.map((skill, idx) => (
                            <SkillCard key={idx} tool={skill} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
