import React from "react";
const ExperienceCard = props => {
  const { designation, company, duration, description } = props.data;
  return (
    <div>
      <h2>{designation}</h2>
      <p>{company}</p>
      <p>{duration}</p>
      <p className="description">{description}</p>
    </div>
  );
};
export default ExperienceCard