import React from "react";
import "./footer.scss";

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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <div className="footer__logo flex relative">
                <div className="header__logo__icon flex flex-center">E</div>
                <span>Edushare</span>
              </div>
              <span className="footer__text">
                Our motto to fulfill customer demand by making them satisfied
                with growing their business.
              </span>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1>About</h1>
              <ul>
                {dataAbout.map((item) => {
                  return <li key={item.id}>{item.tilte}</li>;
                })}
              </ul>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1>Support</h1>
              <ul>
                {dataSupport.map((item) => {
                  return <li key={item.id}>{item.tilte}</li>;
                })}
              </ul>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Item className="footer__item">
              <h1>Get our app</h1>
              <div
                className="flex footer__links"
                style={{
                  padding: "7px 10px",
                  border: "1px solid #606176",
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
                    color: "#606176",
                  }}
                />
                <div className="flex flex-column">
                  <span
                    style={{ textTransform: "uppercase", color: "#606176" }}
                    className="fs-12"
                  >
                    Get it on
                  </span>
                  <p className="fs-16 fw-500" style={{ color: "#606176" }}>
                    Google Play
                  </p>
                </div>
              </div>
              <div
                className="flex footer__links"
                style={{
                  padding: "7px 10px",
                  border: "1px solid #606176",
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
                    color: "#606176",
                  }}
                />
                <div className="flex flex-column">
                  <span
                    style={{ textTransform: "uppercase", color: "#606176" }}
                    className="fs-12"
                  >
                    Get it on
                  </span>
                  <p className="fs-16 fw-500" style={{ color: "#606176" }}>
                    App Store
                  </p>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>

        <hr
          className="mt-5"
          style={{ backgroundColor: " #606176", opacity: "0.5" }}
        />

        <div className="footer__auth">
          Copyright by dinhphu1806 2023 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
