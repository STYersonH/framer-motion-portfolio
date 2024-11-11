import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Sistema de Clinica",
    img: "/project-1.png",
    desc: "Proyecto de curso de software el cual permitia registrar tanto pacientes como medicos. El paciente puede sacar una cita en un determinado dia, el médico puede generar el diagnostico asi como la receta medica que despues de generada el paciente puede ver. El medico tambien tiene acceso al historial clinico del paciente.",
  },
  {
    id: 2,
    title: "Helmet Detector",
    img: "/project-2.png",
    desc: "Proyecto que consiste en detectar mediante una camara si la persona tiene el casco puesto o no, esto mediante el modelo YOLOv8.",
  },
  {
    id: 3,
    title: "UniChat",
    img: "/project-4.png",
    desc: "Es una aplicacion web de chat con una peculiaridad, que una vez creada la cuenta, se agregua al estudiante a un grupo de su propia universidad, a un grupo de su carrera en varias universidades y a un grupo de su carrera en su misma universidad.",
  },
  {
    id: 4,
    title: "Charge System CA",
    img: "/project-5.png",
    desc: "Esta aplicacion web automatiza el proceso de seguimiento de deuda de clientes que en un inicio se hacia en un cuaderno y este podia perderse, con este sistema resulta mucho mas sencillo realizar el seguimiento.",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
