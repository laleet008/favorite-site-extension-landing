import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.nav className="py-10 md:mx-20 mx-4 ">
      <Link to="/" style={{ textDecoration: "none" }}>
        <motion.h2
          className="font-poppins tracking-widest capitalize text-xl text-gray-600 font-medium"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          Company<span className="font-poppins ml-2 text-violet-500">logo</span>
        </motion.h2>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
