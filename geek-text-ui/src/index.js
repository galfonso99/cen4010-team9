import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BookDetails from "./components/BookDetails/BookDetails";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/book" component={BookDetails} />
  </BrowserRouter>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
