import React from "react";
import { Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import './gallery.css'

import bannerOne from "./../../assets/img/G1.png";
import bannerTwo from "./../../assets/img/G2.png";
import bannerThree from "./../../assets/img/G4.png";
import luxuryRoomOne from './../../assets/img/Luxury room/side-view-of-guest-accommodation_48142925317_o.png';
import luxurySuitOne from './../../assets/img/Luxury suite room/Treetop-Studio-Room-Exterior-web-1-1.jpg';
import forestDuplex2 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_2.jpg';
import forestDuplex1 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_1.jpg';
import forestStudio5 from './../../assets/img/Forest Bathing Studio Cottage/Treetop-Studio-Room-web-1-1.jpg';
import forestStudio1 from './../../assets/img/Forest Bathing Studio Cottage/Forest_Bathing_Studio_Cottage_1.jpg';


function Gallery() {
    return(
        <div className="flex flex-col justify-center items-center mb-12" id="gallery">
        <div className="lg:w-4/5 sm:w-full md:w-full ">
            <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
      onSwiper={()=>{}}
      onSlideChange={()=>{}}
    >
      <SwiperSlide>
        <img
          src={bannerOne}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerTwo}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px]  object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerThree}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={forestStudio1}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={forestStudio5}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={forestDuplex1}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={forestDuplex2}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={luxurySuitOne}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={luxuryRoomOne}
          alt="Sitaram Mountain Retreat"
          className="w-full lg:max-h-[500px] object-cover"
        />
      </SwiperSlide>
      
    </Swiper>
        </div>
        </div>
    )
}

export default Gallery;