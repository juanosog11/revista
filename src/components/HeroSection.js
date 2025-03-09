// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Importamos el archivo CSS separado

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const authors = [
    {
      name: 'Luna Vélez Cano',
      image: '/images/img-1.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'lvelezca@correo.iue.edu.co',
      bio: 'Soy estudiante de Ingeniería Informática con un fuerte interés en el desarrollo web, las bases de datos y la ciencia de datos. Me considero una persona responsable y disciplinada, en una búsqueda constante de crecimiento personal y profesional Disfruto aprendiendo y soy creativa, analítica y colaborativa. Me adapto fácilmente al cambio, lo que me permite abordar los desafíos desde perspectivas innovadoras y efectivas, contribuyendo de manera positiva en equipos de trabajo.',
      social: 'www.linkedin.com/in/luna-velez-cano',
    },
    {
      name: 'Susana Molina Rodriguez',
      image: '/images/img-2.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'smolinar@correo.iue.edu.co',
      bio: 'Soy una persona creativa y con iniciativa, con gran energía para el desarrollo de actividades, me destaco por mi actitud proactiva, disposición para el trabajo en equipo y capacidad para resolver problemas. Me apasiona el campo de la seguridad de la información y ciberseguridad, por lo que he tomado la línea de énfasis en Seguridad de la Información, lo que me ha permitido fortalecer mis conocimientos en la protección de datos y sistemas.Cuento con conocimientos básicos en herramientas como Excel, Microsoft Power BI y Visual Studio, así como en diversos lenguajes de programación, incluyendo Python, C#, R, HTML, CSS y PHP. Además, tengo experiencia en bases de datos estructuradas y no estructuradas, así como en herramientas para pruebas automatizadas y análisis de calidad de código.Me encuentro en constante aprendizaje y busco ampliar mis conocimientos en ciberseguridad, inteligencia artificial y gestión de bases de datos para fortalecer mi perfil profesional y aportar soluciones innovadoras en el ámbito tecnológico.',
    },
    {
      name: 'Juan Pablo Osorio Giraldo',
      image: '/images/img-3.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'jposoriog@correo.iue.edu.co',
      bio: 'Soy un estudiante apasionado de Ingeniería Informática con un fuerte interés en la tecnología, tanto en software como en hardware. Mi enfoque autónomo de aprendizaje me ha permitido adquirir habilidades en la creación de software innovador y resolver problemas complejos mediante la programación.',
      social: 'https://www.linkedin.com/in/juan-pablo-osorio-giraldo-5b3a272b8',
    },
    {
      name: 'Cristian Danilo Tobón Marulanda',
      image: '/images/img-4.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'cdtobon@correo.iue.edu.co',
      bio: 'Soy estudiante de octavo semestre de Ingeniería Informática en la Institución Universitaria de Envigado, con énfasis en Inteligencia Artificial, Big Data y Computación en la Nube. Me especializo en desarrollo de software, especialmente en el área de back-end como full stack.',
      social: 'https://www.linkedin.com/in/cristian-danilo-tobon-marulanda-1aa118322',
    },
    {
      name: 'Gustavo Adolfo Velásquez Granado',
      image: '/images/img-5.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'gavelasquezg@correo.iue.edu.co',
      bio: 'Soy estudiante de octavo semestre de Ingeniería Informática, con especialización en seguridad informática. Tengo conocimientos en análisis de vulnerabilidades, pruebas de seguridad, aseguramiento de la calidad del software y administración de sistemas operativos.',
      social: 'https://www.linkedin.com/in/gustavo-adolfo-velasquez-granado-2623a2231',
    },
    {
      name: 'Santiago Agudelo Durango',
      image: '/images/img-4.jpg',
      affiliation: 'Institución Universitaria de Envigado',
      email: 'sagudelod@correo.iue.edu.co',
      bio: 'Soy estudiante de séptimo semestre de ingeniería electrónica, de mi carrera me ha gustado todo lo que tenga que ver con redes, por ende, trabajo en una que tiene que ver con eso. También me interesa la robótica y la programación de sistemas autónomos.',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? authors.length - 1 : prev - 1));
    setShowDetails(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === authors.length - 1 ? 0 : prev + 1));
    setShowDetails(false);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setShowDetails(false);
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showDetails) {
        handleNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, showDetails]);

  return (
    <div className='gallery-container'>
      {/* Título */}
      <div className='gallery-title'>
        <h1>
          <span className='gallery-title-span'>Autores</span>
        </h1>
      </div>

      {/* Galería */}
      <div className='gallery-content'>
        <div className='gallery-slides'>
          {authors.map((author, index) => {
            // Calcular la posición y z-index basado en la distancia desde el índice activo
            const distance = Math.abs(index - activeIndex);
            const isActive = index === activeIndex;

            // Variables para la posición y estilo
            let zIndex = 10 - distance;
            let opacity = 1 - distance * 0.2;
            let scale = 1 - distance * 0.1;
            let translateX = 0;

            if (index < activeIndex) {
              translateX = -150 - (distance - 1) * 50;
            } else if (index > activeIndex) {
              translateX = 150 + (distance - 1) * 50;
            }

            const slideStyle = {
              zIndex,
              opacity: opacity > 0 ? opacity : 0,
              transform: `translateX(${translateX}px) scale(${scale})`,
              display: distance > 2 ? 'none' : 'block',
            };

            const cardStyle = {
              width: isActive ? '400px' : '350px',
              height: isActive ? (showDetails ? '600px' : '350px') : '300px',
              borderWidth: isActive ? '4px' : '2px',
              borderColor: isActive ? '#f9c646' : '#4a4a4a',
            };

            const imageStyle = {
              height: isActive ? '300px' : '300px',
            };

            const reflectionStyle = {
              height: isActive ? '100px' : '90px',
              width: isActive ? '400px' : '350px',
            };

            const reflectionInnerStyle = {
              height: isActive ? '200px' : '180px',
            };

            return (
              <div key={index} className='gallery-slide' style={slideStyle}>
                <div className='author-container' onClick={isActive ? toggleDetails : () => handleDotClick(index)}>
                  <div className={`author-card ${isActive ? 'active' : ''}`} style={cardStyle}>
                    <div className='author-image-container'>
                      <img src={author.image} alt={author.name} className='author-image' style={imageStyle} />
                      <div className='author-name-overlay'>
                        <h2>{author.name}</h2>
                      </div>
                    </div>

                    {/* Información detallada */}
                    {isActive && showDetails && (
                      <div className='author-details'>
                        <p className='author-affiliation'>{author.affiliation}</p>
                        <p className='author-email'>{author.email}</p>
                        <p className='author-bio'>{author.bio}</p>
                        <a href={author.social} className='author-social' target='_blank' rel='noopener noreferrer'>
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Reflejo */}
                  <div className='author-reflection' style={reflectionStyle}>
                    <div className='reflection-inner' style={reflectionInnerStyle}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles */}
        <button onClick={handlePrev} className='gallery-control prev'>
          &lt;
        </button>
        <button onClick={handleNext} className='gallery-control next'>
          &gt;
        </button>

        {/* Indicadores */}
        <div className='gallery-dots'>
          {authors.map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      {/* Instrucciones */}
      <div className='gallery-instructions'>Haz clic en una tarjeta para ver detalles del autor</div>
    </div>
  );
};

export default HeroSection;
