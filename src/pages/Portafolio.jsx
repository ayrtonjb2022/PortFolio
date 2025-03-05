import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiActivity } from 'react-icons/fi';
import { IoMdSchool } from 'react-icons/io';
import { SiJavascript } from "react-icons/si";
import img from '../assets/Gestor.png';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);


  const projects = [
    {
      title: "Sistema de Gestión de Tareas",
      description: "Plataforma en línea para organizar, priorizar y seguir el progreso de tareas y proyectos.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      image: img,
      href: "https://gestor-task-bay.vercel.app/"
    },


  ];

  const skills = ["JavaScript", "React", "Node.js", "SQL", "Git", "Tailwind"];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar Simple */}
      <nav className="p-6 border-b border-blue-900">
        <h1 className="text-2xl font-bold text-blue-400">Ayrton</h1>
      </nav>

      {/* Sección Principal */}
      <main className="container mx-auto px-4 py-12">
        {/* Descripción y Habilidades */}
        <section className="mb-20">
          <div className="max-w-2xl mb-8">
            <h2 className="text-4xl font-bold mb-4">Desarrollador Full Stack</h2>
            <p className="text-gray-400 text-lg">
              Apasionado por crear soluciones tecnológicas innovadoras.
              Especializado en desarrollo web y aplicaciones escalables.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl text-blue-400">Tecnologías</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-900/50 rounded-full text-blue-300 border border-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Carrusel de Proyectos */}
        <section className="mb-20">
          <h3 className="text-2xl text-blue-400 mb-8">Proyectos Destacados</h3>

          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-6 scrollbar-hide">
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[90%] md:min-w-[45%] snap-center bg-gray-900 rounded-xl p-6 border border-blue-900/50"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <a href={project.href}><h4 className="text-xl font-semibold mb-2 hover:text-blue-400">{project.title}</h4></a>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black text-blue-400 rounded-full text-sm border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Estudios */}
        <section className="mb-20">
          <h3 className="text-2xl text-blue-400 mb-6">Formación Académica</h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-blue-900/50">
            <div className="boxD flex justify-between">
              <h4 className="text-lg font-semibold mb-2"><IoMdSchool />Tecnicatura En Programacion</h4>
              <h3 className="text-green-400" > <FiActivity /> Cursando</h3>
            </div>
            <p className="text-gray-400">UTN Reconquista</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-900/20 to-transparent border-t border-blue-900">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Contáctame</h2>
              <div className="flex gap-4">
                <a href="https://github.com/ayrtonjb2022" className="text-gray-400 hover:text-blue-400 transition">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ayrton-benitez-28a9bb251/" className="text-gray-400 hover:text-blue-400 transition">
                  <FiLinkedin size={24} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=benitezayrton.15@gmail.com&body=Hola%20Ayrton!!." target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                  <FiMail size={24} />
                </a>



              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">"Transformando ideas en soluciones digitales"</p>
              <p className="text-sm text-gray-600">© 2024 Ayrton. Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;