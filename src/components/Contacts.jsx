import React from "react";
import instaImg from "../assets/insta.png";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import styles, { layout } from "../style";

const Contacts = () => {
  return (
    <section
      id="contactus"
      className={`relative flex justify-around items-center sm:flex-row flex-col ${styles.paddingY} sm:gap-0 gap-16`}
    >
      <div className="absolute z-[10] w-[50%] h-[50%] left-0 bottom-0 rounded-full white__gradient"></div>

      <div className="flex flex-col text-white sm:items-start items-center">
        <h2 className={`${styles.heading2} customFont sm:mb-8 mb-4`}>
          CONTACTS
        </h2>
        <div className="flex flex-col sm:gap-4 gap-2">
          <p>+33422222222</p>
          <p>Adress</p>
          <p>fishhouse@gmail.com</p>
        </div>
      </div>
      <div className="bg-black w-[280px] h-[125px] sm:w-[350px] sm:h-[225px] xs:w-[350px] xs:h-[175px]">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?width=100%25&amp;height=225&amp;hl=en&amp;q=Kardinala%20Alojzija%20Stepinca,%20%C5%A0iroki%20Brijeg%2088220+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="225"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>

      <div className=" absolute right-0 cm:bottom-[80px] bottom-[40px] z-[2] flex justify-end items-end">
        <div className="absolute ss:right-[20px] right-0 ss:bottom-[15px] bottom-0 w-[60px] h-[1px] bg-white mx-5"></div>
        <div className="">
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

      <div className=" absolute left-0 top-[40px] z-[2] flex justify-end items-end">
        <div className="absolute w-[80px] h-[1px] bg-white mx-5 translate-x-20 -translate-y-24"></div>
        <div className="w-[1px] h-[100px] bg-white mb-4"></div>
      </div>
    </section>
  );
};

export default Contacts;
