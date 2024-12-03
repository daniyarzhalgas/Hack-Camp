import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ events }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const changeMonth = (direction) => {
        const newDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + direction,
            1
        );
        setCurrentDate(newDate);
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = getDaysInMonth(year, month);

        const calendar = [];
        for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
            calendar.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                today.getFullYear() === year &&
                today.getMonth() === month &&
                today.getDate() === day;
            const eventOnDay = events.filter(
                (event) =>
                    new Date(event.registrationDeadline).toDateString() ===
                    new Date(year, month, day).toDateString()
            );

            calendar.push(
                <div
                    key={day}
                    className={`calendar-day ${isToday ? "today" : ""} ${
                        eventOnDay.length ? "event-day" : ""
                    }`}
                    onClick={() => setSelectedEvents(eventOnDay)}
                >
                    {day}
                </div>
            );
        }
        return calendar;
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>◄</button>
                <span>
          {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
          })}
        </span>
                <button onClick={() => changeMonth(1)}>►</button>
            </div>
            <div className="calendar-grid">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="calendar-day-name">
                        {day}
                    </div>
                ))}
                {generateCalendar()}
            </div>
            <div className="event-details">
                {selectedEvents.length > 0 ? (
                    <div>
                        <h3>Events on {new Date(selectedEvents[0].date).toDateString()}:</h3>
                        <ul>
                            {selectedEvents.map((event, index) => (
                                <li key={index}>
                                    <strong>{event.title}</strong>: {event.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Select a date to view events.</p>
                )}
            </div>
        </div>
    );
};

export default Calendar;
