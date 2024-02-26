import React from "react";
import Features from "./Features";
import UseCases from "./UseCases";
import logo from "../assets/AceB logo.png";
import { Link } from "react-router-dom";
import FigmaPrototype from "./Figma";

function Tabs() {
  return (
    <div>
      <div>
        <Link to="http://accelerate-bank.com/">
          <img className="logo-header" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="tab">
        <button
          className="tablinks"
          onClick={(event) => openTab(event, "Features")}
        >
          Features
        </button>
        <button
          className="tablinks"
          onClick={(event) => openTab(event, "Use Cases")}
        >
          Use cases
        </button>
        <button className="tablinks" onClick={(event) => openTab(event, "App")}>
          App Prototype
        </button>
      </div>
      <div id="Features" className="tabcontent">
        <Features/>
      </div>
      <div id="Use Cases" className="tabcontent">
        <UseCases/>
      </div>
      <div id="App" className="tabcontent">
        <FigmaPrototype />
      </div>
    </div>
  );
}

function openTab(evt, SectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(SectionName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM


});

export default Tabs;
