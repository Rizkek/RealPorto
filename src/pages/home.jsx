import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaBars, FaTimes, FaPaintBrush, FaMobileAlt, FaVideo,
  FaCode, FaBlender, FaFilm,
  FaPaperPlane, FaPhone, FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin, FaGithub,
  FaArrowRight, FaTrophy, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp,
} from 'react-icons/fa';
import {
  SiFigma, SiMysql, SiLaravel, SiAdobephotoshop, SiAdobeillustrator,
  SiCanva, SiCoreldraw, SiCplusplus, SiPython,
} from 'react-icons/si';

const EMAILJS_SERVICE_ID = 'service_0q6ypgb';
const EMAILJS_TEMPLATE_ID = 'template_f1x4g3k';
const EMAILJS_PUBLIC_KEY = 'x-FiMD85CrlsPgBSC';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AnimatedSectionTitle = ({ children }) => {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
    >
      {children}
    </motion.h1>
  );
};

const PortfolioModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative transform transition-all duration-300 scale-95 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">
          <FaTimes />
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-300 leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [tab, setTab] = useState("skills");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const form = useRef();

  const [text] = useTypewriter({
    words: ['Designer', 'Developer', 'Content Creator', 'UI/UX Enthusiast'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  const portfolioItems = [
    {
  id: 1,
  title: "Desainer Grafis",
  image: "/images/works-1.png",
  desc: "Menciptakan desain visual untuk branding, pemasaran, dan media digital maupun cetak, dari logo hingga materi promosi.",
  category: "desain-graphic",
},
{
  id: 2,
  title: "Desain UI/UX",
  image: "/images/work-4.png",
  desc: "Merancang antarmuka dan pengalaman pengguna yang intuitif, fungsional, dan estetis untuk aplikasi digital.",
  category: "ui-ux",
},
{
  id: 3,
  title: "Pengembangan Web",
  image: "/images/wkwk.jpg",
  desc: "Mengembangkan website yang responsif, interaktif, dan berorientasi pada performa dengan kode bersih.",
  category: "web-development",
},
{
  id: 4,
  title: "Editing Video",
  image: "/images/work-3.jpg",
  desc: "Mengolah rekaman video menjadi cerita visual yang menarik melalui editing, grading warna, dan mixing audio.",
  category: "editing-film",
}
  ];

  const awardsItems = [
    {
      image: "/images/sertifikat-1.jpg",
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Juara 3 Lomba Inovasi Digital",
      organizer: "HIMARPL",
      desc: "Meraih posisi ketiga dalam kompetisi UI/UX bertema EduTech.",
    },
    {
      image: "/images/sertifikat-02.jpg",
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Sertifikasi Digital Marketing",
      organizer: "Bootcamp 2025",
      desc: "Menyelesaikan pelatihan strategi branding dan pemasaran digital.",
    },
    {
      image: "/images/sertifikat-3.jpg",
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Sertifikasi Pemrograman",
      organizer: "Dicoding - 2025",
      desc: "Lulus kursus pemrograman dasar menggunakan Python.",
    }
  ];

  const designTools = [
    { icon: <SiAdobephotoshop className="text-blue-400" />, name: 'Photoshop' },
    { icon: <SiAdobeillustrator className="text-orange-500" />, name: 'Illustrator' },
    { icon: <SiFigma className="text-purple-500" />, name: 'Figma' },
    { icon: <SiCanva className="text-blue-500" />, name: 'Canva' },
    { icon: <SiCoreldraw className="text-green-500" />, name: 'Corel Draw' },
    { icon: <FaBlender className="text-orange-400" />, name: 'Blender' },
    { icon: <FaVideo className="text-purple-600" />, name: 'Premiere Pro' },
    { icon: <FaFilm className="text-violet-600" />, name: 'After Effects' },
  ];

  const programmingSkills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
    { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <FaPhp className="text-purple-400" />, name: 'PHP' },
    { icon: <SiLaravel className="text-red-500" />, name: 'Laravel' },
    { icon: <SiMysql className="text-blue-400" />, name: 'MySQL' },
    { icon: <SiPython className="text-yellow-400" />, name: 'Python' },
    { icon: <SiCplusplus className="text-blue-700" />, name: 'C++' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

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
    <>
      <div className="bg-gray-900 text-gray-300 font-sans scroll-smooth">
        {/* HEADER */}
        <motion.header
          id="header"
          className="w-full min-h-screen flex items-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/user.png')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm"></div>
          <div className="px-[8%] py-4 w-full z-10">
            {/* NAVBAR */}
            <motion.nav
              className="flex items-center justify-between"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
              </div>
              <ul className="hidden md:flex space-x-8 text-base">
                <li><a href="#header" className="hover:text-pink-500 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-pink-500 transition-colors duration-300">About</a></li>
                <li><a href="#services" className="hover:text-pink-500 transition-colors duration-300">Services</a></li>
                <li><a href="#portfolio" className="hover:text-pink-500 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#awards" className="hover:text-pink-500 transition-colors duration-300">Awards</a></li>
                <li><a href="#contact" className="hover:text-pink-500 transition-colors duration-300">Contact</a></li>
              </ul>
              <div onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <div className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 shadow-lg pt-24 px-6 z-40 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <ul className="flex flex-col items-center space-y-6">
                <li><a href="#header" onClick={toggleMenu} className="text-lg hover:text-pink-400">Home</a></li>
                <li><a href="#about" onClick={toggleMenu} className="text-lg hover:text-pink-400">About</a></li>
                <li><a href="#services" onClick={toggleMenu} className="text-lg hover:text-pink-400">Services</a></li>
                <li><a href="#portfolio" onClick={toggleMenu} className="text-lg hover:text-pink-400">Portfolio</a></li>
                <li><a href="#awards" onClick={toggleMenu} className="text-lg hover:text-pink-400">Awards</a></li>
                <li><a href="#contact" onClick={toggleMenu} className="text-lg hover:text-pink-400">Contact</a></li>
              </ul>
            </div>

            {/* HERO */}
            <motion.div
              className="mt-[20vh] text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.p variants={fadeInVariants} className="text-lg md:text-xl text-pink-400 min-h-[1.75rem]">
                <span>{text}</span>
                <Cursor cursorStyle='|' />
              </motion.p>
              <motion.h1 variants={fadeInVariants} className="text-5xl md:text-7xl mt-4 font-bold text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Rizqy</span>
              </motion.h1>
              <motion.p variants={fadeInVariants} className="mt-6 max-w-xl text-lg">
                Saya senang mengubah ide menjadi produk digital yang menarik dan fungsional. Saat ini berdomisili di Klaten, Indonesia.
              </motion.p>
              <motion.a
                variants={fadeInVariants}
                href="/images/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-pink-700 transform hover:scale-105 transition-all duration-300"
              >
                Lihat CV
              </motion.a>
            </motion.div>
          </div>
        </motion.header>

        {/* ABOUT */}
        <section id="about" className="py-24 px-[8%]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/3"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src="/images/27.jpg" alt="Tentang Saya" className="rounded-2xl w-full shadow-2xl transform hover:scale-105 transition-transform duration-500" />
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
                className="text-justify mb-8 leading-relaxed"
              >
                Saya lulusan SMK Multimedia dan saat ini melanjutkan pendidikan S1 di bidang Rekayasa Perangkat Lunak. 
                Memiliki pengalaman di dunia desain visual, UI/UX, serta produksi foto dan video untuk mendukung berbagai kebutuhan kreatif.
              </motion.p>

              {/* TAB ABOUT */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-wrap gap-4 text-white mb-6 bg-gray-800 p-2 rounded-lg"
              >
                <motion.button
                  variants={itemVariants}
                  onClick={() => setTab("skills")}
                  className={`flex-1 py-2 px-4 rounded-full text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 ${tab === "skills" ? "bg-pink-600 shadow-md" : "bg-transparent hover:bg-gray-700"}`}
                >
                  Keahlian
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => setTab("experience")}
                  className={`flex-1 py-2 px-4 rounded-full text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 ${tab === "experience" ? "bg-pink-600 shadow-md" : "bg-transparent hover:bg-gray-700"}`}
                >
                  Pengalaman
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={() => setTab("education")}
                  className={`flex-1 py-2 px-4 rounded-full text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 ${tab === "education" ? "bg-pink-600 shadow-md" : "bg-transparent hover:bg-gray-700"}`}
                >
                  Pendidikan
                </motion.button>
              </motion.div>

              {/* TAB CONTENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white bg-gray-800 p-6 rounded-lg min-h-[180px]"
                >
                  {tab === "skills" && (
                    <p className="text-center text-gray-300">
                      Menguasai desain grafis, UI/UX, fotografi & video, serta pengembangan website.
                    </p>
                  )}
                  {tab === "experience" && (
                    <ul className="list-disc list-inside space-y-2">
                      <li><span className="font-semibold text-pink-400">Kasir / Pramuniaga | Wishmart HPJ</span> (Jun 2024 - Ags 2024)</li>
                      <li><span className="font-semibold text-pink-400">Desainer | Almira Bakul Akrilik</span> (Mei 2023 - Jul 2023)</li>
                      <li><span className="font-semibold text-pink-400">Desainer Multimedia | Studio E&E</span> (Jan 2022 - Apr 2022)</li>
                    </ul>
                  )}
                  {tab === "education" && (
                    <ul className="list-disc list-inside space-y-2">
                      <li><span className="font-semibold text-pink-400">S1 Rekayasa Perangkat Lunak | UPI</span> (2023 - Sekarang)</li>
                      <li><span className="font-semibold text-pink-400">SMK Multimedia</span> (2020 - 2023)</li>
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-[8%] bg-gray-800">
          <AnimatedSectionTitle>Layanan Saya</AnimatedSectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {[
              { icon: <FaPaintBrush className="w-10 h-10" />, title: "Desain Grafis", desc: "Membantu membentuk identitas visual yang kuat melalui logo, poster, dan materi promosi lainnya." },
              { icon: <FaMobileAlt className="w-10 h-10" />, title: "Desain UI/UX", desc: "Mengerjakan antarmuka aplikasi yang modern, mudah dipahami, dan nyaman digunakan." },
              { icon: <FaVideo className="w-10 h-10" />, title: "Editing Video", desc: "Mengolah video untuk iklan, vlog, atau konten digital agar lebih menarik secara visual." },
              { icon: <FaCode className="w-10 h-10" />, title: "Web Development", desc: "Membangun website yang interaktif, responsif, dan profesional." }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 25px rgba(236, 72, 153, 0.4)" }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg group transition-all duration-300 transform cursor-pointer"
              >
                <div className="text-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-[8%]">
          <AnimatedSectionTitle>Skillset & Tools</AnimatedSectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
                {designTools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.4)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gray-800 flex flex-col items-center justify-center p-2
                               shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer border border-gray-700 hover:border-pink-500 group"
                  >
                    <div className="text-5xl md:text-6xl z-10 transition-colors duration-300 group-hover:text-white">
                      {tool.icon}
                    </div>
                    <span className="absolute bottom-2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {tool.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-violet-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
                {programmingSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, rotate: -5, boxShadow: "0px 10px 20px rgba(139, 92, 246, 0.4)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gray-800 flex flex-col items-center justify-center p-2
                               shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer border border-gray-700 hover:border-violet-500 group"
                  >
                    <div className="text-5xl md:text-6xl z-10 transition-colors duration-300 group-hover:text-white">
                      {skill.icon}
                    </div>
                    <span className="absolute bottom-2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {skill.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-24 px-[8%]">
          <AnimatedSectionTitle>Portofolio Saya</AnimatedSectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {portfolioItems.map(item => (
              <motion.div key={item.id} variants={itemVariants}>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                  className="rounded-xl relative group overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                    <Link className="text-pink-400 hover:text-pink-800" to={`/portfolio/${item.category}`}>
                      Lihat Detail
                      <FaArrowRight className="inline-block ml-2" />
                    </Link>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* AWARDS */}
        <section id="awards" className="py-24 px-[8%] bg-gray-800">
          <AnimatedSectionTitle>Penghargaan & Sertifikasi</AnimatedSectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {awardsItems.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0px 15px 25px rgba(236, 72, 153, 0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="bg-gray-900 rounded-xl shadow-lg group transition-all duration-300 transform overflow-hidden cursor-pointer"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full aspect-4/3 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-pink-500">{award.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{award.title}</h2>
                      <h3 className="text-violet-400 font-semibold">{award.organizer}</h3>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <footer id="contact" className="py-24 px-[8%]">
          <AnimatedSectionTitle>Hubungi Saya</AnimatedSectionTitle>
          <motion.div
            className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white mb-4">Siap membantu proyek Anda</h2>
              <p className="mb-6">Jika Anda membutuhkan dukungan desain atau pengembangan, silakan kirim detail kebutuhan melalui formulir. Saya akan segera menghubungi Anda.</p>
              <div className="space-y-4">
                <p className="flex items-center justify-center lg:justify-start gap-3"><FaPaperPlane className="w-5 h-5 text-pink-500" /> riskiinferno@email.com</p>
                <p className="flex items-center justify-center lg:justify-start gap-3"><FaPhone className="w-5 h-5 text-pink-500" /> +62895417240107</p>
              </div>
              <div className="flex space-x-5 mt-8 justify-center lg:justify-start">
                <a href="https://api.whatsapp.com/send?phone=62895417240107" className="text-2xl text-gray-400 hover:text-pink-500 transform hover:scale-125 transition-all"><FaWhatsapp className="w-7 h-7" /></a>
                <a href="https://x.com/RFadetra22905" className="text-2xl text-gray-400 hover:text-pink-500 transform hover:scale-125 transition-all"><FaTwitter className="w-7 h-7" /></a>
                <a href="https://instagram.com/p.rizqy_detra" className="text-2xl text-gray-400 hover:text-pink-500 transform hover:scale-125 transition-all"><FaInstagram className="w-7 h-7" /></a>
                <a href="https://www.linkedin.com/in/rizki-fadetra" className="text-2xl text-gray-400 hover:text-pink-500 transform hover:scale-125 transition-all"><FaLinkedin className="w-7 h-7" /></a>
                <a href="https://github.com/Rizkek" className="text-2xl text-gray-400 hover:text-pink-500 transform hover:scale-125 transition-all"><FaGithub className="w-7 h-7"/></a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:w-2/3">
              <form ref={form} onSubmit={sendEmail} className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nama Anda"
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-pink-500 outline-none transition-colors"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Anda"
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-pink-500 outline-none transition-colors"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  rows="5"
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-pink-500 focus:ring-pink-500 outline-none transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-400 text-center">Pesan berhasil dikirim!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-400 text-center">Gagal mengirim pesan. Silakan coba lagi nanti.</p>
                )}
              </form>
            </motion.div>
          </motion.div>
          <div className="text-center text-gray-500 mt-24 border-t border-gray-700 pt-8">
            <p>Copyright © {new Date().getFullYear()} Rizqy.</p>
          </div>
        </footer>
      </div>
      <PortfolioModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
