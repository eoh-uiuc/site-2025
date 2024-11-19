import Link from 'next/link';

const footerSections = [
	// { // TODO: Move Linktree to this section
	// 	heading: "Visitors",
	// 	links: [
	// 		{
	// 			text: "Visitor Guide",
	// 			href: "/guide"
	// 		},
	// 		{
	// 			text: "Visitor View",
	// 			href: "/visit"
	// 		},
	// 		{
	// 			text: "Schedule",
	// 			href: "/#schedule"
	// 		},
	// 	]
	// },
	{
		heading: "Special Events",
		links: [
			{
				text: "Middle School Design Competition",
				href: "/msdc"
			},
			{
				text: "High School Design Competition",
				href: "/hsdc"
			},
		]
	},
	{
		heading: "Get Involved",
		links: [
			{
				text: "Linktree",
				href: "https://linktr.ee/eoh2025"
			},
			{
				//text: "Volunteer Interest",
				//href: "https://docs.google.com/forms/d/e/1FAIpQLSfXMPKqUqPbuXvEY6CmlR8lLbFqCM7IYjls1iAi6unnfy-YDQ/viewform?usp=sf_link"
			},
			{
				//text: "Judging Interest",
				//href: "https://forms.gle/3HXs2EHvqt87nQM19"
			},
		]
	},
	{
		heading: "EOH Committee",
		links: [
			{
				text: "Contact Us",
				href: "/contact-us"
			},
			{
				text: "Support EOH",
				href: "/#sponsors"
			},
			{
				text: "Engineering Council",
				href: "https://www.ecillinois.org/"
			},
			{
				text: "History of EOH",
				href: "https://grainger.illinois.edu/news/features/EOH-100"
			},
		]
	},
	{
		heading: "Keep In Touch",
		links: [
			{
				text: "Mailing List",
				href: "https://forms.gle/A7QqftMGGXKgbBmv5"
			},
			{
				text: "Facebook",
				href: "https://www.facebook.com/EngineeringOpenHouse/"
			},
			{
				text: "Instagram",
				href: "https://www.instagram.com/eoh_illinois/"
			},
			{
				text: "X (formerly Twitter)",
				href: "https://twitter.com/IllinoisEOH"
			}
		]
	},
]

export default function Footer({ socials }) {
	return (
		<footer
			className="flex flex-col w-full p-3 md:p-12 bg-no-repeat bg-bottom bg-cover"
			style={{ backgroundImage: "url('/assets/background/website-wide.png')" }} // Path to your PNG file
		>
			{/* Translucent Overlay */}
			{/* <div
			className="absolute inset-0 bg-black opacity-50 z-0"
			style={{
			pointerEvents: "none",
			top: 0, // Constrain overlay to specific area
			bottom: "auto", // Prevent overlay from covering non-background areas
			height: "100%", // Overlay height matching the background section
			}}
		></div> */}
			<div className="flex flex-col md:flex-row w-full items-center md:items-start">
				{/* <div className="">
					<img src="/android-chrome-512x512.png" alt="Alma Mater" className='h-60 lg:h-72 w-60 lg:w-72 min-w-min md:mr-12' />
				</div> */}
				
				<div className="flex flex-row flex-wrap items-stretch justify-evenly md:w-2/3">
					{
						footerSections.map(section => {
							return (
								<div className="flex flex-col p-2 w-44 gap-1" key={section.heading}>
									<h3 className='font-semibold mb-1 font-montserrat text-gray-600'>{section.heading}</h3>
									{section.links?.map(link => {
										return (
											<a href={link.href} className="hover:text-blue-700 duration-200 font-montserrat text-gray-700" key={link.href}>{link.text}</a>
										)
									})}
								</div>
							)
						})
					}
				</div>
			</div>
			<p className="font-montserrat text-sm text-white text-center">Copyright EOH 2025</p>
		</footer>
	);
}
