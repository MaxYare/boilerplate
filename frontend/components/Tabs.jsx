import React from "react";
import FeaturesField from "./FeaturesField";
import UseCasesField from "./UseCasesField";
import Figma from "./Figma";
import logo from "../assets/AceB logo.png";
import { Link } from "react-router-dom";
import FigmaPrototype from "./Figma";

function Tabs() {
  return (
    <div>
      <div>
        <Link to="http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai">
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
      {/* <div id="Features" className="tabcontent">
        <FeaturesField />
      </div> */}
      <div id="Use Cases" className="tabcontent">
        <UseCasesField />
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
