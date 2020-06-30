import React from 'react'
import Tilt from 'react-parallax-tilt'
import './Project.css'

export default function Projects() {
    return (
        <div>
            <div id="project"className="projects">
                <img className="bg" src="https://previews.123rf.com/images/strizh/strizh1603/strizh160300046/53407915-abstract-orange-color-wave-design-element-abstract-smooth-color-wavy-vector-curve-flow-orange-motion.jpg" alt=""></img>
                <h1 className="heading">Projects</h1>
                <div className="cardContainer">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div className="card">
                        <h2 className="title">Quiz Master</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span className="about">
                                A game built on some random question from where you 
                                can see live result. Made using html, css and javascript and it was 
                                the first project which I did so currently it is only for Computer i.e 
                                it is not responsive website but I will surely bring the new version of Quiz Master
                                very soon.<br></br>
                            </span>
                            <br></br>
                        </div>
                        <div className="link">
                            <a
                                href="https://www.github.com/ranjanamrit/quizmaster"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> Project Repo
                            </a>
                            <a
                                href="https://ranjanamrit.github.io/quizmaster/index.html"
                                target="_blank" rel="noopener noreferrer"
                                className="visit"
                            >
                                Visit Project <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    </Tilt>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div className="card">
                        <h2 className="title">Bloggeryy</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span className="about">
                                    A blog website where you can read and write a blog.
                                     Just create an account and start blogging. 
                                     Also you can edit, update and delete your blog and you can
                                     also add, edit and delete your comment in someone's blog.This whole application 
                                     is made by using MEN stack and deployed in heroku.<br></br>
                            </span>
                            <br></br>
                        </div>
                        <div className="link">
                            <a
                                href="https://www.github.com/ranjanamrit/Bloggery"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> Project Repo
                            </a>
                            <a
                                href="https://bloggeryy.herokuapp.com/blogs"
                                target="_blank" rel="noopener noreferrer"
                                className="visit"
                            >
                                Visit Project <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}
