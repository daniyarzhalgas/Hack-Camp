import React, {useState} from "react";
import "./Calendar.css";
import {useNavigate} from "react-router-dom";

const Calendar = ({events}) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(events[0] || null); // Default to the first event
    const navigate = useNavigate();

    const handleLearnMore = (id) => {
        console.log(id)
        navigate(`/event/${id}`); // Navigate to the event details page

    };

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
        /// setSelectedEvent(null); // Reset selected event when month changes
    };

    const handleDayClick = (day) => {
        const event = events.find(
            (event) =>
                new Date(event.registrationDeadline).toDateString() ===
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()
        );
        setSelectedEvent(event || null);
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
            const eventOnDay = events.some(
                (event) =>
                    new Date(event.registrationDeadline).toDateString() ===
                    new Date(year, month, day).toDateString()
            );

            calendar.push(
                <div
                    key={day}
                    className={`calendar-day ${isToday ? "today" : ""} ${
                        eventOnDay ? "event-day" : ""
                    }`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>
            );
        }
        return calendar;
    };

        console.log("selected event");
        console.log(selectedEvent);
    return (
        <div className="styled-calendar">
            <div className="calendar-section">
                <div className="calendar-header">
                    <button className="change-month-btn" onClick={() => changeMonth(-1)}>◄</button>
                    <span>
            {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
            })}
          </span>
                    <button className="change-month-btn" onClick={() => changeMonth(1)}>►</button>
                </div>
                <div className="calendar-grid">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="calendar-day-name">
                            {day}
                        </div>
                    ))}
                    {generateCalendar()}
                </div>
            </div>
            <div className="event-section">
                {selectedEvent ? (
                    <div className="event-card-calendar">
                        <img src={selectedEvent.image} alt="image" style={{
                            width: "100%"
                        }}/>
                        <h2>{selectedEvent.title}</h2>
                        <p>
                            <strong>Location:</strong> {selectedEvent.location}
                        </p>
                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(selectedEvent.registrationDeadline).toDateString()}
                        </p>
                        <p>
                            <strong>Description:</strong> {selectedEvent.description}
                        </p>
                        <button className="learn-more-btn-calendar" onClick={event => {
                            handleLearnMore(selectedEvent.id)
                        }}>Learn More →
                        </button>
                    </div>
                ) : (
                    <p className="no-event">You don't participate in hackathons.</p>
                )}
            </div>
        </div>
    );
};

export default Calendar;
