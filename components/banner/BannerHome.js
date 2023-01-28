import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import preview from "../../assets/preview.png";
import bannerdata from "../../data/banner/allbanner";

export default function BannerHome() {
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
            slidesPerView: 1,
            spaceBetween: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {bannerdata?.map((item, index) => {
          return (
            <SwiperSlide
              className="w-full h-[500px]"
              key={index}
              style={{
                background: "#142629",
                background:
                  "linear-gradient(90deg, #142629 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                borderRadius: "4%",
              }}
            >
              <Grid container>
                <Grid xxl={7} xl={7} lg={7} md={7} sm={7} xs={7}>
                  <div
                    style={{
                      padding: " 30px 0px 30px 23px",
                    }}
                  >
                    <h3
                      className="font-bold leading-[33px] text-[28px] text-[#eae5dc]
                 height-[67px] overflow-hidden"
                 style={{
                  fontFamily: 'Crimson Text',
                }}
                    >
                      Top Brands Top Deals
                    </h3>

                    <h5
                      className="font-[500] leading-[25px] text-[18px] text-[#eae5dc]
                 overflow-hidden"
                 style={{
                  fontFamily: 'Poppins',
                }}
                    >
                      Minimum 30% OFF
                    </h5>

                    <h6
                      className="leading-[23px] text-[200] text-[18px] text-[#eae5dc]
                 height-[20px] overflow-hidden"
                 style={{
                  fontFamily: 'Poppins',
                }}
                    >
                      on your orders.
                    </h6>

                    <div
                      className=" w-[119px] bg-[#fffffff2] mt-[9px]
                     flex flex-col justify-center items-center text-[14px] font-bold"
                      style={{ borderRadius: "4px", padding: "5px", fontFamily: 'Poppins', }}
                    >
                      ORDER NOW
                    </div>
                  </div>
                </Grid>

                <Grid xxl={5} xl={5} lg={5} md={5} sm={5} xs={5}>
                <div className="flex flex-col justify-center items-center">
                  <div className="sameHeight overflow-hidden">
                    <Image
                    //   layout="responsive"
                      objectFit="cover"
                      width={"100%"}
                      height={"100%"}
                      src={preview}
                      className="hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  </div>
                </Grid>
                
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
