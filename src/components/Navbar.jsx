import React, { useEffect, useState } from "react";
import fishImg from "../assets/fish.png";
import customFishImg from "../assets/customFish.png";
import whiteMenuImg from "../assets/wMenu.png";
import menuImg from "../assets/menu.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`
        
        ${
          isFixed
            ? "fixed bg-white sm:flex hidden w-[100vw] left-0 xl:px-[23%] px-[6%] m-auto text-black z-20"
            : "absolute top-0 sm:flex hidden justify-between w-full z-[5] text-white"
        } 
        `}
      >
        <ul className="w-full flex justify-between items-center py-3 ">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              <img
                src={customFishImg}
                alt="logo"
                className="w-[48px] h-[48px] "
              />
            </Link>
          </li>
          <li>
            <Link
              to="aboutus"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="chefs"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Chefs
            </Link>
          </li>
          <li>
            <Link
              to="workinghours"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Working hours
            </Link>
          </li>
          <li>
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="contactus"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          isFixed
            ? "fixed bg-white sm:hidden flex justify-between p-3 w-[100vw] left-0 xl:px-[23%] px-[6%] m-auto text-black z-20"
            : `top-0 left-0 sm:hidden absolute flex justify-between items-cente w-full z-[3] p-3`
        }
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => setActiveMenu(false)}
        >
          <img src={customFishImg} alt="logo" className="w-[48px] h-[48px] " />
        </Link>
        <img
          src={isFixed ? menuImg : whiteMenuImg}
          alt="logo"
          className="w-[48px] h-[48px] "
          onClick={(prev) => setActiveMenu(!activeMenu)}
        />
        <ul
          className={`fixed left-0 top-[72px] ${
            activeMenu ? "flex" : "hidden"
          } flex-col justify-center items-center gap-6 p-6  bg-secondary w-full text-[20px]`}
        >
          <li>
            <Link
              to="aboutus"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="chefs"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              Chefs
            </Link>
          </li>
          <li>
            <Link
              to="workinghours"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              Working hours
            </Link>
          </li>
          <li>
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="contactus"
              smooth={true}
              duration={500}
              onClick={() => setActiveMenu(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
