import React, { useEffect, useState } from "react";
import { portfolio, TYPE } from "./projects"
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import "./Project.css";
import { Project } from "./Project";


export function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects(portfolio);
    }, 1500);
  }, []);

  return (
    <div className="Portfolio">
      <Container className="p-3">

        {(projects.length >= 1 )?<>
          <h1 className="text-center">Technical Projects</h1>
          {projects.filter((project) => (project.type === TYPE.TECH)).map((project, i) => 
            <Project key={i} project={project} />               
          )}
          <h1 className="text-center">Miscellaneous Projects</h1>
          {projects.filter((project) => (project.type === TYPE.MISC)).map((project, i) => 
            <Card key={i} className="p-4 m-3">
              <Container>
                <Row>
                  <Col>
                    <h2 className="text-center">{project.title}</h2>
                    {project.description.map((p, i) => <p key={i}>{p}</p>)}
                    <div className="bg-light rounded ms-auto me-auto mb-2 d-flex justify-content-center flex-wrap">
                      {project.keywords.map((kw, i) => 
                        <div key={i} className="rounded p-1 mx-2 my-1 text-nowrap" style={{ backgroundColor: "#eeeeee" }}>{kw}</div>
                      )}
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <a className="btn btn-primary m-2" href={project.website_url} target="_blank" rel="noreferrer">Go To The Website</a>
                      <a className="btn btn-primary m-2" href={project.repo_url} target="_blank" rel="noreferrer">Go To The Repository</a>
                    </div>
                  </Col>
                  <Col>
                    <a href={project.website_url} target="_blank" rel="noreferrer">
                      {(project.images_url.length > 1)?
                      <Carousel style={{border: "1px solid #000000"}}>
                        {project.images_url.map((img_url, i) => 
                          <Carousel.Item key={i}>
                            <img className="d-block w-100 project-img" style={{minWidth: "230px"}} src={`./img/${img_url}`} alt="Go To The Website" />
                          </Carousel.Item>
                        )}
                      </Carousel>
                      :
                      <img className="d-block w-100 project-img" style={{minWidth: "230px", border: "1px solid #000000"}} src={`./img/${project.images_url[0]}`} alt="Go To The Website" />
                      }
                    </a>
                  </Col>
                </Row>
              </Container> 
            </Card>
          )}
        </>
        :
        <ProjectPlaceholder />}
      </Container>
    </div>
  );
}