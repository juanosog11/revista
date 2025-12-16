import React, { useState } from 'react';
import './DocumentationModal.css';

export default function DocumentationModal() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const pages = [
    {
      title: 'Autonomía y Control Humano en la IA',
      content: [
        'El desarrollo de la inteligencia artificial en Colombia se ha orientado bajo principios éticos que priorizan el control humano sobre los sistemas automatizados, especialmente cuando estos poseen cierto grado de autonomía en la toma de decisiones. El Marco Ético para la Inteligencia Artificial establece que la IA debe actuar como una herramienta de apoyo al ser humano y no como un sustituto de su criterio. En este sentido, se promueven enfoques como el Human-in-the-loop y Human-over-the-loop, los cuales garantizan que las decisiones críticas siempre cuenten con supervisión humana directa.',
        'Este principio cobra especial relevancia en contextos donde las decisiones pueden afectar derechos fundamentales, como la administración pública, la seguridad, la salud o la justicia. Además, el marco ético colombiano enfatiza la aplicación de estos principios en tres áreas clave: la ética de los datos, asegurando una recolección y tratamiento responsable; la ética de los algoritmos, evitando automatizaciones opacas; y la ética de las prácticas, garantizando que siempre exista intervención humana. De esta manera, se busca una IA responsable, alineada con los valores humanos y orientada al bienestar social.',
      ],
    },
    {
      title: 'Sesgo Algorítmico y Discriminación',
      content: [
        'El sesgo algorítmico representa uno de los mayores desafíos éticos en el uso de la inteligencia artificial, ya que los sistemas automatizados aprenden a partir de datos históricos que pueden contener prejuicios sociales, culturales o económicos. Cuando estos datos no son representativos o están cargados de desigualdades, los algoritmos tienden a replicar y amplificar dichas injusticias en procesos como selección de personal, otorgamiento de créditos o evaluación de riesgos.',
        'Los estudios analizados evidencian que estos sesgos no son simples fallos técnicos, sino reflejos de problemáticas estructurales más profundas. En América Latina, donde existen marcadas brechas sociales, el impacto puede ser aún mayor. Por ello, se plantea la necesidad de auditorías algorítmicas, diversidad en los datos de entrenamiento y supervisión humana constante. Asimismo, se resalta la importancia de marcos legales y éticos que obliguen a las organizaciones a asumir responsabilidad por las decisiones automatizadas, promoviendo transparencia, equidad y mecanismos de apelación.',
      ],
    },
    {
      title: 'Privacidad y Vigilancia Algorítmica',
      content: [
        'La expansión de la inteligencia artificial ha incrementado significativamente la recolección y el análisis de datos personales, lo que ha transformado la privacidad en uno de los valores más vulnerables del entorno digital. Sistemas de vigilancia algorítmica operan a través de cámaras, plataformas digitales y dispositivos inteligentes, muchas veces sin el conocimiento ni consentimiento informado de los usuarios, generando escenarios de control social y monitoreo constante.',
        'Los autores advierten que esta vigilancia no es pasiva, sino activa, ya que influye directamente en decisiones que afectan la vida de las personas, como el acceso a servicios, oportunidades laborales o contenidos digitales. La falta de transparencia y rendición de cuentas agrava este problema, dificultando la posibilidad de cuestionar decisiones automatizadas. Frente a este panorama, se propone la creación de marcos éticos y normativos sólidos que prioricen la protección de datos, la equidad y los derechos fundamentales, promoviendo una IA que respete la dignidad humana.',
      ],
    },
    {
      title: 'Responsabilidad Moral y Atribución de Culpa',
      content: [
        "La incorporación de sistemas de inteligencia artificial autónomos plantea un dilema ético central: determinar quién es responsable cuando una decisión algorítmica causa daño. A diferencia de los escenarios tradicionales, la IA introduce el llamado 'problema de las muchas manos', donde la responsabilidad se distribuye entre programadores, empresas, usuarios y diseñadores del sistema. Esto dificulta la asignación clara de culpa y la reparación de daños.",
        'Aunque algunos plantean otorgar personalidad jurídica a sistemas avanzados de IA, la postura predominante sostiene que la responsabilidad debe recaer siempre en los humanos involucrados, ya que la IA carece de intencionalidad moral. En respuesta a este desafío, surge el concepto de rendición de cuentas algorítmica, promovido por organismos internacionales, que exige trazabilidad, capacidad de explicación e intervención humana. Así, la IA no reduce la responsabilidad humana, sino que refuerza el compromiso ético de sus creadores y usuarios.',
      ],
    },
    {
      title: 'Impacto de la IA en la Educación',
      content: [
        'La inteligencia artificial ha transformado el ámbito educativo mediante herramientas que personalizan el aprendizaje, automatizan procesos administrativos y ofrecen retroalimentación inmediata. Estas innovaciones permiten a los docentes concentrarse en aspectos más humanos de la enseñanza, como el acompañamiento emocional y el desarrollo del pensamiento crítico en los estudiantes.',
        'Sin embargo, su implementación también plantea importantes desafíos éticos. La recopilación de datos estudiantiles genera preocupaciones sobre privacidad y protección de la información, mientras que los sesgos algorítmicos pueden afectar la equidad educativa. Además, una dependencia excesiva de la tecnología puede deshumanizar el proceso educativo y debilitar el rol del docente. Por ello, se propone una integración equilibrada de la IA, acompañada de formación ética, políticas claras y acceso equitativo, garantizando que la tecnología complemente, y no reemplace, la educación humana.',
      ],
    },
    {
      title: 'IA y Creatividad Humana',
      content: [
        'La relación entre la inteligencia artificial y la creatividad humana ha generado debates sobre el impacto de estas tecnologías en disciplinas artísticas, educativas e industriales. La IA ha demostrado ser una herramienta poderosa para apoyar procesos creativos, permitiendo la generación de música, textos e imágenes de forma eficiente y accesible.',
        'No obstante, el uso creciente de estas herramientas también plantea riesgos relacionados con la dependencia tecnológica y la pérdida de originalidad. El aumento de la productividad empresarial y la adopción de la IA en la industria creativa contrastan con la preocupación por la disminución del esfuerzo creativo humano. El reto principal consiste en utilizar la IA como un apoyo que potencie la creatividad, sin desplazar la capacidad crítica, emocional y expresiva que caracteriza a los seres humanos.',
      ],
    },
    {
      title: 'Interacción entre Humanos e IA',
      content: [
        'La interacción entre los seres humanos y la inteligencia artificial tiene el potencial de enriquecer capacidades cognitivas y facilitar el acceso a información y servicios personalizados. Sin embargo, también introduce desafíos éticos, sociales y económicos que deben ser abordados de manera responsable.',
        'Entre los principales retos se encuentran la protección de la privacidad, la transparencia de los algoritmos, el impacto en el empleo y la confiabilidad de los sistemas automatizados. La opacidad algorítmica puede generar decisiones injustas o discriminatorias, por lo que se hace indispensable el desarrollo de marcos éticos y legales sólidos. Este referente destaca la importancia de una IA centrada en el ser humano, que promueva la equidad, la justicia social y el respeto por los derechos fundamentales.',
      ],
    },
  ];

  const next = () => page < pages.length - 2 && setPage(page + 2);
  const prev = () => page > 0 && setPage(page - 2);

  return (
    <>
      <div className='doc-section'>
        <button className='doc-button' onClick={() => setOpen(true)} />
      </div>

      {open && (
        <div className='modal-overlay' onClick={() => setOpen(false)}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setOpen(false)}>
              ✖
            </button>

            <div className='flipbook'>
              <div className='page'>
                <h2>{pages[page]?.title}</h2>
                {pages[page]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className='page'>
                <h2>{pages[page + 1]?.title}</h2>
                {pages[page + 1]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className='controls'>
              <button onClick={prev} disabled={page === 0}>
                ◀ Anterior
              </button>
              <span>
                Páginas {page + 1} - {page + 2}
              </span>
              <button onClick={next} disabled={page >= pages.length - 2}>
                Siguiente ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
