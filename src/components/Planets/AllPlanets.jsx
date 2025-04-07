import React, { useEffect, useState } from "react";
import CardPlanet from "./CardPlanet";

const AllPlanets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.tech/api/planets/");
        const data = await response.json();
        setPlanets(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div className="all-planets-scroll">
      {planets.map((planet, index) => (
        <CardPlanet
          key={index}
          name={planet.name}
          id={planet.uid}
        />
      ))}
    </div>
  );
  
};

export default AllPlanets;
