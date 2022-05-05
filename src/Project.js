import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

export function Project({project}) {
  return (
    <div className="Project">
      <Card className="p-4 m-3">
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
                <a className="btn btn-primary m-2" href={project.website_url} target="_blank" rel="noreferrer">Website</a>
                {typeof project.repo_url === "object" ? 
                <>{project.repo_url.map((repo, i) => <>
                  <a key={i} className="btn btn-primary m-2" href={repo.url} target="_blank" rel="noreferrer">{repo.name} Repository</a>
                </>)}</>
                :
                <><a className="btn btn-primary m-2" href={project.repo_url} target="_blank" rel="noreferrer">Repository</a></>
                }
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
    </div>
  );
}