import React, {useEffect, useState} from "react";
import './RegistrationSteps.css'

const RegistrationSteps = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
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
                    <form>
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">First name:</label>
                                <input type="text"/>
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Last name:</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                                <div className="col">
                                    <label htmlFor="email-inp">Email:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                    <label htmlFor="country-inp">Country:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
                {currentStep === 2 && (
                    <form>
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">Age:</label>
                                <input type="number"/>
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Gender:</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                                <div className="col">
                                    <label htmlFor="email-inp">Your organisation name:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                    <label htmlFor="country-inp">How are you planning to participate?:</label>
                                    <input type="text" placeholder="I am joining the team of my Team Leader"/>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
                {currentStep === 3 && (
                    <form>
                        <div className="name-surname-input">
                            <div className="col">
                                <label htmlFor="name-inp">Team name:</label>
                                <input type="text"/>
                            </div>

                            <div className="col">
                                <label htmlFor="lastname-inp">Team leader:</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="email-country-input">
                            <div className="email-input">
                                <div className="col">
                                    <label htmlFor="email-inp">Count of members:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="country-input">
                                <div className="col">
                                    <label htmlFor="country-inp">Name of members:</label>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentStep === 1}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentStep === 3}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default RegistrationSteps;
