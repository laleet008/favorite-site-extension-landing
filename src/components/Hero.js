import React from "react";
// import { FiCornerRightDown } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex md:flex-row flex-col gap-10 md:mx-20  md:py-12 mr-4 ml-4">
        <div className="md:w-1/2 md:px-0 px:4">
          <img
            src="https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="hero-img rounded-lg"
          />
        </div>

        <div className="flex justify-start items-center md:w-1/2 md:px-0 px:4">
          <motion.div
            className="w-full"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <h1 className="uppercase font-bold md:text-4xl text-3xl text-gray-700 font-montserrat">
              Providing Qualities Over the Years
            </h1>
            <p className="text-gray-600 capitalize md:text-xl text-lg lg:text-2xl md:mt-5 mt-4  font-poppins">
              It’s Hard to Find Time to Learn a Company with this advanced
              technologies and Client having satisfying experience.
            </p>
            <div className="md:mt-8 mt-6 h-[30px] flex w-full">
              <AnchorLink href="#features">
                <button className="md:py-2.5 py-2 font-poppins flex  tracking-wider md:px-6 px-4 bg-violet-500 text-white  rounded-md  transition-in-out duration-300 hover:bg-violet-800 md:text-lg uppercase font-medium">
                  Explore
                  {/* <div className="text-xl ml-4 mt-1">
                  <FiCornerRightDown />
                </div> */}
                </button>
              </AnchorLink>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
