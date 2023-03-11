import React from "react";
import "./modalSearch.scss";
import { BiSearch } from "react-icons/bi";

const ModalSearh = ({ openSearch, setOpenSearch }) => {
  //   const styleModal = {
  //     width: "100%",
  //     maxWidth: "300px",
  //     minHeight: "60px",
  //   };
  const styleContainer = {
    width: "100%",
    maxWidth: "300px",
    // minHeight: "60px",
    padding: "10px",
    position: "fixed",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100",
  };
  const styleInput = {
    width: "100%",
    // maxWidth: "300px",
    // height: "40px",
    padding: "10px 50px 10px 20px",
    borderRadius: "15px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    // zIndex: "999",
  };
  const styleIcon = {
    position: "absolute",
    right: "10%",
    fontSize: "18px",
    color: "#000",
  };
  return (
    <>
      <div
        className="modal-search"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#43444e49",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
        }}
        onClick={() => setOpenSearch(!openSearch)}
      ></div>
      <div className="modal-search__container " style={styleContainer}>
        <div className="flex">
          <input type="text" style={styleInput} placeholder="search ..." />
          <BiSearch style={styleIcon} className="modal-search__icon" />
        </div>
      </div>
    </>
  );
};

export default ModalSearh;
