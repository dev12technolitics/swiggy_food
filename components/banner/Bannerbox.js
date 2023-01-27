
import React from "react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerdata from "../../data/banner/allbanner";
import 'swiper/css/navigation';
import { Grid } from "@mui/material";

const Bannerbox = () => {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <Swiper
            autoplay={{ delay: 2100 }}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1
                    // spaceBetween: 6,
                }
            }}
            className="bg-[#F5F5F5]"
        >
            {bannerdata?.map((item, index) => {
                return (
                    index % 2 !== 0 ? (
                        <SwiperSlide key={index}  >
                        <div className="banner_box_first">
                            <Grid container>
                                <Grid
                                    xxl={8}
                                    xl={8}
                                    lg={8}
                                    md={8}
                                    sm={8}
                                    xs={8} className="">
                                    <div className="w-full px-8 py-2 banner-main-box-first">
                                        <h1 className="title_banner font-[550] text-[#303030] text-[48px] tracking-[1px] leading-[70px]">2 MP AcuSense Motorized Varifocal Turret Network Camera</h1>
                                        <h6 className="text-[#000000] text-[16px] font-[540] mt-[20px] by-banner">BY HIKVISION</h6>
                                        <div className="botton_more">Snow More</div>
                                    </div>
                                </Grid >

                                <Grid
                                    xxl={4}
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4} className="">
                                   <div className="w-full flex justify-center items-center h-full">
                                        <div className="banner_box_img img_two_banner" style={{ backgroundImage: `url("${item.img}")` }} />
                                    </div>
                                </Grid>
                            </Grid >
                        </div>
                    </SwiperSlide>
                    ) : (
                        <SwiperSlide key={index}  >
                        <div className="banner_box_first">
                            <Grid container>
                                <Grid
                                    xxl={4}
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4} className="">
                                    <div className="w-full flex justify-center items-center h-full">
                                        <div className="banner_box_img" style={{ backgroundImage: `url("${item.img}")` }} />
                                    </div>
                                </Grid>

                                <Grid
                                    xxl={8}
                                    xl={8}
                                    lg={8}
                                    md={8}
                                    sm={8}
                                    xs={8} className="">
                                    <div className="w-full px-8 py-2 banner-main-box-first">
                                        <h1 className="title_banner font-[550] text-[#303030] text-[48px] tracking-[1px] leading-[70px]">2 MP AcuSense Motorized Varifocal Turret Network Camera</h1>
                                        <h6 className="text-[#000000] text-[16px] font-[540] mt-[20px] by-banner">BY HIKVISION</h6>
                                        <div className="botton_more">Snow More</div>
                                    </div>
                                </Grid >
                            </Grid >
                        </div>
                    </SwiperSlide>
                    )
                )
            })}

        </Swiper>
    );
}

export default Bannerbox;


// style={{ backgroundColor: `${item.color}` }}