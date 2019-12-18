import React from 'react';

const ProjectCard = (props) => {
    const {title,duration,description,link,image} = props.data
    return (
        <div>
      <h2>{title}</h2>
      <p>{duration}</p>
      <p className="description">{description}</p>
    <p><a target="_blank" href={link}>See Project</a></p>
    </div>
    )
}

export default ProjectCard