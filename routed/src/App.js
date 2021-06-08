import React from "react";

import VendingMachine from "./VendingMachine"
// import Home from "./Home";
// import Eat from "./Eat";
// import Drink from "./Drink";
// import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine/>
      </BrowserRouter>
    </div>
  );
}

export default App;
