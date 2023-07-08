import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <div data-aos="fade-up" data-aos-duration="3000">
        <Home />
        <Footer />
      </div>
    </>
  );
}
