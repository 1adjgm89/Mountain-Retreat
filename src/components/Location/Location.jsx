import React from "react";

function Location() {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="w-4/5">
        <div className="flex lg:flex-row sm:flex-col md:flex-col">
          <div className="lg:w-1/3 bg-[#295b52] p-8 sm:w-full md:w-full">
            <p className="text-left font-medium mb-8 text-white text-[16px]">
              Take the precious step towards the road to abundant health,
              wellness and productive joyful living with us at Sitaram Mountain
              Retreat in Munnar and experience the richness of a holistic way of
              life.
            </p>
            <p className="text-left font-bold mb-4 text-[#d1a13b] text-[18px]">Address:</p>
            <p className="text-left font-medium mb-8 text-white text-[16px]">Pallivasal Estate, Paracherivu Moolakada, PO, Munnar, Kerala 685612,<br/>Phone: <a href="tel:09495821617" className="text-[#d1a13b]"> 094958 21617</a></p>
          </div>
          <div className="w-2/3 sm:w-full md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6636861628567!2d77.05118267577876!3d10.044586172264427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799797a09a5dd%3A0x7cf358041633a26d!2sSitaram%20Mountain%20Retreat!5e0!3m2!1sen!2sin!4v1698284616744!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Sitaram Mountain Retreat"
            ></iframe>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Location;
