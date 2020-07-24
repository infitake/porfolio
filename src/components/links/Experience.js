import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Experience extends Component {
        render() {
            return (
                <div className="container" id="pricing">
                <h1 className="input-Entrys"> Experience </h1>
                    <div className="info-box-exp">
                        <div className="rect-box">
                            <div className="box1">
                                <p>Software Developer Intern</p>
                                <hr/>
                                <div className="special-information">
                                    Merithub Technologies  <br />
                                    (Jan 2020 - May 2020)
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="rect-box">
                            <div className="box3">
                                <p>Web Developer Intern</p>
                                <hr/>
                                <div className="special-information">
                                    Edumonk Foundation<br />
                                    (Jun 2019 - Aug 2019)<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Experience;