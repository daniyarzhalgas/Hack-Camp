import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";
import EventPage from "./EventPage";

function EventDetails() {
    const {id} = useParams(); // Получаем ID хакатона из URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
            date: '2024-12-25'
        },
        {
            id: 2,
            title: 'Astana AI & ML Hack',
            location: 'Astana, Kazakhstan',
            image: '/image3.png',
            duration: '2 days (weekend)',
            description: 'Astana AI & ML Hack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '2024-11-15'
        },
        {
            id: 3,
            title: 'KazHack',
            location: 'Astana, Kazakhstan',
            image: '/image2.png',
            duration: '2 days (weekend)',
            description: 'KazHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '2025-01-11'
        },
        {
            id: 4,
            title: 'EcoTechHack',
            location: 'Astana, Kazakhstan',
            image: '/image4.png',
            duration: '2 days (weekend)',
            description: 'EcoTechHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '2025-05-11'
        },
        {
            id: 5,
            title: 'FinTech Almaty',
            location: 'Astana, Kazakhstan',
            image: '/image5.png',
            duration: '2 days (weekend)',
            description: 'FinTech Almaty is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '2025-04-10'
        },
        {
            id: 6,
            title: 'Hack4Good Shymkent',
            location: 'Astana, Kazakhstan',
            image: '/image6.png',
            duration: '2 days (weekend)',
            description: 'Hack4Good Shymkent is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '2025-02-20'
        },
        // Add more hackathons as needed
    ];

    useEffect(() => {
        if (!id) return; // Если ID нет, выходим

        const fetchEvent = async () => {
            try {
                if (id < 6 && eventDetails) {
                    return
                } else {
                    // Запрос к серверу для событий с ID >= 6
                    const response = await axios.get(`http://localhost:8080/hackathon/${id}`);
                    setEvent(response.data);
                }
            } catch (err) {
                console.error("Failed to fetch event:", err);
                setError("Failed to fetch event details.");
            } finally {
                setLoading(false); // Убираем состояние загрузки
            }
        };
        fetchEvent();
    }, [id, eventDetails]); // Хук срабатывает при изменении ID или eventDetails

    if (!event){
        setEvent(eventDetails[id-1])
    }
    // Отображение данных
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!event) {

        return <p>Event not found!</p>;
    }

    const sectionStyle = {
        backgroundImage: `url(${event.image || '/def-hack-image.webp'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    };

    return (
        <div>
            <div className="event-header" style={sectionStyle}>
                <h1>{event.title}</h1>
            </div>
            <div className="event-details">
                <div className="detetails_nav">
                    <div id="info-btn"><h1>Info</h1></div>
                    <div id="rega-btn"><h1>Registration</h1></div>
                </div>

                <EventPage id={id} event={event}/>
                {/* Event Info*/}
            </div>
        </div>


    );
}

export default EventDetails;
