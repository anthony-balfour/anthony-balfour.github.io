import React from 'react'
import "./projects.css"
import game from "../../assets/2048.png";
import crud from "../../assets/crud.png";
import expedia from "../../assets/expedia.png";
import student from "../../assets/student.png"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">

      <div className="project-container">
          <h4 className="project-img-title">Full Stack Expedia App</h4>
          <a href="https://outbound-flight-reservation.glitch.me/">
            <img className="project-img" src={expedia} alt="Expedia Webpage Screenshot" />
          </a>
          <p className="tools"> Tools: JS, Node, Express, SQL, API, JSON, Glitch deployment</p>
          <aisde className="img-links">
            <a href="https://outbound-flight-reservation.glitch.me/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/outbound_flight_reservation"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4 className="project-img-title">Full Stack CRUD App (AWS Deployment)</h4>
          <a href="http://crudfullstack.s3-website.us-east-2.amazonaws.com/">
            <img className="project-img" src={crud} alt="CRUD Application Screenshot" />
          </a>
          <p className="tools"> Tools: React, Bootstrap, Spring Boot, MySQL, Java, AWS, EC2, S3, RDS, Axios, Postman</p>

          <aisde className="img-links">
            <a href="http://crudfullstack.s3-website.us-east-2.amazonaws.com/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/CRUD-FullStack"><p>Source</p></a>
          </aisde>
        </div>

      </div>

      <div className="projects-container" >

      <div className="project-container">
          <h4 className="project-img-title">Docker deployed 2048 Game</h4>
          <img className="project-img" src={game} alt="2048 Game ScreenShot" />
          <p className="tools"> Tools: Docker, AWS Elastic Beanstalk, AWS Console</p>
          <aisde className="img-links">
            <a href="http://2048game-env.eba-qztgmemc.us-east-2.elasticbeanstalk.com/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/Docker2048"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4>Full Stack Student Management App</h4>
          <h4 className="project-img-title">(AWS Deployment)</h4>
          <a href="http://student-system.s3-website.us-east-2.amazonaws.com">
            <img className="project-img" src={student} alt="Student Management App Screenshot" />
          </a>
          <p className="tools"> Tools: React, Spring Boot, MySQL, Material UI, AWS (RDS, EC2, S3)</p>
          <aisde className="img-links">
            <a href="http://student-system.s3-website.us-east-2.amazonaws.com"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/Student-Management-System-FullStack"><p>Source</p></a>
          </aisde>
        </div>
      </div>
      {/* <button className="projects-see-more">See More</button> */}
    </section>
  )
}

export default Projects
