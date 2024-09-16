import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import useSWR from 'swr';
import { Modal } from './modal.js';
dayjs.extend(utc)
dayjs.extend(timezone)

const DAY_ONE = 5
const DAY_TWO = 6

const slotGradients = {
    0: 'bg-gradient-to-tr from-red-800 via-red-500 to-red-700',
    1: 'bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-500',
    2: 'bg-gradient-to-tr from-purple-800 via-purple-700 to-blue-800',
    3: 'bg-gradient-to-tr from-red-500 via-pink-600 to-pink-400',
    4: 'bg-gradient-to-tr from-gray-800 via-gray-500 to-gray-700',
    5: 'bg-gradient-to-tr from-green-800 via-green-500 to-green-700',
}

// 1000 ms/sec * 60 sec/min * 30 min
const timeMsPerSlot = 1000 * 60 * 30;
const timeMs8Hrs = 1000 * 60 * 60 * 8.5;
var dayOneMs = dayjs(new Date(2024, 3, DAY_ONE)).tz("America/Chicago").valueOf();
var dayTwoMs = dayjs(new Date(2024, 3, DAY_TWO)).tz("America/Chicago").valueOf();

const genTimeSlots = () => {
    const totalSlots = 26;

    let dayOneSlots = []
    for (let i = 0; i < totalSlots + 1; i++) {
        dayOneSlots.push(dayOneMs + timeMs8Hrs + (i * timeMsPerSlot))
    }
    let dayTwoSlots = []
    for (let i = 0; i < totalSlots + 1; i++) {
        dayTwoSlots.push(dayTwoMs + timeMs8Hrs + (i * timeMsPerSlot))
    }

    return {
        DAY_ONE: dayOneSlots,
        DAY_TWO: dayTwoSlots
    };
}

