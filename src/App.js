import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Features from './components/Features';
import FAQs from './components/FAQs';
import CalendarPage from './components/Calendar/CalendarPage';
import './App.css'
import EventDetails from "./components/Events/EventDetails";
import LoginPage from "./components/Login/LoginPage";
import Profile from "./components/UserInfo/Profile";
import Results from "./components/UserInfo/Results";
import AdminPage from "./components/Admin/AdminPage";
import {useUser} from "./contexts/UserContext";

function App() {

    return (
        <Router>
            <Main/>
        </Router>
    );
}


function Main() {
    const location = useLocation(); // Get current route
    const { user } = useUser();

    return (
        <>
            {location.pathname !== "/login" && location.pathname !== "/administration" && (
                <Header isAuthenticated={user} />
            )}

            <main style={{flex: 1}}>
                <Routes>
                    <Route path="login" element={<LoginPage isAuthenticated={user} />}/>
                    <Route path="/profile" element={<Profile />} /> {/* Profile page */}
                    <Route path="/results" element={<Results />} /> {/* Result page */}
                    <Route path="/administration" element={<AdminPage />} /> {/* Admin page */}
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/faqs" element={<FAQs/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                    {/* Redirect to /events by default */}
                    <Route path="*" element={<Navigate to="/events"/>}/>
                    <Route path="/event/:id" element={<EventDetails/>}/> {/* Dynamic route */}
                </Routes>
            </main>
            {location.pathname !== "/login" && location.pathname !== "/administration" && (
                <Footer />
            )}

        </>
    );
}

export default App;
