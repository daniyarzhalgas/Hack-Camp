import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = ({ registrationEvents }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllEvents = async () => {
            try {
                const promises = registrationEvents.map((e) =>
                    axios.get(`http://localhost:8080/hackathon/${e.eventId}`)
                );

                console.log(promises)
                const responses = await Promise.all(promises);

                console.log(responses)
                const eventData = responses.map((response) => response.data);
                setEvents(eventData); // Сохраняем данные событий
            } catch (err) {
                console.error("Ошибка при загрузке событий:", err);
                setError("Не удалось загрузить данные о событиях.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllEvents();
    }, [registrationEvents]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Список событий</h1>
            {events.map((event, index) => (
                <div key={index}>
                    <h2>{event.title}</h2>
                    <p>Местоположение: {event.location}</p>
                    <p>Дата: {event.date}</p>
                </div>
            ))}
        </div>
    );
};

export default EventList;
