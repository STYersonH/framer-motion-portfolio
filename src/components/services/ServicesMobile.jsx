import "./services.scss";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServicesMobile = () => {
  const ref = useRef();

  return (
    <div className="containerServices mobile">
      <motion.div
        className="services"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
      >
        <motion.div className="textContainer">
          <p>
            I focus on helping your brand grow <br /> and move forward.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>
              <b>Unique</b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <b>For your </b> Business.
            </h1>
            <button>WHAT TO DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Diseño web</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              placeat cupiditate ipsam at commodi ratione, quasi eligendi.
              Aspernatur odio eaque animi neque? Soluta in eaque consequatur eos
              similique blanditiis quos.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Desarrollo Frontend</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              placeat cupiditate ipsam at commodi ratione, quasi eligendi.
              Aspernatur odio eaque animi neque? Soluta in eaque consequatur eos
              similique blanditiis quos.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Clases de programación</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              placeat cupiditate ipsam at commodi ratione, quasi eligendi.
              Aspernatur odio eaque animi neque? Soluta in eaque consequatur eos
              similique blanditiis quos.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Creación de contenido</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              placeat cupiditate ipsam at commodi ratione, quasi eligendi.
              Aspernatur odio eaque animi neque? Soluta in eaque consequatur eos
              similique blanditiis quos.
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesMobile;
