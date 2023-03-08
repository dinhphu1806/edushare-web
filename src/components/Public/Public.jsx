import React from "react";
import "./public.scss";
import img from "../../assets/images/inspired-young-man-denim-shirt-asks-pay-attention-something-very-interesting-removebg-preview.png";
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";
import avatar4 from "../../assets/images/avatar-4.png";

import { dataPublic } from "./dataPublic";

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

const Public = () => {
  return (
    <div className="public secsion">
      <Box className="public__container container">
        <Grid container spacing={2} className="public__list">
          <Grid item xs={12} md={5} className="public__left relative">
            <Item className="flex flex-center relative">
              <img src={img} alt="" />
              <div className="public__left__content">
                <div className="public__left__content__container">
                  <h1>56, 5470+</h1>
                  <p>Peoples are learning</p>
                  <div className="list__avatar flex flex-center mt-1">
                    <img src={avatar1} alt="" />
                    <img src={avatar2} alt="" />
                    <img src={avatar3} alt="" />
                    <img src={avatar4} alt="" />
                    <div className="circle relative">
                      <div className="text">3+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="public__circle"></div>
            </Item>
          </Grid>
          <Grid item xs={12} md={7} className="public__right">
            <div className="public__right__title">
              <h1>How our online public school works</h1>
            </div>
            <Grid container spacing={2} className="public__right__content">
              {dataPublic.map((item) => {
                return (
                  <Grid
                    key={item.id}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    className="public__right__items"
                  >
                    <Item className="public__right__item">
                      <div className="image relative">
                        <img src={item.image} alt="" />
                      </div>
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Public;
