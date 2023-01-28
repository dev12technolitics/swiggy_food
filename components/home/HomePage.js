import React from "react";
import BannerHome from "../banner/BannerHome";
import { CategoryBox } from "../category";
import { ProductBox } from "../product";
import SearchHome from "./SearchHome";

const HomePage = () => {
  return ( 
    <>
      <div className="w-full flex flex-col justify-center items-center bg-[#070f10]">
        <div className="container ">
          <div className="mt-[20px] flex-col md:hidden ">
            <SearchHome />
          </div>

          <div className="mt-[20px] flex flex-col md:hidden ">
            <BannerHome />
          </div>

          <div className="mt-[20px] flex flex-col md:hidden">
            <h2
              className="font-[600] mb-[20px] leading-[25px] 
            text-[19px] text-[#eae5dc]"
              style={{
                fontFamily: "Crimson Text",
              }}
            >
              What's on your mind?
            </h2>
            <ProductBox />
          </div>

          <div className="mt-[20px] flex flex-col md:hidden">
            <h2
              className="font-[600] mb-[10px] leading-[25px] 
            text-[19px] text-[#eae5dc]"
              style={{
                fontFamily: "Crimson Text",
              }}
            >
              Deserts
            </h2>
            <p class="leading-[1.3] text-[15px] text-[400] text-[#d3cfc6] mb-[20px]" style={{fontFamily: 'Poppins'}}>
              <span>
                Porro eveniet, autem ipsam corrupti consectetur cum.
                Repudiandae dignissimos fugiat sit nam.{" "}
              </span>
            </p>
            <CategoryBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
