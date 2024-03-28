import React from "react";
import styles, { layout } from "../style";
import AboutUsImg from "../assets/aboutus.jpg";
import ArrowImg from "../assets/arrowright.png";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className={`${layout.section} ${styles.flexBetweenStart}  relative md:gap-28 ss:gap-14  md:justify-center text-white`}
    >
      <div className="absolute right-0 bottom-0 ">
        <p className={`${styles.paragraph} font-black`}>
          There are no compromises in quality
        </p>
        <p className={`${styles.paragraph}`}>
          - the main slogan of the Fish House team.
        </p>
      </div>
      <div className="absolute left-[300px] bottom-[-60px] -rotate-12 md:flex hidden">
        <img
          src={ArrowImg}
          alt="arrow"
          className="md:w-[256px] w-[128px] md:h-[256px] h-[128px]"
        />
      </div>
      <div className={`md:w-2/5 w-4/5`}>
        <h2 className={`${styles.heading2} customFont md:mb-16 sm:mb-8 mb-4`}>
          About Us
        </h2>
        <p className={`${styles.paragraph}`}>
          Fish house is a delicious journey into the gastronomy of Lyonnais
          cuisine, suitable for any event, be it hearty familly reunion, a
          confidential business meeting or a celebration of important dates
        </p>
      </div>
      <div
        className={`md:w-3/5 w-4/5 text-right flex md:justify-end justify-center`}
      >
        <img
          src={AboutUsImg}
          alt="dish"
          className="md:h-[400px] h-[auto] py-2 w-full md:translate-x-0 sm:-translate-x-16 -translate-x-6 sm:mx-16 mx-6"
        />
      </div>
    </section>
  );
};

export default AboutUs;
