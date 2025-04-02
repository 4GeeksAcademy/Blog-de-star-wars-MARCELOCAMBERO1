import React, { useEffect, useState } from "react";
import CardPlanet from "./CardPlanet";

const AllPlanets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, []);
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {planets.map((planet, index) => (
        <CardPlanet 
          key={index} 
          name={planet.name} 
          diameter={planet.diameter} 
          climate={planet.climate} 
          gravity={planet.gravity}
          terrain={planet.terrain}
          population={planet.population}
        />
      ))}
    </div>
  );
};

export default AllPlanets;
