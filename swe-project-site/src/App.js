import React, { Component} from "react";
// import ScrollUpButton from "react-scroll-up-button";
import logo from './images/placeholder.png';
import zari from './images/zari.JPG';
import picture from './images/picture.png';
import screenshot from './images/screenshot.jpg';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <ScrollUpButton style={{ backgroundColor: "transparent", height: "40px" }} className="up"/> */}
        <div className="menu">
            <h3 id="menu-item"><a href="#about">About</a></h3>
            <h3 id="menu-item"><a href="#team">Team</a></h3>
            <img src={logo} id="logo" alt="logo placeholder"/>
            <h3 id="menu-item"><a href="#progress">Progress</a></h3>
            <h3 id="menu-item"><a href="#results">Results</a></h3>
        </div>
        <div className="section-container" id="about">
            <h1 className="text" id="section-title">About</h1>
            <h2 className="text" id="section-subtitle">Customer Problem Statement</h2>
            <h3 className="text" id="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <h2 className="text" id="section-subtitle">System Requirements</h2>
            <h3 className="text" id="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <h2 className="text" id="section-subtitle">Link to Project Report</h2>
        </div>
        <div className="team" id="team">
            <h1 className="text" id="section-title">Meet the Team</h1>
            <div className="row1">
                <div className="left">
                    <h2 className="text" id="name-text">Ulunma Egwim</h2>
                    <div className="circle-cropper">
                        <img src={picture} id="profile-pic" alt="placeholder picture"/>
                    </div>
                    <h3 className="text" id="role-text">Backend</h3>
                </div>
                <div className="right">
                    <h2 className="text" id="name-text">Lelia Hampton</h2>
                    <div className="circle-cropper">
                        <img src={picture} id="profile-pic" alt="placeholder picture"/>
                    </div>
                    <h3 className="text" id="role-text">Backend | Merger</h3>
                </div>
            </div>
            <div className="row2">
                <h2 className="text" id="name-text">Jaida Langham</h2>
                <div className="circle-cropper">
                    <img src={picture} id="profile-pic" alt="placeholder picture"/>
                </div>
                <h3 className="text" id="role-text">Functional Supervisor | Frontend</h3>
            </div>
            <div className="row1">
                <div className="left">
                    <h2 className="text" id="name-text">Zari McFadden</h2>
                    <div className="circle-cropper">
                        <img src={zari} id="profile-pic" alt="zari"/>
                    </div>
                    <h3 className="text" id="role-text">Technical Superviser | Frontend | Merger</h3>
                </div>
                <div className="right">
                    <h2 className="text" id="name-text">Margie Ruffin</h2>
                    <div className="circle-cropper">
                        <img src={picture} id="profile-pic" alt="placeholder picture"/>
                    </div>
                    <h3 className="text" id="role-text">Backend</h3>
                </div>
            </div>
        </div>
        <div className="section-container" id="progress">
            <h1 className="text" id="section-title">Progress</h1>
            <div className="left">
                <h2 className="text" id="section-subtitle">To Do</h2>
                <ul className="not-complete text" id="section-content">
                    <li>To do item 1</li>
                    <li>To do item 2</li>
                    <li>To do item 3</li>
                    <li>To do item 4</li>
                    <li>To do item 5</li>
                    <li>To do item 6</li>
                </ul>
            </div>
            <div className="right">
                <h2 className="text" id="section-subtitle">Done</h2>
                <ul className="complete text" id="section-content">
                    <li>Completed item 1</li>
                    <li>Completed item 2</li>
                    <li>Completed item 3</li>
                    <li>Completed item 4</li>
                    <li>Completed item 5</li>
                    <li>Completed item 6</li>
                </ul>
            </div>
        </div>
        <div className="section-container" id="results">
            <h1 className="text" id="section-title">Results</h1>
            <div className="row1">
                <h3 className="text" id="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="row1">
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
            </div>
            <div className="row1">
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
                <img src={screenshot} id="screenshot" alt="screenshot placeholder"/>
            </div>
            <div className="column">
                <h1 className="text" id="section-subtitle">Link to Project Site</h1>
                <h1 className="text" id="section-subtitle">Link to Project Github</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default App;