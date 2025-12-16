import React, { useState, useEffect, useCallback } from 'react';
import './Services.css';
import { useLocation } from 'react-router-dom';

function Services() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);

  // Función para obtener el parámetro de la URL
const getQueryParam = useCallback(
  (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  },
  [location.search]
);

  // Establecer la página actual basada en el parámetro de URL
useEffect(() => {
  const pageParam = getQueryParam('page');
  if (pageParam !== null) {
    const pageIndex = parseInt(pageParam, 10);
    setCurrentPage(pageIndex);
  }
}, [getQueryParam]);


  const content = [
    {
      title: 'EDITORIAL',
      content:
        'La inteligencia artificial algo que en el pasado parecía una realidad lejana, ahora se ha convertido en una realidad impactando múltiples aspectos de nuestra vida. Desde la creación de asistentes virtuales hasta sistemas de toma de decisiones, su impacto es innegable. Sin embargo, con su uso se está redefiniendo nuestra manera de ver las cosas, pero debemos plantearnos y cuestionarnos sobre sus implicaciones éticas, ¿Que tan correcto es depender de la IA para tomar decisiones?, ¿Cómo garantizamos que nuestra información personal que compartimos esté protegida?, ¿Hasta dónde podemos delegar responsabilidades en sistemas automatizados sin comprometer nuestra propia ética y valores?. Por ello en esta revista buscamos analizar los dilemas éticos de la IA, reflexionando sobre sus implicaciones y que consecuencias conlleva su uso en distintos ámbitos de la sociedad.',
    },
    {
      title: '¿Qué queremos hacer?',
      content:
        'Nuestro objetivo es analizar y comprender los dilemas éticos de la inteligencia artificial desde una perspectiva filosófica y académica, centrándonos en su uso cotidiano como en la educación, el mercado laboral y la sociedad en general. Se busca explorar e identificar cómo la IA plantea desafíos en términos de transparencia en los algoritmos, la privacidad de los datos, la responsabilidad moral, la autonomía, la creatividad e interacción con los humanos. Buscamos generar una concientización y una discusión profunda y reflexiva que permita tanto a nosotros como nuestros lectores desarrollar un pensamiento crítico sobre el uso de esta.',
    },
    {
      title: '¿Para qué lo hacemos?',
      content:
        'El motivo de nuestra revista nace con la intención de comprender, concientizar y entender aquellas implicaciones éticas que puede llegar a tener la IA en nuestra sociedad. Aunque la IA ofrece soluciones innovadoras y mejora diversos procesos, su implementación sin una supervisión adecuada se puede derivar en problemas como la desinformación, esto nos permitirá construir una postura crítica e informada y generar una conciencia más ética y responsable sobre su desarrollo y aplicación.',
    },
    {
      title: '¿Por qué se hace?',
      content:
        'El auge de la IA nos ha permitido encontrar múltiples soluciones para facilitar diversas actividades diarias, especialmente cuando el tiempo y el conocimiento sobre ciertos procesos o temas son limitados, esto también ha traído consigo preocupaciones sobre la falta de regulaciones claras. Es relevante opinar, cuestionar y analizar este tipo de dilemas, para que, de esta manera la tecnología sirva como una herramienta que beneficie a la humanidad y no comprometa nuestros derechos fundamentales y principios.',
    },
    {
      title: '¿Cómo se va a hacer?',
      content:
        'La investigación sobre los dilemas éticos de la IA se llevará a cabo mediante una combinación de métodos, incluyendo:\n\n- Revisión de la literatura: se analizarán y explorarán los trabajos, artículos e informes previos sobre dilemas éticos de la IA para identificar los principales temas y debates.\n\n- Entrevistas: se llevarán a cabo encuestas y entrevistas con expertos en IA y ética para conocer sobre sus perspectivas y obtener una comprensión más profunda de los dilemas éticos de la IA.\n\n- Análisis de casos: se analizarán casos de estudio de implementaciones de IA que han generado dilemas éticos para identificar patrones y tendencias contribuyendo con una visión más amplia y participativa del debate.',
    },
    {
      title: '¿Dónde se va a hacer?',
      content:
        'El trabajo se desarrollará en un entorno académico, utilizando fuentes confiables como de bibliotecas digitales, bases de datos científicas, publicaciones científicas y reportes de organismos internacionales especializados en ética e inteligencia artificial. Además, se analizarán debates a nivel global pata ofrecer una visión más completa sobre las preocupaciones actuales en torno a la IA.',
    },
    {
      title: '¿Cuándo lo vamos a hacer?',
      content:
        'El desarrollo de esta revisa se realizará a lo largo del curso de ética profesional, asegurando que el análisis sea actualizado y relevante en el contexto actual del desarrollo de la inteligencia artificial. Buscamos que esta revista sirva como referencia útil para futuras investigaciones y discusiones sobre la ética y el uso de la IA.\n\nEsperamos fomentar un debate informado y responsable sobre el uso de la IA en nuestra sociedad, de manera que permita al lector reflexionar sobre como esta tecnología está moldeando nuestro futuro y cómo podemos garantizar su desarrollo de manera ética, equitativa y justa.',
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  const formatContent = (text) => {
    return text.split('\n\n').map((paragraph, idx) => {
      if (paragraph.includes('- ')) {
        const items = paragraph.split('\n');
        return (
          <ul key={idx} className='magazine-list'>
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      return <p key={idx}>{paragraph}</p>;
    });
  };

  return (
    <div id='magazine' className='magazine-container'>

      <div className='magazine-book'>
        <div className='magazine-cover'>
          <div className='magazine-cover-content'>
            <h2>Revista</h2>
            <h1>Dilemas Éticos de la IA</h1>
            <p>Una exploración de las implicaciones morales de la inteligencia artificial en nuestra sociedad</p>
          </div>
        </div>

        <div className='magazine-page-container'>
          <div className='magazine-page'>
            <h2 className='magazine-title'>{content[currentPage].title}</h2>
            <div className='magazine-content'>{formatContent(content[currentPage].content)}</div>
          </div>
        </div>

        <div className='magazine-controls'>
          <button className='magazine-btn' onClick={prevPage}>
            ← Anterior
          </button>
          <div className='magazine-pagination'>
            {content.map((_, index) => (
              <span
                key={index}
                className={`magazine-dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(index)}
              ></span>
            ))}
          </div>
          <button className='magazine-btn' onClick={nextPage}>
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
