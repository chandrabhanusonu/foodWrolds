import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const AppLayOut = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);