import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Lechon", hasColor: "" },
  { meta: "last name", metaInfo: "Tong", hasColor: "" },
  { meta: "Age", metaInfo: "26 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Chinese", hasColor: "" },
  { meta: "Software Engineer", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "San Jose, US", hasColor: "" },
  { meta: "phone", metaInfo: "+1(646)573-6097", hasColor: "" },
  { meta: "Email", metaInfo: "tlc7107309539@gmail.com", hasColor: "" },
  { meta: "GitHub", metaInfo: "github.com/Tenlercy", hasColor: "" },
  { meta: "langages", metaInfo: "Mandarian, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
