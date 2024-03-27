import React, { useState } from "react";
import fishImg from "../assets/fish.png";
import customFishImg from "../assets/customFish.png";
import whiteMenuImg from "../assets/whiteMenu.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <div className="absolute top-0 sm:flex hidden justify-between w-full z-[2]">
        <ul className="w-full flex justify-between items-center py-3 text-white">
          <li>
            <img
              src={customFishImg}
              alt="logo"
              className="w-[48px] h-[48px] "
            />
          </li>
          <li>About us</li>
          <li>Menu</li>
          <li>Chefs</li>
          <li>Working hours</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="top-0 left-0 sm:hidden fixed flex justify-between items-cente w-full z-[3] p-3">
        <img src={customFishImg} alt="logo" className="w-[48px] h-[48px] " />
        <img
          src={whiteMenuImg}
          alt="logo"
          className="w-[48px] h-[48px] "
          onClick={(prev) => setActiveMenu(!activeMenu)}
        />
        <ul
          className={`fixed left-0 top-[80px] ${
            activeMenu ? "flex" : "hidden"
          } flex-col justify-center items-center gap-6 p-6  bg-secondary text-white w-full text-[20px]`}
        >
          <li>About us</li>
          <li>Menu</li>
          <li>Chefs</li>
          <li>Working hours</li>
          <li>Reservation</li>
          <li>Contact us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
