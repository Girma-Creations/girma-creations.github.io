import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import NavBar from "../components/NavBar/Nav"

const particleOptions = {
  particles: {
    color: {value:"#000000"},
    line_linked:{
        enable: true,
        color: "#E51535"
    },
    number: {
        value: 90,
        density: {
          enable: true,
          value_area: 482
        }
    },
    size: {
        value: 3
    }
},
interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "repulse"
        }
    }
}
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particlesposition"
        params={particleOptions}
      />
      <NavBar/>
      </div>
    );
  }
}

export default App;