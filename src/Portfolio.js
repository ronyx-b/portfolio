import React, { useEffect, useState } from "react";
import { portfolio, TYPE } from "./projects"
import { Container } from "react-bootstrap";
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
            <Project key={`${project.type}_${i}`} project={project} />               
          )}
          <h1 className="text-center">Miscellaneous Projects</h1>
          {projects.filter((project) => (project.type === TYPE.MISC)).map((project, i) => 
            <Project key={`${project.type}_${i}`} project={project} />
          )}
        </>
        :
        <ProjectPlaceholder />}
      </Container>
    </div>
  );
}