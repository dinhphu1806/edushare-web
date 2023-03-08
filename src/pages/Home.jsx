import React from "react";
import Banner from "../components/Banner/Banner";
import Brand from "../components/Brand/Brand";
import Courses from "../components/Courses/Courses";
import Feature from "../components/Feature/Feature";
import Feedback from "../components/Feedback/Feedback";
import Lecture from "../components/Lecture/Lecture";
import Public from "../components/Public/Public";

const Home = () => {
  return (
    <div className="layout">
      <Banner />
      <Brand />
      <Public />
      <Courses />
      <Lecture />
      <Feedback />
      {/* <Feature /> */}
    </div>
  );
};

export default Home;
