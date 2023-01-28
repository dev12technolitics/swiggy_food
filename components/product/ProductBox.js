import { Box } from "@mui/material";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerdata from "../../data/banner/allbanner";


export default function ProductBox() {
  const timeoutRef = React.useRef(null);
  

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }



  return (
    <Box className="h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        // loop={filteredBanner?.length > 1 ? true : false}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {bannerdata?.map((item, index) => {
          return (
            <SwiperSlide className="w-full" key={index}>
              <div className="pro_box">
                <div
                  className="pro_img"
                  //   style={{
                  //     backgroundImage: `url("${item?.image}")`,
                  //   }}
                />{" "}
              </div>
              <div className="flex flex-col justify-center items-center">
                <h5
                  className="text-[11px] text-[#fffffffc]"
                  style={{fontFamily: 'Poppins',}}
                >
                  Masala dosa
                </h5>
              </div>

              <div className="pro_box">
                <div
                  className="pro_img"
                  //   style={{
                  //     backgroundImage: `url("${item?.image}")`,
                  //   }}
                />{" "}
              </div>
              <div className="flex flex-col justify-center items-center">
                <h5
                  className="text-[11px] text-[#fffffffc]"
                  style={{fontFamily: 'Poppins',}}
                >
                  Masala dosa
                </h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
