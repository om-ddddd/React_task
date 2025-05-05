import React from "react";
import { useParams } from "react-router-dom";


const scheduleData = {
  day1: [
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Kickoff event of the fest",
      location: "Main Hall",
    },
    {
      time: "12:00 PM",
      title: "Workshop on AI",
      description: "Introduction to AI and ML",
      location: "Room A",
    },
    {
      time: "3:00 PM",
      title: "Panel Discussion",
      description: "Future of Space Exploration",
      location: "Auditorium",
    },
  ],
  day2: [
    {
      time: "9:00 AM",
      title: "Hackathon Begins",
      description: "24-hour coding challenge",
      location: "Lab B",
    },
    {
      time: "1:00 PM",
      title: "Guest Lecture",
      description: "Talk by a NASA Scientist",
      location: "Auditorium",
    },
    {
      time: "5:00 PM",
      title: "Cultural Fest",
      description: "Music and Dance Performances",
      location: "Open Stage",
    },
  ],
  day3: [
    {
      time: "10:00 AM",
      title: "Project Showcase",
      description: "Presentation of projects by participants",
      location: "Exhibition Hall",
    },
    {
      time: "2:00 PM",
      title: "Closing Ceremony",
      description: "Award distribution and closing remarks",
      location: "Main Hall",
    },
  ],
};

const DaySchedule = () => {
  const { dayId } = useParams();
  const events = scheduleData[dayId] ;

  return (
    <div className="day">
      <h2>{dayId.replace("day", "Day ")}</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {events.map((event, idx) => (
          <li key={idx} className="event">
            <div className="time">
              <strong>{event.time}</strong>
            </div>
            <div className="title">
              <span>{event.title}</span>
            </div>
            <div>
              {event.description} (<em>{event.location}</em>)
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaySchedule;
