import React from "react";
import Card from "./Card";
import Features from "./FeaturesFunny";


function createCard(props) {
  return (
    <Card
      key={props.id}
      video={props.video}
      name={props.name}
      description={props.meaning}
      ID={props.id}
      link={props.link}
    />
  );
}

function CardsField() {
  return (
    <div>
      "Hello, world!"
      {/* <dl className="dictionary">{Features.map(createCard)}</dl> */}
    </div>
  );
}
export default CardsField;
