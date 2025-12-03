import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import {
  FaArrowLeft, FaExternalLinkAlt, FaGithub, FaEye, FaCalendar,
  FaUser, FaTags, FaFigma, FaPalette, FaTimes
} from 'react-icons/fa';
import backgroundMusic from '/audio/gema.mp3';
import filmBullyingVideo from '/audio/film-bullying.mp4';

const FadeInUp = {
  intial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  }
}
// DATA PORTOFOLIO
const portfolioData = {
  "desain-graphic": {
    title: "Graphic Design",
    description: "Koleksi desain grafis untuk berbagai klien, mulai dari logo hingga elemen visual lainnya",
    projects: [
      {
        id: 1,
        title: "Logo R",
        image: "/images/work-1.png",
        description: "Logo ini menggabungkan huruf “R” dengan kepala elang, membentuk simbol yang kuat dan elegan. Warna silver memberi kesan modern, tajam, dan profesional. Elang melambangkan visi tajam, kekuatan, dan kepemimpinan—sedangkan huruf R menunjukkan identitas brand yang tegas dan berkarakter. Sangat cocok untuk branding yang ingin tampil kuat, visioner, dan berwibawa.",
        client: "Tugas Kuliah",
        year: "2023",
        duration: "1 hari",
        tools: ["Adobe Illustrator"],
        liveLink: "#",
        github: "#",
        designLink: "#",
      },
      {
        id: 2,
        title: "Logo Wibuntu",
        image: "/images/works-2.png",
        description: "Logo Wibuntu menampilkan huruf 'W' bergaya modern dengan gradasi oranye yang mencerminkan semangat dan inovasi. Tulisan ウィブントゥ di bawahnya (dibaca: Wibuntu) memberi sentuhan Jepang yang unik. Nama Wibuntu sendiri menggabungkan 'Wibu' dan 'Ubuntu', merepresentasikan distro Linux yang berjiwa open-source namun dibalut dengan nuansa budaya Jepang yang kreatif dan khas.",
        client: "UAS Kuliah",
        year: "2025",
        duration: "1 hari",
        tools: ["Adobe Illustrator", "Canva"],
        liveLink: "#",
        github: "#",
        designLink: "#",
      }
    ]
  },
  "ui-ux": {
    title: "UI/UX Design",
    description: "Pengalaman pengguna yang intuitif dan antarmuka yang menarik untuk aplikasi web dan mobile.",
    projects: [
      {
        id: 3,
        title: "E-CHECK",
        image: "/images/porto-1.png",
        description: "E-Check adalah aplikasi absensi berbasis mobile yang dirancang untuk mempermudah proses pencatatan kehadiran karyawan di lingkungan perusahaan. Aplikasi ini mendukung berbagai fitur utama seperti absen masuk/keluar, pengajuan cuti dan izin, pengaturan jadwal kerja, serta pengingat waktu kerja. Melalui tampilan antarmuka yang sederhana dan mudah digunakan, karyawan dapat melakukan absensi langsung dari smartphone mereka, mengakses kalender kerja, serta melihat status absensi pribadi. Dari sisi admin, aplikasi ini memungkinkan pengelolaan jadwal shift, validasi cuti, hingga penyusunan laporan absensi bulanan secara otomatis. Dengan E-Check, perusahaan bisa menghemat waktu dalam proses administrasi absensi sekaligus meningkatkan efisiensi dan kedisiplinan kerja.",
        client: "UNKIBAR",
        year: "2024",
        duration: "1 bulan",
        tools: ["Figma"],
        liveLink: "#",
        github: "#",
        designLink: "https://www.figma.com/design/mbHkuupxIQOp0k9vsyxlfv/E-CHECK?node-id=0-1&t=7jn5zE1Kqz8vW201-1",
      },
      {
        id: 9,
        title: "Digi By Bank BJB",
        image: "/images/porto-3.png",
        description: "Proyek ini merupakan redesign aplikasi mobile Digi by Bank BJB yang berfokus pada peningkatan antarmuka (UI) dan pengalaman pengguna (UX). Tujuan utama redesign ini adalah menghadirkan tampilan yang lebih modern, bersih, dan konsisten dengan identitas brand Bank BJB, sekaligus mempermudah pengguna dalam melakukan navigasi maupun transaksi perbankan.",
        client: "UAS Kampus",
        year: "2024",
        duration: "1 minggu",
        tools: ["Figma"],
        liveLink: "#",
        github: "#",
        designLink: "https://www.figma.com/design/wWi79ytjz6A8NgxkgqMVBJ/UAS-IMK?node-id=3-25&t=MLAHBf4P8WaAl9Y9-1",
      },
      {
        id: 8,
        title: "Codyssey",
        image: "/images/porto-2.png",
        description: "Codyssey adalah aplikasi edukasi berbasis mobile yang menggabungkan pembelajaran dasar pemrograman dengan elemen permainan petualangan. Pengguna, khususnya pelajar dan pemula, akan diajak menyelesaikan berbagai tantangan (quest) berupa teka-teki kode sambil bertualang menghadapi monster yang mewakili berbagai kesalahan logika maupun sintaksis. Melalui pendekatan gamifikasi dan tampilan visual yang menarik, Codyssey hadir untuk menumbuhkan minat belajar coding secara lebih menyenangkan dan interaktif.",
        client: "Lomba UI/IX",
        year: "2025",
        duration: "1 minggu",
        tools: ["Figma"],
        liveLink: "#",
        github: "#",
        designLink: "https://www.figma.com/design/Q2czsmwuTEcxvNqGbZTyjE/Lomba-UI-Edutech?node-id=0-1&t=sSuXCenMnGFekoeO-1",
      }
    ]
  },
  "web-development": {
    title: "Web Development",
    description: "Pengembangan website modern dengan teknologi terkini dan performa optimal.",
    projects: [
      {
        id: 10,
        title: "Website Ngajar.id",
        image: "/images/work-2.jpg",
        description: "Website pemebalajaran yang responsive dan SEO-friendly dengan CMS custom untuk easy content management.",
        client: "UAS Kampus",
        year: "2025",
        duration: "2 minggu",
        tools: ["PHP Native", "Tailwind CSS", "JavaScript", "MySQL"],
        liveLink: "#",
        github: "https://github.com/NasiHangat/Ngajar.id",
        designLink: "#",
      },
      {
        id: 11,
        title: "Website TopApin",
        image: "/images/work-05.jpg",
        description: "TopApin adalah platform top-up game berbasis website yang menawarkan layanan cepat, aman, dan mudah. Dengan sistem transaksi otomatis, metode pembayaran lengkap (e-wallet, transfer bank, pulsa, kartu kredit), dan promo menarik seperti cashback hingga 90%, TopApin hadir sebagai solusi bagi gamer Indonesia yang membutuhkan pengalaman transaksi digital yang efisien dan terpercaya.",
        client: "UAS Kampus",
        year: "2025",
        duration: "1 minggu",
        tools: ["JavaScript", "HTML", "CSS"],
        liveLink: "https://nasihangat.github.io/TopApin/Index.html",
        github: "https://github.com/NasiHangat/TopApin",
        designLink: "#",
      },
      {
        id: 12,
        title: "Website Company Profile",
        image: "/images/work-7.jpg",
        description: "Compro Divus adalah website untuk mempromosikan perusahaan konsultan",
        client: "PT Divus",
        year: "2025",
        duration: "2 Bulan",
        tools: ["Next.js", "Tailwind CSS"],
        liveLink: "#",
        github: "https://github.com/dadunch/next-divus",
        designLink: "https://www.figma.com/design/yeOnnqMimQEy4LiOkUvVYG/Redesign-UI-Divus?node-id=754-247&t=1h2KzfUZ91L9fssI-1",
      },
      {
        id: 13,
        title: "Website Portofolio Pribadi",
        image: "/images/work-6.jpg",
        description: "Ini adalah website portofolio pribadi yang menawarkan informasi tentang saya, pengalaman kerja, dan proyek-proyek yang pernah saya kerjakan.",
        client: "Self",
        year: "2025",
        duration: "3 minggu",
        tools: ["React.js", "Tailwind CSS"],
        liveLink: "https://real-porto.vercel.app",
        github: "https://github.com/Rizkek/RealPorto",
        designLink: "#",
      }
    ]
  },
  "editing-film": {
    title: "Video Editing",
    description: "Editing video berkualitas tinggi untuk berbagai kebutuhan konten digital.",
    projects: [
      {
        id: 14,
        title: "Film Bullying",
        image: "/images/work-3.jpg",
        description: "Film pendek ini menggambarkan bagaimana tekanan, perundungan, dan sikap diam di lingkungan sekolah bisa menjadi luka yang tak terlihat. Lewat sudut pandang korban, kita diajak menyadari bahwa tidak semua tawa adalah tanda baik-baik saja. Kadang, seseorang menyerah... saat semua sudah terlalu sunyi.",
        client: "Tugas SMK",
        year: "2023",
        duration: "2 minggu",
        tools: ["Adobe Premiere Pro", "After Effects"],
        liveLink: "#",
        github: "#",
        designLink: "#",
        videoUrl: filmBullyingVideo,
      }
    ]
  }
};

