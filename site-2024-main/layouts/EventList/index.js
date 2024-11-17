const colors = ['blue-800', 'pink-700', 'yellow-600', 'red-700', 'purple-600', 'green-600']

const EventCard = (e) => {
    return (
        <a className={`w-[90vw] md:w-2/5 h-64 md:h-80 ${e.bg} bg-center bg-no-repeat bg-cover flex text-white flex-col justify-center text-center duration-300 rounded-lg hover:rounded-3xl`} href={e.link} key={e.title}>
            <div className="p-3 bg-black bg-opacity-0 h-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold font-montserrat">{e.title}</h2>
                <p className={`font-semibold`}>{e.subtitle}</p>
                <p className="w-2/3 mx-auto mt-3">{e.blurb}</p>
                {e.link && <p className="pt-2 italic text-gray-200">Learn more</p>}
            </div>
        </a>
    )
}

export default function EventList() {

    const events = [
        {
            "title": "Middle School Design Competition",
            "subtitle": "",
            "blurb": "Middle school students in teams of 3 or 4 compete around a central theme",
            
            "bg": "bg-msdc"
        },
        {
            "title": "High School Design Competition",
            "subtitle": "",
            "blurb": "High school students in teams of 3-5 members compete around a central theme",
            
            "bg": "bg-hsdc"
        },
        {
            "title": "Robobrawl",
            "subtitle": "",
            "blurb": "An exciting combat robotics showcase!",
            "bg": "bg-robobrawl"
        },
        {
            "title": "Keynote by Yu Pan",
            "subtitle": "",
            "blurb": "As a UIUC alumni who started out as a computer science undergraduate and grew into an incredible engineer, Pan has a story worth hearing.",
            "link": '#keynote',
            "bg": "bg-keynote"
        },
        {
            "title": "Startup Showcase",
            "subtitle": "",
            "blurb": "The EOH Startup Showcase is dedicated to celebrating student entrepreneurs! Come visit startup booths and experience demos, giveaways, and much more!",
            "bg": "bg-startup"
        },
        {
            "title": "Tesla Coil Concert",
            "subtitle": "Sponsored by Chevron",
            "blurb": "Just as dark falls, visit the Bardeen Quad to see an electrifying display of light and sound.",
            "bg": "bg-tesla"
        },
    ]

    return (
        <div className="flex flex-wrap justify-center gap-3 bg-waves-pink2 bg-cover bg-center py-10">
            {events.map(e => EventCard(e))}
        </div>
    )
}