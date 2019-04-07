import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import './App.css';

const Index = () => <h2>Welcome from Home</h2>;
const About = () => <h2>Welcome from About</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
