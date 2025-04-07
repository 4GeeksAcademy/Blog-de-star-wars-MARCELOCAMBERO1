import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../pagesCss/Favorites.css";

const Favorites = () => {
  const { store } = useGlobalReducer();

  // Agrupar por tipo
  const groupedFavorites = {
    planets: store.favorites.filter(item => item.type === "planets"),
    people: store.favorites.filter(item => item.type === "people"),
    starships: store.favorites.filter(item => item.type === "starships"),
  };

  return (
    <div className="favorites-wrapper">
      <h2 className="favorites-title">Estos son los favoritos:</h2>

      {/* PLANETS */}
      {groupedFavorites.planets.length > 0 && (
        <>
          <h3 className="favorites-subtitle">🌍 Planets</h3>
          <div className="favorites-grid">
            {groupedFavorites.planets.map((item, index) => (
              <Link
                to={`/${item.type}/${item.uid}`}
                className="favorite-card"
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* PEOPLE */}
      {groupedFavorites.people.length > 0 && (
        <>
          <h3 className="favorites-subtitle">🧑 People</h3>
          <div className="favorites-grid">
            {groupedFavorites.people.map((item, index) => (
              <Link
                to={`/${item.type}/${item.uid}`}
                className="favorite-card"
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* STARSHIPS */}
      {groupedFavorites.starships.length > 0 && (
        <>
          <h3 className="favorites-subtitle">🚀 Starships</h3>
          <div className="favorites-grid">
            {groupedFavorites.starships.map((item, index) => (
              <Link
                to={`/${item.type}/${item.uid}`}
                className="favorite-card"
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
