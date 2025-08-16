import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiActivity, FiArrowRight } from 'react-icons/fi';
import { IoMdSchool, IoMdRocket } from 'react-icons/io';

const Portfolio = () => {
  const [stars, setStars] = useState([]);
  const [satellitePosition, setSatellitePosition] = useState({ x: -100, y: 50 });
  const [astronautPosition, setAstronautPosition] = useState({ x: 100, y: 70 });

  // Generar estrellas para el fondo
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        opacity: Math.random() * 0.8 + 0.2,
        delay: `${Math.random() * 5}s`
      });
    }
    setStars(newStars);
    
    // Mover satélite
    const satelliteInterval = setInterval(() => {
      setSatellitePosition(prev => {
        const newX = prev.x + 0.5;
        if (newX > 100) {
          return { x: -100, y: Math.random() * 100 };
        }
        return { x: newX, y: prev.y };
      });
    }, 50);
    
    // Mover astronauta
    const astronautInterval = setInterval(() => {
      setAstronautPosition(prev => {
        const newY = prev.y + Math.sin(Date.now() / 2000) * 0.1;
        return { x: prev.x, y: newY };
      });
    }, 100);

    return () => {
      clearInterval(satelliteInterval);
      clearInterval(astronautInterval);
    };
  }, []);

  const project = {
    title: "Sistema de Comercio Electrónico",
    description: "Plataforma completa de comercio electrónico con carrito de compras, autenticación de usuarios, pasarela de pago y panel de administración. Desarrollada con las últimas tecnologías web para garantizar escalabilidad y seguridad.",
    features: [
      "Gestión de productos y categorías",
      "Carrito de compras intuitivo",
      "Sistema de autenticación JWT",
      "Pasarela de pago integrada",
      "Panel de administración completo"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    href: "https://comercioappf.onrender.com/"
  };

  const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "TailwindCSS", "JWT", "Redux"];

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden relative">
      {/* Fondo estelar */}
      <div className="fixed inset-0 -z-50">
        {stars.map(star => (
          <div 
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>
      
      {/* Satélite Starlink */}
      <div 
        className="absolute z-0 transition-all duration-1000"
        style={{
          left: `${satellitePosition.x}%`,
          top: `${satellitePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
          <div className="absolute top-1 left-4 w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="absolute top-1 left-8 w-4 h-2 bg-gray-300 rounded-full"></div>
          <div className="absolute top-1 left-12 w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="absolute top-0 -right-2 w-8 h-1 bg-gray-500 transform rotate-45"></div>
          <div className="absolute top-3 -right-2 w-8 h-1 bg-gray-500 transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Astronauta */}
      <div 
        className="absolute z-0 transition-all duration-300"
        style={{
          left: `${astronautPosition.x}px`,
          top: `${astronautPosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="absolute top-8 left-1 w-6 h-8 bg-white rounded-t-full"></div>
          <div className="absolute top-16 left-0 w-8 h-4 bg-white"></div>
          <div className="absolute top-10 left-8 w-6 h-2 bg-white transform rotate-45"></div>
          <div className="absolute top-10 left-6 w-2 h-6 bg-white transform -rotate-45"></div>
          <div className="absolute top-14 left-8 w-6 h-2 bg-white transform rotate-45"></div>
          <div className="absolute top-14 left-6 w-2 h-6 bg-white transform -rotate-45"></div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="p-6 border-b border-blue-900/30 bg-black/20 backdrop-blur-md z-20 relative">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400 animate-pulse">Ayrton Benítez</h1>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400">Disponible para trabajar</span>
          </div>
        </div>
      </nav>

      {/* Sección Principal */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
            <h1 className="text-5xl md:text-7xl font-bold relative bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Desarrollador Full Stack
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
            Transformo ideas en <span className="text-blue-400">soluciones digitales</span> escalables y de alto rendimiento. Especializado en el desarrollo de aplicaciones web modernas.
          </p>
          
          <a 
            href="#proyecto-destacado" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center"
          >
            Ver Proyecto Destacado <FiArrowRight className="ml-2" />
          </a>
        </section>

        {/* Proyecto Destacado */}
        <section id="proyecto-destacado" className="mb-20">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text inline-block">
              Proyecto Destacado
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-md rounded-3xl p-8 border border-blue-700/30 shadow-2xl shadow-blue-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <IoMdRocket className="text-4xl text-blue-400 mr-3" />
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-blue-300">Características principales:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 border border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                >
                  Visitar Proyecto
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl transform -rotate-6"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-blue-700/30 p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-6 bg-blue-900/30 rounded-full mb-6">
                      <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-blue-400">Sistema de Comercio Electrónico</h4>
                    <p className="text-gray-400 mt-2">Plataforma completa de ventas online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="mb-20">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text inline-block">
              Tecnologías
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-md rounded-2xl p-6 border border-blue-700/30 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
              >
                <span className="text-xl font-medium text-blue-300">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Formación Académica */}
        <section className="mb-20">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text inline-block">
              Formación
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-md rounded-3xl p-8 border border-blue-700/30 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center">
              <div className="mr-6">
                <div className="bg-blue-900/30 rounded-full p-5 border border-blue-700/50">
                  <IoMdSchool className="text-5xl text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Tecnicatura en Programación</h3>
                <p className="text-gray-300 mb-2">UTN Reconquista</p>
                <div className="flex items-center text-green-400">
                  <FiActivity className="mr-2 animate-pulse" />
                  <span>Cursando actualmente</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-900/20 to-transparent border-t border-blue-900/30 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Contacto</h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ayrtonjb2022" 
                  className="p-4 bg-blue-900/30 rounded-full border border-blue-700/50 hover:bg-blue-800/50 transition-all duration-300 hover:border-blue-500 group"
                >
                  <FiGithub 
                    size={24} 
                    className="text-gray-300 group-hover:text-white" 
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayrton-benitez-28a9bb251/" 
                  className="p-4 bg-blue-900/30 rounded-full border border-blue-700/50 hover:bg-blue-800/50 transition-all duration-300 hover:border-blue-500 group"
                >
                  <FiLinkedin 
                    size={24} 
                    className="text-gray-300 group-hover:text-white" 
                  />
                </a>
                <a 
                  href="mailto:benitezayrton.15@gmail.com" 
                  className="p-4 bg-blue-900/30 rounded-full border border-blue-700/50 hover:bg-blue-800/50 transition-all duration-300 hover:border-blue-500 group"
                >
                  <FiMail 
                    size={24} 
                    className="text-gray-300 group-hover:text-white" 
                  />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xl text-gray-300 mb-2">"La innovación distingue al líder del seguidor" - Steve Jobs</p>
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ayrton Benítez. Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Animaciones personalizadas */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(-10px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;