import React from 'react'
import { Link} from "react-scroll";
import Picture from '../../images/amrit.png'
import Logo from '../../images/logo192.png'
import "./Home.css"

export default function Home() {
    return (
        <div className="bg">
            <nav>
                <ul className="topNav">
                    <li className="brand">
                        <img src={Logo} alt=""/>
                        Amrit Ranjan
                    </li>
                </ul>
                    <Link className="navElement" to="contact" smooth={true} offset={-70} spy={true} duration={500}>Contact</Link>
                    <Link className="navElement" to="project" smooth={true} offset={-70} spy={true} duration={500}>Projects</Link>
                    <Link className="navElement" to="skills" smooth={true} offset={-70} spy={true} duration={500}>Skills</Link>
                    <Link className="navElement" to="about" smooth={true} offset={-70} spy={true} duration={500}>About</Link>
            </nav>
            <div className="home">
            <div className="homeComponents">
                <h1>
                    Hi, I'm
                    <span className="name"> Amrit</span>
                </h1>
                <h2>CSE & systems Sophomore, Web developer from 
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png"
                        alt="">
                    </img>
                </h2> 
                <div className="socialMedia">
                    <a
                        title="github.com/ranjanamrit"
                        href="https://www.github.com/ranjanamrit"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/48/000000/github.png" alt=""></img>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/amrit-ranjan-013a451a9"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""></img>
                    </a>

                    <a
                        title="instagram.com/the_amrit_ranjan"
                        href="https://www.instagram.com/the_amrit_ranjan"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt=""/>
                    </a>

                    <a
                        title="twitter.com/Amrit_Ranjan789"
                        href="https://www.twitter.com/Amrit_Ranjan789"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/48/000000/twitter.png" alt=""></img>
                    </a>
                    <a
                        title="amrit.ranjan.work@gmail.com"
                        href="mailto:amrit.ranjan.work@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/48/000000/gmail.png" alt=""></img>
                    </a>
                    <br></br>
                    <h5 style={{fontFamily:'Roboto Slab, serif', fontWeight:'600'}}>Have any suggestions or Ideas? Feel free to ping me in any of these platform. </h5>
                </div>
                <h3 style={{fontFamily:'Roboto Slab, serif', fontWeight:'400', fontSize:'2rem'}}>Learn | Code | Conquer</h3>
            </div>
            <div className="pic">
                <img src={Picture} alt=""></img>
            </div>
        </div>
        <div className="wave"></div>
        </div>
    )
}
