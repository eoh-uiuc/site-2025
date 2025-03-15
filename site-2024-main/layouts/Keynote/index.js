import { Icon } from "@iconify/react/dist/iconify.js";
import { LOCATIONS } from "../../utilities/links.js";

export const KeynoteSpeaker = () => {
    return (
        <div 
            className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-14 relative min-h-[500px] pb-40"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, white 100%), 
                                  url('/assets/images/website_moon.png')`, // Gradient overlay
                backgroundSize: '100% 50%', // Keeps the background image limited to the lower half
                backgroundPosition: 'center bottom 75px', // Positions the background at the bottom
                backgroundRepeat: 'no-repeat' // Prevents repeating
            }}
        >
            <div className="flex flex-col md:w-1/2 gap-3">
                <div className="flex flex-col md:flex-row gap-5 text-lg">
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:time-line" className="text-3xl" />
                        <h3>Saturday, April 5th - 3 PM to 4:30 PM</h3>
                    </span>
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:location-fill" className="text-3xl" />
                        <h3>
                            <a className="text-blue-600 hover:text-blue-500" href={LOCATIONS.CIF}>CIF</a> Monumental Steps
                        </h3>
                    </span>
                </div>
                <p>
                    <br />
                    Dr. Anna Oldani is an Aviation Energy Program Manager at the U.S. Federal Aviation Administration, Office of Environment and Energy, where she leads numerous Sustainable Aviation programs. Her work focuses on <span className="bg-white/50 px-2 rounded">Sustainable Aviation Fuel development and deployment.</span> 
                    <br />
                    <span className="bg-white/80 px-2 rounded">Come to her keynote speech to learn more about her journey through academia here at the University of Illinois and her career path!</span>
                </p>
            </div>
            <img 
                src="assets/images/keynote-headshot.png" 
                alt="picture of Anna Oldani" 
                className="w-80 h-80 object-cover rounded-full" 
            />
        </div>
    );
};
