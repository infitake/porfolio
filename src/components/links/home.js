import React, { Component } from 'react';
import Experience from './Experience';
import Skills from './skills'
import Ravi from './image/ravinderyadav.jpg'
import { BrowserRouter } from 'react-router-dom'
import Projects from './project';


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="info-box-home" id="home">
                        <div className="rect-box-1">
                                <div className="circular--portrait">
                                    <img src={Ravi} alt="Rocket" />
                                </div>
                        </div>
                        <div className="rect-box-2">
                                <div className="main-text">
                                    <h1 id="name">Ravinder Yadav</h1>
                                    <p id="intro">Full Stack Developer <br />
                                        <span>rvndryadv@gmail.com</span>
                                        <br />
                                        <span>+91 8295876117</span>
                                        <br /> 
                                        <div id="social">
                                            <div id="linkedin" >
                                            <span><a href="https://www.linkedin.com/in/ravinder-yadav-70549a167/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a> </span>
                                            </div>
                                            <div id="github" >
                                            <span><a href="https://github.com/infitake" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a> </span>
                                            </div>
                                        </div>
                                    </p>
                                    <a
                                        href={process.env.PUBLIC_URL + '/11710558_RavinderYadav_IT.pdf'}
                                        download
                                        className="button button2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        type="application/pdf"
                                        id="resume"
                                    >

                                        Resume
                            </a>
                                </div>
                        </div>

                    </div>
                    <div className="text-area" id="experience">
                        <Experience path="{Experience}" />
                    </div>
                    <div className="text-area" id="projects">
                        <Projects path="{Project}" />
                    </div>
                    <div className="text-area" id="skills">
                        <Skills path="{Skills}" />
                    </div>
                    <footer>
                        <center>
                            Made with <i class="fa fa-heart"  id="heart-icon" aria-hidden="true"></i> by Ravinder Yadav
                        </center>
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}

export default Home;