import React from "react";
import "./footer.scss";
// import "../../sass/__variables.scss";

import { dataAbout } from "./dataFooter";
import { dataSupport } from "./dataFooter";

import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
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

const Footer = () => {
  return (
    <div className="footer secsion">
      <div className="footer__container container">
        <Grid
          container
          spacing={1}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <div className="footer__logo flex relative">
                <div
                  className="header__logo__icon flex flex-center fs-28 fw-800"
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "#f77e53",
                    fontStyle: "normal",
                    borderRadius: "19px",
                    fontFamily: '"Exo", sans-serif',
                    color: "#fff",
                  }}
                >
                  E
                </div>
                <span className="fs-24 fw-700">Edushare</span>
              </div>
              <span
                className="footer__text fs-15 fw-400"
                style={{
                  fontStyle: "normal",
                  fontFamily: ' "Inter", sans-serif',
                }}
              >
                Our motto to fulfill customer demand by making them satisfied
                with growing their business.
              </span>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1
                className="fs-22 fw-700"
                style={{
                  backgroundColor: '"Inter", sans-serif',
                  fontStyle: "normal",
                }}
              >
                About
              </h1>
              <ul>
                {dataAbout.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="fs-14 fw-400"
                      style={{
                        fontStyle: "normal",
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {item.tilte}
                    </li>
                  );
                })}
              </ul>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1
                className="fs-22 fw-700"
                style={{
                  backgroundColor: '"Inter", sans-serif',
                  fontStyle: "normal",
                }}
              >
                Support
              </h1>
              <ul>
                {dataSupport.map((item) => {
                  return <li key={item.id}>{item.tilte}</li>;
                })}
              </ul>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1
                className="fs-22 fw-700"
                style={{
                  backgroundColor: '"Inter", sans-serif',
                  fontStyle: "normal",
                }}
              >
                Get our app
              </h1>
              <div
                className="flex footer__links"
                style={{
                  padding: "7px 10px",
                  // border: "1px solid #606176",
                  width: "100%",
                  maxWidth: "150px",
                  margin: "10px 30px",
                  borderRadius: "5px",
                }}
              >
                <FaGooglePlay
                  style={{
                    marginRight: "8px",
                    fontSize: "18px",
                    // color: "#606176",
                  }}
                  className="footer__links__icon"
                />
                <div className="flex flex-column footer__links__icon">
                  <span style={{ textTransform: "uppercase" }}>Get it on</span>
                  <p className="fs-16 fw-500">Google Play</p>
                </div>
              </div>
              <div
                className="flex footer__links"
                style={{
                  padding: "7px 10px",
                  // border: "1px solid #606176",
                  width: "100%",
                  maxWidth: "150px",
                  margin: "0 30px",
                  borderRadius: "5px",
                }}
              >
                <BsApple
                  style={{
                    marginRight: "8px",
                    fontSize: "18px",
                    // color: "#606176",
                  }}
                  className="footer__links__icon"
                />
                <div className="flex flex-column footer__links__icon">
                  <span
                    style={{ textTransform: "uppercase" }}
                    className="fs-12"
                  >
                    Get it on
                  </span>
                  <p className="fs-16 fw-500">App Store</p>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>

        <hr
          className="mt-5"
          style={{ backgroundColor: " #606176", opacity: "0.5" }}
        />

        <div
          className="footer__auth fs-15 fw-400"
          style={{ fontStyle: '"Inter", sans-serif', fontStyle: "normal" }}
        >
          Copyright by dinhphu1806 2023 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