// KOMPONEN PROJECT CARD
const ProjectCard = ({ project, onClick }) => (
  <div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group outline-none border-none"
    onClick={() => onClick(project)}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform aspect-video" // <-- Ubah h-XX menjadi aspect-video
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaEye className="text-white text-xl" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <FaCalendar />
        <span>{project.year}</span>
        <span>•</span>
        <FaUser />
        <span>{project.client}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {project.description.substring(0, 120)}...
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tools.slice(0, 3).map((tool, idx) => (
          <span key={idx} className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full">
            {tool}
          </span>
        ))}
        {project.tools.length > 3 && (
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
            +{project.tools.length - 3} more
          </span>
        )}
      </div>
    </div>
  </div>
);

// KOMPONEN PROJECT MODAL
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const videoElementRef = useRef(null);

  // Logic for video playback
  useEffect(() => {
    const startVideoPlayback = () => {
      if (videoElementRef.current) {
        videoElementRef.current.muted = true;
        videoElementRef.current.play().catch(error => {
        });

        const handleInteraction = () => {
          if (videoElementRef.current && videoElementRef.current.muted) {
            videoElementRef.current.muted = false;
          }
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        };
        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        return () => {
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        };
      }
    };

    if (project.videoUrl && videoElementRef.current) {
      videoElementRef.current.addEventListener('loadedmetadata', startVideoPlayback);

      return () => {
        if (videoElementRef.current) {
          videoElementRef.current.removeEventListener('loadedmetadata', startVideoPlayback);
        }
      };
    }
  }, [project.videoUrl]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {project.videoUrl ? (
            <div className="w-full bg-black flex items-center justify-center overflow-hidden relative">
              <video
                ref={videoElementRef}
                src={project.videoUrl}
                title={project.title}
                controls
                preload="auto"
                className="w-full h-auto object-contain"
                style={{ maxHeight: 'calc(90vh - 200px)' }}
              >
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-video"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-30"
            aria-label="Tutup Modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Detail judul */}
        <div className="p-8 pt-4">
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-pink-400 font-medium mb-6">{project.client} • {project.year}</p>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-pink-400 font-semibold mb-2">Duration</h4>
              <p className="text-white">{project.duration}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-pink-400 font-semibold mb-2">Client</h4>
              <p className="text-white">{project.client}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-pink-400 font-semibold mb-2">Year</h4>
              <p className="text-white">{project.year}</p>
            </div>
          </div>

          <div className="bg-gray-900/60 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <FaEye className="text-pink-400" /> Project Description
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaTags /> Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Bagian tombol*/}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 group"
              >
                <FaExternalLinkAlt className="group-hover:rotate-6 transition-transform duration-300" />
                View Live
              </a>
            )}
            {project.designLink && project.designLink !== "#" && (
              <a
                href={project.designLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-400/30 transform hover:scale-105 transition-all duration-300 group"
              >
                {project.tools.includes("Figma") || project.tools.includes("Adobe XD") || project.tools.includes("Canva") ? <FaFigma className="group-hover:rotate-6 transition-transform duration-300" /> : <FaPalette className="group-hover:rotate-6 transition-transform duration-300" />}
                View Design
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-gray-600/30 transform hover:scale-105 transition-all duration-300 group"
              >
                <FaGithub className="group-hover:rotate-6 transition-transform duration-300" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.play().catch(error => {
      });
    }
  }, [src, isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
      if (!audioRef.current.muted) {
        audioRef.current.play().catch(error => console.error("Error playing after unmute:", error));
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        autoPlay
        muted={isMuted}
        preload="auto"
        style={{ display: 'none' }}
      />
      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '18px'
        }}
        title={isMuted ? "Matikan Musik" : "Putar Musik"}
        aria-label={isMuted ? "Matikan Musik" : "Putar Musik"}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </>
  );
};

