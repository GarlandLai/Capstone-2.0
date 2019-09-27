import React from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id}>
          <ProjectDetails project={project} key={project.id} />
          </Link>
        )
      })}
    </div>
  );
};

export default ProjectList;
