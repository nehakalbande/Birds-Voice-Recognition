import React, { Component, useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Work from "./Components/Work";
import Blogs from "./Components/Blogs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      birdsData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getbirdsData() {
    $.ajax({
      url: "./birdsData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ birdsData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getbirdsData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.birdsData.main} />
        <About data={this.state.birdsData.main} />
        <Work data={this.state.birdsData.resume} />
        <Blogs data={this.state.birdsData.portfolio} />
        <Footer data={this.state.birdsData.main} />
      </div>
    );
  }
}

export default App;
