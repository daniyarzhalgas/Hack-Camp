import React, {useState} from "react";
import RegistrationSteps from "../RegistrationToEvent/RegistrationSteps";

const EventPage = ({event, eventDetails, id}) => {
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
                        <p><strong>Location:</strong> {eventDetails[id - 1].location}</p>
                        <p><strong>Duration:</strong> {event.duration}</p>
                        <p>{event.description}</p>
                        <ul>
                            {event.areas.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>

                    {/* What Awaits You Section */}
                    <div className="event-section">
                        <h2>What awaits you:</h2>
                        <ul>
                            {event.whatAwaits.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Prizes Section */}
                    <div className="event-section">
                        <h2>Prizes:</h2>
                        <ul>
                            {event.prizes.map((prize, index) => (
                                <li key={index}>{prize}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Registration Section */}
                    <div className="event-section">
                        <h2>Registration:</h2>
                        <p>{event.registration}</p>
                    </div>

                    {/* Register Button */}
                    <div className="register-button-container">
                        <button className="register-button" onClick={handleRegisterClick}>REGISTER NOW!</button>
                    </div>
                </div>
            )}

            {view === "register" && (
                <div className="register-section">
                    <RegistrationSteps/>
                </div>
            )}
        </div>
    );
};

export default EventPage;
