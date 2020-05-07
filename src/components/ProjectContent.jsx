import React, { Component } from "react";
import { ReactComponent as Book } from "../assets/book.svg";
import { ReactComponent as Pen } from "../assets/pen.svg";

import "./stylesheets/ProjectContent.css";

class ProjectContent extends Component {
  render() {
    const { closePopup } = this.props;

    return (
      <div className="wrapper">
        <Book className="book" />
        <Pen className="pen" />
        <button className="projectButton" onClick={closePopup}>
          DONE!
        </button>
      </div>
    );
  }
}

export default ProjectContent;
