import React, {useState} from "react";
import RegistrationSteps from "../RegistrationToEvent/RegistrationSteps";

const EventPage = ({event, id}) => {
    const [view, setView] = useState("info"); // State to track the current view

    const handleRegisterClick = () => {

        document.getElementById("rega-btn").style.width = "500px";
        document.getElementById("rega-btn").style.background = "#ffffff";
        document.getElementById("info-btn").style.width = "100%";
        document.getElementById("info-btn").style.justifyContent = "normal";
        document.getElementById("info-btn").style.paddingLeft = "50px";
        document.getElementById("info-btn").style.paddingLeft = "50px";
        document.getElementById("info-btn").style.background = "#D7E0FB";


        setView("register"); // Switch to the "Register" view
    };

    const handleBackToInfo = () => {
        setView("info"); // Switch back to the "Info" view
    };

    return (
        <div>
            <div className="tabs">
                <button
                    onClick={handleBackToInfo}
                    className={view === "info" ? "active" : ""}
                >
                    INFO
                </button>
                <button
                    onClick={handleRegisterClick}
                    className={view === "register" ? "active" : ""}
                >
                    REGISTER
                </button>
            </div>

            {view === "info" && (
                <div className="info-section">
                    <div className="event-info">
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Duration:</strong> {event.duration}</p>
                        <p><strong>Description:</strong></p>
                        <p>{event.description}</p>

                    </div>

                    {/* What Awaits You Section */}
                    <div className="event-section">
                        <h2>What awaits you:</h2>
                        <ul>
                            <li>2 days of intensive work in teams.</li>
                            <li>Mentoring support and access to modern tools.</li>
                            <li>Final presentations and feedback from experts.</li>
                        </ul>
                    </div>

                    {/* Prizes Section */}
                    <div className="event-section">
                        <h2>Prizes:</h2>
                        <ul>
                            {event.prizes.split(',').map((prize, index) => (
                                <li key={index}>{prize}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Registration Section */}
                    <div className="event-section">
                        <h2>Registration:</h2>
                        <p>Follow the link.
                            Fill out the form by {event.date}.</p>
                        <p>Participate both individually and in a team (up to 5 people).</p>
                        <p>Places are limited — register now and become a part of {event.title}!</p>
                        <p>For questions: info@hackcamp.kz </p>
                    </div>

                    {/* Register Button */}
                    <div className="register-button-container">
                        <button className="register-button" onClick={handleRegisterClick}>REGISTER NOW!</button>
                    </div>
                </div>
            )}

            {view === "register" && (
                <div className="register-section">
                    <RegistrationSteps event={event}/>
                </div>
            )}
        </div>
    );
};

export default EventPage;
