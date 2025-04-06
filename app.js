import React from "react";
import ReactDom from "react-dom/client";

//JSX
// JSX is transpiled before it reaches the js engine
//transpiling is by done by parcel using babel

//jsx=> react.createElement=> js object=>HTML ELement
// babel transpiles jsx to react.createElemet
const jsxHeading = (
  <h1 key="xyz" className="head" tabIndex="1">
    Hello React using JSX
  </h1>
);

console.log(jsxHeading);

//React Component
// class based components - uses js classes
// functional components - uses js functions

// react functional components
const Title = () => {
  return <h1 className="head">Hello react functional component TITLE</h1>;
};

//component composition - components inside components
const HeadingComponent2 = () => {
  return (
    <div className="conatiner">
      <h1 className="heading">Hello react functional component2</h1>
      <Title></Title>
    </div>
  );
};

const personNumber = 100;
const elem = <span>span element</span>;

// data is santized between {} , jsx will take care of it

function Header() {
  return (
    <div>
      <h2>{personNumber}</h2>
      {Title()}
      {"sjdbcsvdchvsdhcvj"}
      {30 + 780}
      <HeadingComponent2 />
      {elem}
      {jsxHeading}
      <p>paragraph</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<Header />);
