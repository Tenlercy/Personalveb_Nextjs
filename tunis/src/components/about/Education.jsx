import React from "react";

const educationContent = [
  {
    year: "2021-2022",
    degree: "MASTER DEGREE",
    institute: "Columbia UNIVERSITY",
    details: `Study at GSAPP includes coursework in web development, computer graphics, and virtual reality.`,
  },
  {
    year: "2015-2020",
    degree: "BACHELOR DEGREE ",
    institute: "Wuhan University",
    details: `Customize my courses of study with a focus on urbanism and digital media, which includes coursework in full-stack web development, data visualization, and interactive media.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
