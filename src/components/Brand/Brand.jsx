import React from "react";
import "./brand.scss";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Brand = () => {
  return (
    <div className="brand secsion">
      <Box
        className="brand__container container flex"
        style={{ overflow: "hidden" }}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <div className="count">
          <div
            className="title fs-42 fw-700"
            style={{ fontStyle: "normal", fontFamily: '"Inter", sans-serif' }}
          >
            400+
          </div>
          <span
            className="fs-18 fw-400"
            style={{ fontStyle: "normal", fontFamily: '"Inter", sans-serif' }}
          >
            Universities worldwide that partner with us
          </span>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={6} md={3}>
            <Item>
              <div className="brand__item">
                <p
                  className="fs-30 fw-500"
                  style={{ color: "#B8DCFF", letterSpacing: "1px" }}
                >
                  McGill
                </p>
                <span
                  className="fs-15 fw-300"
                  style={{
                    color: "#B8DCFF",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  University
                </span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <div className="brand__item">
                <p
                  className="fs-30 fw-500"
                  style={{
                    color: "#F6C07A",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Amity
                </p>
                <span
                  className="fs-15 fw-400"
                  style={{
                    color: "#F6C07A",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  University
                </span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <div className="brand__item">
                <p
                  className="fs-15 fw-400"
                  style={{
                    color: "#F77E53",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  University of
                </p>
                <span
                  className="fs-30 fw-500"
                  style={{
                    color: "#F77E53",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Houston
                </span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <div className="brand__item">
                <p
                  className="fs-15 fw-400"
                  style={{
                    color: "#2071F6",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  University of
                </p>
                <span
                  className="fs-30 fw-500"
                  style={{
                    color: "#2071F6",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Plymouth
                </span>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Brand;
