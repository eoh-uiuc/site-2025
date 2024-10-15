import Section from "@/section"
import Interest from "@layouts/Interest"
import Sponsors from "@layouts/Sponsors"
import Title from "@layouts/Title"
import Head from "next/head"
import { Fragment } from "react"
import CorporateSponsorLayout from "../layouts/CorporateSponsorLayout/index.js"
import Directors from "../layouts/Directors/index.js"
import EventList from "../layouts/EventList/index.js"
import { KeynoteSpeaker } from "../layouts/Keynote/index.js"
import ScheduleSection from "../layouts/Schedule/index.js"
import Visitors from "../layouts/Visitors/index.js"
import Awards from "../layouts/Awards/index.js"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>EOH 2025</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="N_zq-IzUiNIJFGldY3CVIn-PDSYtHkdklYt2VuMSa4E" />
      </Head>

      <main>
        <Title />
        {/* <Section color="white" title="Keynote Speaker" id="attend-eoh">
					<AttendEOH />
				</Section> */}
        <div className="mt-24 sm:mt-16 md:mt-0"></div>
        
        {/* <Section color="bg-white" title="Get Involved" id="interest">
          <Interest />
        </Section> */}
        <Section color="bg-white" title="Visitors Information" id="visitors">
          <Visitors />
        </Section>
        <Section
          color="bg-waves-green2 bg-cover bg-center"
          title="Our 2024 Keynote: Yu Pan"
          id="keynote"
        >
          <KeynoteSpeaker />
        </Section>

        <Section
          title="Featured Events of 2024"
          color="bg-white"
          id="featured-events"
          wide
        >
          <EventList />
        </Section>
        <Section title="Schedule" color="bg-white" id="schedule" wide>
          <ScheduleSection />
        </Section>
        <Section
          color="bg-white"
          title="Note from the Directors"
          id="directors"
        >
          <Directors />
        </Section>
        {/*<Section color="white" title="Director's Note" id="about-us">
					<AboutUs />
				</Section>
				<Section color="theme" title="Special events timeline" id="special-events" wide>
					<SpecialEvents />
				</Section>
				<Section color="white" title="Exhibits" id="exhibits" wide>
					<Exhibits />
      </Section>*/}
        <Section
          title="Support Our Mission"
          id="sponsors"
          color="bg-waves-blue2 bg-cover bg-center min-h-[550px]"
        >
          <Sponsors />
        </Section>
        <Section
          color="bg-white"
          title="Corporate Sponsors"
          id="corporate-sponsors"
        >
          <CorporateSponsorLayout />
        </Section>

        <Section color="white" title="EOH 2024 Awards" id="awards">
          <Awards />
        </Section>
        
        <div className="h-12"></div>
      </main>
    </Fragment>
  )
}
