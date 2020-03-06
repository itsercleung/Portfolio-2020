import React, { Component } from "react";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

import "./stylesheets/TopBar.css";

class TopBar extends Component {
  render() {
    const { handleDark } = this.props;

    return (
      <div className="topbarWrapper">
        <button onClick={() => handleDark(this.props.isDark)}>
          {this.props.isDark ? (
            <Moon className="moon zoom" />
          ) : (
            <Sun className="sun zoom" />
          )}
        </button>
      </div>
    );
  }
}
export default TopBar;
