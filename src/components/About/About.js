import React from 'react'
import Tilt from 'react-parallax-tilt'
import './About.css'

export default function About() {
    return (
        <div className="aboutContainer">
            <img src="https://st.depositphotos.com/1005680/5037/v/950/depositphotos_50374101-stock-illustration-vector-background-with-yellow-wave.jpg" alt="" className="bg"></img>
            <div id="about"className="information">
            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                <div className="info">
                <br></br>
                <br></br>
                <h1 className="heading">Hey, I'm <span className='name'>Amrit</span></h1>
                <h4>CSE & Systems Sophomore at KIIT, Bhubaneshwar</h4>
                <br></br>
                <br></br>
                <p> I am currently a sophomore at KIIT, Bhubaneshwar studying 
                    Computer Science and systems engineering. I started my coding career
                    from class XI from C++. Computers and technology always attracted me towards
                    itself. In my childhood days I always used to wonder how these websites are 
                    created and handled, how big companies like Google and Facebook is managed etc.
                    These several thought pushed me towards my dream to become a Computer engineer.
                    Other than this I am an actor in PANKH, dramatic society of KIIT. I just love to
                    mess around the device invented by Charles Babbage.
                </p>
                </div>
                <div className="linkButtons">
                <a
                    className="resume"
                    target="_blank" rel="noopener noreferrer"
			        href="https://drive.google.com/file/d/1VoU7hiNJWRcibj3x007Z_p0GzJOwk5r1/view?usp=sharing"
                >
                    <img src="https://img.icons8.com/cotton/24/000000/overview-pages-1.png" alt=""/><span>My Resume</span>
                </a>
                <a
                        className="github"
                        target="_blank" rel="noopener noreferrer"
						href="https://github.com/ranjanamrit"
                    >
                        <img src="https://img.icons8.com/fluent/24/000000/github.png" alt=""/> <span>My Github</span>
                </a>
                </div>
            </Tilt>
            </div>
        </div>
    )
}
