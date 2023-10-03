import React from 'react'
import "./projects.css"
import dune from "../../assets/dune.png";
import crud from "../../assets/crud.png";
import expedia from "../../assets/expedia.png";
import seahawks from "../../assets/seahawks.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="project-container">
          <h4 className="project-img-title">Full Stack CRUD app</h4>
          <img className="project-img" src={crud} alt="CRUD Application Screenshot" />
          <p className="tools"> Tools: React, Bootstrap, Spring Boot, MySQL, Java, AWS, EC2, S3, RDS, Axios, Postman</p>
          <aisde className="img-links">
            <a href="http://crudfullstack.s3-website.us-east-2.amazonaws.com/"><p>Site (Deployed with AWS)</p></a>
            <a href="https://github.com/anthony-balfour/CRUD-FullStack"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4 className="project-img-title">Full Stack Flight Reservation App</h4>
          <a href="https://outbound-flight-reservation.glitch.me/">
            <img className="project-img" src={expedia} alt="Expedia Webpage Screenshot" />
          </a>
          <p className="tools"> Tools: JS, Node, Express, SQLlite, API, JSON</p>
          <aisde className="img-links">
            <a href="https://outbound-flight-reservation.glitch.me/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/outbound_flight_reservation"><p>Source</p></a>
          </aisde>
        </div>
      </div>

      <div className="projects-container" >
        <div className="project-container">
          <h4 className="project-img-title">Dune Summary API</h4>
          <img className="project-img" src={dune} alt="Dune Project Screenshot" />
          <p className="tools"> Tools: JS, Node, Node File System, API, JSON</p>
          <aisde className="img-links">
            <a href="https://dune-api-fs.glitch.me/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/DuneAPI"><p>Source</p></a>
          </aisde>
        </div>



        <div className="project-container">
          <h4 className="project-img-title">Seahawks Landing Page</h4>
          <img className="project-img" src={seahawks} alt="Seahawks Project Screenshot" />
          <p className="tools"> Tools: JS, CSS, HTML</p>
          <aisde className="img-links">
            {/* <a><p>Site</p></a> */}
            <a href="https://github.com/anthony-balfour/seahawks-landing-page"><p>Source</p></a>
          </aisde>
        </div>
      </div>
      {/* <button className="projects-see-more">See More</button> */}
    </section>
  )
}

export default Projects
