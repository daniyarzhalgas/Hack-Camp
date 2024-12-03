import React, {useEffect, useState} from "react";
import axios from "axios";
import Calendar from "./Calendar";

const EventList = ({registrationEvents}) => {
    const [events, setEvents] = useState([]);
    const [mockEvents, setMockEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const isInteger = (str) => {
        const num = parseInt(str, 10); // Convert string to an integer
        return !isNaN(num) && Number.isInteger(num); // Check if the result is a valid integer
    };
    // Mock data - replace this with data fetched from a server or state
    const eventDetails = [
        {
            id: 1,
            title: 'TechStep Almaty',
            location: 'Almaty, Kazakhstan',
            image: '/image1.png',
            duration: '2 days (weekend)',
            description: 'TechStep Almaty is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11' //2025-03-15
        },
        {
            id: 2,
            title: 'Astana AI & ML Hack',
            location: 'Astana, Kazakhstan',
            image: '/image3.png',
            duration: '2 days (weekend)',
            description: 'Astana AI & ML Hack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11'
        },
        {
            id: 3,
            title: 'KazHack',
            location: 'Astana, Kazakhstan',
            image: '/image2.png',
            duration: '2 days (weekend)',
            description: 'KazHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11'
        },
        {
            id: 4,
            title: 'EcoTechHack',
            location: 'Astana, Kazakhstan',
            image: '/image4.png',
            duration: '2 days (weekend)',
            description: 'EcoTechHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11'
        },
        {
            id: 5,
            title: 'FinTech Almaty',
            location: 'Astana, Kazakhstan',
            image: '/image5.png',
            duration: '2 days (weekend)',
            description: 'FinTech Almaty is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11'
        },
        {
            id: 6,
            title: 'Hack4Good Shymkent',
            location: 'Astana, Kazakhstan',
            image: '/image6.png',
            duration: '2 days (weekend)',
            description: 'Hack4Good Shymkent is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            registrationDeadline: '2024-01-11'
        },
        // Add more hackathons as needed
    ];

    useEffect(() => {
        const fetchAllEvents = async () => {
            try {
                const promises = registrationEvents.map((e) => {
                    if (!isInteger(e.eventId)) {
                        return axios.get(`http://localhost:8080/hackathon/${e.eventId}`);
                    } else {
                        // console.log("Using local mock event:", e.eventId);
                        setMockEvents((prevMock) => [
                            ...prevMock,
                            eventDetails[e.eventId - 1]
                        ]);
                        // console.log(mockEvents);
                    }
                    return null; // Возвращаем null, если условие не выполняется
                }).filter(Boolean); // Убираем null из массива
                const responses = await Promise.all(promises);
                const eventData = responses.map((response) => response.data);

                const combinedEvents = [...mockEvents, ...eventData];

                // Remove duplicates from combined events based on 'id'
                const uniqueEvents = Array.from(
                    new Map(combinedEvents.map((event) => [event.id, event])).values()
                );

                setEvents(uniqueEvents); // Сохраняем данные событий
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

    console.log(events)


    return (
        <div>
            <h2>Event Calendar</h2>
            <Calendar events={events}/>
            {events.map((e) => (
                <div>
                    <p>{e.title}</p>
                    <p>{e.registrationDeadline}</p>
                </div>

            ))}
        </div>
    );
};

export default EventList;
