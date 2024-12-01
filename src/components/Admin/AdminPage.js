import React, {useState} from "react";
import axios from "axios";
import './AdminPage.css'

const AdminPage = () => {
    const [event, setEvent] = useState({
        image: null,
        title: "",
        location: "",
        duration: "",
        description: "",
        theme: "",
        prizes: "",
        registrationDeadline: "",
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEvent((prev) => ({ ...prev, image: file })); // Store file in state
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEvent((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/hackathon/create", event);
            alert(response.data); // Backend response message
            setEvent({
                image: null,
                title: "",
                location: "",
                duration: "",
                description: "",
                theme: "",
                prizes: "",
                registrationDeadline: "",
            });
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event.");
        }
    };

    return (
        <div className="admin-page">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit} className="admin-form">
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Duration:
                    <input
                        type="text"
                        name="duration"
                        value={event.duration}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image for hackathon poster:
                    <input type="file" id="eventImage" name="image"
                           onChange={handleImageChange}
                           required/>
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Hackathon Theme:
                    <input
                        type="text"
                        name="theme"
                        value={event.theme}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Prizes:
                    <input
                        type="text"
                        name="prizes"
                        value={event.prizes}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Registration Deadline:
                    <input
                        type="date"
                        name="registrationDeadline"
                        value={event.registrationDeadline}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default AdminPage;
