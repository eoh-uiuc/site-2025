import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Content from "@/content"
import EventCard from "@/eventCard"

// Dynamically import Masonry components client-side only
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then(mod => mod.ResponsiveMasonry),
  { ssr: false }
)
const Masonry = dynamic(
  () => import("react-responsive-masonry").then(mod => mod.default),
  { ssr: false }
)

export default function StartupShowcasePage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/assets/data/events.json")
        const data = await res.json()
        setEvents(data.events)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Content title="Prospective & Admitted Students">
      <div className="container mx-auto p-4">
        <p>
          Dear prospective or admitted student, Engineering Open House warmly
          welcomes you to the University of Illinois. In addition to all of our
          general events, you can find a list of events below specifically aimed
          towards helping you discover life as an engineering student here. We
          encourage you to take part in as many events as you can, and hope you
          have an enjoyable time at EOH.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            {events.map((event, index) => (
              <EventCard
                key={index}
                description={event.description}
                title={event.name}
                location={event.location}
                dateTime={event.times}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Content>
  )
}
