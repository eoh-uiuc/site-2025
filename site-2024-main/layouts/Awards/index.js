import Button from '@/button';
import { Modal } from '../../components/modal/index.js';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const slotGradients = {
	0: 'bg-gradient-to-tr from-[#d62828] via-[#d62828] to-[#d62828]',
	1: 'bg-gradient-to-tr from-[#ff8400] via-[#ff8400] to-[#ff8400]',
	2: 'bg-gradient-to-tr from-[#c578d6] via-[#c578d6] to-[#c578d6]',
	3: 'bg-gradient-to-tr from-[#a2d3c2] via-[#a2d3c2] to-[#a2d3c2]',
	4: 'bg-gradient-to-tr from-[#c578d6] via-[#c578d6] to-[#c578d6]',
	5: 'bg-gradient-to-tr from-[#a2d3c2] via-[#a2d3c2] to-[#a2d3c2]',
}

const awards = [
	{
		"title": "Outstanding Undergraduate Research",
		"1": "Operation Station",
		"2": "UIUC.chat platform for rapid deployment of knowledge-based chatbots",
		"3": "AI, Extreme Scale Computing and Scientific Visualization for Gravitational Wave Astrophysics"
	},
	{
		"title": "Outstanding RSO Exhibit",
		"1": "R2D2 x Computer Vision",
		"2": "DC Glow",
		"3": "Mobility for Our Future"
	},
	{
		"title": "Outstanding Freshman Exhibit",
		"1": "Spectacular Solar Observing",
		"2": "From Farm to Formation: Creating Plastics From Milk and Potatoes",
		"3": "Crystals to Voltage: Piezoelectricity"
	},
	{
		"title": "Most Engaging",
		"1": "Egg Drop Challenge",
		"2": "Interactive Gaming with Computer Vision",
		"3": "Edible Hydration Blob"
	},
	{
		"title": "The Spirit of Innovation",
		"1": "Instant Cold Brew Machine",
		"2": "From Blueprint to Blastoff: DIY Rocket Science",
		"3": "Egg Drop Challenge"
	},
	{
		"title": "Most Industry Impact",
		"1": "PortaPrinter by BYLD",
		"2": "Solar Flower Power",
		"3": "CACMS/AUVSL - Autonomous Robotics Showcase"
	},
	{
		"title": "Most Ingenious Solution",
		"1": "Supply Chain Maze",
		"2": "PortaPrinter by BYLD",
		"3": "From Blueprint to Blastoff: DIY Rocket Science"
	},
	{
		"title": "Distinguished Tech or Robotic Exhibit",
		"1": "Tree-jumping robotic squirrel",
		"2": "PortaPrinter by BYLD",
		"3": "Gautam"
	},
	{
		"title": "Chevron Environmental and Sustainability Efforts Award",
		"1": "SegBin.ai",
		"2": "Power of Clean Water",
		"3": "Solar Flower Power"
	},
	{
		"title": "Aspire to Inspire (Theme Award)",
		"1": "Tantalizing Thermochromics",
		"2": "SWE Carnival Fun House",
		"3": "Care for the Air"
	},
]

export default function Awards() {
	const [award, setAward] = useState(null);
	return (
		<>
			<p className='md:w-2/3 mx-5 md:mx-auto text-center mb-5'>The Awards Ceremony provides an opportunity to celebrate the hard work that our exhibitors have put into their exhibits.
				We look forward to highlight outstanding exhibits that demonstrate creativity, innovation, and passion.
				<br />Congratulations to all of our EOH 2024 award winners!</p>
			<div className="flex flex-row flex-wrap justify-center gap-5 mx-10">
				{
					award &&
					<Modal open={award != null} setOpen={_x => setAward(null)} title={award.title} >
						<flex className="flex flex-col gap-2">
							<h3 className='mt-2 font-heading text-lg'>First Place</h3>
							<span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-yellow-600'>
								<Icon icon="game-icons:podium-winner" className='text-3xl min-w-[25px]' />
								<p>{award["1"]}</p>
							</span>
							<h3 className='mt-2 font-heading text-lg'>Second Place</h3>
							<span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-gray-600'>
								<Icon icon="game-icons:podium-second" className='text-3xl min-w-[25px]' />
								<p>{award["2"]}</p>
							</span>
							<h3 className='mt-2 font-heading text-lg'>Third Place</h3>
							<span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-primary-brown'>
								<Icon icon="game-icons:podium-third" className='text-3xl min-w-[25px]' />
								<p>{award["3"]}</p>
							</span>
						</flex>
					</Modal>
				}

				{
					awards.map((a, idx) =>
						// <div className="w-72 h-60 hero-bg1 rounded-xl p-4" key={a.title}>
						// 	<h4 className='font-heading text-lg text-center'>{a.title}</h4>
						// </div>
						<button
							onClick={() => setAward(a)}
							className={`w-72 ${slotGradients[idx % Object.keys(slotGradients).length]} rounded-lg duration-200 hover:rounded-xl p-4 text-white flex items-center justify-center`} key={a.title}>
							<h4 className='text-lg font-semibold text-center'>{a.title}</h4>
						</button>
					)
				}
			</div>
		</>
	);
}
