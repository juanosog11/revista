import React, { useState } from 'react';
import '../App.css';
import './HeroSection.css';

const authors = [
  {
    name: 'Juan Pablo Osorio Giraldo',
    image: '/images/img-1.jpg',
    affiliation: 'Institución Universitaria de Envigado',
    email: 'jposoriog@correo.iue.edu.co',
    bio: 'Soy un estudiante apasionado de Ingeniería Informática con un fuerte interés en la tecnología, tanto en software como en hardware. Mi enfoque autónomo de aprendizaje me ha permitido adquirir habilidades en la creación de software innovador y resolver problemas complejos mediante la programación.',
    social: 'https://www.linkedin.com/in/juan-pablo-osorio-giraldo-5b3a272b8',
  },
  {
    name: 'Cristian Danilo Tobón Marulanda',
    image: '/images/img-2.jpg',
    affiliation: 'Institución Universitaria de Envigado',
    email: 'cdtobon@correo.iue.edu.co',
    bio: 'Soy estudiante de octavo semestre de Ingeniería Informática en la Institución Universitaria de Envigado, con énfasis en Inteligencia Artificial, Big Data y Computación en la Nube. Me especializo en desarrollo de software, especialmente en el área de back-end como full stack.',
    social: 'https://www.linkedin.com/in/cristian-danilo-tobon-marulanda-1aa118322',
  },
  {
    name: 'Gustavo Adolfo Velásquez Granado',
    image: '/images/img-3.jpg',
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

function HeroSection() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>MEET OUR AUTHORS</h1>
      <p>Discover the brilliant minds behind our content</p>
      
      <div className='author-grid'>
        {authors.map((author, index) => (
          <div key={index} className='author-card' onClick={() => setSelectedAuthor(author)}>
            <img src={author.image} alt={author.name} className='author-image' />
            <p className='author-name'>{author.name}</p>
          </div>
        ))}
      </div>
      
      {selectedAuthor && (
        <div className='author-details-overlay'>
          <div className='author-details'>
            <img src={selectedAuthor.image} alt={selectedAuthor.name} className='author-detail-image' />
            <h2>{selectedAuthor.name}</h2>
            <p><strong>Afiliación:</strong> {selectedAuthor.affiliation}</p>
            <p><strong>Correo:</strong> {selectedAuthor.email}</p>
            <p><strong>Biografía:</strong> {selectedAuthor.bio}</p>
            {selectedAuthor.social && (
              <p><strong>Redes:</strong> <a href={selectedAuthor.social} target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
            )}
            <button className='author-details' onClick={() => setSelectedAuthor(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
