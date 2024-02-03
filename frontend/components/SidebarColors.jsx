import React from "react";
// import { Link } from "react-router-dom";

function SidebarColors(props) {
  return (
    <div id="mySidenav" class="sidenav">
      <a href="/UseCasesField" id="about">
        About
      </a>
      <a href="/" id="blog">
        Features
      </a>
      <a href="/UseCasesField" id="projects">
        Use Cases
      </a>
      <a href="#" id="contact">
        Contact
      </a>
    </div>
  );
}

export default SidebarColors;
