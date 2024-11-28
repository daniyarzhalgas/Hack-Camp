import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';
import Features from './components/Features';
import FAQs from './components/FAQs';
import Calendar from './components/Calendar';
import './App.css'
import EventDetails from "./components/EventDetails";
import LoginPage from "./components/LoginPage";

function App() {

    return (
        <Router>
            <Main/>
        </Router>
    );
}

function Main() {
    const location = useLocation(); // Get current route

    return (
        <>
            {location.pathname !== "/login" && <Header/>}


            <main style={{flex: 1}}>
                <Routes>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/faqs" element={<FAQs/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    {/* Redirect to /events by default */}
                    <Route path="*" element={<Navigate to="/events"/>}/>
                    <Route path="/event/:id" element={<EventDetails/>}/> {/* Dynamic route */}
                </Routes>
            </main>
            {location.pathname !== "/login" && <Footer/>}

        </>
    );
}

export default App;
