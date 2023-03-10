import React from "react";
import "./feature.scss";
import { dataFeature } from "./dataFeature";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Feature = () => {
  return (
    <div className="feature secsion">
      <div className="feature__container container">
        <div className="feature__title flex flex-between">
          <h1>Transform your life through education</h1>
          <a href="">Upgrade now</a>
        </div>
        <div className=" text-center relative">
          <Grid container spacing={1}>
            {/* {dataFeature.map((item) => {
              return ( */}
            <Grid
              // key={item.id}
              item
              xs={12}
              sm={12}
              md={4}
              className="feature__items "
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <Item className="feature__item">
                <div
                  className="feature__item__title relative"
                  style={{ backgroundColor: " #2076ff" }}
                >
                  <span> Regular</span>
                </div>
                <div
                  className="feature__item__price text-center"
                  style={{ width: "100%", backgroundColor: "#FAFBFF" }}
                >
                  <h1 className="relative">
                    <span>$</span> 35
                  </h1>
                </div>
                <div
                  className="feature__content"
                  style={{ backgroundColor: "#FAFBFF" }}
                >
                  <div
                    className="feature__content__item flex flex-start"
                    style={{ width: "100%" }}
                  >
                    <div className="circle "></div>
                    <p>1 Day Event</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>1 Speaker</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>Interaction Sessions</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>35 Classes</p>
                  </div>
                </div>
                <div
                  className="feature__btn"
                  style={{ backgroundColor: "#FAFBFF" }}
                >
                  <button
                    style={{ border: "1px solid #2076ff", color: "#2076ff" }}
                  >
                    Buy Plan
                  </button>
                </div>
              </Item>
            </Grid>

            <Grid
              // key={item.id}
              item
              xs={12}
              sm={12}
              md={4}
              className="feature__items "
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-back"
            >
              <Item className="feature__item">
                <div
                  className="feature__item__title relative"
                  style={{ backgroundColor: " #F6C07A" }}
                >
                  <span> Medium</span>
                </div>
                <div
                  className="feature__item__price text-center"
                  style={{
                    width: "100%",
                    backgroundColor: "#FFFBED",
                  }}
                >
                  <h1 className="relative">
                    <span>$</span> 65
                  </h1>
                </div>
                <div
                  className="feature__content"
                  style={{ backgroundColor: "#FFFBED" }}
                >
                  <div
                    className="feature__content__item flex flex-start"
                    style={{ width: "100%" }}
                  >
                    <div className="circle "></div>
                    <p>1 Day Event</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>1 Speaker</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>Interaction Sessions</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>35 Classes</p>
                  </div>
                </div>
                <div
                  className="feature__btn"
                  style={{ backgroundColor: "#FFFBED" }}
                >
                  <button
                    style={{ border: "1px solid #F6C07A", color: "#F6C07A" }}
                  >
                    Buy Plan
                  </button>
                </div>
              </Item>
            </Grid>

            <Grid
              // key={item.id}
              item
              xs={12}
              sm={12}
              md={4}
              className="feature__items "
              data-aos="fade-left"
              data-aos-offset="300"
            >
              <Item className="feature__item">
                <div
                  className="feature__item__title relative"
                  style={{ backgroundColor: " #F77E53" }}
                >
                  <span> Premium</span>
                </div>
                <div
                  className="feature__item__price text-center"
                  style={{ width: "100%", backgroundColor: "#FFF7F5" }}
                >
                  <h1 className="relative">
                    <span>$</span> 95
                  </h1>
                </div>
                <div
                  className="feature__content"
                  style={{ backgroundColor: "#FFF7F5" }}
                >
                  <div
                    className="feature__content__item flex flex-start"
                    style={{ width: "100%" }}
                  >
                    <div className="circle "></div>
                    <p>1 Day Event</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>1 Speaker</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>Interaction Sessions</p>
                  </div>
                  <div className="feature__content__item flex flex-start">
                    <div className="circle"></div>
                    <p>35 Classes</p>
                  </div>
                </div>
                <div
                  className="feature__btn"
                  style={{ backgroundColor: "#FFF7F5" }}
                >
                  <button
                    style={{
                      border: "1px solid #F77E53",
                      color: "#FFFF",
                      backgroundColor: "#F77E53",
                    }}
                  >
                    Buy Plan
                  </button>
                </div>
              </Item>
            </Grid>
            {/* );
            })} */}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Feature;
