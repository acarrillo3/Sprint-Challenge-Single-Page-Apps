import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard  from "./CharacterCard";
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const characterList = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
      setCharacters(characterList);
    })
    .catch(error => {
      console.log(error);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery}/>
      <h2>Character List: </h2>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character => (
        <CharacterCard 
          key={character.name}
          name={character.name}
          species={character.species}
          from={character.origin.name}
        />
      ))}
    </section>
  );
}
