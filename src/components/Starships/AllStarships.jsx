import React, { useEffect, useState } from "react";
import CardStarship from "./CardStarship";

const AllStarships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch("https://swapi.tech/api/starships/");
        const data = await response.json();
        setStarships(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {starships.map((starship, index) => (
        <CardStarship
          key={index}
          name={starship.name}
          id={starship.uid}
        />
      ))}
    </div>
  );
};

export default AllStarships;
