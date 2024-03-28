import React from "react";
import Navbar from "./Navbar";
import styles from "../style";
import instaImg from "../assets/insta.png";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`bg w-[100vw] h-[100vh] ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className="overlay absolute w-full h-full z-[1] left-0"></div>
      <div
        className={`${styles.boxWidth} text-white ${styles.paddingX} ${styles.flexCenter} flex-col relative z-[2] h-full`}
      >
        <h1 className="customFont z-[2] xg:text-[160px] lg:text-[134px] md:text-[114px] sm:text-[86px] ss:text-[74px] xs:text-[54px] text-[40px]  font-thin max-h-[200px]  text-center tracking-widest">
          FISH HOUSE
        </h1>
        <h3 className="z-[2] customFont xg:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] ss:text-[16px] xs:text-[14px] text-[12px] tracking-[5px] mt-8 mb-16 w-full text-center">
          BRASSERIE DE LUXE
        </h3>
        <div className="z-[2] relative">
          <div className="ss:w-[200px] w-[120px] ss:h-[75px] h-[50px] ELborder rounded-[50%] bg-transparent -rotate-6"></div>
          <div className="ss:w-[200px] w-[120px] ss:h-[75px] h-[50px] absolute left-[5px] top-[10px] ELborder rounded-[50%] bg-transparent -rotate-6"></div>
          <p className="absolute ss:top-[40%] top-[30%] ss:right-[40%] right-[30%]">
            Menu
          </p>
        </div>
        <div className=" absolute right-0 cm:bottom-[80px] bottom-[40px] z-[2] flex justify-end items-end">
          <div className="absolute right-[20px] bottom-[15px] w-[60px] h-[1px] bg-white mx-5"></div>
          <div>
            <div className="w-[1px] h-[60px] bg-white mb-4"></div>
            <img
              src={instaImg}
              alt="insta"
              className="w-[16px] h-[16px] my-2 -translate-x-[50%]"
            />
            <img
              src={facebookImg}
              alt="insta"
              className="w-[16px] h-[16px] my-2 -translate-x-[50%]"
            />
            <img
              src={twitterImg}
              alt="insta"
              className="w-[16px] h-[16px] my-2 -translate-x-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
