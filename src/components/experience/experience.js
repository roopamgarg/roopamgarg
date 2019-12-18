import React, { Fragment } from "react";
import { Timeline, PageHeader } from "antd";
import ExperienceCard from "./experienceCard";
import experience from '../../data/experience'; 
const renderCards = () =>{
    return experience.map(experience => (
    <Timeline.Item>
        <ExperienceCard data={experience}/>
      </Timeline.Item>
    ))
}
const Experience = props => (
<Fragment> 
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
        marginBottom:"2rem"
      }}
    
      title="Experience"
    />
    <Timeline className="fadeIn">
        {renderCards()}
    </Timeline>
</Fragment>
);
export default Experience;