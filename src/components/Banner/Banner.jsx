import React from "react";
import "./banner.scss";
import img from "../../assets/images/portrait-cheerful-young-man-smiling-pointing-finger-up-removebg-previewbanner.png";
import img1 from "../../assets/images/fill-1.png";
import img2 from "../../assets/images/half__circle.png";
import img3 from "../../assets/images/group.png";
import img4 from "../../assets/images/vector-1.png";
import { FaCheck } from "react-icons/fa";

// AOS

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

const Banner = () => {
  return (
    <div className="banner secsion">
      <Box className="banner__container container ">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <div
                className="banner__left"
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <h2
                  className="fw-700"
                  style={{
                    fontStyle: "normal",
                    fontFamily: ' "Inter", sans-serif',
                  }}
                >
                  Discover best classes for the best learning
                </h2>
                <p
                  className="fw-400"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontStyle: "normal",
                  }}
                >
                  We designed Connections Academy to give students all across
                  the nation a tuition-free online public school that lets them
                  learn.
                </p>
                <button
                  style={{
                    backgroundColor: "#f77e53",
                    borderRadius: "16px",
                    fontFamily: '"Inter", sans-serif',
                    fontStyle: "normal",
                    color: "#fef4f1",
                  }}
                  className="fw-600 fs-18"
                >
                  Get Start
                </button>
                <span
                  className="flex"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontStyle: "normal",
                  }}
                >
                  Not sure when to start?
                  <a href=""> Learn more</a>
                </span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
              >
                <div className="banner__right__container flex flex-center relative ">
                  <div className="image relative">
                    <img src={img} className="img-cover" alt="" />
                  </div>
                  <div className="fill-1">
                    <img src={img1} alt="" />
                  </div>
                  <div
                    className="fill-2"
                    style={{ backgroundColor: "#fff0", borderRadius: "10px" }}
                  >
                    <div className="fill-2__container">
                      <h1
                        className="fw-600 fs-12 text-center"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontStyle: "normal",
                        }}
                      >
                        Increase Audience
                      </h1>
                      <div
                        className="tick relative"
                        style={{
                          backgroundColor: "#2076ff",
                          borderRadius: "50%",
                        }}
                      >
                        <FaCheck className="check" style={{ color: "#fff" }} />
                      </div>
                      <div className="half__circle">
                        <img src={img2} alt="" />
                      </div>
                      <div className="circle"></div>
                      <div
                        className="count fw-600 fs-28 text-center"
                        style={{
                          fontFamily: ' "Inter", sans-serif',
                          fontStyle: "normal",
                        }}
                      >
                        125K
                      </div>
                      <div className="zero__percent">0 %</div>
                      <div className="half__percent">50 %</div>
                      <div className="follow">Followers</div>
                    </div>
                  </div>
                  {/* <div className="fill__right"></div> */}
                  <div className="fill-3">
                    <div className="fill-3__container relative">
                      <img src={img3} alt="" />
                    </div>
                  </div>

                  <div className="fill-4">
                    <div className="fill-4__container">
                      <div className="flex">
                        <div className="circle flex relative">
                          <img src={img4} alt="" />
                        </div>
                        <div className="ml-1">
                          <h1>Counting</h1>
                          <span className="flex">100,000 +</span>
                        </div>
                      </div>
                      <div className="text mt-1 flex flex-between">
                        <p>Besnik graduations</p>
                        <p>15.35%/yr</p>
                      </div>
                    </div>
                  </div>

                  <div className="fill-5"></div>

                  <div className="fill-6"></div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
