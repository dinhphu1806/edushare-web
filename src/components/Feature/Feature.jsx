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
  padding: theme.spacing(4),
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
          <Grid container spacing={2}>
            {dataFeature.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  className="feature__items "
                >
                  <Item className="feature__item">
                    <div className="feature__item__title relative">
                      <span> {item.title}</span>
                    </div>
                    <div
                      className="feature__item__price text-center"
                      style={{ width: "100%" }}
                    >
                      <h1 className="relative">
                        <span>$</span> {item.price}
                      </h1>
                    </div>
                    <div className="feature__content">
                      <div
                        className="feature__content__item flex flex-start"
                        style={{ width: "100%" }}
                      >
                        <div className="circle "></div>
                        <p>{item.desc_1}</p>
                      </div>
                      <div className="feature__content__item flex flex-start">
                        <div className="circle"></div>
                        <p>{item.desc_2}</p>
                      </div>
                      <div className="feature__content__item flex flex-start">
                        <div className="circle"></div>
                        <p>{item.desc_3}</p>
                      </div>
                      <div className="feature__content__item flex flex-start">
                        <div className="circle"></div>
                        <p>{item.desc_4}</p>
                      </div>
                    </div>
                    <div className="feature__btn">
                      <button>Buy Plan</button>
                    </div>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Feature;
