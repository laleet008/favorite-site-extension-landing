import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.footer
      className="footer flex justify-between text-lg font-poppins items-start md:mx-20 mx-4 md:mt-20 mt-8 md:py-10 py-2 font-medium"
      whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.h2
            className="font-poppins tracking-widest capitalize text-xl text-gray-600 font-medium"
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            Company
            <span className="font-poppins ml-2 text-violet-500">logo</span>
          </motion.h2>
          <motion.p
            className="font-poppins text-lg text-gray-500 "
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            <i>abc@gmail.com</i>
          </motion.p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 ">
        {/* <div className="font-bold text-xl text-gray-500 mb-2 uppercase">
          About
        </div> */}
        <Link to="/terms" style={{ textDecoration: "none" }}>
          <motion.h2
            className="font-poppins tracking-widest capitalize text-lg text-gray-600 "
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            Terms
          </motion.h2>
        </Link>
        <Link to="/privacy" style={{ textDecoration: "none" }}>
          <motion.h2
            className="font-poppins tracking-widest capitalize text-lg text-gray-600 "
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            Privacy Policies
          </motion.h2>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.h2
            className="font-poppins tracking-widest capitalize text-lg text-gray-600 "
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            Contact
          </motion.h2>
        </Link>
      </div>
      <p className="md:w-[300px] text-center text-base">
        {" "}
        &#9400; Copyright all right reserved. Favorite Site{" "}
        <span className="ml-2 text-md">{new Date().getFullYear()}</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
