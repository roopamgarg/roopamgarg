import React from "react";
import { PageHeader, Timeline, Tag } from "antd";

const About = props => (
  <div >
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)",
        marginBottom: "2rem"
      }}
     
      title="About"
    />
    <Timeline className="fadeIn">
      <Timeline.Item>
        <h2>About Me</h2>
        <p>Born on 09 April 2001</p>
        <p className="description">
          I'm a full-stack developer from India, I have a serious passion for
          UI effects, animation and creating intuitive, dynamic user
          experiences. Let's make something Special.
        </p>
      </Timeline.Item>
      <Timeline.Item>
          <h2>Skills</h2>
          <div>
          <Tag color="blue">C/C++</Tag>
          <Tag color="blue">Javascript</Tag>
          <Tag color="blue">MEAN Stack</Tag>
          <Tag color="blue">MERN Stack</Tag>
          <Tag color="blue">AWS</Tag>
          <Tag color="blue">Automation Testing</Tag>
          <Tag color="blue">CI/CD</Tag>
          

          </div>
      </Timeline.Item>
      <Timeline.Item>
        <h2>Education</h2>
        <Timeline>
          <Timeline.Item>
            <p>Maharaja Agrasen Institute Of Technology</p>
            <p>Bachelor of Technology - BTech information technology</p>
            <p>2019 – 2022</p>
          </Timeline.Item>
          
          <Timeline.Item>
            <p>Guru Nanak Dev Institute Of Technology</p>
            <p>Diploma in Information Technology</p>
            <p>2016 – 2019</p>
          </Timeline.Item>
        </Timeline>
      </Timeline.Item>
      
    </Timeline>
  </div>
);

export default About;
