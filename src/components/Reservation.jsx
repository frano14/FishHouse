import React, { useEffect, useState } from "react";
import calendarImg from "../assets/calendar.png";
import fishReservationImg from "../assets/fishReservation.jpeg";
import fishReservation2Img from "../assets/fishReservation2.jpeg";
import styles, { layout } from "../style";

const Reservation = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 1060 ? fishReservation2Img : fishReservationImg //INICIJALIZIRA POČETNI W ZASLONA I PO TOME ODREĐUJE KOJI ĆE SE VIDEO PRIAKZAT
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 1060) {
      setVideoSrc(fishReservation2Img);
    } else {
      setVideoSrc(fishReservationImg);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section id="reservation" className={`${styles.paddingY}`}>
      <h2 className={`${styles.heading2} customFont  md:mb-16 sm:mb-8 mb-4`}>
        Reservation
      </h2>
      <div
        className={`flex md:justify-center justify-start md:items-center items-start md:flex-row flex-col ELborder rounded-2xl md:gap-22 gap-0`}
      >
        <div
          className={`md:w-3/5 w-full flex flex-col md:x-12 md:px-24 px-6 py-6 ${styles.paragraph} text-white`}
        >
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name Surname"
                className="ELborderBottom bg-transparent text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+ 22334455"
                className="ELborderBottom bg-transparent text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guests">Number of guests</label>
              <select
                name="guests"
                id="guests"
                placeholder="Number of guests"
                className="ELborderBottom bg-transparent text-[12px]"
              >
                <option className="text-primary" value="2">
                  2
                </option>
                <option className="text-primary" value="3">
                  3
                </option>
                <option className="text-primary" value="4">
                  6
                </option>
                <option className="text-primary" value="5">
                  5
                </option>
                <option className="text-primary" value="6">
                  6
                </option>
                <option className="text-primary" value="7">
                  7
                </option>
                <option className="text-primary" value="8">
                  8
                </option>
                <option className="text-primary" value="9">
                  9
                </option>
                <option className="text-primary" value="10">
                  10
                </option>
                <option className="text-primary" value="10">
                  10
                </option>
                <option className="text-primary" value="11">
                  11
                </option>
                <option className="text-primary" value="12">
                  12
                </option>
                <option className="text-primary" value="more">
                  More
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="ELborderBottom bg-transparent text-[12px]"
              />
              <div className="flex flex-col">
                <label htmlFor="name">Time comments</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="ELborderBottom bg-transparent text-[12px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment">Additional comments</label>
              <input
                type="text"
                id="comment"
                name="comment"
                className="ELborderBottom bg-transparent text-[12px]"
              />
            </div>
          </form>
          <button
            className={`w-[200px] inline-block text-center py-2 px-4 ELborder md:mt-16 mt-6 mx-auto md:mx-auto ${styles.paragraph} rounded-3xl cursor-pointer hover:bg-secondary`}
          >
            Reserve
          </button>
        </div>
        <div className="md:w-2/5 w-full zoom resPhoto">
          <img
            src={videoSrc}
            alt="fish"
            className="resPhoto w-full md:min-h-[702px] h-auto md:mt-0 mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
