import React from 'react';
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function HomeVideo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change image every 5 seconds
    fade: true
  };

  return (
    <>
      <div className="mt-20 relative w-full h-screen overflow-hidden">
        {/* Carousel Section */}
        <Slider {...settings} className="absolute top-0 left-0 w-full h-full">
          <div>
            <img
              src="assets/title/grainger_library.jpg"
              alt="Carousel Image 1"
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/title/tesla_coil.jpg"
              alt="Carousel Image 2"
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img
              src="assets/title/main_quad.jpg"
              alt="Carousel Image 3"
              className="w-full h-screen object-cover"
            />
          </div>
        </Slider>

        {/* Full-Screen Brown Overlay and Split Content */}
        <div className="absolute top-0 left-0 w-full h-screen bg-[#473335] bg-opacity-70 z-10 flex items-center justify-center p-6">
          {/* Content Wrapper - Shorter height and centered */}
          <div className="flex w-full max-w-7xl h-[30vh] items-center justify-center">
            {/* Text Section - Left Half */}
            <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold" style={{ fontFamily: 'NORWESTER' }}>
            Engineering Open House
          </h1>
          <h2 className="text-white text-2xl md:text-3xl mt-4" style={{ fontFamily: 'Montserrat Classic' }}>
            at the <b>University of Illinois Urbana-Champaign</b> brings
          </h2>
          <h1 className="text-white text-6xl md:text-8xl mt-6" style={{ fontFamily: 'TAN Headline' }}>
            The Age of Innovation
          </h1>
          <h3 className="text-white text-3xl md:text-4xl mt-6" style={{ fontFamily: 'Montserrat Classic' }}>
            April 4th & April 5th, 2025
          </h3>
        </div>
             {/* Image Section - Right Half */}
             <div className="w-1/2 flex justify-center items-center">
              <img
                src="/assets/background/White-no-outline-EOH_Logo.png" // Adjusted to match your provided path
                alt="EOH 2025 Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

        <span className="flex flex-col md:flex-row justify-between w-full min-h-[14vh] lg:h-36 z-0">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSew_CTrs-Swtdlz9IDwmmpXeAP7VsEUQ2S-KpsSho4Vr1U66A/viewform?usp=sf_link"
            className="text-left bg-theme-teal  md:w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-blue-400 py-3 z-0 mx-5 my-1 rounded-xl shadow-lg"
          > 
          {/* bg-yellow-200 g-yellow-200*/}
            <h2 className="md:pl-10 pl-2">Exhibits Application</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
          <a
            className="text-left bg-theme-teal  md:w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-blue-400 py-3 z-0 ms-2 mx-5 my-1 rounded-xl shadow-lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfeZ-A-2frFJyWgo4B22b40tc3WlAIkd2qqn28JJekO8lavZw/viewform?usp=pp_url"
            // href="/vv?t=map"
          >
            <h2 className="md:pl-10 pl-2">School Interest Form</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
        </span>
    
    </>
  );
}