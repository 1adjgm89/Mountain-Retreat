import React,{ useState } from "react";

import logo from './../../assets/img/logo-mountain-retreat.jpg'
import './header.css'
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex-row flex bg-white px-2 py-4 items-center sticky z-10 top-0 shadow-lg">
            <div className="lg:w-1/5 sm:w-2/6 md:2/6">
                <img src={logo} alt="" className="lg:w-[50%] sm:w-full md:w-full"/>
            </div>
            <div className="lg:w-4/5 md:w-4/6 sm:w-4/6 flex justify-end pr-8">
              <div>
              <a href="#contactForm" className="bg-[#295b52] text-white font-medium text-[18px] px-[30px] py-[7px] cursor-pointer transition-all hover:bg-[#d1a13b] hover:text-black mr-4" >Book Now</a>
              </div>
                <nav>
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#about" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#specialities" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>Specialities</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#rooms" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>Rooms</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#gallery" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>Gallery</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#aboutRetreat" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>About Retreat</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#contactForm" className="text-[16px] font-medium mr-4 transition-all hover:text-[#295b52d1]" onClick={() => setIsNavOpen((prev) => !prev)}>Contact</a>
              </li>
            </ul>
          </div>
        </section>

        {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </nav>
            </div>
        </div>
    ) 
}

export default Header