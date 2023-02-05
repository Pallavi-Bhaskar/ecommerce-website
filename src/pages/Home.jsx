import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <h2
        style={{
          color: "black",
          padding: 20,
          textAlign: "center",
        }}
      >
        GRAB YOUR FAVOURITE BRANDS HERE !!
      </h2>
      <Categories />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
