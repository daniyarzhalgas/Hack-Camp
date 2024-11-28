import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const handleSignInUpClick = () => {
        console.log("asdfasf")
        navigate("/login");
    };

    return (
        <header className="header">
            <div className="logo"><img src="/hcc_logo.png" alt="HCC Logo"/>
            </div>
            <nav>
                <NavLink to="/events" className={({isActive}) => (isActive ? 'active' : '')}>
                    Events
                </NavLink>
                <NavLink to="/features" className={({isActive}) => (isActive ? 'active' : '')}>
                    Features
                </NavLink>
                <NavLink to="/faqs" className={({isActive}) => (isActive ? 'active' : '')}>
                    FAQs
                </NavLink>
                <NavLink to="/calendar" className={({isActive}) => (isActive ? 'active' : '')}>
                    Calendar
                </NavLink>
            </nav>
            <button className="signin-btn" onClick={handleSignInUpClick}>Sign In/Sign Up</button>
        </header>
    );
}

export default Header;