export default function PortfolioCategory() {
  const { category } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categoryData = portfolioData[category];
  const allCategories = Object.keys(portfolioData);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Kategori tidak ditemukan</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            aria-label="Kembali ke Beranda"
          >
            <FaArrowLeft />
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <LocalAudioPlayer src={backgroundMusic} />
      <div className="min-w-7xl bg-gray-900 text-white">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-pink-900/30 to-violet-900/30 py-24 pb-8">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10"></div>
          <div className="relative px-[8%] max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mb-8"
              aria-label="Kembali ke Portofolio"
            >
              <FaArrowLeft />
              Kembali ke Portfolio
            </Link>

            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent pb-2 leading-normal">
                {categoryData.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {categoryData.description}
              </p>
              <div className="mt-8">
                <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">
                  {categoryData.projects.length} Project{categoryData.projects.length > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Category Navbar */}
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-4">
                {allCategories.map((catKey) => (
                  <Link
                    key={catKey}
                    to={`/portfolio/${catKey}`}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${catKey === category
                        ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-md'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    aria-label={`Lihat kategori ${portfolioData[catKey].title}`}
                  >
                    {portfolioData[catKey].title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-16 px-[8%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-900/20 to-violet-900/20 py-16 px-[8%]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tertarik dengan Portfolio Saya?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Mari berkolaborasi untuk mewujudkan project impian Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-to-r from-pink-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                aria-label="Hubungi Saya"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}