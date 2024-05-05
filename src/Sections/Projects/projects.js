import React from 'react'
import "./projects.css"
import game from "../../assets/2048.png";
import crud from "../../assets/crud.png";
import expedia from "../../assets/expedia.png";
import student from "../../assets/student.png";
import seahawks from "../../assets/seahawks.png";
import musicplayer from "../../assets/musicplayer.png";
import rtr from "../../assets/rtr.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">

        <div className="project-container">
          <h4>Rainier Tech Roots Website </h4>
          <h4 className="project-img-title">(AWS CloudFront/S3) </h4>
          <a href="https://d21ekyhpilwd3m.cloudfront.net/">
            <img className="project-img" src={rtr} alt="Rainier Tech Roots Website Landing Page" />
          </a>
          <p className="tools"></p>
          <aisde className="img-links">
            <a href="https://d21ekyhpilwd3m.cloudfront.net/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/RainierTechRootsSite"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4>Full Stack Expedia App</h4>
          <h4 className="project-img-title">(Docker/AWS EC2)</h4>
          <a href="http://3.14.251.109:8000/">
            <img className="project-img" src={expedia} alt="Expedia Webpage Screenshot" />
          </a>
          <p className="tools"> Tools: JS, Node, Express, SQL, API, JSON, Docker, AWS Console</p>
          <aisde className="img-links">
            <a href="http://3.14.251.109:8000/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/outbound_flight_reservation"><p>Source</p></a>
          </aisde>
        </div>

      </div>

      <div className="projects-container" >

      <div className="project-container">
          <h4>Full Stack User Management App</h4>
          <h4 className="project-img-title">(AWS Deployment)</h4>
          <a href="http://crudfullstack.s3-website.us-east-2.amazonaws.com/">
            <img className="project-img" src={crud} alt="CRUD Application Screenshot" />
          </a>
          <p className="tools"> Tools: React, Bootstrap, Spring Boot, MySQL, Java, AWS (EC2, RDS, S3), Axios, Postman</p>

          <aisde className="img-links">
            <a href="http://crudfullstack.s3-website.us-east-2.amazonaws.com/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/CRUD-FullStack"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4>Spotify API React Music Player</h4>
          <h4 className="project-img-title">(Docker/AWS EC2)</h4>
          <a href="http://3.14.251.109:8004/">
            <img className="project-img" src={musicplayer} alt="CRUD Application Screenshot" />
          </a>
          <p className="tools"> Tools: React, Docker, Spotify API, AWS </p>

          <aisde className="img-links">
            <a href="http://3.14.251.109:8004/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/SpotifyAPI_MusicPlayerReact"><p>Source</p></a>
          </aisde>
        </div>

        {/* <div className="project-container">
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
        </div> */}

      </div>
      {/* <button className="projects-see-more">See More</button> */}
      <div className="projects-container" >

      <div className="project-container">
          <h4>Rainier Tech Roots Website </h4>
          <h4 className="project-img-title">(AWS CloudFront/S3) </h4>
          <a href="https://d21ekyhpilwd3m.cloudfront.net/">
            <img className="project-img" src={rtr} alt="Rainier Tech Roots Website Landing Page" />
          </a>
          <p className="tools"></p>
          <aisde className="img-links">
            <a href="https://d21ekyhpilwd3m.cloudfront.net/"><p>Site</p></a>
            <a href="https://github.com/anthony-balfour/RainierTechRootsSite"><p>Source</p></a>
          </aisde>
        </div>

        <div className="project-container">
          <h4>Seahawks Landing Page (static)</h4>
          <h4 className="project-img-title">(S3 Bucket) </h4>
          <a href="http://seahawks-landing-page.s3-website.us-east-2.amazonaws.com/" >
            <img className="project-img" src={seahawks} alt="Seahawks Landing Page Screenshot" />
          </a>

          <p className="tools"> Tools: JavaScript, HTML5, CSS3</p>
          <aisde className="img-links">
            <a href="http://seahawks-landing-page.s3-website.us-east-2.amazonaws.com/"><p>Site</p></a>
          </aisde>
        </div>

      </div>
    </section>
  )
}

export default Projects
