import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/KICC.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const [width, setWidth] = useState("");
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 1100 ? "200px" : "");
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
             <br />

                <h1 style={{height:width}}>
                <TypeAnimation
                  sequence={[
                    "Hi! I'm Stanley a Professional Web Developer.",
                    3000, // delay
                    "Hi! I'm Stanley a Professional Android Engineer.",
                    3000,
                    "Hi! I'm Stanley a Professional Data Analyst.",
                    3000,
                    "Hi! I'm Stanley a Professional Cybersecurity Expert.",
                    3000,
                    "Hi! I'm Stanley a Professional Digital Forensics Analyst.",
                    3000,
                    "Hi! I'm Stanley a Professional Networking Engineer.",
                    3000
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{  display: 'inline-block' }}
                  repeat={Infinity}
                  />
                </h1>

                  <p> <b>Stanley Munene</b> is a <b>Computer Science</b> graduate from <b>Meru University of Science and Technology</b>. 
                  Throughout my academic journey, I have acquired extensive skills in Networking, Coding, Cybersecurity, Digital Forensics, 
                  and Web and Android Development, among others, as detailed in the Skills section of my portfolio.

                  In addition to my technical expertise, I possess strong communication skills, a dedication to meeting deadlines, 
                  self-motivation, and a collaborative approach to teamwork. I have completed various individual projects and
                   gained industry experience through internships and attachments.
                  <br/> <br />
                  Currently, I am open to new opportunities and eager to contribute to innovative projects. 
                  Please feel free to contact me for potential collaborations or job openings.</p>
                  <button className='tagline' onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img  style={{borderRadius:"50%", }} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner