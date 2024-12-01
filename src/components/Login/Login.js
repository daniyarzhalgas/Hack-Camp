import React, {Component, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useUser} from "../../contexts/UserContext";

const Login = ({switchToRegistration}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setUser } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault()
        if (email === 'admin' && password === 'admin'){
            navigate("/administration");
        }

        try {
            const response = await axios.post("http://localhost:8080/login", {email, password});

            if (response.status === 200) {
                const mockUserData = { id: 1, email, firstName: "John", lastName: 'Doe', token: "12345" };

                // Save user data to context
                setUser(mockUserData);
                navigate("/home"); // Redirect to home on successful login
            }
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div>
            <form className="Form2" style={{
                width: 486,
                height: 743,
                paddingLeft: 64,
                paddingRight: 64,
                paddingTop: 32,
                paddingBottom: 32,
                left: 732,
                top: 0,
                position: 'absolute',
                background: 'rgba(255, 255, 255, 0.20)',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backdropFilter: 'blur(24px)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 32,
                display: 'inline-flex'
            }}>
                <div className="Title" style={{
                    paddingBottom: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    display: 'inline-flex'
                }}>
                    <div className="Welcome" style={{
                        color: '#343434',
                        fontSize: 24,
                        fontFamily: 'Open Sans',
                        fontWeight: '600',
                        wordWrap: 'break-word'
                    }}>Welcome
                    </div>
                </div>
                <div className="Inputs" style={{
                    alignSelf: 'stretch',
                    height: 96,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    gap: 16,
                    display: 'flex'
                }}>
                    <div className="Email" style={{
                        width: 358,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex'
                    }}>
                        <div className="InputContent" style={{
                            width: 358,
                            height: 40,
                            borderRadius: 8,
                            border: '1px #D0D0D0 solid',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'inline-flex'
                        }}>
                            <img src="/email_icon.png" alt="" style={{
                                paddingLeft: "10px"
                            }}/>

                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"
                                   placeholder="Email" style={{
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
                    <div className="Password" style={{
                        width: 358,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex'
                    }}>
                        <div className="InputContent" style={{
                            width: 358,
                            height: 40,
                            borderRadius: 8,
                            border: '1px #D0D0D0 solid',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'inline-flex'
                        }}>
                            <img src="/password_icon.png" alt="" style={{
                                paddingLeft: "10px"
                            }}/>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                   placeholder="Password" style={{
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
                </div>

                <div className="Buttons" style={{
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 16,
                    display: 'inline-flex'
                }}>
                    <div className="ButtonsStack" style={{
                        flex: '1 1 0',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex'
                    }}>
                        <div className="Frame32" style={{
                            alignSelf: 'stretch',
                            height: 214,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 24,
                            display: 'flex'
                        }}>
                            <div className="Frame36" style={{
                                alignSelf: 'stretch',
                                height: 115,
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
                                        <button className="Button" onClick={e => handleLogin(e)} style={{
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
                                            outline: "none"
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
                                                }}>Log in
                                                </div>
                                            </div>
                                        </button>
                                        {error && <p style={{color: "red"}}>{error}</p>}
                                    </div>
                                </div>
                                <div className="Frame41" style={{
                                    width: 215,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 4,
                                    display: 'inline-flex'
                                }}>
                                    <div className="Rectangle1"
                                         style={{flex: '1 1 0', height: 1, background: '#E6E9FA'}}/>
                                    <div className="Or" style={{
                                        color: '#828282',
                                        fontSize: 14,
                                        fontFamily: 'Open Sans',
                                        fontWeight: '400',
                                        wordWrap: 'break-word'
                                    }}> Or
                                    </div>
                                    <div className="Rectangle2"
                                         style={{flex: '1 1 0', height: 1, background: '#E6E9FA'}}/>
                                </div>
                                <div className="Frame35" style={{
                                    alignSelf: 'stretch',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 8,
                                    display: 'inline-flex'
                                }}>
                                    <div className="Button" style={{
                                        flex: '1 1 0',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        display: 'inline-flex'
                                    }}>
                                        <div className="Button" style={{
                                            alignSelf: 'stretch',
                                            paddingLeft: 24,
                                            paddingRight: 24,
                                            borderRadius: 40,
                                            border: '1px #3949AB solid',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 8,
                                            display: 'flex'
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
                                                <img src="/Google.png" alt=""/>
                                                <div className="Label" style={{
                                                    textAlign: 'center',
                                                    color: '#3949AB',
                                                    fontSize: 14,
                                                    fontFamily: 'Open Sans',
                                                    fontWeight: '400',
                                                    wordWrap: 'break-word'
                                                }}>Google
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Button" style={{
                                        flex: '1 1 0',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        display: 'inline-flex'
                                    }}>
                                        <div className="Button" style={{
                                            alignSelf: 'stretch',
                                            paddingLeft: 24,
                                            paddingRight: 24,
                                            borderRadius: 40,
                                            border: '1px #3949AB solid',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 8,
                                            display: 'flex'
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
                                                <img src="/gitlab.png" alt=""/>
                                                <div className="Label" style={{
                                                    textAlign: 'center',
                                                    color: '#3949AB',
                                                    fontSize: 14,
                                                    fontFamily: 'Open Sans',
                                                    fontWeight: '400',
                                                    wordWrap: 'break-word'
                                                }}>GitLab
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Frame40" style={{
                                alignSelf: 'stretch',
                                height: 75,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 16,
                                display: 'flex'
                            }}>
                                <div className="HaveNoAccountYet" style={{
                                    color: '#828282',
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}>Have no account yet?
                                </div>
                                <div className="Button" style={{
                                    alignSelf: 'stretch',
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    display: 'flex'
                                }}>
                                    <button onClick={switchToRegistration} className="Button" style={{
                                        alignSelf: 'stretch',
                                        height: 40,
                                        paddingLeft: 24,
                                        paddingRight: 24,
                                        borderRadius: 40,
                                        border: '1px #3949AB solid',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 8,
                                        display: 'flex',
                                        background: "none"
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
                                                color: '#3949AB',
                                                fontSize: 14,
                                                fontFamily: 'Open Sans',
                                                fontWeight: '400',
                                                wordWrap: 'break-word'
                                            }}>Registration
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;