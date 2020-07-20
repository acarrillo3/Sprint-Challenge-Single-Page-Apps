import React from "react";
import styled from "styled-components";

const BodyCard = styled.div`
width: 40%;
background-color: #FAACA8;
border-radius: 2%;
box-shadow: 9px 6px 15px grey;
font-size: 1rem;
padding: 2%;
margin: 0 45% 5% 27%;
`

export default function CharacterCard(props) {
  return(
    <BodyCard>
      <h1>Name: {props.name} </h1>
      <h2>Species: {props.species} </h2>
      <h2> From: {props.from} </h2>
    </BodyCard>
  )
}
