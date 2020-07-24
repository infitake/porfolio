import React from 'react';

const Projects = () => {
        return (
            <div className="container" id="pricing">
            <h1 className="input-Entrys">Projects</h1>
                <div className="info-box">
                <div className="rect-box">
                        <div className="box1">
                            <p>Merithub Internship Work</p>
                            <span> 2020 </span>
                            <hr/>
                            <div className="special-information">
                            Create a chat system using MQTT. Develop a package for microservice communication
                            using GRPC.Develop video and audio service using Janus API.Create MQTT Authentication Package using EMQX
                            HTTP-AUTH Plugins .Develop Backend Service Handle all the Data in the
                            live system.Build Small Components (participant list or
                            notifications) for real-time Data.
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box2">
                            <p>Edumonk Internship Work</p>
                            <span>2019</span>
                            <hr/>
                            <div className="special-information">
                            Create FrontEnd of their Website Askedumonk.Create Both FrontEnd and Backend of their website
                            scholar credits.Develop video and audio service using Janus API.Build Interactive UI for website and handle backend
                            dataBuild AutoGenerate Resume Feature for their
                            website users
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box3">
                            <p>MusicInfi</p>
                            <span> 2019 </span>
                            <hr/>
                            <div className="special-information">
                            It is a Music lyrics website built on react.js.we use the
                            musixmatch api for getting the lyrics.we can search song by
                            country name or song name and we get the lyrics as a
                            result.
                            <br />
                            <a href="https://github.com/infitake/music-infi" target="_blank" class="button button2"> Click </a>
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box4">
                            <p>SlackBot</p>
                            <span>2019</span>
                            <hr/>
                            <div className="special-information">
                            This is built over python and we can use this bot inside the
                            slack app.I just create a predefined general question and
                            answer list regarding a project in a json file.so that any
                            newbie developer can solve their general query. This helps
                            in saving time for senior developers
                            <br />
                            <a href="https://github.com/infitake/slack-bot" target="_blank" class="button button2"> Click </a>
                            </div>
                        </div>
                    </div>
                    <div className="rect-box">
                        <div className="box5">
                            <p>InfinixChat</p>
                            <span>2018 </span>
                            <hr/>
                            <div className="special-information">
                            This is a chat System built on react.js and redux and we use
                            firebase for database.There is login or signup features
                            also.so that only authenticated users can chat in this
                            system.
                            <br />
                            <a href="https://github.com/infitake/infinix-chat-app" target="_blank" class="button button2"> Click </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Projects;