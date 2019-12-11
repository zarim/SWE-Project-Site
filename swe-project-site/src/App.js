import React, { Component} from "react";
import ScrollUpButton from "react-scroll-up-button";
import logo from './images/placeholder.png';
import zari from './images/zari.JPG';
import jaida from './images/realjaida2.jpg';
import lelia from './images/reallelia2.jpg';
import margie from './images/realMargie.jpg';
import ulunma from './images/realUlunma.JPG';
import job from './images/add-job-role.png';
import blog from './images/blog.png';
import candidate from './images/candidate-results.png';
import expanded from './images/expanded-candidate-results.png';
import login from './images/login.png';
import missionPage from './images/mission-page.png';
import mission from './images/mission.png';
import salary from './images/salary-negotiation.png';
import picture from './images/picture.png';
import signup from './images/signup.png';
import expandedJobs from './images/exanded-jobs.png';
import report from './pdf/Project-Report-3.pdf';
import overview from './pdf/CIS472-ProjectOverview.pdf';
import screenshot from './images/screenshot.jpg';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <ScrollUpButton style={{ backgroundColor: "transparent", height: "40px" }} className="up"/>
        <div className="menu">
            <h3 id="menu-item"><a href="#about">About</a></h3>
            <h3 id="menu-item"><a href="#team">Team</a></h3>
            <img src={logo} id="logo" alt="logo placeholder"/>
            <h3 id="menu-item"><a href="#progress">Progress</a></h3>
            <h3 id="menu-item"><a href="#results">Results</a></h3>
        </div>
        <div className="section-container" id="about">
            <h1 className="text" id="section-title">About</h1>
            <h2 className="text" id="section-subtitle">Project Description</h2>
            <p className="text" id="section-content">For this semester, you are to create a jobs portal for employers and jobseekers as a Java app. This job
            board must contain search filters, job functionalities and suitable interfacing with both sides of the
            employment spectrum: employers and jobseekers. Examples of existing jobs portals include: Indeed,
            Glassdoor, Monster, Dice, Blendoor. Each may be considered as a model for the team. Existing
            desktop-based, web-based or mobile-friendly based templates can not be used in the construction of
            this software. <b>-</b> From project overview, linked below.</p>
            <h2 className="text" id="section-subtitle">Company Mission</h2>
            <p className="text" id="section-content">Glass Ceiling and Company was founded in 2019 by five seniors at Spelman College who wanted to change the job seeking process as it pertains to black women. The Glass Ceiling Career portal seeks to spread further awareness and educate companies and individuals on the impact of the -isms (racism, sexism, ableism, etc.) while also providing an environment to combat the lack of accessibility, unconscious bias, and lack of transparency when it comes to diversity and inclusion. The mission of Glass Ceiling Company is to provide a job seeking website that caters to the needs of black women; embodying the mantra of FUBU - For Black Women, By Black Women, but accessible to everyone.</p>
            <h2 className="text" id="section-subtitle"><a href={report} target="_blank">Link to Project Report</a></h2>
            <h2 className="text" id="section-subtitle"><a href={overview} target="_blank">Link to Project Overview</a></h2>
        </div>
        <div className="team" id="team">
            <h1 className="text" id="section-title">Meet the Team</h1>
            <div className="row1">
                <div className="left">
                    <h2 className="text" id="name-text">Ulunma Egwim</h2>
                    <div className="circle-cropper">
                        <img src={ulunma} id="profile-pic" alt="placeholder picture"/>
                    </div>
                    <h3 className="text" id="role-text">Backend</h3>
                </div>
                <div className="right">
                    <h2 className="text" id="name-text">Lelia Hampton</h2>
                    <div className="circle-cropper">
                        <img src={lelia} id="profile-pic" alt="placeholder picture"/>
                    </div>
                    <h3 className="text" id="role-text">Backend | Merger</h3>
                </div>
            </div>
            <div className="row2">
                <h2 className="text" id="name-text">Jaida Langham</h2>
                <div className="circle-cropper">
                    <img src={jaida} id="profile-pic" alt="placeholder picture"/>
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
                        <img src={margie} id="profile-pic" alt="placeholder picture"/>
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
                    <li>Favorite a Job</li>
                    <li>Contact Candidate</li>
                    <li>Apply for Job</li>
                    <li>Upload resumes</li>
                    <li>Upload user profile picture</li>
                    <li>Upload company logo</li>
                </ul>
            </div>
            <div className="right">
                <h2 className="text" id="section-subtitle">Done</h2>
                <ul className="complete text" id="section-content">
                    <li>Candidate/Company Signup</li>
                    <li>Candidate/Company Login</li>
                    <li>Job Search</li>
                    <li>User/Candidate Profile</li>
                    <li>Add Job Role</li>
                    <li>Expanded Results</li>
                </ul>
            </div>
        </div>
        <div className="section-container" id="results">
            <h1 className="text" id="section-title">Results</h1>
            <div className="col1">
                <p className="text" id="section-content">For this project we were able to complete most of our goals. Users of our site are able to create accounts and profiles as both candidates and companies. Candidates are able to search and filter for jobs, and see expanded results. Companies are able to create company profiles, add job roles, and see candidate results. Future work for this project would be to add the ability to favorite jobs/candidates, apply for jobs, contact candidates, and upload resumes and images.</p>
                <p className="text" id="center">Click to expand each image.</p>
            </div>
            <div className="row1">
                <a id="screenshot" href={missionPage} target="_blank"><img src={missionPage} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
                <a id="screenshot" href={mission} target="_blank"><img src={mission} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
            </div>
            <div className="row1">
                <a id="screenshot" href={salary} target="_blank"><img src={salary} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
                <a id="screenshot" href={blog} target="_blank"><img src={blog} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
            </div>
            <div className="row1">
                <a id="screenshot" href={signup} target="_blank"><img src={signup} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
                <a id="screenshot" href={login} target="_blank"><img src={login} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
            </div>
            <div className="row1">
                <a id="screenshot" href={candidate} target="_blank"><img src={candidate} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
                <a id="screenshot" href={expanded} target="_blank"><img src={expanded} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
            </div>
            <div className="row1">
                <a id="screenshot" href={job} target="_blank"><img src={job} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
                <a id="screenshot" href={expandedJobs} target="_blank"><img src={expandedJobs} className="screenshot" id="screenshot" alt="screenshot placeholder"/></a>
            </div>
            <div className="column">
                <h1 className="text" id="section-subtitle"><a href="https://glassceilingswe.firebaseapp.com/index.html" target="_blank">Link to Project Site</a></h1>
                <h1 className="text" id="section-subtitle"><a href="https://github.com/zarim/JobPostingProject" target="_blank">Link to Project Github</a></h1>
            </div>
        </div>
      </div>
    );
  }
}

export default App;