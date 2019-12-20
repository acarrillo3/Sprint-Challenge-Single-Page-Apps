import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <h1>Name: {props.name} </h1>
      <h2>Species: {props.species} </h2>
      <h2> From: {props.from} </h2>
    </div>
  )
}
