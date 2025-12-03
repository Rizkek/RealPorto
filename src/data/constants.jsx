import React from 'react';
import {
    FaTrophy, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaVideo, FaFilm, FaPaintBrush, FaMobileAlt, FaCode
} from 'react-icons/fa';
import {
    SiFigma, SiMysql, SiLaravel, SiAdobephotoshop, SiAdobeillustrator,
    SiCanva, SiCoreldraw, SiCplusplus, SiPython,
} from 'react-icons/si';
import {Link} from 'react-router-dom';

export const portfolioItems = [
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

export const awardsItems = [
    {
        image: "/images/Sertifikat-1.jpg",
        icon: <FaTrophy className="w-8 h-8" />,
        title: "Juara 3 Lomba Inovasi Digital",
        organizer: "HIMARPL",
        desc: "Meraih posisi ketiga dalam kompetisi UI/UX bertema EduTech.",
    },
    {
        image: "/images/Sertifikat-02.jpg",
        icon: <FaTrophy className="w-8 h-8" />,
        title: "Sertifikasi Digital Marketing",
        organizer: "Bootcamp 2025",
        desc: "Menyelesaikan pelatihan strategi branding dan pemasaran digital.",
    },
    {
        image: "/images/Sertifikat-3.jpg",
        icon: <FaTrophy className="w-8 h-8" />,
        title: "Sertifikasi Pemrograman",
        organizer: "Dicoding - 2025",
        desc: "Lulus kursus pemrograman dasar menggunakan Python.",
    }
];

export const designTools = [
    { icon: <SiAdobephotoshop className="text-blue-400" />, name: 'Photoshop' },
    { icon: <SiAdobeillustrator className="text-orange-500" />, name: 'Illustrator' },
    { icon: <SiFigma className="text-purple-500" />, name: 'Figma' },
    { icon: <SiCanva className="text-blue-500" />, name: 'Canva' },
    { icon: <SiCoreldraw className="text-green-500" />, name: 'Corel Draw' },
    { icon: <FaVideo className="text-purple-600" />, name: 'Premiere Pro' },
    { icon: <FaFilm className="text-violet-600" />, name: 'After Effects' },
];

export const programmingSkills = [
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

export const servicesItems = [
    { icon: <FaPaintBrush className="w-10 h-10" />, title: "Desain Grafis", desc: "Membantu membentuk identitas visual yang kuat melalui logo, poster, dan materi promosi lainnya." },
    { icon: <FaMobileAlt className="w-10 h-10" />, title: "Desain UI/UX", desc: "Mengerjakan antarmuka aplikasi yang modern, mudah dipahami, dan nyaman digunakan." },
    { icon: <FaVideo className="w-10 h-10" />, title: "Editing Video", desc: "Mengolah video untuk iklan, vlog, atau konten digital agar lebih menarik secara visual." },
    { icon: <FaCode className="w-10 h-10" />, title: "Web Development", desc: "Membangun website yang interaktif, responsif, dan profesional." }
];
