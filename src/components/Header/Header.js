import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import {useUser} from "../../contexts/UserContext";

function Header({isAuthenticated}) {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleSignInUpClick = () => {
        navigate("/login");
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const goToProfile = () => {
        navigate("/profile"); // Navigate to the Profile page
    };

    const goToResults = () => {
        navigate("/results"); // Navigate to the Profile page
    };
    const logOutHandle = () => {
        navigate("/")
        setUser(null)
    }


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
            {isAuthenticated ? (
                <div style={{
                    display: "flex",
                    position: "relative"
                }}>
                    {isDropdownOpen && (
                        <div className="dropdown">
                            {/* Default Input Field */}
                            <ul className="dropdown-menu">
                                <li onClick={goToProfile}>Profile</li>
                                <li >Home</li>
                                <li onClick={goToResults}>My Results</li>
                                <li>Settings</li>
                                <li>Contacts</li>
                                <li onClick={logOutHandle}>Log Out</li>
                            </ul>
                        </div>
                    )}

                    <input type="text" placeholder="Search..."
                           style={{
                               width: 220,
                               height: 40,
                               background: '#F3F3F3',
                               borderRadius: 10,
                               border: "none",
                               outline: "none",
                               paddingLeft: "10px",
                               marginRight: "20px"
                           }}/>
                    <div className="Ellipse1"
                         onClick={toggleDropdown}
                         style={{
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             width: "40px",
                             height: "40px",
                             background: '#F3F3F3',
                             boxShadow: '0px 0px 8.399999618530273px rgba(0, 0, 0, 0.25)',
                             borderRadius: 9999
                         }}>
                        <img src="/user_icon.png" alt="user" style={{
                            width: "20px",
                            height: "20px",
                        }}/>
                    </div>
                </div>
            ) : (
                <>
                    <button className="signin-btn" onClick={handleSignInUpClick}>Sign In/Sign Up</button>
                </>
            )
            }
        </header>
    );
}

export default Header;
