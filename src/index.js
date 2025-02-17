import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";

const rootDiv = document.getElementById("root");
const reactRoot = ReactDom.createRoot(rootDiv);
reactRoot.render(<App />);
