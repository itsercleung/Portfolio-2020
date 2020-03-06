import React, { Component } from "react";
import { ReactComponent as Me } from "../assets/me.svg";
import { ReactComponent as Dialog } from "../assets/dialog.svg";

import "./stylesheets/AboutContent.css";

class AboutContent extends Component {
  render() {
    const { closePopup } = this.props;

    return (
      <div className="wrapper">
        <Dialog className="dialog" />
        <button className="okButton" onClick={closePopup}>
          OK!
        </button>
        <Me className="me" />
      </div>
    );
  }
}

export default AboutContent;
