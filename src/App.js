// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrameWrapperByAnima from "./components/FrameWrapperByAnima"; // Your existing navigation component
import { Service } from "./screens/Home";

const App = () => {
  return (
    <Router>
      <FrameWrapperByAnima /> {/* Your existing navigation menu */}
      <Switch>
        {/* Other routes */}
        <Route exact path="/services" component={Service} />
      </Switch>
    </Router>
  );
};

export default App;
