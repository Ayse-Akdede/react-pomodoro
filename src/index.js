import "../scss/app.scss";
import React from "react";
import ReactDOM from "react-dom";

import HelloMessage from "../components/hello-message";

const App = document.querySelector("#app");
ReactDOM.render(<HelloMessage name={"Yomi"} />, App);
