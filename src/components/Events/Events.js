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

    const [filteredHackathons, setFilteredHackathons] = useState(mockHackathons);
    const [activeFilter, setActiveFilter] = useState('All'); // Default filter is 'All'

    // Function to handle filter button click
    const handleFilterClick = (filterType) => {
        let filtered = [];

        // Filter hackathons based on the selected filter type
        switch (filterType) {
            case 'All':
                filtered = mockHackathons; // Show all hackathons
                break;
            case 'Ongoing':
                filtered = mockHackathons.slice(0, 2); // First 2 events
                break;
            case 'Upcoming':
                filtered = mockHackathons.slice(2, 5); // From index 2 to 5
                break;
            case 'Finished':
                filtered = mockHackathons.slice(5); // From index 5 to the end (the last event)
                break;
            default:
                filtered = mockHackathons;
                break;
        }

        setFilteredHackathons(filtered); // Update filtered hackathons
        setActiveFilter(filterType);
    };


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
                    <button onClick={() => handleFilterClick('All')}
                            style={{background: activeFilter === 'All' ? '#5179EF' : 'transparent',
                                color: activeFilter === 'All' ? "#fff" : "#000"}}>All
                    </button>
                    <button onClick={() => handleFilterClick('Ongoing')}
                            style={{background: activeFilter === 'Ongoing' ? '#5179EF' : 'transparent',
                                color: activeFilter === 'Ongoing' ? "#fff" : "#000"}}>Ongoing
                    </button>
                    <button onClick={() => handleFilterClick('Upcoming')}
                            style={{background: activeFilter === 'Upcoming' ? '#5179EF' : 'transparent',
                                color: activeFilter === 'Upcoming' ? "#fff" : "#000"}}>Upcoming
                    </button>
                    <button onClick={() => handleFilterClick('Finished')}
                            style={{
                                background: activeFilter === 'Finished' ? '#5179EF' : 'transparent',
                                color: activeFilter === 'Finished' ? "#fff" : "#000"
                            }}>Finished
                    </button>
                </div>
                <div className="event-grid">
                    {filteredHackathons.map((hackathon, index) => (
                        <EventCard key={index} {...hackathon} />
                    ))}

                    {hackathons.map((hackathon, index) => ( // hackathons from back
                        <EventCard
                            key={index}
                            id={i++}
                            {...hackathon}
                            image={hackathon.image || '/def-hack-image.webp'} // Укажите путь к дефолтному изображению
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
