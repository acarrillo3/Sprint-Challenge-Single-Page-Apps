import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
margin: 0 34% 0 36%;
`
const Contain = styled.span`
margin: 0 34% 0 36%;
font-size: 1.5rem;
text-decoration: none;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Contain>
          <Link exact to="/characters">Character List</Link>
        </Contain>
        {/* <Contain>
          <Link exact to="/locations">Location List</Link>
        </Contain> */}
      </header>
    </section>
  );
}
