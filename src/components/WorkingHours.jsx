import React from "react";
import fishImg from "../assets/customFish.png";
import styles, { layout } from "../style";

const WorkingHours = () => {
  return (
    <section
      id="workinghours"
      className={`${layout.section} ${styles.flexCenter} text-white w-full`}
    >
      <div className={`w-full flex flex-col justify-center items-center`}>
        <h1 className={`${styles.heading2} text-center customFont `}>
          WORKING HOURS
        </h1>
        <div className=" w-full grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 my-16 gap-y-20">
          <div
            className={`flex flex-col justify-center items-center ${styles.paragraph}`}
          >
            <h3 className="font-bold mb-6">Menu A la carte</h3>
            <div>
              <div className="flex justify-between items-center gap-4">
                <p>Mon - Wed</p>
                <p>14:00 - 22:00</p>
              </div>
              <div className="flex justify-between items-center gap-4">
                <p>Thu - Fri</p>
                <p>14:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center ${styles.paragraph} relative`}
          >
            <img
              src={fishImg}
              alt="fish"
              className="absolute top-0 left-0 translate-x-[0%] translate-y-[-20%]  ss:w-[512px] w-[256px] ss:h-[512px] h-[256px] opacity-10"
            />
            <h3 className="font-bold mb-6">Breakfast</h3>
            <div>
              <div className="flex justify-between items-center gap-4">
                <p>Mon - Fri</p>
                <p>14:00 - 14:00</p>
              </div>
              <div className="flex justify-between items-center gap-4">
                <p>Sun</p>
                <p>10:00 - 15:00</p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-start items-center ${styles.paragraph}`}
          >
            <h3 className="font-bold mb-6">Menu Gourment</h3>
            <div>
              <div className="flex justify-between items-center gap-4">
                <p>Thu - Fri</p>
                <p>18:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`w-[200px] inline-block text-center py-2 px-4 ELborder ${styles.paragraph} rounded-3xl cursor-pointer bg-transparent z-10 hover:bg-secondary`}
        >
          See menu
        </button>
      </div>
    </section>
  );
};

export default WorkingHours;
