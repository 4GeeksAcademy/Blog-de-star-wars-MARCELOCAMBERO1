import React from "react";

const CardPlanet = ({ name, diameter, climate, gravity, terrain, population }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CardPlanet;