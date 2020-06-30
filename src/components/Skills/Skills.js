import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <div>
            <div id="skills"className="skills">
                    <h1>Skills</h1>

                    <div className="skillContainer">
                        <div className="card" style={{ borderBottom: '0.5rem solid #2e7d32' }}>
                            <img src="https://img.icons8.com/android/34/000000/processor.png" alt=""></img>
                            <br></br>
                            <h2>Languages</h2>
                            <ul>
                                <li>Python</li>
                                <li>C</li>
                                <li>C++</li>
                            </ul>
                        </div>

                        <div className="card" style={{ borderBottom: '0.5rem solid #ffff80' }}>
                        <img src="https://img.icons8.com/ios-filled/38/000000/web.png" alt=""/>
                            <h2>Web Dev</h2>
                            <ul>
                                <li>React</li>
                                <li>HTML, CSS, Javascript</li>
                                <li>Bootstrap, Materialize CSS</li>
                                <li>Semantic UI</li>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>MERN stack</li>
                            </ul>
                        </div>

                        <div className="card" style={{ borderBottom: '0.5rem solid #c672ff' }}>
                            <i className="fas fa-toolbox"></i>
                            <h2>Others</h2>
                            <ul>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Android Development (Basic)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}
