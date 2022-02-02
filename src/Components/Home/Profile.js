import React from "react"
import Typical from "react-typical"
import Button from 'react-bootstrap/Button';
import "./Profile.css"

export default function Profile() {
    return (
        <div className="profile-parent">
            <div className="profile-details">
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello, I'm Derek
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1 id="profile-role-text">
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "MERN Stack Developer💻",
                                    1000,
                                    "Creative Problem Solver💡",
                                    1000,
                                    "Full Stack Developer😎",
                                    1000
                                ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Aspiring full-stack developer looking to put my passion
                            for problem solving and creating to work.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <Button className="myButton" href="#contactMe">
                        {" "}
                        Hire Me{" "}
                    </Button>
                    <a href="../Resume.pdf" download="../Resume.pdf">
                        <Button className="myButton">Download Resume</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}