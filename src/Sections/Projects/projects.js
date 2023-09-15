import React from 'react'
import "./projects.css"
import dune from "../../assets/dune.png";
import expedia from "../../assets/expedia.png";
import greekArt from "../../assets/greek.png";
import seahawks from "../../assets/seahawks.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="project-container">
          <h4 className="project-img-title">Full Stack Flight Reservation App</h4>
          <img className="project-img" src={expedia} alt="" />
          <p className="tools"> Tools: JS, Node, Express, SQLlite, API, JSON</p>
          <aisde className="img-links">
            <a><p>Site</p></a>
            <a><p>Source</p></a>
          </aisde>
        </div>
        <div className="project-container">
          <h4 className="project-img-title">Dune Summary API</h4>
          <img className="project-img" src={dune} alt="" />
          <p className="tools"> Tools: JS, Node, Node File System, API, JSON</p>
          <aisde className="img-links">
            <a><p>Site</p></a>
            <a><p>Source</p></a>
          </aisde>
        </div>
      </div>

      <div className="projects-container" >
        <div className="project-container">
          <h4 className="project-img-title">Greek Art 3rd Party API </h4>
          <img className="project-img" src={greekArt} alt="" />
          <p className="tools"> Tools: JS, Fetch, 3rd Party API</p>
          <aisde className="img-links">
            <a><p>Site</p></a>
            <a><p>Source</p></a>
          </aisde>
        </div>
        <div className="project-container">
          <h4 className="project-img-title">Seahawks Landing Page</h4>
          <img className="project-img" src={seahawks} alt="" />
          <p className="tools"> Tools: JS, CSS, HTML</p>
          <aisde className="img-links">
            <a><p>Site</p></a>
            <a><p>Source</p></a>
          </aisde>
        </div>
      </div>
      {/* <button className="projects-see-more">See More</button> */}
    </section>
  )
}

export default Projects
