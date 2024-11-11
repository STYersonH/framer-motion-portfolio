import "./parallax.scss";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // the animation will start when the target element is at the top of the viewport and will end when the target reaches the bottom of the viewport
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #040f1a, #012030"
            : "linear-gradient(180deg, #040f1a, #04bf8a ",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do" : "What We Did"}
      </motion.h1>
      <motion.div style={{ x: yBg }} className="stars left"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};

export default Parallax;