export function Schedule() {
    const nullSlot = {
        colIndex: null,
        duration: null,
        rowIndex: null,
        date: null,
        startMs: null,
        endMs: null
    }
    const [hoverSlot, setHoverSlot] = useState(nullSlot);
    const [modalColIdx, setModalColIdx] = useState(null);
    const [onDayOne, setDayOne] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "https://n1.eohillinois.org/api/events?populate=occurences&pagination[pageSize]=40&populate=picture",
        fetcher
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    const slots = genTimeSlots();

    const scheduleData = data.data.map((event, idx) => {
        const occurences = event.attributes.occurences.data.map(occ => {
            return {
                startTime: occ.attributes.startTime,
                endTime: occ.attributes.endTime,
                colIndex: idx
            }
        }).map(slot => {
            const start = dayjs(slot.startTime).tz('America/Chicago')
            const end = dayjs(slot.endTime).tz('America/Chicago')
            const date = start.date()
            const duration = end.diff(start) / timeMsPerSlot;
            const rowIndex = (start.valueOf() - (date == DAY_ONE ? dayOneMs : dayTwoMs) - timeMs8Hrs) / timeMsPerSlot;
            return {
                colIndex: slot.colIndex,
                duration,
                rowIndex,
                date,
                startMs: start.valueOf(),
                endMs: end.valueOf(),
                display: `${start.format('h:mm')} to ${end.format('h:mm')}`
            }
        })

        return {
            col: idx,
            title: event.attributes.title,
            location: event.attributes.location,
            picture: event.attributes.picture,
            shortTitle: event.attributes.shortTitle,
            description: event.attributes.Description,
            slots: occurences
        }
    })
    const allSlots = scheduleData.map(item => item.slots).flat();

    const dayOneSlots = allSlots.filter(occurence => {
        return occurence.date == DAY_ONE
    });
    const dayTwoSlots = allSlots.filter(occurence => {
        return occurence.date == DAY_TWO
    });

    const activeStyles = "border-white bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-700 text-white"
    const inactiveStyles = "border-black border-t-2 border-l-2 border-r-2 bg-transparent hover:bg-gradient-to-tr from-purple-200 via-purple-100 to-blue-200 text-black";

    return (
        <>
            <Modal event={modalColIdx != null ? scheduleData[modalColIdx] : null} close={() => setModalColIdx(null)} />
            <span className='flex flex-row justify-start gap-1 mt-3 mx-4 md:mx-8'>
                <button
                    onClick={() => setDayOne(true)}
                    className={`p-3 md:p-5 px-5 md:px-7 font-bold font-montserrat rounded-t-xl
                    ${onDayOne ? activeStyles : inactiveStyles}`}>Friday, April 5th</button>
                <button
                    onClick={() => setDayOne(false)}
                    className={`p-3 md:p-5 px-5 md:px-7 font-bold font-montserrat rounded-t-xl 
                    ${onDayOne ? inactiveStyles : activeStyles}`}>Saturday, April 6th</button>
            </span>
            <div className="max-h-128 overflow-x-hidden p-4 bg-gradient-to-tr from-pink-50 via-yellow-50 to-blue-100 rounded-xl flex flex-col">
                <div className="flex flex-row gap-0">
                    <div className="flex flex-col">
                        <div className='h-24 flex items-end justify-center'>
                            <Icon icon="ion:arrow-down" className="text-3xl text-gray-400 mb-4" />
                            <Icon icon="ion:arrow-down" className="text-3xl text-gray-400 -rotate-90 self-center" />
                        </div>
                        {slots[(onDayOne ? 'DAY_ONE' : 'DAY_TWO')].map(slot =>
                            <div className={`text-lg h-8 w-24 font-montserrat text-right pr-2 ${slot >= hoverSlot.startMs && slot < hoverSlot.endMs ? 'font-bold' : ''}`} key={slot}>
                                {dayjs(slot).tz('America/Chicago').format('h:mm A')}
                            </div>
                        )}
                        <div className='h-24 flex items-start justify-center'>
                            <Icon icon="ion:arrow-up" className="text-3xl text-gray-400 mt-4" />
                            <Icon icon="ion:arrow-up" className="text-3xl text-gray-400 rotate-90 self-center" />
                        </div>
                    </div>
                    <div className="relative overflow-x-scroll w-full overflow-y-hidden">
                        <div className="flex flex-row pb-4 items-end h-24">
                            {scheduleData.map(event => {
                                return (<button className={`font-montserrat w-[96px] min-w-[96px] pr-2 pl-1 text-sm break-words 
                                                        ${hoverSlot.colIndex == event.col ? 'font-semibold' : ''}`} key={event.col}
                                    onClick={() => setModalColIdx(event.col)}>
                                    {event.shortTitle ? event.shortTitle : event.title}
                                </button>);
                            })}
                        </div>
                        {(onDayOne ? dayOneSlots : dayTwoSlots).map(
                            slot =>
                                <div className={`absolute w-[96px] min-w-[96px] ${slotGradients[slot.colIndex % Object.keys(slotGradients).length]} 
                                            cursor-pointer duration-300 rounded-lg border border-white
                                            text-xs flex items-center justify-center text-white select-none glowing`}
                                    style={{
                                        top: `${slot.rowIndex * 32 + 96}px`,
                                        height: `${slot.duration * 32}px`,
                                        left: `${slot.colIndex * 96}px`
                                    }}
                                    key={`${slot.rowIndex}-${slot.colIndex}`}
                                    onMouseEnter={() => { setHoverSlot(slot) }}
                                    onMouseLeave={() => { setHoverSlot(nullSlot) }}
                                    onClick={() => setModalColIdx(slot.colIndex)}
                                >
                                    {/* {slot.duration == 1 ? '30 minutes' : slot.duration == 2 ? '1 hour' : `${slot.duration / 2} hours`} */}
                                    {slot.duration > 1 ?
                                        <div className='flex flex-col gap-1 text-center p-0.5'>
                                            <p>{
                                                scheduleData[slot.colIndex].title.length > 25 ?
                                                    scheduleData[slot.colIndex].title.substring(0, 25) + '...' : scheduleData[slot.colIndex].title}
                                            </p>
                                            <p>
                                                {slot.display}
                                            </p>
                                        </div>
                                        :
                                        <div className='overflow-hidden'>
                                            {/* <p className='slot-text text-xs'>{scheduleData[slot.colIndex].title}</p> */}
                                            <p className='text-xs'>
                                                {slot.display}
                                            </p>
                                        </div>
                                    }
                                </div>
                        )}
                        <div className="absolute flex flex-row py-4 items-start h-28 bottom-0">
                            {scheduleData.map(event => {
                                return (<button className={`font-montserrat w-[96px] min-w-[96px] pr-2 pl-1 text-sm break-words ${hoverSlot.colIndex == event.col ? 'font-bold' : ''}`} key={event.col}
                                    onClick={() => setModalColIdx(event.col)}>
                                    {event.shortTitle ? event.shortTitle : event.title}
                                </button>);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}