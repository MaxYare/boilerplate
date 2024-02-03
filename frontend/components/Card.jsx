import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="video" role="img" aria-label="Tense Biceps">
          {props.video}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <p></p>
      {/* <a href={props.link} target="_blank">
        <button>VIDEO</button>
      </a>
      <p></p>
      <button>Description+{props.ID}</button> */}
    </div>
  );
}

export default Card;
