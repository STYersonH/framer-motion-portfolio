import "./services.scss";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="containerServices desktop">
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            Me enfoco en hacer realidad tu idea <br /> e ir al siguiente nivel
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>
              Ideas <b>Unicas</b>
            </h1>
          </div>
          <div className="title">
            <h1>
              <b>Para tus </b> Objetivos.
            </h1>
            <button>WHAT TO DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Diseño web</h2>
            <p>
              Diseño atractivas paginas web para llamar la atencion de tus
              clientes asi como sofisticados sistemas web enfatizando siempre la
              experiencia de usuario.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Desarrollo Frontend</h2>
            <p>
              Si de desarrollar se trata, pongo mucha atencion al detalle para
              conseguir que tu aplicacion resulte lo mejor posible.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Clases de programación</h2>
            <p>
              Te instruire en los fundamentos de la programacion asi como en
              tecnicas avanzadas para solucionar problemas de algoritmica y
              estructuras de datos.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Creación de contenido</h2>
            <p>
              Documento mi proceso para convertirme en un desarrollador y
              diseñador de primera categoria, mostrando las cosas que construyo
              asi como dando tips en mis redes sociales.
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
