import React, { Component } from 'react';

class Navbar extends Component {
    
      handleChange = () => {
        const height = document.getElementsByClassName("links");
          console.log(height.clientHeight)
      }
    render() {
        return(
            <div className="navigation" id="navbar">
                <div className="main-logo">
                <div className="logo-left-side">
                <a  href="#" className="links"><b>Ravinder Yadav</b></a>
                </div>
                </div>
                <nav className="showing-nav">
                    <ul className="nav-pills">
                        {/* <li ><a href="#contact"  className="links" onClick={this.handleChange} activeClassName="active">Contact</a></li> */}
                        <li><a  href="#skills"  className="links" activeClassName="active">Skills</a></li>
                        <li><a  href="#projects"  className="links" activeClassName="active">Projects</a></li>
                        <li><a  href="#experience" className="links" activeClassName="active">Experience</a></li>
                        <li><a  href="#" className="links" activeClassName="active">Home</a></li>
                    </ul>
                </nav>
            </div> 
        );
    }
}

export default Navbar;