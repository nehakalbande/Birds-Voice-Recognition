import React, { Component } from "react";

class Work extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var Bird_Music = this.props.data.Bird_Music.map(function (Bird_Music) {
        return (
          <div key={Bird_Music.school}>
            <h3>{Bird_Music.school}</h3>
            <p>{Bird_Music.description}</p>
          </div>
        );
      });
      var Sound_Therapy = this.props.data.Sound_Therapy.map(function (
        Sound_Therapy
      ) {
        return (
          <div key={Sound_Therapy.company}>
            <h3>{Sound_Therapy.company}</h3>

            <p>{Sound_Therapy.description}</p>
          </div>
        );
      });
      var Stress_Reduction = this.props.data.Stress_Reduction.map(function (
        Stress_Reduction
      ) {
        return (
          <div key={Stress_Reduction.company}>
            <h3>{Stress_Reduction.company}</h3>
            <p>{Stress_Reduction.description}</p>
          </div>
        );
      });
      var Smartphone_App = this.props.data.Smartphone_App.map(function (
        Smartphone_App
      ) {
        return (
          <div key={Smartphone_App.company}>
            <h3>{Smartphone_App.company}</h3>
            <p>{Smartphone_App.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Bird_Music</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{Bird_Music}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Sound_Therapy</span>
            </h1>
          </div>

          <div className="nine columns main-col">{Sound_Therapy}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Stress_Reduction</span>
            </h1>
          </div>

          <div className="nine columns main-col">{Stress_Reduction}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Smartphone_App</span>
            </h1>
          </div>
          <div className="nine columns main-col">{Smartphone_App}</div>
        </div>
      </section>
    );
  }
}

export default Work;
