"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
    },
    {
        id: 2,
        title: "lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati ipsa nobis, dignissimos provident deserunt animi ipsum ea eum cupiditate necessitatibus neque inventore, perspiciatis aliquid consequuntur, sed nulla aut perferendis."
    },
    {
        id: 3,
        title: "lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati ipsa nobis, dignissimos provident deserunt animi."
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange}  value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="events more" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
            {events.map(event => (
                <div 
                    className="p-5 rounded-md border-2 border-gray-100 birder-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" 
                    key={event.id}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="s">{event.title}</h1>
                        <span className="text-[10px] bg-lamaSky px-2 py-1 rounded-full text-gray-500">
                            {event.time}
                        </span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar