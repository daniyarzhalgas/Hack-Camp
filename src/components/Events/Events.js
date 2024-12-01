// src/components/Events.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import './Events.css';

function Events() {
    const mockHackathons = [
        {
            id: 1,
            title: 'TechStep Almaty',
            location: 'Almaty, Kazakhstan',
            description: 'A hackathon dedicated to the creation of innovative solutions in the field of Smart City and smart technologies for the cities of Kazakhstan.',
            image: '/image1.png',
        },
        {
            id: 2,
            title: 'Astana AI & ML Hack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image3.png',
        },
        {
            id: 3,
            title: 'KazHack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image2.png',
        },
        {
            id: 4,
            title: 'EcoTechHack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image4.png',
        },
        {
            id: 5,
            title: 'FinTech Almaty',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image5.png',
        },
        {
            id: 6,
            title: 'Hack4Good Shymkent',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image6.png',
        },
        // Add more hackathons as needed
    ];


    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const response = await axios.get('http://localhost:8080/hackathons');
                setHackathons(response.data); // Assuming the backend returns an array of hackathons
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch hackathons. Please try again later.');
                setLoading(false);
            }
        };

        fetchHackathons();
    }, []);

    if (loading) {
        return <div className="events"><p>Loading hackathons...</p></div>;
    }

    if (error) {
        return <div className="events"><p>{error}</p></div>;
    }
    let i = mockHackathons.length;

    return (
        <div className="events">
            <div className="events-header">
                <h2>Events</h2>
            </div>
            <div className="events-list">
                <div className="event-filters">
                    <button>All</button>
                    <button>Ongoing</button>
                    <button>Upcoming</button>
                    <button>Finished</button>
                </div>
                <div className="event-grid">
                    {mockHackathons.map((hackathon, index) => (
                        <EventCard key={index} {...hackathon} />
                    ))}

                    {hackathons.map((hackathon) => ( // hackathons from back
                        <EventCard
                            id={i++}
                            {...hackathon}
                            image={hackathon.image || '/image4.png'} // Укажите путь к дефолтному изображению
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
