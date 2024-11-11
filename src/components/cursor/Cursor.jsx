import React, { useEffect, useState } from "react";
import "./cursor.scss";

import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
      }}
    ></motion.div>
  );
};

export default Cursor;
