import React, { Component } from "react";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { ReactComponent as About } from "../assets/about.svg";
import { ReactComponent as Projects } from "../assets/projects.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { ReactComponent as Pointer } from "../assets/pointer.svg";

import "./stylesheets/Header.css";

class Header extends Component {
  componentDidMount() {
    let svgList = document.getElementsByClassName("zoom");

    if (this.props.isDark) {
      for (var i = 0; i < svgList.length; i++) {
        svgList[i].classList.add("darkSvg");
      }
    } else {
      for (var j = 0; j < svgList.length; j++) {
        svgList[j].classList.remove("darkSvg");
      }
    }
  }

  componentDidUpdate() {
    let svgList = document.getElementsByClassName("zoom");

    if (this.props.isDark) {
      for (var i = 0; i < svgList.length; i++) {
        svgList[i].classList.add("darkSvg");
      }
    } else {
      for (var j = 0; j < svgList.length; j++) {
        svgList[j].classList.remove("darkSvg");
      }
    }
  }

  render() {
    const { handlePopupShow } = this.props;

    return (
      <div className="headerStyle">
        <a href="./">
          <LogoIcon className="logoStyle linkStyle zoom" />
        </a>
        <nav className="navStyle">
          <ul className="ulStyle">
            <li>
              <button onClick={() => handlePopupShow("About")}>
                <Pointer className="pointer" />
                <About id="aboutButton" className="linkStyle zoom" />
              </button>
            </li>
            <li>
              <button onClick={() => handlePopupShow("Projects")}>
                <Pointer className="pointer" />
                <Projects id="projectButton" className="linkStyle zoom" />
              </button>
            </li>
            <li>
              <button onClick={() => handlePopupShow("Contact")}>
                <Pointer className="pointer" />
                <Contact id="contactButton" className="linkStyle zoom" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
