import React from "react";
import MainCarousel from "../../../Homecarousel/MainCarousel";
import Sectioncarousel from "../../components/Homesectioncarousel/Sectioncarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <Sectioncarousel data={mens_kurta} sectionName={"Comfort Chairs"} />
        <Sectioncarousel data={mens_kurta} sectionName={"Living Room Furniture"} />
        <Sectioncarousel data={mens_kurta} sectionName={"Office Furniture"} />
        <Sectioncarousel data={mens_kurta} sectionName={"Bedroom Furniture"} />
        <Sectioncarousel data={mens_kurta} sectionName={"Kids' Fu rniture"} />
      </div>
    </div>
  );
};
export default Homepage;
