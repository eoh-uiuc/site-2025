import Content from '@/content';
import Button from '@/button';

export default function FieldTripsPage() {
	return (
		<Content title="Field Trips">
			<div className="lg:flex">
				<img className="w-48 h-48 mx-auto lg:mr-10 mb-10" src="assets/background/children.png" alt="" />
				<div className="lg:col-span-3 mb-10">
					<p className="text-center font-montserrat">
					This year we are asking for your estimated time of arrival to campus to help us plan traffic management. Please fill out this short form to let us know you're coming: 
					</p>
					<Button
					type="big"
					className="px-4 rounded-none drop-shadow-md mt-10"
					href="https://forms.gle/4Qj5k3fuEGXhs77RA"
					target="_blank"
					>
						Registration Form
					</Button>
				</div>
			</div>
			<div className="mx-auto text-center">
				<h1 className="font-montserrat text-3xl md:text-4xl lg:text-3xl mb-5 md:mb-8 lg:mb-10 text-center text-white font-bold hero-text tracking-widest p-2"
				style={{ fontFamily: 'Glacial Indifference' }}>MSDC and HSDC</h1>
				<p className="text-center font-montserrat">Our Middle School and High School Design Competitions are engineering-focused competitions on Friday, April 4.  
					Students work in teams of 3-5 to create a design and presentation that will be evaluated at the end of the competition. It's a great opportunity for students to 
					get hands-on engineering design and teamwork experience! Register your teams here:
</p>
				<Button
					type="big"
					className="px-4 rounded-none drop-shadow-md"
					href="https://docs.google.com/forms/d/e/1FAIpQLSd2fJYy1U5IZj5itydIiZhaLBCScJIMVwY6_qIAD3jvTn3VFA/viewform?usp=dialog"
					target="_blank"
				>
					MSDC
				</Button>
				<Button
					type="big"
					className="px-4 rounded-none drop-shadow-md"
					href="https://forms.gle/LsS9fqGW2QNSMwm67"
					target="_blank"
				>
					HSDC
				</Button>
			</div>
		</Content>
	);
}
