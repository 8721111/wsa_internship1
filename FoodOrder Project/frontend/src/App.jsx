import React from "react";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import footer from "./components/layouts/footer";
import Menu from "./components/layouts/Menu";

import "./App.css";

export default function App() {
  
  return( 
  <div className="App">
    <Header />
<div className="container container-fluid">
  {/*<Home /> */}
  <Menu />

</div>

  <footer />


  </div>


  );
}
