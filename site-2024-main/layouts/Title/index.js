import { Icon } from "@iconify/react";
import AnimatedLogo from "../../components/logo/index.js";

export default function HomeVideo() {
  return (
    <>
      <div className="flex flex-col pt-24 md:pt-20 justify-between md:h-screen h-auto min-h-screen">

        <span className="flex flex-col md:flex-row justify-center items-center text-2xl h-full px-4 text-center md:text-left">
          <div className="flex flex-col md:gap-3 w-full max-w-full">
            <span className="flex flex-row items-end justify-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold w-full tracking-wider break-words">
                Engineering Open House
              </h1>
            </span>
            <h1 className="text-xl md:text-2xl lg:text-2xl w-full tracking-wider font-montserrat mt-2 md:mt-5 break-words">
              at the <b>University of Illinois Urbana-Champaign</b> brings
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-montserrat w-full tracking-wider mt-3 break-words">
              The Age of Innovation
            </h1>
            <h1 className="font-montserrat lg:text-3xl text-2xl font-bold tracking-wider pt-5 hero-text break-words">
              April 4th & April 5th, 2025
            </h1>
          </div>

          <div className="relative flex flex-col lg:pl-4 py-2 w-full max-w-full z-20">
            <p className="text-lg font-semibold mb-2 m-4 break-words">
              Thank you all for your submissions! Competition closed.
            </p>
              <img 
                src="assets/images/2025LogoComp.webp" 
                alt="2025 Logo" 
                style={{ borderWidth: '10px' }} 
                className="border-solid border-black m-4 w-full lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] shadow-2xl shadow-gray-800"
              />
          </div>
        </span>

        <span className="flex flex-col md:flex-row justify-between w-full min-h-[14vh] lg:h-36 z-30">
          <a
            href="/vv"
            className="text-left bg-theme-teal w-full md:w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-blue-400 py-3 z-30 mx-5 my-1 rounded-xl shadow-lg "
          > 
          {/* bg-yellow-200 g-yellow-200*/}
            <h2 className="md:pl-10 pl-2">Exhibits</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
          <a
            className="text-left bg-theme-teal w-full md:w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-blue-400 py-3 z-30 ms-2 mx-5 my-1 rounded-xl shadow-lg"
            href="/vv?t=map"
          >
            <h2 className="md:pl-10 pl-2">Campus Map</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
        </span>
      </div>
    </>
  );
}
