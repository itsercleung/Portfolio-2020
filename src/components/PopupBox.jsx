import React, { Component } from "react";
import Popup from "reactjs-popup";
import AboutContent from "./AboutContent";
import ProjectContent from "./ProjectContent";
import ContactContent from "./ContactContent";

import "./stylesheets/PopupBox.css";

class PopupBox extends Component {
  renderContent(contentId, closePopupMethod) {
    switch (contentId) {
      case "About":
        return <AboutContent closePopup={closePopupMethod} />;
      case "Projects":
        return <ProjectContent closePopup={closePopupMethod} />;
      case "Contact":
        return <ContactContent closePopup={closePopupMethod} />;
      default:
        return <div>uh oh</div>;
    }
  }

  render() {
    const { closePopup } = this.props;

    return (
      <div>
        <Popup open={this.props.open} closeOnDocumentClick onClose={closePopup}>
          {this.renderContent(this.props.contentId, closePopup)}
        </Popup>
      </div>
    );
  }
}

export default PopupBox;
