//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";
const name = "Jipsa Sara Varkey";
const d = new Date(); // To get current date
const year = d.getFullYear(); // To Extract year from date
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
