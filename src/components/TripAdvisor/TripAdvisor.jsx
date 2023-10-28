import React, { useEffect } from 'react';
import './TripAdvisor.css'

function TripAdvisor() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tripadvisor.in/WidgetEmbed-selfserveprop?border=true&popIdx=true&iswide=false&locationId=1673211&display_version=2&uniq=49&rating=true&lang=en_IN&nreviews=5&writereviewlink=true";
    script.async = true;
    document.getElementsByTagName("script")[0].parentNode.insertBefore(script, document.getElementsByTagName("script")[0]);

    return () => {
      // Clean up the script when the component unmounts
      document.getElementsByTagName("script")[0].parentNode.removeChild(script);
    };
  }, []);

  return (
    <div id="TA_selfserveprop49" className="TA_selfserveprop">
      <ul id="iDaBOYo" className="TA_links 9UH4Ejw"><li id="LDzdtXFX5u" className="hBJdjO"><a target="_blank" href="https://www.tripadvisor.in/Hotel_Review-g303881-d1673211-Reviews-Sitaram_Mountain_Retreat-Munnar_Idukki_District_Kerala.html" rel="noreferrer"><img src="https://www.tripadvisor.in/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/></a></li></ul>
    </div>
  );
}

export default TripAdvisor;