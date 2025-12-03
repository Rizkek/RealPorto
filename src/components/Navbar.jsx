import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { HashLink } from 'react-router-hash-link'; // Commented out to debug
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: 'Home', to: '/#header' },
        { name: 'About', to: '/#about' },
        { name: 'Services', to: '/#services' },
        { name: 'Portfolio', to: '/#portfolio' },
        { name: 'Awards', to: '/#awards' },
        { name: 'Contact', to: '/#contact' },
    ];

    return (
        <div className="px-6 md:px-[8%] py-4 w-full z-50 fixed top-0 left-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
            <motion.nav
                className="flex items-center justify-between"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-base font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.to}
                                className="text-gray-300 hover:text-pink-500 text-lg transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer text-gray-300 hover:text-pink-500 transition-colors">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-0 right-0 w-64 h-screen bg-gray-900 shadow-2xl pt-24 px-6 z-40 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.to}
                                onClick={toggleMenu}
                                className="text-xl text-gray-300 hover:text-pink-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
