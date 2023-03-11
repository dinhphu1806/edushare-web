import React, { useEffect, useState } from "react";
import { BsFillFileArrowUpFill } from "react-icons/bs";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleListenToScroll = () => {
    // let winHeight = 120;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 120) {
      setIsVisible(true);
      //   console.log(true);
    } else {
      setIsVisible(false);
      //   console.log(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleListenToScroll);

    return () => {
      window.removeEventListener("scroll", handleListenToScroll);
    };
  });
  return (
    <>
      {isVisible && (
        <div
          className="back-to-top"
          style={{
            position: "fixed",
            right: "0",
            bottom: "15%",
            cursor: "pointer",
            transition: "ease-in-out 0.3s linear",
            zIndex: "999",
          }}
          title="back to top"
          onClick={handleBackToTop}
        >
          <BsFillFileArrowUpFill
            style={{ width: "35px", height: "35px", color: "#ccc" }}
          />
        </div>
      )}
    </>
  );
};

export default BackToTop;
