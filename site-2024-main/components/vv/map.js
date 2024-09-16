import React, { useState } from "react"
import { Remage } from "./remage.js"
import { CardInteract } from "./interacts.js"
import { LOCATIONS } from "../../utilities/links.js"
import { Icon } from "@iconify/react"
import { Modal } from "../modal/index.js"
import { ShuttleInformation } from "../shuttle/index.js"

const Map = () => {
  const interacts = [
    CardInteract({
      top: "13.5%",
      left: "10.3%",
      heading: "Beckman Institute",
      buildingCode: "Beckman",
      mapsLink: LOCATIONS.Beckman,
    }),
    CardInteract({
      top: "10.5%",
      left: "20.3%",
      heading: "CSL Studio",
      buildingCode: "CSL",
      mapsLink: LOCATIONS.CSL,
    }),
    CardInteract({
      top: "20.5%",
      left: "10.3%",
      heading: "ECEB",
      buildingCode: "ECEB",
      mapsLink: LOCATIONS.ECEB,
    }),
    CardInteract({
      top: "18%",
      left: "18%",
      heading: "Coordinated Sciences Lab",
      buildingCode: "Coordinated Sciences",
      mapsLink: LOCATIONS.CoordinatedSciencesLab,
    }),
    CardInteract({
      top: "17%",
      left: "21%",
      heading: "Hydrosystems Laboratory",
      buildingCode: "Hydrosystems",
      mapsLink: LOCATIONS.HydrosystemsLab,
    }),
    CardInteract({
      top: "13%",
      left: "26%",
      heading: "NCSA",
      buildingCode: "NCSA",
      mapsLink: LOCATIONS.NCSA,
    }),
    CardInteract({
      top: "24%",
      left: "16%",
      heading: "Nick Holonyak Nanotechnology Lab",
      buildingCode: "HMNTL",
      mapsLink: LOCATIONS.NanotechLab,
    }),
    CardInteract({
      top: "21%",
      left: "22.5%",
      heading: "Newmark Civil Engineering Lab",
      buildingCode: "Newmark",
      mapsLink: LOCATIONS.Newmark,
    }),
    CardInteract({
      top: "18%",
      left: "30.5%",
      heading: "Siebel Center for Computer Science",
      buildingCode: "Siebel",
      mapsLink: LOCATIONS.SiebelCS,
    }),
    CardInteract({
      top: "20%",
      left: "53%",
      heading: "Engineering Student Project Laboratory (ESPL)",
      buildingCode: "ESPL",
      mapsLink: LOCATIONS.ESPL,
    }),
    CardInteract({
      top: "24.3%",
      left: "25.5%",
      heading: "Digital Computer Laboratory",
      buildingCode: "DCL",
      mapsLink: LOCATIONS.DCL,
    }),
    CardInteract({
      top: "28%",
      left: "28%",
      heading: "Grainger Engineering Library",
      buildingCode: "Grainger Library",
      mapsLink: LOCATIONS.Grainger,
    }),
    CardInteract({
      top: "33.5%",
      left: "24.5%",
      heading: "Talbot Laboratory",
      buildingCode: "Talbot",
      mapsLink: LOCATIONS.Talbot,
    }),
    CardInteract({
      top: "29.5%",
      left: "34.5%",
      heading: "Mechanical Engineering Lab (MEL)",
      buildingCode: "MEL",
      mapsLink: LOCATIONS.MEL,
    }),
    CardInteract({
      top: "30.5%",
      left: "21.5%",
      heading: "Campus Instructional Facility (CIF)",
      buildingCode: "CIF",
      mapsLink: LOCATIONS.CIF,
    }),
    CardInteract({
      top: "32%",
      left: "39%",
      heading: "Material Science & Engineering (MSEB)",
      buildingCode: "MSEB",
      mapsLink: LOCATIONS.MSEB,
    }),
    CardInteract({
      top: "27%",
      left: "39.5%",
      heading: "Transportation Building",
      buildingCode: "Transportation Building",
      mapsLink: LOCATIONS.TransportationBuilding,
    }),
    CardInteract({
      top: "36.5%",
      left: "28.3%",
      heading: "Everitt Laboratory",
      buildingCode: "Everitt",
      mapsLink: LOCATIONS.Everitt,
    }),
    CardInteract({
      top: "29.5%",
      left: "43.8%",
      heading: "Sidney Lu (MEB)",
      buildingCode: "Sidney Lu",
      mapsLink: LOCATIONS.SidneyLu,
    }),
    CardInteract({
      top: "25%",
      left: "53.3%",
      heading: "Loomis Laboratory (Physics)",
      buildingCode: "Loomis",
      mapsLink: LOCATIONS.Loomis,
    }),
    CardInteract({
      top: "21.5%",
      left: "49.7%",
      heading: "Materials Research Laboratory (MRL)",
      buildingCode: "MRL",
      mapsLink: LOCATIONS.MRL,
    }),
    CardInteract({
      top: "36.5%",
      left: "44.7%",
      heading: "Natural History Building (NHB)",
      buildingCode: "NHB",
      mapsLink: LOCATIONS.NHB,
    }),
    CardInteract({
      top: "34.5%",
      left: "34.7%",
      heading: "Engineering Hall",
      buildingCode: "Engineering Hall",
      mapsLink: LOCATIONS.EHall,
    }),
    CardInteract({
      top: "37%",
      left: "32.5%",
      heading: "Graziano Plaza",
      buildingCode: "Graziano",
      mapsLink: LOCATIONS.GrazianoPlaza,
    }),
    CardInteract({
      top: "72.5%",
      left: "78.9%",
      heading: "Stock Pavilion",
      buildingCode: "Stock Pavilion",
      mapsLink: LOCATIONS.StockPavillion,
    }),
    CardInteract({
      top: "54%",
      left: "65%",
      heading: "Observatory",
      buildingCode: "Observatory",
      mapsLink: LOCATIONS.Observatory,
    }),
    CardInteract({
      top: "32.3%",
      left: "30.8%",
      heading: "Bardeen Quad",
      buildingCode: "Bardeen Quad",
      mapsLink: LOCATIONS.BardeenQuad,
    }),
  ]

  return (
    <>
      <div className="xs:hidden mx-5 flex flex-col gap-5">
        <p>Oops, your screen is too small to render the interactive map correctly!</p>
        <p>Don't worry, here's a static version of the map</p>
        <img src="/campus-map.svg" alt="Campus Map" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 items-center lg:items-start">
        {/* <img src={'/assets/campus_map.png'} alt="Campus Map" className='h-full object-cover' /> */}
        <div className="hidden xs:block">
          <Remage
            src="/assets/images/eoh-maponly2.png"
            title="Campus Map"
            interactables={interacts}
          />
        </div>

        <div className="mx-5">

          <ShuttleInformation />
          <a
            href="/faq"
            className="flex items-center justify-center gap-2 py-3 text-center text-white rounded-full bg-black text-xl font-semibold
                        w-full sm:w-96 mx-auto my-3 bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-700"
          >
            <Icon icon="wpf:faq" className="text-2xl" />
            <span>FAQs</span>
          </a>
          {/* <div>
              <a
                href="/shuttle-map.svg"
                className="flex items-center justify-center gap-2 my-2 py-3 px-7 text-center text-white rounded-full bg-black text-xl font-semibold
                          sm:w-2/3 md:w-full bg-gradient-to-tr from-pink-800 via-pink-500 to-pink-700"
              >
                <Icon icon="bxs:bus" className="text-2xl" />
                <span>Shuttle Map</span>
              </a>
            </div> */}
          <h2 className="font-heading text-2xl my-3">Locations</h2>
          <div className="flex flex-col gap-3">
            {interacts.map((interact, idx) => (
              <span
                className="flex flex-row items-center justify-between ml-2"
                key={idx}
              >
                <h4>{interact.heading}</h4>
                <span className="flex flex-row items-center gap-3">
                  {interact.mapsLink && (
                    <a
                      href={interact.mapsLink}
                      target="_blank"
                      aria-label="Google Maps Link"
                      className="flex flex-row items-center py-2 px-3 border shadow-md rounded-md gap-2 hover:bg-blue-200 duration-200"
                    >
                      <Icon
                        icon="ri:direction-fill"
                        className="text-3xl text-blue-700 hover:text-blue-600"
                      />
                    </a>
                  )}
                  <a
                    className="flex flex-row items-center py-2 px-3 border shadow-md rounded-md gap-2 hover:bg-yellow-200 duration-200"
                    href={`/vv?t=exhibits&q=${encodeURI(
                      interact.buildingCode
                    )}`}
                  >
                    <Icon
                      icon="game-icons:barracks-tent"
                      className="text-yellow-500 hover:text-yellow-400 text-3xl"
                    />
                    <span>Exhibits</span>
                  </a>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
