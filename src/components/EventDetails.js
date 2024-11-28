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
    const event = {
        title: 'TechStep Almaty',
        location: 'Almaty, KazGUU University',
        duration: '2 days (weekend)',
        description: `
      TechStep Almaty is a hackathon that unites students and professionals to solve real problems through technology.
      The participants will work on projects in the following areas:
    `,
        areas: [
            'Mobile apps: Tools for productivity, entertainment, or community.',
            'Web solutions: Platforms for e-commerce, data visualization or service management.',
            'Automation: Optimization of work processes.',
            'Open innovation: Any significant technological ideas.',
        ],
        whatAwaits: [
            '2 days of intensive work in teams.',
            'Mentoring support and access to modern tools.',
            'Final presentations and feedback from experts.',
        ],
        prizes: [
            '1st place: $3000 + mentoring support.',
            '2nd place: $1500 + educational resources.',
            '3rd place: $1000 + gifts from partners.',
        ],
        registration: `
      Follow the link.
      Fill out the form by November 7, 2024.
      Participate both individually and in a team (up to 5 people).
      Places are limited — register now and become a part of TechStep Almaty!
      For questions: info@techstep.kz
    `,
    };


    // const event = eventyDetails[id-1]; // Retrieve event details using the ID

    if (!event) {
        return <p>Event not found!</p>;
    }
    const sectionStyle = {
        backgroundImage: `url(${eventDetails[id - 1].image})`, // Set the background image
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
                <h1>{eventDetails[id - 1].title}</h1>
            </div>
            <div className="event-details">
                <div className="detetails_nav">
                    <div id="info-btn"><h1>Info</h1></div>
                    <div id="rega-btn"><h1>Registration</h1></div>
                </div>

                <EventPage id={id} eventDetails={eventDetails} event={event}/>
                {/* Event Info */}
            </div>
        </div>


    );
}

export default EventDetails;
