import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "./Header";
import Search from "../Routes/Search";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
    </>
  </Router>
);
