import { useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="App relative">
      <Layout />
    </div>
  );
}

export default App;
