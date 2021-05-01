import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();

let greetingColor = {
  color: ""
};

let greeting;

if (hours < 12) {
  greeting = "Good Morning";
  greetingColor.color = "red";
} else if (hours < 18) {
  greeting = "Good Afternoon";
  greetingColor.color = "Green";
} else {
  greeting = "Good Night";
  greetingColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={greetingColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
