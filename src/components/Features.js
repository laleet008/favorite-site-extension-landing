import React from "react";
import "./Features.css";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="text-center md:mx-20 mx-4 font-montserrat uppercase works-heading font-bold">
        Our <span className="text-violet-500">Works</span>
      </h2>
      <div className="flex md:flex-row flex-col md:mx-20 mx-4 md:mt-20 mt-8 md:gap-24 gap-10">
        <motion.div
          className="md:w-3/5 w-full"
          whileInView={{ opacity: [0, 1] }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="assets/feature1.jpg"
            alt="feature first"
            className="rounded-lg	"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat uppercase extension-heading md:mb-6 mb-2">
            Favorite Sites
          </h2>
          <p className="md:w-[400px] w-full text-gray-800 text-lg font-poppins">
            This extension include different sites that you like to use. First
            looks will attract the user for its simple UI. After that, the user
            can add the detail about the website or any endpoint as shortcut or
            bookmarks.
          </p>
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:mx-20 mx-4  md:mt-24 mt-10  gap-8 md:gap-24 md:justify-end">
        <motion.div
          className="flex flex-col justify-center"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat uppercase  extension-heading md:mb-6 mb-2">
            Attractive Modal
          </h2>
          <p className="md:w-[400px] text-gray-800 text-lg font-poppins">
            The extension will show the modal when the user click on the plus
            icon on top left. The modal will let the user fill the detail about
            the website or any endpoint.
          </p>
        </motion.div>
        <motion.div
          className="md:w-3/5"
          whileInView={{ opacity: [0.4, 1] }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="assets/feature2.jpg"
            alt="feature first"
            className="rounded-lg	"
          />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col md:mx-20 mx-4 md:mt-20 mt-8 md:gap-24 gap-10">
        <motion.div
          className="md:w-3/5 w-full"
          whileInView={{ opacity: [0, 1] }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img
            src="assets/feature3.jpg"
            alt="feature first"
            className="rounded-lg	"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat uppercase extension-heading md:mb-6 mb-2">
            Access the Added websites
          </h2>
          <p className="md:w-[400px] w-full text-gray-800 text-lg font-poppins">
            The extension will show the added websites below the searchbar. Now
            you can access the sites without typing in searchbar which will save
            time for you to visit any frequently visited website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
