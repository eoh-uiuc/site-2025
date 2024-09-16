import { Icon } from "@iconify/react"
import { LOCATIONS } from "../../utilities/links.js"


export const KeynoteSpeaker = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-14">
            <div className="flex flex-col md:w-1/2 gap-3">
                <div className="flex flex-col md:flex-row gap-5 text-lg">
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:time-line" className="text-3xl" />
                        <h3>Friday, April 5th - 4 PM to 5 PM</h3>
                    </span>
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:location-fill" className="text-3xl" />
                        <h3><a className="text-blue-600 hover:text-blue-500" href={LOCATIONS.CIF}>CIF</a> Monumental Steps</h3>
                    </span>
                </div>
                <p>
                    As a UIUC alumni who started out as a computer science undergraduate and grew into an incredible engineer, Pan has a story worth hearing.
                    <br />
                    Yu Pan was the first software engineer at YouTube, a co-founder of PayPal, and a co-founder of the AI tool Mindy.
                </p>
            </div>
            <img src="assets/images/keynote-headshot.png" alt="picture of Yu Pan" className="w-80 h-80 object-cover rounded-full" />
        </div>
    )
}