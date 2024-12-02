import React, {useEffect, useState} from 'react';
import axios from "axios";
import EventList from "./EventList";


function CalendarPage() {
    const [registrationEvents, setRegistrationEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/registration`);
                console.log(response.data); // Log the fetched data
                setRegistrationEvents(response.data); // Update the event state
            } catch (err) {
                console.error("Failed to fetch event:", err);
                setError("Failed to fetch event details.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvent(); // Call the fetch function when the component mounts
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures this runs only on component mount


    // Отображение лоадера, ошибки или данных
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!registrationEvents) return <p>Event not found!</p>;


    return (
        <div className="events">
            <div className="events-header">
                <h2 key="title">Calendar</h2>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "50px 10px"
            }}>
                {/*<EventList registrationEvents={registrationEvents}/>*/}
            </div>
        </div>
    );
}

export default CalendarPage;
