import React, { useState } from "react";

export default function SearchForm(props) {
 
  const handleChanges = e => {
    props.setQuery(e.target.value)
  }

  return (
    <section className="search-form">
     {/* // Add a search form here */}
     <label htmlFor="search">Search: </label>
     <input 
      type="text"
      placeholder="Search characters.."
      name="search"
      id="search"
      onChange={handleChanges} />
    </section>
  );
}
