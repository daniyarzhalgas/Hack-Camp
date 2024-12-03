import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = async () => {
        if (!email || !username || !password) {
            setError('All fields are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, name: username, password}),
            });

            if (response.ok) {
                navigate('/login');
                window.location.reload()// Redirect to the home page
            } else {
                const {message} = await response.json();
                setError(message || 'Registration failed.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };


    return (
        <div>
            <div className="Welcome" style={{
                left: 921.50,
                top: 205,
                position: 'absolute',
                color: '#343434',
                fontSize: 24,
                fontFamily: 'Open Sans',
                fontWeight: '600',
                wordWrap: 'break-word'
            }}>Welcome
            </div>
            <div className="Email" style={{width: 358, height: 40, left: 796, top: 270, position: 'absolute'}}>
                <div className="InputContent" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 358,
                    height: 40,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    borderRadius: 8,
                    border: '1px #D0D0D0 solid'
                }}>
                    <img src="/email_icon.png" alt="" style={{
                        marginLeft: "10px",
                        width: "25px",
                        height: "25px"
                    }}/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                           id="email-input" placeholder="Email" style={{
                        paddingLeft: "15px",
                        width: '100%',
                        height: '100%',
                        border: "none",
                        borderRadius: "10px",
                        outline: 'none'
                    }}
                    />
                </div>
            </div>
            <div className="Password" style={{width: 358, height: 40, left: 796, top: 342, position: 'absolute'}}>
                <div className="InputContent" style={{
                    display: "flex",
                    alignItems: "center",
                    width: 358,
                    height: 40,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    borderRadius: 8,
                    border: '1px #D0D0D0 solid'
                }}>
                    <img src="/user_icon.png" alt="" style={{
                        marginLeft: "10px",
                        width: "25px",
                        height: "25px"
                    }}/>
                    <input type="text" id="username-input" placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)} style={{
                        paddingLeft: "15px",
                        width: '100%',
                        height: '100%',
                        border: "none",
                        borderRadius: "10px",
                        outline: 'none'
                    }}
                    />
                </div>
            </div>
            <div className="Password" style={{width: 358, height: 40, left: 796, top: 414, position: 'absolute'}}>
                <div className="InputContent" style={{
                    display: "flex",
                    alignItems: "center",

                    width: 358,
                    height: 40,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    borderRadius: 8,
                    border: '1px #D0D0D0 solid'
                }}>
                    <img src="/password_icon.png" alt="" style={{
                        paddingLeft: "10px"
                    }}/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           id="password-input" placeholder="Password" style={{
                        paddingLeft: "15px",
                        width: '100%',
                        height: '100%',
                        border: "none",
                        borderRadius: "10px",
                        outline: 'none'
                    }}
                    />
                </div>
            </div>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <div className="Frame32" style={{
                height: 67,
                left: 796,
                top: 486,
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 24,
                display: 'inline-flex'
            }}>
                <div className="Frame36" style={{
                    alignSelf: 'stretch',
                    height: 67,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 8,
                    display: 'flex'
                }}>
                    <div className="Frame34" style={{
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 8,
                        display: 'inline-flex'
                    }}>
                        <div className="JntButton" style={{
                            flex: '1 1 0',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            display: 'inline-flex'
                        }}>
                            <button className="Button" onClick={handleRegister} style={{
                                alignSelf: 'stretch',
                                paddingLeft: 96,
                                paddingRight: 96,
                                background: '#5179EF',
                                borderRadius: 40,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 8,
                                display: 'flex',
                                border: "none",
                                outline: "none",
                                width: "358px"
                            }}>
                                <div className="Content" style={{
                                    height: 40,
                                    paddingTop: 11,
                                    paddingBottom: 11,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: 8,
                                    display: 'inline-flex'
                                }}>
                                    <div className="Label" style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontSize: 14,
                                        fontFamily: 'Open Sans',
                                        fontWeight: '400',
                                        wordWrap: 'break-word'
                                    }}>Sign Up
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Registration;