import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Skills = () =>{
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "C++" },
        { name: "Python" },
        { name: "Javascript" },
      ],
    },
    {
      title: "Libraries and Frameworks",
      items: [
        { name: "Django", icon: "fas fa-layer-group" },
        { name: "Springboot", icon: "fas fa-palette" },
        { name: "React", icon: "fab fa-react" },
        { name: "Flask", icon: "fab fa-react" },
        { name: "React Native", icon: "fas fa-check-circle" },
        { name: "Node js", icon: "fas fa-server" },
      ],
    },
    {
      title: "Databases and Developer Tools",
      items: [
        { name: "MongoDB" },
        { name: "MySQL"},
        { name: "Docker" },
        { name: "Git" },
        { name: "AWS" },
      ],
    },
    {
      title: "Python Libraries",
      items: [
        { name: "Pandas", icon: "fab fa-docker" },
        { name: "Matplotlib", icon: "fab fa-git" },
        { name: "NumPy", icon: "fab fa-aws" },
        { name: "Scikit-learn", icon: "fab fa-docker" },
        { name: "TensorFlow", icon: "fab fa-git" },
        { name: "Keras", icon: "fab fa-aws" },
      ],
    },
  ];

  return(
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>Technical Skills</h2>
            <div className="container py-2 text-white">
      {skills.map((category) => (
        <div key={category.title} className="mb-2">
          <h3 className="text-center mb-2 ">{category.title}</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {category.items.map((item) => (
              <div className="border border-light rounded p-2 mb-2 text-center">
                <button type="button" class="btn btn-light">{item.name}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}