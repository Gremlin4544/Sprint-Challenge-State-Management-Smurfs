import React, { Component } from "react";
import "./App.css";

import SmurfList from "../components/SmurfList";
import SmurfForm from "../components/SmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
