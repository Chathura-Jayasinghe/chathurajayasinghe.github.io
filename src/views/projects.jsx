import { useState, useEffect, useRef } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

// Custom hook for detecting when an element is visible in viewport
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

const Projects = () => {
  // References for animations
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [projectsRef, areProjectsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "DARBFs-ICCV 2025(under review)",
      year: 2025,
      image: "/projects/darbfs.png",
      description:
        "A 3D reconstruction pipeline leveraging decaying anisotropic radial basis functions (DARBFs) as a generalization of Gaussian splatting. Achieved up to 34% faster training and 15% lower memory usage while preserving reconstruction quality (PSNR, SSIM, LPIPS).",
      github: "https://github.com/viruthshaan/darb-splatting",
      liveDemo: "https://randomnerds.github.io/darbs.github.io/",
      tags: ["ICCV 2025", "Computer Vision", "Research"],
    },
    {
      id: 2,
      title: "SPLATVISTA-WebGL 3DGS Viewer",
      year: "Ongoing",
      image: "/projects/splatvista.png",
      description:
        " A WebGL-based virtual tour platform using Gaussian Splatting for real-time 3D scene exploration. Enables immersive navigation and interactive transitions between photorealistic environments.",
      github: "https://github.com/Vgr20/ThreeJS_Splatting",
      liveDemo: "https://github.com/Vgr20/ThreeJS_Splatting",
      tags: ["WebGL", "React"],
    },
    {
      id: 3,
      title: "Cosmo Cruise - WebGL FPS Game",
      year: 2024,
      image: "/projects/cosmo_cruise.png",
      description:
        "A WebGL-based third-person space adventure game that integrates real-life energy management strategies into gameplay for an educational yet immersive experience",
      github: "https://github.com/EnergySquad/Phase03_Game",
      liveDemo: "https://github.com/EnergySquad/Phase03_Game",
      tags: ["WebGL", "Unity"],
    },
    {
      id: 4,
      title: "GoGetOn-Mobile Task Manager",
      year: 2023,
      image: "/projects/gogeton.png",
      description:
        "“GoGetOn”, a productivity mobile application with AI features to convert your distant dream of being productive into a convenient choice. ",
      github: "https://github.com/Vgr20/DOit/tree/UpDateReadMe",
      liveDemo: "https://github.com/Amrithshagar/GoGetOn-Backend",
      tags: ["React Native"],
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      year: 2025,
      image: "/projects/portfolio.png",
      description:
        "A responsive personal portfolio website showcasing skills, projects, and contact information using React and Tailwind CSS (this site!).",
      github: "https://github.com/Vgr20/vgr20.github.io",
      liveDemo: "https://example.com",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "KeyBay-Online Marketplace",
      year: 2022,
      image: "/projects/keybay.png",
      description:
        "A prototype for an online marketplace platform featuring product listings, search and filter functionality, secure checkout, and user account management, designed for a smooth and scalable e-commerce experience.",
      github: "https://github.com/Vgr20/KeyBay",
      liveDemo: "https://github.com/Vgr20/KeyBay",
      tags: ["Java", "Java Swing"],
    },
    {
      id: 7,
      title: "KOP - Own Music Composition",
      year: 2024,
      image: "/projects/kop.jpeg",
      description:
        "A soulful love track, captivating the emotions of human life. An original song fully composed, arranged, and produced by me",
      github: "https://www.youtube.com/@stavemusicalcrew2495",
      liveDemo:
        "https://www.youtube.com/watch?v=fNJUb6_OiGQ&ab_channel=STAVEMusicalCrew",
      tags: ["Music", "Composition"],
    },
    {
      id: 8,
      title: "Pogathey-From Mix to Master",
      year: 2025,
      image: "/projects/pogathey.jpeg",
      description:
        "A catchy track. Engineered the mixing and mastering of this track, enhancing clarity, balance, and dynamics for a polished, professional sound.",
      github: "https://www.youtube.com/@ATScreation_official",
      liveDemo: "https://youtu.be/y7qcyw55io8?feature=shared",
      tags: ["Music", "Mixing", "Mastering"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-rose-600 mb-2 uppercase tracking-wider font-medium">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-900 bg-clip-text text-transparent">
            Projects and Publications
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500 ${
            areProjectsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={(index % 3) * 200} // Stagger animation by column
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, delay = 0 }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`bg-zinc-800 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-sky-600/20 border border-gray-700 transform hover:-translate-y-2 hover:bg-zinc-900 ${
        isCardVisible
          ? `opacity-100 translate-y-0 delay-${delay}`
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="relative group h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Project Title */}
      <h3 className="text-rose-500 font-medium tracking-wide text-lg px-6 pt-6 pb-2">
        {project.title}
      </h3>
      <h3 className="text-teal-500 tracking-wide text-sm px-6 pb-2">
        {project.year}
      </h3>

      {/* Project Links */}
      <div className="flex space-x-2 px-6 mb-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <FaGithub className="text-white" />
        </a>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <FaGlobe className="text-white" />
        </a>
      </div>

      {/* Project Description */}
      <p className="text-gray-300 px-6 pb-6 text-sm">{project.description}</p>
      {/* Tags */}
      <div className="flex flex-wrap px-6 pb-6 space-x-2">
        <span className="s">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded-md mr-2 mb-2 hover:bg-rose-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Projects;
