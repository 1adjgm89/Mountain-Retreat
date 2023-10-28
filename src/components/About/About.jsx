import React from "react";
import TripAdvisor from "../TripAdvisor/TripAdvisor";


function About(){    
    
    return (
        <div className="w-full flex lg:flex-row py-20 pr-5 md:flex-col sm:flex-col md:p-6 sm:p-6" id="about">
            
            <div className="lg:w-4/5 md:w-full sm:w-full sm:mt-4 md:mt-4">
                <h3 className="text-[32px] font-bold text-[#295b52] mb-5">Welcome to Sitaram Mountain Retreat</h3>
                <p className="text-[#1e739c] text-[17px] pt-[10px]">Located in Munnar, Kerala</p>
                <p className="text-[#555354] text-[15px] font-medium mb-5 mt-5 leading-normal">“Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open. When ‘I’ is replaced by ‘We’ even illness becomes wellness.”</p>
                <p className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">At Sitaram Mountain Retreat we hold your hand through your journey of healing, rejuvenation, self-exploration and a healthier joyous way of living.</p>
                <p  className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">Sitaram Mountain Retreat welcomes you to enjoy being in nature’s lap and witnessing the rejuvenating and refreshing sojourn amidst spice plantations adorning the hills. It is set in the beautiful town of Munnar, which in Malayalam and Tamil means “Three rivers”.</p>
                <p  className="text-[#555354] text-[15px] font-medium mb-5 leading-normal">Munnar is named after the Periavaru, Madupetti and Nallathanni rivers which flow across its land. It is a prime tourist destination in Kerala which is well known for its breathtaking natural abundance. Located on the mountain range of the Western Ghats, Munnar is the ideal hill station for a memorable healing stay.</p>
                
            </div>
            <div className="lg:w-1/5 lg:pl-4 md:w-full sm:w-full sm:mt-4 md:mt-4">
               <TripAdvisor/>
               <a href="https://www.tripadvisor.in/Hotel_Review-g303881-d1673211-Reviews-Sitaram_Mountain_Retreat-Munnar_Idukki_District_Kerala.html" target="_blank" rel="noreferrer" className="bg-[#d1a13b] text-white font-medium text-[18px] px-[30px] py-[7px] cursor-pointer transition-all hover:bg-[#295b52] hover:text-white mr-4 mt-4 inline-block w-full text-center" >Visit Tripadvisor</a>
            </div>
        </div>
    )
}

export default About;