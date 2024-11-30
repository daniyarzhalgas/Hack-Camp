// src/components/Events.js
import React from 'react';
import EventCard from './EventCard';
import './Events.css';

function Events() {
    const hackathons = [
        {
            id :1,
            title: 'TechStep Almaty',
            location: 'Almaty, Kazakhstan',
            description: 'A hackathon dedicated to the creation of innovative solutions in the field of Smart City and smart technologies for the cities of Kazakhstan.',
            image: '/image1.png',
        },
        {
            id :2,
            title: 'Astana AI & ML Hack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image3.png',
        },
        {
            id :3,
            title: 'KazHack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image2.png',
        },
        {
            id :4,
            title: 'EcoTechHack',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image4.png',
        },
        {
            id :5,
            title: 'FinTech Almaty',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image5.png',
        },
        {
            id :6,
            title: 'Hack4Good Shymkent',
            location: 'Astana, Kazakhstan',
            description: 'A general hackathon for developers, designers, and product managers to create innovative digital solutions across various categories, including apps, web services, and automation.',
            image: '/image6.png',
        },
        // Add more hackathons as needed
    ];

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
                    {hackathons.map((hackathon, index) => (
                        <EventCard key={index} {...hackathon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
