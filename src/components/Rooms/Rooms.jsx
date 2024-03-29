import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./rooms.css";

// images
import luxuryRoomThree from './../../assets/img/Luxury room/Luxury-Room-Bathroom-web-scaled.png';
import luxuryRoomTwo from './../../assets/img/Luxury room/Luxury-Room-scaled.png';
import luxuryRoomOne from './../../assets/img/Luxury room/side-view-of-guest-accommodation_48142925317_o.png';

import  luxurySuitThree from './../../assets/img/Luxury suite room/Luxury-Suit-Bathroom-web.jpg';
import luxurySuitTwo from './../../assets/img/Luxury suite room/Luxury-Suit-room-web.jpg';
import luxurySuitOne from './../../assets/img/Luxury suite room/Treetop-Studio-Room-Exterior-web-1-1.jpg';

import forestStudio1 from './../../assets/img/Forest Bathing Studio Cottage/Forest_Bathing_Studio_Cottage_1.jpg';
import forestStudio2 from './../../assets/img/Forest Bathing Studio Cottage/Forest_Bathing_Studio_Cottage_2.jpg';
import forestStudio3 from './../../assets/img/Forest Bathing Studio Cottage/Forest_Bathing_Studio_Cottage_3.jpg';
import forestStudio4 from './../../assets/img/Forest Bathing Studio Cottage/Forest_Bathing_Studio_Cottage_4.jpg';
import forestStudio5 from './../../assets/img/Forest Bathing Studio Cottage/Treetop-Studio-Room-web-1-1.jpg';
import forestStudio6 from './../../assets/img/Forest Bathing Studio Cottage/Treetop-Studio-Room-with-Model-3-WEB-1.jpg';

import forestDuplex1 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_1.jpg';
import forestDuplex2 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_2.jpg';
import forestDuplex3 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_3.jpg';
import forestDuplex4 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_4.jpg';
import forestDuplex5 from './../../assets/img/Forest Bathing Duplex Cottage/Forest_Bathing Duplex_Cottage_5.jpg';

