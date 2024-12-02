import React, {useEffect, useState} from "react";
import './RegistrationSteps.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const RegistrationSteps = ({event}) => {
    const navigate = useNavigate();


    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        teamName: '',
        teamLeader: '',
        memberCount: '',
        memberNames: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        console.log('Form Data:', formData);
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Отправка данных на сервер
            const response = await axios.post("http://localhost:8080/registrations", {
                ...formData,
                eventId: event.id, // Связь с конкретным событием
            });

            alert(`Successfully registered for ${event.title}!`);
            console.log(response.data);
            navigate("/success"); // Перенаправление на страницу успеха (опционально)
        } catch (error) {
            console.error("Error submitting registration:", error);
            alert("Failed to register. Please try again.");
        }
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="registration-container">
            {/* Stepper Header */}
            <div className="stepper">
                <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                    <div className="circle">1</div>
                    <p>Sign into HackCamp</p>
                </div>
                <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                    <div className="circle">2</div>
                    <p>Register for the event</p>
                </div>
                <div className={`step ${currentStep === 3 ? "active" : ""}`}>
                    <div className="circle">3</div>
                    <p>Join team</p>
                </div>
            </div>

            {/* Step Content */}
            <div className="step-content">
                {currentStep === 1 && (
                    <form id="form1">
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">First name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Last name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                                <div className="col">
                                    <label htmlFor="email-inp">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                    <label htmlFor="country-inp">Country:</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="navigation-buttons" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <button type="submit" form="form1" onClick={handleNext} value="Submit">Save</button>
                        </div>
                    </form>
                )}
                {currentStep === 2 && (
                    <form id="form2">
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Gender:</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                                <div className="col">
                                    <label htmlFor="email-inp">Your organisation name:</label>
                                    <input
                                        type="text"
                                        name="organisationName"
                                        value={formData.organisationName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                    <label htmlFor="country-inp">How are you planning to participate?:</label>
                                    <input
                                        type="text"
                                        name="participation"
                                        value={formData.participation}
                                        onChange={handleChange}
                                        placeholder="I am joining the team of my Team Leader"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="navigation-buttons" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <button type="submit" form="form2" onClick={handleNext} value="Submit">Register now!
                            </button>
                        </div>

                    </form>
                )}
                {currentStep === 3 && (
                    <form onSubmit={handleSubmit}>
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">Team name:</label>
                                <input
                                    type="text"
                                    name="teamName"
                                    value={formData.teamName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Team leader:</label>
                                <input
                                    type="text"
                                    name="teamLeader"
                                    value={formData.teamLeader}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                            <div className="col">
                                    <label htmlFor="email-inp">Count of members:</label>
                                <input
                                    type="number"
                                    name="memberCount"
                                    value={formData.memberCount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                <label htmlFor="country-inp">Name of members:</label>
                                    <textarea
                                        name="memberNames"
                                        value={formData.memberNames}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="navigation-buttons" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <button type="submit" form="form3" onClick={handleSubmit} value="Submit">Register now!
                            </button>
                        </div>

                    </form>
                )}
            </div>


        </div>
    );
};

export default RegistrationSteps;
