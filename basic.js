// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from javascript";

// const root = document.querySelector("#root");
// root.appendChild(heading);

/*
 *
 * <div id="parent"> 
        <div id="child">
            <h1>namaste</h1>
        </div>
    </div>
 *
 *
 *
 */
/*
Parcel
HMR=> Hot module replacement
file watching algorithm -written in C++
Caching-FAster builds
imgae optimization
in production - minifiy files, bundles, compressing
consistent hashing
code splitting
differential bundling - support older browser
Tree shaking - remove unsed code
*/

import React from "react";
import ReactDOM from "react-dom/client";

//recat.createElement => js object=> HTML element
const heading = React.createElement(
  "h1",
  { id: "heading", key: "abc" },
  "hello world from react"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child" }, [
    React.createElement("h1", { key: "h1" }, "h1 tag"),
    React.createElement("h2", { key: "h2" }, "h2 tag"),
  ]),
  heading,
]);

console.log("React", React);
console.log(heading); //object
console.log(React.createElement);
console.log(ReactDOM);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
console.log(ReactDOM.createRoot);
console.log(root.render);

root.render(parent);
