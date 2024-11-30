import React from 'react';
import EventCard from "../Events/EventCard";

const Profile = () => {
    return (
        <div className="events">
            <div className="events-header">
                <h2>My Profile</h2>
            </div>
            <div className="content" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10vh   0"
            }}>
                <div className="Frame16" style={{
                    width: 1100,
                    height: 700,
                    position: 'relative',
                    background: 'white',
                    boxShadow: '0px 0px 41.79999923706055px 8px rgba(0, 0, 0, 0.25)',
                    borderRadius: 50,
                    overflow: 'hidden'
                }}>
                    <div className="Rectangle1159" style={{
                        width: 200,
                        height: 200,
                        left: 205,
                        top: 101,
                        position: 'absolute',
                        background: '#D7E0FB',
                        borderRadius: 50
                    }}/>
                    <img className="TheoTransparent"
                         style={{width: 157, height: 157, left: 226, top: 122, position: 'absolute'}}
                         src="/user_icon.png"/>
                    <div className="LastNameQwerty" style={{
                        width: 311,
                        height: 29,
                        left: 631,
                        top: 186,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>Last Name: Qwerty
                    </div>
                    <div className="FirstNameQwerty" style={{
                        left: 631,
                        top: 101,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>First Name: Qwerty
                    </div>
                    <div className="CitySamarhand" style={{
                        width: 311,
                        height: 29,
                        left: 624,
                        top: 526,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>City: Samarhand
                    </div>
                    <div className="Birthdate01011901" style={{
                        width: 311,
                        height: 29,
                        left: 621,
                        top: 611,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>Birthdate: 01.01.1901
                    </div>
                    <div className="CountryUzbekstan" style={{
                        left: 624,
                        top: 441,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>Country: Uzbekstan
                    </div>
                    <div className="PhoneNmber77777777777" style={{
                        left: 624,
                        top: 356,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>Phone Nmber: +7-777-777-77-77
                    </div>
                    <div className="EmailQwertyGmailCum" style={{
                        left: 631,
                        top: 271,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>Email: qwerty@gmail.cum
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;