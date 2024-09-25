import { Icon } from "@iconify/react"
import { LOCATIONS } from "../../utilities/links.js"


export const KeynoteSpeaker = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-14">
            <div className="flex flex-col md:w-1/2 gap-3">
                <div className="flex flex-col md:flex-row gap-5 text-lg">
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:time-line" className="text-3xl" />
                        <h3>Date coming soon!</h3>
                    </span>
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:location-fill" className="text-3xl" />
                        <h3><a className="text-blue-600 hover:text-blue-500" href={LOCATIONS.CIF}>CIF</a> Monumental Steps</h3>
                    </span>
                </div>
                <p>
                Our keynote speakers are well-known and established University of Illinois at Urbana-Champaign alumni. Stay tuned for who visits this year!
                    <br />
                Our past speaker was Yu Pan, the first software engineer at YouTube, a co-founder of PayPal, and a co-founder of the AI tool Mindy. 
                </p>
            </div>
            <img src="assets/images/keynote-headshot.png" alt="picture of Yu Pan" className="w-80 h-80 object-cover rounded-full" />
        </div>
    )
}