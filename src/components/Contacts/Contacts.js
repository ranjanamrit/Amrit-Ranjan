import React from 'react'
import './Contacts.css'

export default function Contacts() {
    return (
        <div>
            <div id="contact" className="contact_container">
                <h1>Contacts</h1>
                <h3>Get in touch with me</h3>

                <div className="icon_container" style={{textAlign: 'center'}}>
                    <a
                        title="github.com/ranjanamrit"
                        href="https://www.github.com/ranjanamrit"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            className="icon"
                            src="https://img.icons8.com/color/96/000000/github.png"
                            alt=""
                        ></img>
                    </a>

                    <a
                        title="amrit.ranjan.work@gmail.com"
                        href="mailto:amrit.ranjan.work@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            className="icon"
                            src="https://img.icons8.com/color/96/000000/gmail.png"
                            alt=""
                        ></img>
                    </a>

                    <a
                        title="instagram.com/the_amrit_ranjan"
                        href="https://www.instagram.com/the_amrit_ranjan"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            className="icon"
                            src="https://img.icons8.com/color/96/000000/instagram.png"
                            alt=""
                        ></img>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/amrit-ranjan-013a451a9"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            className="icon"
                            src="https://img.icons8.com/color/96/000000/linkedin.png"
                            alt=""
                        ></img>
                    </a>

                    <a
                        title="twitter.com/Amrit_Ranjan789"
                        href="https://www.twitter.com/Amrit_Ranjan789"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            className="icon"
                            style={{ marginLeft: '5px' }}
                            src="https://img.icons8.com/color/96/000000/twitter.png"
                            alt=""
                        ></img>
                    </a>
                    <br></br>
                </div>

                <p className="copyright" style={{color: '#000000'}}>
                    &#xa9; Amrit Ranjan. All Rights Reserved
                </p>
                <br></br>
            </div>
        </div>
    )
}
