import React from "react";
import { PageHeader, Timeline } from "antd";
import ProjectCard from './projectCard'
import projects from '../../data/projects';
const renderProjects = () =>{
    return projects.map(project => (
        <Timeline.Item>
            <ProjectCard data={project}/>
        </Timeline.Item>
    ))
}
const Projects = props => (
  <div>
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
        marginBottom:"2rem"

      }}
    
      title="Projects"
    />
    <Timeline className="fadeIn">
      {renderProjects()}
    </Timeline>
  </div>
);

export default Projects;
