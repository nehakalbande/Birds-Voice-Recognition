import React, { Component } from "react";
import logo from "./video/CHIRPY.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright" style={{ color: "white" }}>
              <li>&copy; Copyright</li>
              <li>Design by Hack Elite</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
