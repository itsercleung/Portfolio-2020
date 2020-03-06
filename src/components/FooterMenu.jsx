import React from "react";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as FooterDesc } from "../assets/footerdesc.svg";

import "./stylesheets/FooterMenu.css";

const FooterMenu = ({ styles }) => {
  const footerItems = [
    {
      icon: <Github className="zoom" />,
      link: "https://github.com/itsercleung"
    },
    {
      icon: <LinkedIn className="zoom" />,
      link: "https://www.linkedin.com/in/ericbleung/"
    },
    { icon: <Email className="zoom" />, link: "mailto:leung.eric24@gmail.com" }
  ];

  const footerMenuStyle = {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    height: styles.footerMenuHeight,
    color: "#000",
    position: "fixed",
    bottom: 0
  };

  return (
    <div style={footerMenuStyle}>
      {footerItems.map((item, i) => {
        return (
          <span className="iconStyle" id={"icon" + i} key={i}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              {item.icon}
            </a>
          </span>
        );
      })}
      <div className="footerDesc">
        <a
          href="https://media.giphy.com/media/7DzlajZNY5D0I/giphy.gif"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterDesc
            id="footerIcon"
            className="footerDescImage iconStyle zoom zoomspec"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterMenu;
