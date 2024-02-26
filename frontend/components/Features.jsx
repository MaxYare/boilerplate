import React from "react";
import Card from "./Card";


const features = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-15min:9?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,    
    name: "3-Min Money",
    meaning: (
      <span>
        Set up
        <div className="tooltip">
          " your e-money "<span className="tooltiptext">Tooltip text</span>
        </div>
        faster than your gmail account!
      </span>
    ),
    link: "http://youtube.com",
  },
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-Vaccine:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowfullscreen></iframe>,
    name: "No Web Needed",
    meaning: "No internet? No problem! Send coins with the power of texting.",
    link: "http://google.com",
  },
  {
    id: 3,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" allowfullscreen></iframe>,
    name: "Send Coins to Your FB Friend",
    meaning:
      "Send coins to your pals via mobile number, email, or give Mark Zuckerberg a nudge on Facebook.",
  },
  {
    id: 4,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "Undo Transaction",
    meaning:
      "Oops, sent coins to the wrong address? No worries, hit the 'Dipute' button and blame it on your cat.",
  },
  {
    id: 5,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "Shake&Pay in Store",
    meaning:
      "Shake your phones like you're in a dance-off and watch the magic of payment happen.",
  },
  {
    id: 6,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "Reward Your Holders",
    meaning:
      "Customize rewards for your business coins, because who doesn't want a free pet unicorn.",
  },
];


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
      <dl className="dictionary">{features.map(createCard)}</dl>
    </div>
  );
}
export default CardsField;
