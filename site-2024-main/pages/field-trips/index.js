import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Content from "@/content";
import Button from "@/button";

export default function FieldTripsPage() {
  return (
    <Content title="Field Trips">
      <div className="lg:flex">
        <img
          className="w-48 h-48 mx-auto lg:mr-10 mb-10"
          src="assets/background/children.png"
          alt="Children illustration"
        />
        <div className="lg:col-span-3 mb-10 text-center">
          <p className="font-montserrat text-lg">
            This year, we are asking for your estimated time of arrival to
            campus to help us plan traffic management. Please fill out this
            short form to let us know you're coming:
          </p>
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md mt-6 text-lg font-semibold"
            href="https://forms.gle/4Qj5k3fuEGXhs77RA"
            target="_blank"
          >
            Registration Form
          </Button>
        </div>
      </div>

      <div className="text-center mx-auto max-w-3xl">
        <h1 className="title text-3xl font-bold mb-4">MSDC and HSDC</h1>
        <p className="font-montserrat text-lg">
          Our Middle School and High School Design Competitions are
          engineering-focused competitions on <b>Friday, April 4</b>. Students
          work in teams of 3-5 to create a design and presentation that will be
          evaluated at the end of the competition. It’s a great opportunity for
          students to gain hands-on engineering design and teamwork experience!
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2fJYy1U5IZj5itydIiZhaLBCScJIMVwY6_qIAD3jvTn3VFA/viewform?usp=dialog"
            target="_blank"
          >
            MSDC Registration
          </Button>
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
            href="https://forms.gle/LsS9fqGW2QNSMwm67"
            target="_blank"
          >
            HSDC Registration
          </Button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqCard key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </Content>
  );
}

// FAQ Data
const faqData = [
  {
    question: "What should we plan on doing throughout the day?",
    answer: (
      <>
        <p>
          Schools’ schedules are flexible! We recommend checking out our{" "}
          <b>Recommended Events for K-12 Visitors</b> and planning your day
          around your group’s interests.
        </p>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow">
          <h4 className="font-semibold text-center mb-2">Example Schedule:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><b>8:00-9:00 AM</b> - Bus to EOH</li>
            <li><b>9:00-10:00 AM</b> - Explore student exhibits</li>
            <li><b>10:30-11:00 AM</b> - Watch Illinois Space Society’s Rocket Launch</li>
            <li><b>11:30 AM-12:00 PM</b> - Drive an Excavator with Caterpillar</li>
            <li><b>12:00-1:00 PM</b> - Lunch</li>
            <li><b>1:00-1:30 PM</b> - Learn to Solder</li>
            <li><b>1:30-2:00 PM</b> - Explore student exhibits</li>
            <li><b>2:00-2:15 PM</b> - Gather at bus loading zone</li>
            <li><b>2:15-3:15 PM</b> - Bus back to school</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    question: "What should we plan on doing for lunch?",
    answer: (
      <>
        <p>
          There are a variety of <b>restaurants and food trucks</b> on campus
          during EOH! Guests are welcome to bring lunch and use designated
          outdoor areas or the Illini Union basement for indoor seating.
        </p>
        <h4 className="font-semibold mt-4">Food Trucks at EOH:</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Dave’s Dogs</li>
          <li>Pastamania</li>
          <li>Kona Ice</li>
          <li>Travelin’ Tom’s Coffee</li>
          <li>La Paloma</li>
          <li>Jurassic Grill</li>
          <li>Juanitos Tacos</li>
          <li>+ More!</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do we handle safety concerns?",
    answer: (
      <>
        <p><b>Missing Child:</b> Notify the nearest visitor’s booth. Volunteers will assist in locating guardians.</p>
        <p><b>Medical Concerns:</b> Notify a volunteer and visit the EMS tent at Graziano Plaza.</p>
        <p><b>Local Hospitals:</b> Carle Foundation Hospital, OSF Heart of Mary Medical Hospital.</p>
      </>
    ),
  },
];

// FAQ Card Component (Collapsible)
function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-all hover:bg-gray-200">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && <div className="mt-3 text-sm font-montserrat">{answer}</div>}
    </div>
  );
}
