import React, { Component } from "react";
import Header from "./components/Header";
import FooterMenu from "./components/FooterMenu";
import PopupBox from "./components/PopupBox";
import TopBar from "./components/TopBar";

import "./App.css";

class App extends Component {
  state = {
    open: false,
    contentId: null,
    isDark: true,
  };
  closePopup = this.closePopup.bind(this);

  componentDidMount() {
    var html = document.querySelector("html");

    html.classList.add("dark");
  }

  componentDidUpdate() {
    var html = document.querySelector("html");

    //Set darkmode when handle dark button clicked from TopBar
    if (this.state.isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  //HELPER METHODS
  handlePopupShow = (contentId) => {
    this.setState({
      open: true,
      contentId: contentId,
    });
  };

  handleDark = (isDark) => {
    this.setState({
      isDark: !isDark,
    });
  };

  closePopup() {
    this.setState({
      open: false,
    });
  }

  //RENDER
  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
    };

    const wrapperStyles = {
      backgroundColor: styles.black(0.05),
      minHeight: "100vh",
      position: "relative",
    };

    return (
      <div styles={wrapperStyles}>
        <TopBar handleDark={this.handleDark} isDark={this.state.isDark} />
        <Header
          handlePopupShow={this.handlePopupShow}
          styles={styles}
          isDark={this.state.isDark}
        />
        <PopupBox
          closePopup={this.closePopup}
          open={this.state.open}
          contentId={this.state.contentId}
          isDark={this.state.isDark}
        />
        <FooterMenu isDark={this.state.isDark} styles={styles} />
      </div>
    );
  }
}

export default App;
