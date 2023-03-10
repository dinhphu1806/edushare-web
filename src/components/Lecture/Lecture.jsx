import React from "react";
import "./lecture.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";

import imgbanner from "../../assets/images/lecture-banner.png";
import img1 from "../../assets/images/lecture-1.png";
import img2 from "../../assets/images/lecture-2.png";
import img3 from "../../assets/images/lecture-3.png";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const Lecture = () => {
  return (
    <div className="lecture secsion">
      <div className="lecture__container container">
        <Grid container spacing={2} className="flex">
          <Grid item xs={12} md={6}>
            <Item
              className="lecture__left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1
                className="fw-700"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "normal",
                  textTransform: "unset",
                }}
              >
                Transform your life through education
              </h1>
              <p
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  fontStyle: "normal",
                  color: "#606176",
                }}
                className="fw-400"
              >
                Ariel Hocsman launched a new career in software development by
                taking courses on Besnik. What will you be able to do?
              </p>
              <button
                style={{
                  backgroundColor: "#f77e53",
                  borderRadius: "16px",
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "normal",
                  color: "#fef4f1",
                  cursor: "pointer",
                }}
                className="fw-600"
              >
                Get Started
              </button>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <div
                className="lecture__right relative"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div
                  className="lecture__right__overlay"
                  style={{ backgroundColor: "#f6f5fa", borderRadius: "18px" }}
                ></div>
                <div className="lecture__right__image">
                  <img src={imgbanner} className="img-cover" alt="" />

                  <div className="circle">
                    <BsFillPlayCircleFill className="icon" />
                  </div>
                </div>
                <div
                  className="lecture__right__images flex"
                  // style={{ overflow: "hidden", width: "100%" }}
                >
                  <div className="items relative">
                    <div className="item">
                      <img src={img1} alt="" className="img-cover" />
                      <h1
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontStyle: "normal",
                        }}
                        className="fw-600"
                      >
                        Lecture 1
                      </h1>
                    </div>
                  </div>
                  <div className="items relative">
                    <div className="item">
                      <img src={img2} alt="" />
                      <h1
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontStyle: "normal",
                        }}
                        className="fw-600"
                      >
                        Lecture 2
                      </h1>
                    </div>
                  </div>
                  <div className="items relative">
                    <div className="item">
                      <img src={img3} alt="" />
                      <h1
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontStyle: "normal",
                        }}
                        className="fw-600"
                      >
                        Lecture 3
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Lecture;
