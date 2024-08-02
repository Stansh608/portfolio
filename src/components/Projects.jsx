import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  //data
  const projects = [
    {
      id: 1,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg1,
      description:"fbbvbufvb jdvidiid",
      year:"2021",
    },
    {
      id: 2,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg2,
      description:"fbbvbufvb jdvidiid",
      year:"2021",
    },
    {
      id: 3,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg3,
      description:"fbbvbufvb jdvidiid",
      year:"2021",
    },
    {
      id: 4,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg1,
      description:"fbbvbufvb jdvidiid",
      year:"2021",

    },
    {
      id: 5,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg2,
      description:"fbbvbufvb jdvidiid",
      year:"2021",
    },
    {
      id: 6,
      title: "Business Startup",
      category: "Design & Development",
      imgUrl: projImg3,
      description:"fbbvbufvb jdvidiid",
      year:"2021",
    },
  ];

  const androidProjects = [
    {
      id: 1,
      title: "Car Sale Application",
      category: "Design & Development",
      imgUrl: projImg2,
      description:"fbbvbufvb jdvidiid",
      year:"2023",
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Completing projects is one of the most effective ways to test the skills learned. It helps individuals gauge their confidence in addressing
                   real-world business needs and clients by providing technological solutions to societal problems.
                   Working on projects enhances one's competency after learning through tutorials or enrolling in courses. Below are some of my accomplished projects.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Android Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          androidProjects.map((proj, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...proj}
                                />
                            )
                          })
                        }
                      </Row>
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects