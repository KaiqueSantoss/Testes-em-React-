import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Task from "./components/Tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Task/>
  </React.StrictMode>
);
