import React from "react"
import trollFace from "./images/TrollFace.png"

export default function Header(){
    return(
        <div className="header">
            <img src={trollFace} className="trollFace" alt="logo" />
            <pre className="logo-text">MemeGenerator</pre>
            <pre className="project-subject">React-course Project 3</pre>
        </div>
    )
}