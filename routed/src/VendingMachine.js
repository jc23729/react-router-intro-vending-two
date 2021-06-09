import React from "react";

import Home from "./Home";
import Eat from "./Eat";
import Soda from "./Soda";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/eat">
          <Eat />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
