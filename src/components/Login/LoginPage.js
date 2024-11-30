import React, {useState} from "react";
import Login from "./Login";
import Registration from "./Registration";
import {useNavigate} from "react-router-dom";


const LoginPage = ({isAuthenticated, setIsAuthenticated}) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSwitchToRegistration = () => {
        setIsLogin(false);
    };

    return (
        <div className="Login" style={{position: 'relative', background: 'white'}}>
            <div className="Torus2" style={{
                width: 212,
                height: 205,
                left: 1215,
                top: 550,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'inline-flex',
            }}>
                <img className="Saly23" src="/Torus2.png"/>
            </div>
            <div className="Form" style={{
                width: 1200,
                height: 650,
                left: 111,
                top: 36,
                position: 'absolute',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px #E6E9FA solid',
                backdropFilter: 'blur(24px)'
            }}>
                {isLogin ? (
                    <Login switchToRegistration={handleSwitchToRegistration} onLogin={() => setIsAuthenticated(true)} />
                ) : (
                    <Registration />
                )}
                <div className="BackColor" style={{
                    width: 732,
                    height: 743,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    background: '#5179EF',
                    backdropFilter: 'blur(24px)'
                }}/>
                <div className="SpeclogoNew" style={{
                    width: 200,
                    height: 49,
                    left: 68,
                    top: 68,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 12.11,
                    display: 'inline-flex'
                }}>
                    <div className="Specp" style={{width: 49.23, height: 49, position: 'relative'}}/>
                    <div className="Tittle" style={{width: 138.66, height: 39.88, position: 'relative'}}/>
                </div>
                <div className="Back" style={{
                    width: 221,
                    height: 221,
                    left: 262,
                    top: 190,
                    position: 'absolute',
                    opacity: 0.60,
                    background: '#00227B',
                    borderRadius: 9999
                }}/>
                <div className="Art" style={{
                    width: 367,
                    padding: 74,
                    left: 183,
                    top: 143,
                    position: 'absolute',
                    borderRadius: 182,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    display: 'inline-flex'
                }}>
                    <img src="/astronaut.png" alt=""/>
                </div>
                <div className="WelcomeAboardMyFriendJustACoupleOfClicksAndWeStart"
                     style={{left: 217, top: 469, position: 'absolute', textAlign: 'center'}}><span
                    style={{
                        color: 'white',
                        fontSize: 24,
                        fontFamily: 'Open Sans',
                        fontWeight: '600',
                        lineHeight: 48,
                        wordWrap: 'break-word'
                    }}>Welcome aboard my friend<br/></span><span
                    style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'Open Sans',
                        fontWeight: '400',
                        lineHeight: 28,
                        wordWrap: 'break-word'
                    }}>just a couple of clicks and we start</span>
                </div>
                <div className="Hcc" style={{
                    width: 130,
                    height: 60,
                    left: 55,
                    top: 33,
                    position: 'absolute',
                    color: 'white',
                    fontSize: 64,
                    fontFamily: 'Monocraft',
                    fontWeight: '500',
                    wordWrap: 'break-word'
                }}><img src="/hcc_logo_white.png" alt=""/>
                </div>
            </div>
            <img className="Torus" style={{
                left: 13,
                top: 197,
                position: 'absolute',
            }} src="/torus1.png"/>
        </div>
    );
};

export default LoginPage;
