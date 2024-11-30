// src/components/EventCard.js
import React from 'react';
import './EventCard.css';
import {useNavigate} from "react-router-dom";

function EventCard({id, title, location, description, image}) {
    const navigate = useNavigate(); // Hook for programmatic navigation
    console.log(id, title, location, description, image)
    const handleLearnMore = () => {
        console.log(id);
        navigate(`/event/${id}`); // Navigate to the event details page
    };
    return (
        <div className="event-card">
            <img src={image} alt={title}/>
            <div className="event-content">
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{description}</p>
                <button onClick={handleLearnMore} className="learn-more-btn">learn more-></button>
            </div>
        </div>
    );
}

export default EventCard;
