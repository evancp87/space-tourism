import React from "react";
import TechImg from "../components/TechImg";
type Props = {};

function Technology({}: Props) {
  return (
    <section>
      <h1>03 Space launch 101</h1>

      <TechImg />
      <ul>
        <li>Planets</li>
      </ul>
      <h2> Current Planet</h2>
      <p> Current planet text</p>

      <ul>
        <li> Avg. distance</li>
        <li>Est. travel time 3 years</li>
      </ul>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <h2>The terminology...</h2>
      <h3>vehicle.name</h3>

      <p>vehicle.text</p>
    </section>
  );
}

export default Technology;
