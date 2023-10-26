import React from "react";
import { Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import './gallery.css'

import bannerOne from "./../../assets/img/banner-1.jpg";
import bannerTwo from "./../../assets/img/banner-2.jpg";
import bannerThree from "./../../assets/img/banner-3.jpg";
import bannerFour from "./../../assets/img/banner-4.jpg";

function Gallery() {
    return(
        <div className="flex flex-col justify-center items-center mb-12" id="gallery">
        <div className="w-4/5">
            <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
        </div>
        </div>
    )
}

export default Gallery;