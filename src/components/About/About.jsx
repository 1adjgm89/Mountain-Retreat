import React from "react";
import AboutImage from './../../assets/img/about.jpg'

function About(){
    return (
        <div className="w-full flex lg:flex-row py-20 pr-5 md:flex-col sm:flex-col md:p-6 sm:p-6" id="about">
            <div className="lg:w-2/4 md:w-full sm:w-full">
                <img src={AboutImage} alt="Sitaram Mountain Retreat" />
            </div>
            <div className="lg:w-2/4 md:w-full sm:w-full sm:mt-4 md:mt-4">
                <h3 className="text-4xl font-medium leading-tight">Welcome to<br/> Sitaram Mountain Retreat</h3>
                <p className="text-[#1e739c] text-[17px] pt-[10px]">Located in Munnar, Kerala</p>
                <p className="text-[#555354] text-[15px] font-medium mb-5 mt-5 leading-normal">“Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open. When ‘I’ is replaced by ‘We’ even illness becomes wellness.”</p>
                <p className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">At Sitaram Mountain Retreat we hold your hand through your journey of healing, rejuvenation, self-exploration and a healthier joyous way of living.</p>
                <p  className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">Sitaram Mountain Retreat welcomes you to enjoy being in nature’s lap and witnessing the rejuvenating and refreshing sojourn amidst spice plantations adorning the hills. It is set in the beautiful town of Munnar, which in Malayalam and Tamil means “Three rivers”.</p>
                <p  className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">Munnar is named after the Periavaru, Madupetti and Nallathanni rivers which flow across its land. It is a prime tourist destination in Kerala which is well known for its breathtaking natural abundance. Located on the mountain range of the Western Ghats, Munnar is the ideal hill station for a memorable healing stay.</p>
            </div>
        </div>
    )
}

export default About;