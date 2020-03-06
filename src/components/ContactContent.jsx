import React, { Component } from "react";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Paperplane } from "../assets/paperplane.svg";

import "./stylesheets/ContactContent.css";

class ContactContent extends Component {
  render() {
    const { closePopup } = this.props;

    return (
      <div className="wrapper">
        <Mail className="mail" />
        <button className="sendButton" onClick={closePopup}>
          SEND!
        </button>
        <Paperplane className="paperplane" />
      </div>
    );
  }
}

export default ContactContent;
