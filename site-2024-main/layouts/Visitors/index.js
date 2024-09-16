import { Icon } from "@iconify/react"
import Info from "../../components/content/info.js"
import { LOCATIONS } from "../../utilities/links.js"
import { ShuttleInformation } from "../../components/shuttle/index.js"

const visitorBooths = [
  {
    link: LOCATIONS.CIF,
    text: "Campus Instructional Facility (CIF)",
  },
  {
    link: LOCATIONS.GrazianoPlaza,
    text: "on Graziano Plaza",
  },
  {
    link: LOCATIONS.SidneyLu,
    text: "outside Sidney Lu",
  },
  {
    link: LOCATIONS.MEB,
    text: "Mechanical Engineering Building",
  },
  {
    link: LOCATIONS.Loomis,
    text: "outside Loomis Laboratory",
  },
  {
    link: LOCATIONS.ECEB,
    text: "outside Electrical and Computer Engineering Building (ECEB)",
  },
]

export default function Visitors() {
  return (
    <div className="flex flex-col mx-10">
      <div className="mx-auto flex flex-col md:flex-row gap-5">
        <div className="flex flex-col">
          <h3 className="text-2xl font-heading">Event Feedback</h3>
          <p className="mt-2">
            Thank you for being a part of EOH <br />
            Tell us about your experience using the form below
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjo7hJBDu54sNBlWATNOJcfufjdKL3Z_NevyhH2Y5DSZFhHw/viewform?usp=sf_link"
            target="_blank"
            className="p-5 rounded-full bg-gradient-to-tr from-green-800 via-green-500 to-green-700 hover:opacity-90 duration-200 text-white text-xl mt-3 text-center">
            Post-Event Feedback Form
          </a>
          {/* <p className="mt-2">
            We're excited to help you discover EOH! <br />
            Find our volunteers to answer your questions here:
          </p> */}
          {/* <ul className="pl-3">
            {visitorBooths.map((booth) => (
              <li key={booth.link}>
                <a
                  className="hover:text-blue-600 duration-200 text-blue-800"
                  href={booth.link}
                  target="_blank"
                >
                  {booth.text}
                </a>
              </li>
            ))}
          </ul> */}
          {/* <div className="mt-4">
            <Info>
              All minors must be accompanied by a parent or guardian at all
              times!
            </Info>
          </div> */}
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-heading mb-4">Quick Links</h3>
          <a
            href="/guide.pdf"
            className="flex items-center justify-center gap-2 py-3 px-7 text-center text-white rounded-full bg-black text-xl font-semibold
                        w-full sm:w-96 mx-auto bg-gradient-to-tr from-red-800 via-red-500 to-red-700"
          >
            <Icon icon="oi:book" className="text-2xl" />
            <span>Visitor Guide</span>
          </a>
          <p className=" text-gray-700 mx-auto">*Hard copies available at CIF!</p>

          <a
            href="/faq"
            className="flex items-center justify-center gap-2 py-3 text-center text-white rounded-full bg-black text-xl font-semibold
                          w-full sm:w-96 mx-auto my-3 bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-700"
          >
            <Icon icon="wpf:faq" className="text-2xl" />
            <span>FAQs</span>
          </a>
          <ShuttleInformation />
          <a
            href="/students"
            className="flex items-center justify-center gap-2 my-2 py-3 px-7 text-center text-white rounded-full bg-black text-xl font-semibold
                        w-full sm:w-96 mx-auto bg-gradient-to-tr from-blue-700 via-blue-400 to-blue-300"
          >
            <Icon icon="mdi:backpack" className="text-2xl" />
            <span>New Students</span>
          </a>
        </div>
      </div>
    </div>
  )
}
