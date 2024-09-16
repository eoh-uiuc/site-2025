import Content from "@/content"
import Info from "../../components/content/info.js"

export default function MSDC() {
  return (
    <Content title="Middle School Design Competition">
      <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5 mb-2">
          This year’s middle school design competition (MSDC) will be held on April 5th from 12 PM to 2 PM in Loomis Laboratory.
          <br />
          <br />
          <Info>
            We have decided not to release the themes this year to ensure a fair
            competition.
          </Info>
          <br />
          Students will be in teams of 3 or 4, and will be given all the materials required.
          {/* <br /> The link to the registration form can be found below. */}
          {/* <br />More details coming out soon! */}

        </div>
        <br />
        <br />
        {/* <a className="bg-yellow-200 hover:bg-yellow-300 px-6 pt-3 pb-4 rounded-full font-montserrat text-2xl mt-3 md:mt-8 text-center" href="https://forms.gle/s9mSaLqCu4ioFx6S6" target="_blank"> */}
        {/* </a> */}
        <div className="h-7"></div>
      </div>
    </Content>
  )
}
