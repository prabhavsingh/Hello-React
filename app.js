import React from "react";
import ReactDom from "react-dom/client";

//JSX

const jsxHeading = (
  <h1 id="heading" key="xyz">
    Hello React using JSX
  </h1>
);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(jsxHeading);
