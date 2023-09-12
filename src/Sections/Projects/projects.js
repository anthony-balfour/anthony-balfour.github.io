import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <section id="projects">

      <div className="project-container">
        <div>
          <h4>Project 1</h4>
          <img className="project-img" alt="" />
        </div>
        <div>
          <h4>Project 2</h4>
          <img className="project-img" alt="" />
        </div>
      </div>

      <div className="project-container">
        <div>
          <h4>Project 3</h4>
          <img className="project-img" alt="" />
        </div>
        <div>
          <h4>Project 4</h4>
          <img className="project-img" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Projects
