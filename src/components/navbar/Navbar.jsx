import "./navbar.scss";
import { motion } from "framer-motion";

import React from "react";
import Sidebar from "../sidebar/Sidebar";

const iconVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Learn, Craft 'n Code
        </motion.span>
        <motion.div
          className="social"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <a href="https://www.tiktok.com/@yersonchirinos">
            <motion.img
              variants={iconVariants}
              src="/tiktok.png"
              alt="tiktok"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562251209283&notif_id=1724039751298697&notif_t=page_user_activity">
            <motion.img
              variants={iconVariants}
              src="/facebook.png"
              alt="faceboo"
            />
          </a>
          <a href="https://www.instagram.com/yersonjchiri/?next=/">
            <motion.img
              variants={iconVariants}
              src="/instagram.png"
              alt="instagram"
            />
          </a>

          <a href="https://www.linkedin.com/in/yerson-joab-chirinos-vilca-102561249/">
            <motion.img
              variants={iconVariants}
              src="/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/STYersonH">
            <motion.img
              variants={iconVariants}
              src="/github.png"
              alt="github"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