function Rooms(){

    return(
        <div id="rooms">
        <div className="w-full flex lg:flex-row my-14 sm:mt-0 md:mt-0 lg:mt-14 mb-0 md:flex-col sm:flex-col">
            <div className="lg:w-2/4 md:w-full sm:w-full lg:order-1 sm:order-2 md:order-2">
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={() => {}}
                onSlideChange={() => {}}
                >
                    <SwiperSlide>
                        <img
                        src={luxuryRoomOne}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={luxuryRoomTwo}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={luxuryRoomThree}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="lg:w-2/4 md:w-full sm:w-full lg:order-2 sm:order-1 md:order-1">
                <h1 className="px-12 mb-10 text-[#295b52] lg:text-[40px] sm:text-[20px] md:text-[25px] font-bold sm:mt-10 md:mt-10 lg:mt-0">LUXURY ROOM</h1>
                <div className="p-12 bg-[#295b52] min-h-[500px]">
                    <p className="font-[18px] text-white leading-relaxed mb-5">Our luxury rooms invite you to experience timeless architecture that seamlessly blends nature and modern comforts. Nestled within this charming stone building are eight spacious rooms that promise a soulful escape into nature’s embrace.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">The cool stone walls offer respite from the outside world, creating a sanctuary where you can truly unwind and recharge. Step inside to discover a cozy bedroom with an en suite bathroom. A quick look around reveals a beautiful open balcony, offering lush green views of Munnar, and its serene surroundings.The total space for each room is 450 sqft.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">A stay immersed in the lap of nature here not only pampers your senses but also beautifully complements the Ayurvedic treatments offered on-site. The healing power of the surrounding greenery and fresh air blends seamlessly with the holistic wellness practices, enhancing the overall therapeutic experience.</p>
                    {/* <a className="px-[20px] py-[10px] min-w-[150px] text-[18px] text-white border border-white uppercase font-bold bg-[#d1a13b] hover:opacity-75 transition-opacity inline-block" href="#contactForm">Book Now</a> */}
                </div>
            </div>
        </div>

        <div className="w-full flex lg:flex-row  mt-0 md:flex-col sm:flex-col sm:mt-8">
        <div className="lg:w-2/4 relative lg:-top-[4em] md:w-full sm:w-full  sm:top-0 md:top-0">
                <h1 className="px-12 mb-10 text-[#295b52] lg:text-[40px] sm:text-[20px] md:text-[25px] font-bold sm:mt-10 md:mt-10 lg:mt-0">LUXURY SUITE ROOM</h1>
                <div className="p-12 bg-[#295b52] min-h-[500px]">
                    <p className="font-[18px] text-white leading-relaxed mb-5">Our luxury suite rooms take the experience a notch higher with four spacious rooms that blend nature and luxury. While the stone building offers a rustic touch, the soothing interiors provide all the luxury comforts for an indulgent stay.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">Step inside to discover a spacious bedroom, en suite bathroom with a shower, jetted bathtub and an open balcony that looks out to the breathtaking views of Munnar.  With soothing interiors, extra space and beautiful views, the luxury suite rooms make your stay memorable.  Each room generously offers a total space of 850 square feet.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">The therapeutic benefits of living in connection with nature extend to both, your mind and body. We ensure that our stays, with their serene surroundings and comforts,  add their own touch of relaxation while you experience the healing powers of Ayurveda.</p>
                    {/* <a className="px-[20px] py-[10px] min-w-[150px] text-[18px] text-white border border-white uppercase font-bold bg-[#d1a13b] hover:opacity-75 transition-opacity inline-block" href="#contactForm">Book Now</a> */}
                </div>
            </div>
            <div className="lg:w-2/4 md:w-full sm:w-full ">
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={() => {}}
                onSlideChange={() => {}}
                >
                    <SwiperSlide>
                        <img
                        src={luxurySuitOne}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={luxurySuitTwo}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={luxurySuitThree}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
           
        </div>
        <div className="w-full flex lg:flex-row  mb-0 mt-0 relative lg:-top-[4em] md:flex-col sm:flex-col sm:mt-8 sm:top-0 md:top-0">
            <div className="lg:w-2/4 md:w-full sm:w-full sm:order-2 md:order-2 lg:order-1">
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={() => {}}
                onSlideChange={() => {}}
                >
                    <SwiperSlide>
                        <img
                        src={forestStudio1}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestStudio2}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestStudio3}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestStudio4}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestStudio5}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestStudio6}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="lg:w-2/4 md:w-full sm:w-full sm:order-1 md:order-1 lg:order-2">
                <h1 className="px-12 mb-10 text-[#295b52] lg:text-[40px] sm:text-[20px] md:text-[25px] font-bold sm:mt-10 md:mt-10 lg:mt-0">FOREST BATHING STUDIO COTTAGE</h1>
                <div className="p-12 bg-[#295b52] min-h-[500px]">
                    <p className="font-[18px] text-white leading-relaxed mb-5">Perched between the forest canopy, our two forest bathing studios are an extraordinary experience that’s both unique and profoundly memorable. Here, it’s just the gentle rustling of leaves and the soothing bird songs that keep you company.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">Walk through the beautiful ramp to reach the cottage, built on an elevated platform between the trees. Each cottage comes with a cozy verandah, a bedroom with an ensuite bathroom and a bathtub, and a separate sitting area. The total space for each room is 240 sqft.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">Here, you’ll find yourself in the heart of nature, surrounded by towering trees that provide a serene sanctuary for relaxation and rejuvenation. The cottage is built around a tree, with a trunk passing inside out. The atmosphere is an immersion in the wilderness, with an unparalleled connection to the natural world.</p>
                    {/* <a className="px-[20px] py-[10px] min-w-[150px] text-[18px] text-white border border-white uppercase font-bold bg-[#d1a13b] hover:opacity-75 transition-opacity inline-block" href="#contactForm">Book Now</a> */}
                </div>
            </div>
        </div>

        <div className="w-full flex lg:flex-row  mt-0 relative lg:-top-[4em] md:flex-col sm:flex-col sm:mt-8 sm:top-0 md:top-0 sm:mb-10 md:mb-10">
        <div className="lg:w-2/4 relative lg:-top-[4em] md:w-full sm:w-full sm:top-0 md:top-0 ">
                <h1 className="px-12 mb-10 text-[#295b52] lg:text-[40px] sm:text-[20px] md:text-[25px] font-bold sm:mt-10 md:mt-10 lg:mt-0">FOREST BATHING DUPLEX COTTAGE</h1>
                <div className="p-12 bg-[#295b52] min-h-[500px]">
                    <p className="font-[18px] text-white leading-relaxed mb-5">Blurring the boundaries between the wild and the luxurious, our forest bathing duplex takes the experience to a whole new level. Surrounded by lush forest canopies, these cottages allow you to disconnect from the world while providing ample space and all the necessary comforts.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">A common ramp takes you to two private cottages, built on an elevated platform. Walk through the inviting verandah to a warm living room with a bathroom and a bathtub. The room also has a beautiful balcony that opens out to the forest views. The staircase leads you to the bedroom below. The total space for each cottage is 475 sqft.</p>
                    <p  className="font-[18px] text-white leading-relaxed mb-5">These stays allow you to connect with nature in an uninterrupted way while taking care of all your comforts. The cottage is built around a tree, with a trunk passing inside out. The breathtaking experience of staying here is a true delight for the senses.</p>
                    {/* <a className="px-[20px] py-[10px] min-w-[150px] text-[18px] text-white border border-white uppercase font-bold bg-[#d1a13b] hover:opacity-75 transition-opacity inline-block" href="#contactForm">Book Now</a> */}
                </div>
            </div>
            <div className="lg:w-2/4 md:w-full sm:w-full ">
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={() => {}}
                onSlideChange={() => {}}
                >
                    <SwiperSlide>
                        <img
                        src={forestDuplex1}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestDuplex2}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestDuplex3}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestDuplex4}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src={forestDuplex5}
                        alt="Sitaram Mountain Retreat"
                        className="w-full max-h-[500px]"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
           
        </div>
        </div>
    )
}

export default Rooms