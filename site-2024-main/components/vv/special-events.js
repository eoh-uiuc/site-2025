import { Icon } from "@iconify/react"
import { useState } from "react"
import useSWR from "swr"
import { useQueryParam, StringParam, withDefault } from "use-query-params"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
dayjs.extend(timezone)

const bgGradients = {
  // 0: "bg-gradient-to-tr from-red-100 to-red-300",
  // 1: "bg-gradient-to-tl from-yellow-100 to-yellow-300",
  // 2: "bg-gradient-to-tr from-purple-100 to-blue-300",
  // 3: "bg-gradient-to-tr from-red-100 to-pink-300",
  // 4: "bg-gradient-to-tr from-gray-100 to-gray-300",
  // 5: "bg-gradient-to-tr from-green-100 to-green-300",
  0: 'bg-red-300',
  1: 'bg-yellow-300',
  2: 'bg-blue-300',
  3: 'bg-pink-300',
  4: 'bg-gray-300',
  5: 'bg-green-300',
  
}

const ErrorMessageBox = ({ message, onRetry }) => (
  <div
    style={{
      margin: "20px",
      padding: "20px",
      backgroundColor: "#ffcccc",
      color: "#cc0000",
      borderRadius: "5px",
      textAlign: "center",
    }}
  >
    <p>{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        style={{
          marginTop: "10px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#f2f2f2",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Retry
      </button>
    )}
  </div>
)

const EventsContainer = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div>
      <h1 className="font-heading text-3xl mt-2 md:text-center md:mx-0 m-10">Favorited Events</h1>
      <div className="mx-5 flex flex-row flex-wrap gap-3 min-h-[300px] mv-10">
        {items.filter(item => item.favorite)
        .map((item, idx) => (
          <SpecialEventCard event={item} idx={idx} key={idx} toggleFavorite={toggleFavorite} />
        ))}
      </div>
      <h1 className="font-heading text-3xl mt-2 md:text-center md:mx-0 m-10">All Events</h1>
      <div className="mx-5 flex flex-row flex-wrap gap-3">
        {items.map((item, idx) => (
          <SpecialEventCard event={item} idx={idx} key={idx} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  )
}

const SpecialEventCard = ({ event, idx, toggleFavorite }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <button
      key={idx}
      className={`border rounded-lg p-5 md:w-96 w-full flex flex-col gap-2 text-left shadow-md hover:shadow-xl duration-200
        transition-transform transform hover:scale-105 ${
        bgGradients[idx % Object.keys(bgGradients).length]
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <h2 className=" font-heading text-lg font-semibold text-center mx-auto">
        {event.title}
      </h2>

      <div className="flex flex-row justify-between items-start">
        {/* Left side content */}
        <div className="flex flex-col justify-between gap-1">
          {event.location && (
            <span className="flex flex-row gap-2">
              <Icon icon="carbon:location-filled" className="text-xl text-blue-800" />
              <span>{event.location}</span>
            </span>
          )}
          <span className="flex flex-row gap-2">
            <Icon icon="mingcute:time-line" className="text-xl text-blue-800" />
            <span>Click to see times!</span>
          </span>
        </div>

        {/* Right side star icon */}
        <div className="ml-4">
          <button
            className="w-10 h-10"
            onClick={(e) => {
              e.stopPropagation(); // Prevents card from toggling when clicking the star
              console.log("CLICK")
              toggleFavorite(event.id)
            }}
          >
            <Icon
              icon="ic:round-star"
              className={`text-3xl duration-200 ${
                event.favorite ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>

      <div className={`${expanded ? "" : "h-30 line-clamp-4"} my-2`}>
        <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
        {/* <div><p>{event.description}</p></div> */}
      </div>
      {expanded && (
        <div className="flex flex-col w-full gap-3">
          <h3 className="font-heading ">Event Times</h3>
          <ul className="">
            {event.slots.map((slot) => (
              <li key={slot.display}>{slot.display}</li>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="flex flex-row justify-around">
              <button className="w-10 h-10">
                <Icon icon="gg:expand" className='text-3xl hover:text-yellow-400 duration-200' />
              </button>
              <button className="w-10 h-10"><Icon icon="heroicons:map-pin-20-solid" className='text-3xl hover:text-yellow-400 duration-200' /></button>
              <button className="w-10 h-10"><Icon icon="ic:round-star" className='text-3xl hover:text-yellow-400 duration-200' /></button>
            </div> */}

      <Icon
        className="mx-auto text-2xl"
        icon={
          expanded
            ? "material-symbols:expand-less"
            : "material-symbols:expand-more"
        }
      />
    </button>
  )
}

const Exhibits = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [numPages, setNumPages] = useState(10)
  const [searchTerm, setSearchTerm] = useQueryParam(
    "sq",
    withDefault(StringParam, "")
  )
  const [searchBoxText, setSearchBoxText] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const itemsPerPage = 30

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error, isLoading } = useSWR(
    `https://n11.eohillinois.org/api/events?populate=occurences&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}
    ${
      searchTerm == ""
        ? ""
        : `&filters[$or][0][title][$contains]=${searchTerm}&filters[$or][1][Description][$contains]=${searchTerm}&filters[$or][2][location][$contains]=${searchTerm}`
    }`,
    fetcher
  )

  if (error) {
    return (
      <ErrorMessageBox
        message="failed to load, retry"
        onRetry={() => window.location.reload()}
      />
    )
  }

  if (!data)
    return (
      <div className="flex w-full justify-center items-center flex-col">
        <p className="font-bold text-xl m-4">Loading...</p>
        <img
          src="/assets/logo/gear1.gif"
          alt="loading"
          className="w-20"
        />
      </div>
    )

  //   const items = data.data.map(e => e.attributes)
  //     .map(event => {
  //       return {
  //         id: event['title'],
  //         title: event['title'],
  //         description: event['Description'],
  //         location: event['location']
  //       }
  //     });

  const items = data.data.map((event, idx) => {
    const occurences = event.occurences 
      .map((occ) => {
        return {
          startTime: occ.startTime,
          endTime: occ.endTime,
          colIndex: idx,
        }
      })
      .map((slot) => {
        const start = dayjs(slot.startTime).tz("America/Chicago")
        const end = dayjs(slot.endTime).tz("America/Chicago")
        return {
          display: `${start.format("dddd")}, ${start.format(
            "h:mm"
          )} to ${end.format("h:mm a")}`,
        }
      })

    return {
      id: idx,
      title: event.title,
      location: event.location,
      picture: (event.picture?.url || ""), // event.picture
      shortTitle: event.shortTitle,
      description: event.description,
      slots: occurences,
      favorite: false,
    }
  })

  const pageCount = data.meta.pagination.pageCount
  if (numPages != pageCount) {
    setNumPages(pageCount)
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-row justify-between mx-8">
        <h1 className="font-heading text-5xl mt-2 md:text-center md:mx-0">
          Special Events
        </h1>
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <Icon icon="bx:search" className="text-3xl" />
        </button>
      </span>

      {searchOpen && (
        <span className="flex flex-row w-full px-5">
          <input
            className={`border rounded-l-xl p-2 border-gray-600 duration-300 flex-grow`}
            placeholder="Building, category, department, etc."
            onChange={(e) => setSearchBoxText(e.target.value)}
            value={searchBoxText}
          />
          <button
            className="rounded-r-xl bg-blue-700 p-3 font-semibold text-white"
            onClick={() => {
              setSearchTerm(searchBoxText)
              setSearchBoxText("")
              setSearchOpen(false)
              setCurrentPage(1)
            }}
          >
            Go
          </button>
        </span>
      )}

      {searchTerm.length > 0 && (
        <div className="flex flex-row px-5 justify-between items-center">
          <p>Searching for {searchTerm}</p>
          <button
            onClick={() => {
              setSearchTerm("")
              setSearchOpen(false)
            }}
          >
            <Icon icon="mdi:clear-outline" className="text-black text-3xl" />
          </button>
        </div>
      )}

      {/* THIS IS WHAT ILL REPLACE WITH EVENTS CONTAINER */}
      <EventsContainer initialItems={items}/>
      {/* <div className="mx-5 flex flex-row flex-wrap gap-3">
        {items.filter(item => item.favorite)
        .map((item, idx) => (
          <SpecialEventCard event={item} idx={idx} key={idx} />
        ))}
      </div>
      <h1>HELLO</h1>
      <div className="mx-5 flex flex-row flex-wrap gap-3">
        {items.map((item, idx) => (
          <SpecialEventCard event={item} idx={idx} key={idx} />
        ))}
      </div> */}



      <div className="flex flex-row justify-between items-center mx-5">
        <p>
          Page {currentPage} of {numPages}{" "}
        </p>
        <div className="flex flex-row gap-3">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="disabled:text-gray-500"
          >
            <Icon icon="ic:round-navigate-before" className="text-3xl" />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages))
            }
            disabled={currentPage === numPages}
            className="disabled:text-gray-500"
          >
            <Icon icon="ic:round-navigate-next" className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exhibits
