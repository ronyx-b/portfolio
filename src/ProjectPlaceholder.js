import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export function ProjectPlaceholder() {
  return (
    <div className="ProjectPlaceholder">
      <Card className="p-4 m-3">
          <Container>
            <Row>
              <Col>
                <h2 className="text-center placeholder-wave"><span className="placeholder col-6"></span></h2>
                <p className="card-text placeholder-wave">
                  <span className="placeholder col-7 mx-1"></span>
                  <span className="placeholder col-4 mx-1"></span>
                  <span className="placeholder col-4 mx-1"></span>
                  <span className="placeholder col-6 mx-1"></span>
                  <span className="placeholder col-8 mx-1"></span>
                </p>
                <p className="card-text placeholder-wave">
                  <span className="placeholder col-7 mx-1"></span>
                  <span className="placeholder col-4 mx-1"></span>
                  <span className="placeholder col-4 mx-1"></span>
                  <span className="placeholder col-6 mx-1"></span>
                  <span className="placeholder col-8 mx-1"></span>
                </p>
                <div className="bg-light rounded ms-auto me-auto mb-2 d-flex justify-content-center placeholder-wave">
                  <div className="rounded p-1 mx-2 my-1 text-nowrap" style={{ backgroundColor: "#eeeeee" }}><span className="placeholder" style={{ width: "80px" }}></span></div>
                  <div className="rounded p-1 mx-2 my-1 text-nowrap" style={{ backgroundColor: "#eeeeee" }}><span className="placeholder" style={{ width: "80px" }}></span></div>
                  <div className="rounded p-1 mx-2 my-1 text-nowrap" style={{ backgroundColor: "#eeeeee" }}><span className="placeholder" style={{ width: "80px" }}></span></div>
                  <div className="rounded p-1 mx-2 my-1 text-nowrap" style={{ backgroundColor: "#eeeeee" }}><span className="placeholder" style={{ width: "80px" }}></span></div>
                </div>
                <div className="d-flex flex-row justify-content-evenly">
                  <Button className="btn btn-primary m-2 disabled placeholder col-3"></Button>
                  <Button className="btn btn-primary m-2 disabled placeholder col-3"></Button>
                </div>
              </Col>
              <Col className="col-4 placeholder-glow">
                <div className="placeholder" style={{width: "100%", maxWidth: "450px", height: "50%", border: "1px solid #000000"}}></div>
              </Col>
            </Row>
          </Container> 
        </Card>
    </div>
  );
}