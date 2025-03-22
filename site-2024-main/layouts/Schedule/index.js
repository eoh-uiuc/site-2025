import { Schedule } from "../../components/schedule/schedule.js";

export default function ScheduleSection() {
    return (

        <div className='mb-10 mx-4 md:mx-20'>
            <p className='font-montserrat text-center italic'>Scroll down and to the right to see all events and timings. Click on any event or time slot to learn more!</p>
            <Schedule />
        </div>
    )
}
