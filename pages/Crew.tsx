import React from "react";
import CrewImg from "../components/CrewImg";
type Props = {};

function Crew({}: Props) {
  return (
    <div>
      <h1>02 Meet your crew</h1>
      <section>
        <h2>Commander</h2>

        <h3>Commander.name</h3>

        <p>text</p>
        <CrewImg />
      </section>
    </div>
  );
}

export default Crew;
