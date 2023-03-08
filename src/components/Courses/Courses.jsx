import React from "react";
import "./courses.scss";
import { HiUserGroup } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";

import { dataCourses } from "./dataCourses";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Courses = () => {
  return (
    <div className="courses secsion">
      <div className="courses__container container">
        <div className="courses__title flex flex-between">
          <h1>How our online public school works</h1>
          <a href="">View all courses</a>
        </div>
        <div className="courses__content">
          <Grid container spacing={2}>
            {dataCourses.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className="courses__items"
                >
                  <Item className="courses__item">
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <h1>{item.title}</h1>
                    <div className="display flex flex-between">
                      <div className="display__view flex">
                        <HiUserGroup
                          className="icon"
                          style={{ color: "#F77E53" }}
                        />
                        {item.view}
                      </div>
                      <div className="display__time flex">
                        <AiFillClockCircle
                          className="icon"
                          style={{ color: "#F77E53" }}
                        />
                        {item.time}
                      </div>
                    </div>
                    <button className="flex flex-center">
                      <BsCartPlusFill
                        className="icon"
                        style={{ marginRight: "3px" }}
                      />
                      Add to Cart
                    </button>
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

export default Courses;
