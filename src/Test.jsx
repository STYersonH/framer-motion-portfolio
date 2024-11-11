import { m, motion } from "framer-motion";

import React from "react";

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: 0.4 * i },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul variants={variants} initial="hidden" animate="visible">
        {items.map((item, i) => (
          <motion.li variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
