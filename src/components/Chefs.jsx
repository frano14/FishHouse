import React from "react";
import ChefImg from "../assets/chef.jpg";
import fishImg from "../assets/customFish.png";
import styles, { layout } from "../style";

const Chefs = () => {
  return (
    <section
      id="chefs"
      className={`  md:mb-28 mb-0 relative text-white flex md:flex-row flex-col items-end ${styles.paddingY}`}
    >
      <div className="absolute z-[10] w-[60%] h-[60%] right-[-100px] bottom-[0px] rounded-full white__gradient"></div>

      <div className={` md:w-[60%] w-[100%] md:h-[60%] h-auto  z-[2]`}>
        <img src={ChefImg} alt="chef" className="rounded-2xl" />
      </div>

      <div className="md:absolute flex right-0 md:w-[60%] w-[90%] md:h-[60%] h-auto md:translate-y-[50%] translate-y-[-6px]  flex-col justify-center items-start md:pl-[22%] pl-[20px] md:pr-[10%px] pr-[20px] rounded-2xl ELborder md:py-0 py-8 ">
        <p className={`mb-8`}>
          Constant self-development is not to stand still, develop tehniques,
          learn something new, try, combine and find what I was looking for,
          that's probably the main thing in my business
        </p>
        <p>Paule Castaing</p>
        <p className="mb-4">Fish House Chef</p>
        <img src={fishImg} alt="fish" className="w-[32px] h-[32px]" />{" "}
      </div>
      <button
        className={`md:absolute flex left-[100px] bottom-0 px-6 py-2 tex ELborder md:w-auto w-full mt-8 ${styles.paragraph} rounded-3xl cursor-pointer justify-center hover:bg-secondary`}
      >
        <span className="inline-block">About chefs</span>
      </button>
    </section>
  );
};

export default Chefs;
