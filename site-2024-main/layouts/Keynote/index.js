import { Icon } from "@iconify/react"
import { LOCATIONS } from "../../utilities/links.js"


export const KeynoteSpeaker = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-14">
            <div className="flex flex-col md:w-1/2 gap-3">
                <div className="flex flex-col md:flex-row gap-5 text-lg">
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:time-line" className="text-3xl" />
                        <h3>Saturday, April 5th - 3 PM to 4:30 PM</h3>
                    </span>
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:location-fill" className="text-3xl" />
                        <h3><a className="text-blue-600 hover:text-blue-500" href={LOCATIONS.CIF}>CIF</a> Monumental Steps</h3>
                    </span>
                </div>
                <p>
                    <br />
                    Dr. Anna Oldani is an Aviation Energy Program Manager at the U.S. Federal Aviation Administration, Office of Environment and Energy, where she leads numerous Sustainable Aviation programs. Her work focuses on Sustainable Aviation Fuel development and deployment. Come to her keynote speech to learn more about her journey through academia here at the University of Illinois and her career path! 
                </p>
            </div>
            <img src="assets/images/keynote-headshot.png" alt="picture of Anna Oldani" className="w-80 h-80 object-cover rounded-full" />
        </div>
        
    )
}