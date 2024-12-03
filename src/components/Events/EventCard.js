// src/components/EventCard.js
import React from 'react';
import './EventCard.css';
import {useNavigate} from "react-router-dom";
import {useUser} from "../../contexts/UserContext";

function EventCard({id, title, location, description, image}) {
    const navigate = useNavigate();
    const {user} = useUser();// Hook for programmatic navigation
    const handleLearnMore = () => {
        if (user) {
            navigate(`/event/${id}`); // Navigate to the event details page
        } else {
            navigate('/login')
        }
    };
    return (
        <div className="event-card">
            <img src={image} alt={title}/>
            <div className="event-content">
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
                <button onClick={handleLearnMore} className="learn-more-btn">learn more-></button>
            </div>
        </div>
    );
}

export default EventCard;
