import React from "react";
import CrewImg from "../CrewImg";

type Props = {};

function Destination({}: Props) {
  return (
    <section>
      <h1>01 Pick your destination</h1>

      <CrewImg />
      <ul>
        <li>Planets</li>
      </ul>
      <h2> Current Planet</h2>
      <p> Current planet text</p>

      <ul>
        <li> Avg. distance</li>
        <li>Est. travel time 3 years</li>
      </ul>
    </section>
  );
}

export default Destination;
