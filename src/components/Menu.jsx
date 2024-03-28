import React from "react";
import styles, { layout } from "../style";
import fishImg from "../assets/customFish.png";

const Reservation = () => {
  return (
    <section
      id="menu"
      className={`${layout.section} ${styles.flexCenter} md:gap-16 ss:gap-8 gap-`}
    >
      <div
        className={`${styles.flexStart} md:gap-16 ss:gap-8 gap-4 flex ss:flex-row flex-col md:h-[300px] h-auto`}
      >
        <div
          className={`relative md:w-2/5 w-full p-6  ${styles.flexCenter} h-full ELborder rounded-xl text-white ${styles.paragraph}`}
        >
          <p>
            The restaurant's sommelier will chose the perfect wine for the
            evening, and waiters will meet you with a smile, help you choose the
            best dish and listen to your wishes.
          </p>
          <img
            src={fishImg}
            alt="fish"
            className="absolute top-0 left-0 translate-x-[-25%]  translate-y-[-50%] ss:w-[128px] w-[64px] ss:h-[128px] h-[64px] opacity-30"
          />
        </div>
        <div
          className={`relative md:w-3/5 w-full p-6 ${styles.flexCenter} h-full ELborder rounded-xl text-white ${styles.paragraph}`}
        >
          <p>
            A strong team of chefs for whom the quality of the food comes first
            always ready to meet, adjusting the dish according to your wishes
            and sensitivities to certain food.
          </p>
          <img
            src={fishImg}
            alt="fish"
            className="absolute bottom-0 right-0 translate-x-[25%]  translate-y-[50%] ss:w-[128px] w-[64px] ss:h-[128px] h-[64px] opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
