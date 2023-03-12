import React from "react";
import "./feedback.scss";
import { dataFeedback } from "./dataFeedback";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn">
      <motion.button
        whileTap={{ scale: 1.3 }}
        className="next"
        onClick={onClick}
      >
        <i
          className="fa-solid fa-arrow-right"
          style={{ fontSize: "26px", width: "50px" }}
        ></i>
      </motion.button>
    </div>
  );
};

// prev
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn">
      <motion.button
        whileTap={{ scale: 1.3 }}
        className="prev"
        onClick={onClick}
      >
        <i
          className="fa-solid fa-arrow-left"
          style={{ fontSize: "26px", width: "50px" }}
        ></i>
      </motion.button>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplaySpeed: 2000,
  initialSlide: 0,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1, // hieen thi anh
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1, // anh con 2
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 678,
      settings: {
        slidesToShow: 1, // anh con 1
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        // centerMode: true,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1, // anh con 1
        slidesToScroll: 1,
        // nextArrow: false,
        // prevArrow: false,
        // centerMode: true,
        initialSlide: 1,
        lazyLoad: true,
      },
    },
  ],
};

const Feedback = () => {
  return (
    <div className="feedback secsion">
      <div className="feedback__container container relative">
        <div
          className="feedback__title flex flex-between"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1>Transform your life through education</h1>
          {/* <div className="feedback__arrow flex">
            <i class="fa-sharp fa-solid fa-arrow-left"></i>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
        <div
          className="feedback__content"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Slider
            className="owl-theme feedback__content__container"
            {...settings}
          >
            {dataFeedback.map((item) => {
              return (
                <div className="feedback__content__item " key={item.id}>
                  <h1>{item.title}</h1>
                  <p className="mt-1 mb-1">{item.desc}</p>
                  <div className="feedback__info flex mt-2">
                    <img src={item.imgAvatar} alt="" />

                    <div className=" ml-2">
                      <span>{item.userName}</span>
                      <p>{item.address}</p>
                      <div className="star flex mt-1">
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFB800", fontSize: "12px" }}
                        ></i>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFB800", fontSize: "12px" }}
                        ></i>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFB800", fontSize: "12px" }}
                        ></i>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFB800", fontSize: "12px" }}
                        ></i>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFB800", fontSize: "12px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
