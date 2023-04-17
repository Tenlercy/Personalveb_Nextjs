import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://github.com/Tenlercy",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/lichong-tong-614919199/" },
  { iconName: "fa fa-twitter", link: "https://twitter.com/tong44676759" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
