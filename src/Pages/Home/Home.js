import React from "react";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import BannerImage from "./BannerImage";
import ProductsFeatures from "./ProductsFeatures";
import AboutUs from "./AboutUs";
import Summary from "./Summary";
import Questions from "./Questions";
import Impact from "./Impact";

const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <Banner></Banner>
      <BannerImage></BannerImage>
      <ProductsFeatures></ProductsFeatures>
      <AboutUs></AboutUs>
      <Summary></Summary>
      <Questions></Questions>
      <Impact></Impact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
