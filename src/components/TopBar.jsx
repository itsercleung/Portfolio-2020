import React, { Component } from "react";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import TextScroller from "./TextScroll";
import "./stylesheets/TopBar.css";

class TopBar extends Component {
  render() {
    const { handleDark } = this.props;
    const text =
      "| Shady Software Kid | Meatball, meatball Spaghetti underneath. Ravioli, ravioli Great Barrier Reef! | FREE WORLDWIDE SHIPPING OVER $120 | USE CODE: 123 | Smells like updog | What's your turnip prices bro? | ";
    return (
      <div className="topbarWrapper">
        {this.props.isDark ? (
          <div className="advertise">
            <TextScroller text={text} />
          </div>
        ) : (
          <div className="advertise light">
            <TextScroller text={text} />
          </div>
        )}

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
