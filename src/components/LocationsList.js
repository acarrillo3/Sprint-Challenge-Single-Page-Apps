// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import LocationCard from "./LocationCard";

// export default function LocationsList() {
//     const [locations, setLocation] = useState([]);
//     const [query, setQuery] = useState("");

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     axios.get('https://rickandmortyapi.com/api/location/')
//     .then(response => {
//       const LocationList = response.data.results.filter(location => location.name.toLowerCase().includes(query.toLowerCase()))
//       setLocation(LocationList);
//     })
//     .catch(error => {
//       console.log(error);
//     })
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, [query]);

//   return (
//     <section className="character-list">
//       <SearchForm setQuery={setQuery}/>
//       <h2>Location List: </h2>
//       {/* <h2>TODO: `array.map()` over your state here!</h2> */}
//       {locations.map(location => (
//         <LocationCard 
//           key={location.name}
//           name={location.name}
//           type={location.type}          
//           dimension={location.dimension}
//         />
//       ))}
//     </section>
//   );
// }

