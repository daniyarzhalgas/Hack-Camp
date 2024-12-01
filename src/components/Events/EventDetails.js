import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import "./EventDetails.css"
import EventPage from "./EventPage";

function EventDetails() {
    const {id} = useParams(); // Extract the event ID from the URL

    // Mock data - replace this with data fetched from a server or state
    const eventDetails = [
        {
            id: 1,
            title: 'TechStep Almaty',
            location: 'Almaty, Kazakhstan',
            image: '/image1.png',
            duration: '2 days (weekend)',
            description: 'TechStep Almaty is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        {
            id: 2,
            title: 'Astana AI & ML Hack',
            location: 'Astana, Kazakhstan',
            image: '/image3.png',
            duration: '2 days (weekend)',
            description: 'Astana AI & ML Hack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        {
            id: 3,
            title: 'KazHack',
            location: 'Astana, Kazakhstan',
            image: '/image2.png',
            duration: '2 days (weekend)',
            description: 'KazHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        {
            id: 4,
            title: 'EcoTechHack',
            location: 'Astana, Kazakhstan',
            image: '/image4.png',
            duration: '2 days (weekend)',
            description: 'EcoTechHack is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        {
            id: 5,
            title: 'FinTech Almaty',
            location: 'Astana, Kazakhstan',
            image: '/image5.png',
            duration: '2 days (weekend)',
            description: 'FinTech Almaty is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        {
            id: 6,
            title: 'Hack4Good Shymkent',
            location: 'Astana, Kazakhstan',
            image: '/image6.png',
            duration: '2 days (weekend)',
            description: 'Hack4Good Shymkent is a hackathon that unites students and professionals to solve real problems through technology.\n      The participants will work on projects in the following areas:\n\n      Mobile apps: Tools for productivity, entertainment, or community.,\n\n      Web solutions: Platforms for e-commerce, data visualization or service management.,\n\n      Automation: Optimization of work processes.,\n\n      Open innovation: Any significant technological ideas.',
            prizes: '1st place: $3000 + mentoring support, 2nd place: $1500 + educational resources, 3rd place: $1000 + gifts from partners.',
            date: '01.11.2024'
        },
        // Add more hackathons as needed
    ];
    let event;
    if (id < 6) {
        event = eventDetails[id - 1]

    } else {
        event ={
            id: id,
            // title:
            // location:
            image: '/def-hack-image.webp',
            // duration:
            // description:
            // prizes:
            // date:
        }
    }


// const event = eventyDetails[id-1]; // Retrieve event details using the ID

    if (!event) {
        return <g1>Event not found!</g1>;
    }
    const sectionStyle = {
        backgroundImage: `url(${event.image})`, // Set the background image
        backgroundSize: 'cover',              // Cover the entire div
        backgroundPosition: 'center',         // Center the image
        height: '300px',                      // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',                       // Text color for contrast
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add shadow for readability
    };
// eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <div className="event-header" style={sectionStyle}>
                <h1>{event.title}</h1>
            </div>
            <div className="event-details">
                <div className="detetails_nav">
                    <div id="info-btn"><h1>Info</h1></div>
                    <div id="rega-btn"><h1>Registration</h1></div>
                </div>

                <EventPage id={id} event={event}/>
                {/* Event Info */}
            </div>
        </div>


    );
}

export default EventDetails;
