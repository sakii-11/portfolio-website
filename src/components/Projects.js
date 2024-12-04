import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/jp.png";
import blog1 from "../assets/img/blog1.webp";
import web1 from "../assets/img/web1.png";
import web4 from "../assets/img/web4.png";
import web2 from "../assets/img/web2.png";
import web3 from "../assets/img/web3.png";
import ml1 from "../assets/img/ml1.jpg";
import ml2 from "../assets/img/ml2.jpg";
import ml3 from "../assets/img/ml3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bogo",
      description: "Worked on the backend using drf of a mobile app designed to connect customers and business with offers.",
      imgUrl: web4,
      links: [
      { label: "Github", url: "https://github.com/sakii-11/BOGO", active: true },
      { label: "Live", url: "https://apps.apple.com/in/app/bogo-buy-one-get-one/id6615083364", active: true },
    ]
    },
    {
      title: "ChatTime",
      description: "Real-time messaging app with JWT Socket.io, MongoDB.",
      imgUrl: web1,
      links: [
      { label: "Code", url: "https://github.com/sakii-11/chatTime", active: true },
      { label: "Live", url: "https://chattime-ioxp.onrender.com/login", active: true },
    ]
    },
    {
      title: "Opensource work in codecademy",
      description: "Documentation page for sets update method.",
      imgUrl: web2,
      links: [
      { label: "Github", url: "https://github.com/Codecademy/docs/pull/4815", active: true },
      { label: "Live", url: "https://www.codecademy.com/resources/docs/python/sets/update", active: true },
    ]
    },
    {
      title: "Job Portal",
      description: "Complete job portal application using Spring Boot 3, Spring MVC, and Thymeleaf.",
      imgUrl: projImg1,
      links: [
      { label: "Code", url: "https://github.com/example", active: true },
      { label: "Live", url: "https://example.com/live", active: true },
    ]
    },
    {
      title: "FinTrack",
      description: "Finance dashboard built with the MERN stack, featuring ML-based financial analytics, optimized with lazy loading.",
      imgUrl: web3,
      links: [
      { label: "Code", url: "https://github.com/sakii-11/FinTrack", active: true },
      { label: "Live", url: "https://fintrack-i4ke.onrender.com/", active: true },
    ]
    }
  ];

  const ML = [
    {
      title: "Book Recommender",
      description: "Personalized book recommendation system using collaborative filtering and Goodreads data.",
      imgUrl: ml1,
      links: [
      { label: "Code", url: "https://github.com/sakii-11/Book_recommender", active: true },
    ]
    },
    {
      title: "Stock Price Prediction",
      description: "Stock price prediction app using LSTM and Keras with yFinance.",
      imgUrl: ml2,
      links: [
      { label: "Code", url: "https://github.com/sakii-11/Stock-Price-Prediction", active: true }
    ]
    },
    {
      title: "Image Classifier",
      description: "Image classifier using CNNs in TensorFlow applying batch normalization and max pooling.",
      imgUrl: ml3,
      links: [
      { label: "Code", url: "https://github.com/sakii-11/Image-Classifier", active: true },
    ]
    },

  ];

  const Blogs = [
    {
      title: "Why Backend in Java is better than Python",
      description: "",
      imgUrl: blog1,
      links: [
      { label: "Blog", url: "https://medium.com/@vsakshi2070/why-backend-in-java-is-better-than-python-a-comprehensive-analysis-68a6bd9c899f", active: true },
    ]
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
                <p>I've worked on these few projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web/App Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blogs</Nav.Link>
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
                          ML.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                         {
                          Blogs.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
