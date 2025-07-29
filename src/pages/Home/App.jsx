// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FrameWrapperByAnima from "./sections/FrameWrapperByAnima"; // Your existing navigation component
import { Service } from "./Service";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { Home } from "./Home";

const App = () => {
  return (
    <Router>
     <FrameWrapperByAnima/>
      <Switch>
        {/* Other routes */}
        { <Route exact path="/" component={Home} /> }

        <Route exact path="/services" component={Service} />
      </Switch>
    </Router>
  );
};

export default App;
