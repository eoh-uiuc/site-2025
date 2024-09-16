import Content from '@/content';
import Button from '@/button';

export default function FieldTripsPage() {
	return (
		<Content title="Field Trip Registration Form">
			<div className="lg:flex">
				<img className="w-48 h-48 mx-auto lg:mr-10 mb-10" src="assets/background/children.png" alt="" />
				<div className="lg:col-span-3 mb-10">
					<p className="text-center font-montserrat">
						As an entirely student run event, EOH is passionate about empowering and encouraging the next generation of students to pursue a STEM related field. This is why we are beyond thrilled to see your students on a field-trip for the event!
						<br/><br/>
						Our registration form is now open, register your field-trip for EOH with the form below! The deadline to register is <span  className="text-theme-red font-bold">March 30th</span>. Information about bus drop-off locations, field-trip schedules, and the visitors guide will all be updated here and emailed to those who register as soon as we have all of those details.
					</p>
				</div>
			</div>
			<div className="mx-auto text-center">
				<Button
					type="big"
					className="px-4 rounded-none drop-shadow-md"
					href="https://docs.google.com/forms/d/e/1FAIpQLSfywsbT6PwecdAalmL3_B7ceadtniTmXVi5J4ae4qLSP6LxGg/viewform?usp=sf_link"
					target="_blank"
				>
					Registration Form
				</Button>
			</div>
		</Content>
	);
}
