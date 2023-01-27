import React from "react";
import { Bannerbox } from "../banner";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="container Banner_box">
          <Bannerbox />
        </div>
      </div>
    </>
  );
};

export default HomePage;
