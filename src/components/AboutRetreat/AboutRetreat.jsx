import React from "react";

import beachRetreat from './../../assets/img/beach-retreat.jpg'
function AboutRetreat(){
    return (
        <div className="flex flex-col justify-center lg:items-end sm:items-center md:items-center mb-12" id="aboutRetreat">
            <div className="w-[90%] relative">
                <img src={beachRetreat} alt="Sitaram Beach Retreat" className="w-full" />
                <div className="lg:w-4/12 bg-[#295b52d1] p-8 lg:absolute h-full top-0 sm:relative md:relative sm:w-full md:w-full">
                    <h1 className="text-[#d1a13b] text-[35px] mb-6 font-bold">About Sitaram Retreat</h1>
                    <p className="text-white text-[16px] mb-3 leading-relaxed">Located on the shores of the Arabian Sea, Sitaram Beach Retreat is a destination for holistic healing experience.</p>
                    <p className="text-white text-[16px] mb-3 leading-relaxed">At Sitaram, our purpose is to show you the path to connect to yourself and experience a breakthrough transformation at physical, emotional, and spiritual levels. We want to make people realise that health is a necessary choice which needs a conscious effort to achieve and maintain.</p>
                    <p className="text-white text-[16px] mb-3 leading-relaxed">While at Sitaram, explore 100 years of legacy and tradition. The ambience and experience will take you to divine healing. From treatments to the food we serve, quality, customisation and the value is what differentiates us.</p>
                    <p className="text-white text-[16px] mb-3 leading-relaxed">The name SITARAM stands for – ‘Sita’ (Goddess of Harvest) meaning “furrow” and ‘Ram’ (7th Avatar of Lord Vishnu) meaning “stop, stand still, Rest, rejoice and be pleased” which resonates with our idea of harvesting medicinal plants and turning it into life enhancing medicines, making people aware of the goodness of Ayurveda and the utmost importance of understanding and treating our health.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutRetreat