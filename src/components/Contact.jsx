import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaPhone, FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AnimatedSectionTitle, FadeInUp } from './Shared';
import {Link} from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const form = useRef();

    const EMAILJS_SERVICE_ID = 'service_0q6ypgb';
    const EMAILJS_TEMPLATE_ID = 'template_f1x4g3k';
    const EMAILJS_PUBLIC_KEY = 'x-FiMD85CrlsPgBSC';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        if (!EMAILJS_PUBLIC_KEY) {
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 5000);
            return;
        }

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setFormStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' });
                setTimeout(() => setFormStatus(''), 5000);
            })
            .catch(() => {
                setFormStatus('error');
                setTimeout(() => setFormStatus(''), 5000);
            });
    };

    return (
        <footer id="contact" className="py-20 md:py-32 px-6 md:px-[8%] bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <AnimatedSectionTitle>Hubungi Saya</AnimatedSectionTitle>

            <motion.div
                className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto relative z-10"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={FadeInUp}
            >
                <motion.div variants={FadeInUp} className="lg:w-1/3 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-white mb-6">Siap membantu proyek Anda</h2>
                    <p className="mb-8 text-gray-300 leading-relaxed text-lg">
                        Jika Anda membutuhkan dukungan desain atau pengembangan, silakan kirim detail kebutuhan melalui formulir. Saya akan segera menghubungi Anda.
                    </p>
                    <div className="space-y-6 mb-10">
                        <p className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 group">
                            <span className="p-3 bg-gray-900 rounded-full text-pink-500 group-hover:text-white group-hover:bg-pink-500 transition-all duration-300">
                                <FaPaperPlane className="w-5 h-5" />
                            </span>
                            riskiinferno@email.com
                        </p>
                        <p className="flex items-center justify-center lg:justify-start gap-4 text-gray-300 group">
                            <span className="p-3 bg-gray-900 rounded-full text-pink-500 group-hover:text-white group-hover:bg-pink-500 transition-all duration-300">
                                <FaPhone className="w-5 h-5" />
                            </span>
                            +62895417240107
                        </p>
                    </div>

                    <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
                        {[
                            { icon: <FaWhatsapp />, href: "https://api.whatsapp.com/send?phone=62895417240107" },
                            { icon: <FaTwitter />, href: "https://x.com/RFadetra22905" },
                            { icon: <FaInstagram />, href: "https://instagram.com/p.rizqy_detra" },
                            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rizki-fadetra" },
                            { icon: <FaGithub />, href: "https://github.com/Rizkek" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-white hover:bg-pink-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={FadeInUp} className="lg:w-2/3">
                    <form ref={form} onSubmit={sendEmail} className="bg-gray-900/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-800">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    placeholder="Masukkan nama Anda"
                                    className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-500"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">Alamat Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    placeholder="contoh@email.com"
                                    className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-500"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Tuliskan pesan atau detail proyek Anda..."
                                    rows="5"
                                    className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-pink-500/30 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengirim...
                                    </span>
                                ) : 'Kirim Pesan'}
                            </button>

                            {formStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                                >
                                    Pesan berhasil dikirim! Terima kasih telah menghubungi saya.
                                </motion.div>
                            )}
                            {formStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                                >
                                    Gagal mengirim pesan. Silakan coba lagi nanti atau hubungi via WhatsApp.
                                </motion.div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Contact;
