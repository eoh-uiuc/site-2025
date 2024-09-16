import { Icon } from "@iconify/react"
import { useState } from "react"
import AnimatedLogo from "../../components/logo/index.js"
import Exhibits from "../../components/vv/exhibits"

export default function HomeVideo() {
  return (
    <>
      <div className="flex flex-col pt-24 md:pt-20 justify-between md:h-screen h-[95vh]">

        <span className="flex flex-col justify-center md:flex-row items-center text-2xl h-full px-4 text-center md:text-left">
          <div className="flex flex-col md:gap-3">
            <span className="flex flex-row items-end justify-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold w-full tracking-wider">
                Engineering Open House
              </h1>
            </span>
            <h1 className="text-xl md:text-2xl lg:text-2xl w-full tracking-wider font-montserrat mt-2 md:mt-5">
              at the <b>University of Illinois Urbana-Champaign</b> brings
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-montserrat w-full tracking-wider mt-3">
              The Age of Exploration
            </h1>
            <h1 className="font-montserrat lg:text-3xl text-2xl font-bold tracking-wider pt-5 hero-text">
              April 4th & April 5th, 2025
            </h1>
          </div>

          <div className="relative lg:self-end lg:pl-4 pr-2 mx-auto md:mx-0">
            <AnimatedLogo />
          </div>
        </span>

        <span className="flex flex-row justify-between w-full min-h-[14vh] lg:h-36 z-10">
          <a
            href="/vv"
            className="text-left bg-yellow-200 w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-yellow-400"
          >
            <h2 className="md:pl-10 pl-2">Exhibits</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
          <a
            className="text-left bg-blue-300 w-1/2 lg:text-4xl md:text-3xl text-2xl flex flex-row items-center font-montserrat gap-3 hover:bg-blue-400"
            href="/vv?t=map"
          >
            <h2 className="md:pl-10 pl-2">Campus Map</h2>
            <Icon
              icon="icon-park-outline:right"
              className="text-2xl md:text-4xl"
            />
          </a>
        </span>
      </div>
    </>
  )
}
