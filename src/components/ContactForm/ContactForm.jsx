import React from "react";

import about from './../../assets/img/about.jpg'

function ContactForm(){
    return(
        <div className="flex lg:flex-row justify-center items-center mb-12 sm:flex-col md:flex-col" id="contactForm">
            <div className="w-8/12 h-full relative">
                <img src={about} alt="" className="w-full"/>
            </div>
            <div className="lg:w-4/12  flex flex-col justify-center md:w-8/12 sm:w-8/12">
                <div className="bg-[#d1a13b] p-12 h-[50%] relative lg:-left-[10em] sm:left-0 md:left-0">
                    <h3 className="text-center text-[40px] font-bold text-white uppercase mb-4">ENQUIRE NOW</h3>
                    <form action="">
                        <input type="text" placeholder="Name" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" />
                        <input type="text" placeholder="Email" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" />
                        <input type="text" placeholder="Phone" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" />
                        <input type="textarea" placeholder="Message" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" />
                        <input type="submit" value="SEND" className="bg-[#295b52] text-white font-medium text-[18px] px-[30px] py-[7px] cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm