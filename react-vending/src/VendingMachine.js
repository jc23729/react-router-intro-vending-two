import React from "react";

import Home from "./Home";
import Reeses from "./Reeses";
import Soda from "./Soda";
import HoneyBun from "./HoneyBun";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="Vending Machine">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/reeses">
          <Reeses />
        </Route>
        <Route exact path="/honeybun">
          <HoneyBun />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
