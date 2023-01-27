import React from "react";
import BannerHome from "../banner/BannerHome";
import { ProductBox } from "../product";
import SearchHome from "./SearchHome";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="container ">
          <div className="mt-[20px]">
            <SearchHome />
          </div>

          <div className="mt-[20px]">
            <BannerHome />
          </div>

          <div className="mt-[20px]">
            <h2 className="font-[600] mb-[20px] leading-[25px] 
            text-[19px] text-[#fffffffc]">
              What's on your mind?
            </h2>
            <ProductBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
