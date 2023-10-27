import React from "react";
import { Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";

import bannerOne from "./../../assets/img/Banner/Banner_1.jpg";
import bannerTwo from "./../../assets/img/Banner/Banner_2.jpg";
import bannerThree from "./../../assets/img/Banner/Banner_3.jpg";
import bannerFour from "./../../assets/img/Banner/Banner_4.jpg";

function Banner() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={()=>{}}
      onSlideChange={() => {}}
    >
      <SwiperSlide>
        <img
          src={bannerOne}
          alt="Sitaram Mountain Retreat"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerTwo}
          alt="Sitaram Mountain Retreat"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerThree}
          alt="Sitaram Mountain Retreat"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerFour}
          alt="Sitaram Mountain Retreat"
          className="w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
