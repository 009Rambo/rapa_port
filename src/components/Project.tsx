import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock04 from '../assets/images/mock04.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.thesisproofingtool.ilab.fi/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.thesisproofingtool.ilab.fi/" target="_blank" rel="noreferrer"><h2>Thesis Proofing Tool</h2></a>
                <p>Developed and deployed full stack application capable of analying thesis docs/pdf and generate report based on it. Built with vanila HTML, CSS and python Flask, Deployment using apache2.</p>
            </div>
            <div className="project">
                <a href="https://github.com/009Rambo/Web_dev_course_assignment" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/009Rambo/Web_dev_course_assignment" target="_blank" rel="noreferrer"><h2>Weather Forcast Application</h2></a>
                <p>Designed, developed, and launched a Weather application using a API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/009Rambo/Coffee-Machine-Interface" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/009Rambo/Coffee-Machine-Interface" target="_blank" rel="noreferrer"><h2>Coffee Machine UI</h2></a>
                <p>Developed a project which provides an user interface (UI) for a coffee machine application built using Qt and QML</p>
            </div>
            <div className="project">
                <a href="https://github.com/009Rambo/Web-Software-Production-Final-Project" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/009Rambo/Web-Software-Production-Final-Project" target="_blank" rel="noreferrer"><h2>Web Software Production</h2></a>
                <p>Full Stack App developed and deployed using docker and CI/CD pipelines</p>
            </div>
            <div className="project">
                <a href="https://github.com/009Rambo/Simple-Quiz" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/009Rambo/Simple-Quiz" target="_blank" rel="noreferrer"><h2>Simple Quiz</h2></a>
                <p>A simple project built with just Java, HTML and CSS. This project is still work in progress.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;