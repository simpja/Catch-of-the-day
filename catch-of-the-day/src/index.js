import React from "react";
import { render } from "react-dom";
import "./css/style.css";
// FYI: The . means current folder
import Router from "./components/Router.js";

render(<Router />, document.querySelector("#main"));
