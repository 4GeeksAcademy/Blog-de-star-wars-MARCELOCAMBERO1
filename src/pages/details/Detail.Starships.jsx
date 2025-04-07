import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailView.css";
import useGlobalReducer from "../../hooks/useGlobalReducer";

const DetailStarship = () => {
  const { starship_id } = useParams();
  const [starship, setStarship] = useState({});
  const [loading, setLoading] = useState(true);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await fetch(`https://swapi.tech/api/starships/${starship_id}`);
        const data = await response.json();
        setStarship(data.result.properties);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching starship:", error);
      }
    };

    fetchStarship();
  }, []);

  useEffect(() => {
    setIsInFavorites(
      store.favorites.some(fav => fav.name === starship.name && fav.type === "starships")
    );
  }, [store.favorites, starship.name]);

  if (loading) {
    return (
      <div className="detail-view">
        <div className="detail-card">
          <h3>Loading Starship...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-view">
      <div className="detail-card">
        <div className="detail-card-title">
          <h3>{starship.name}</h3>
        </div>
        <div className="detail-card-columns">
          <div className="detail-card-column-l">
            <span className="detail-card-property">Model: {starship.model}</span>
            <span className="detail-card-property">Class: {starship.starship_class}</span>
            <span className="detail-card-property">Crew: {starship.crew}</span>
            <span className="detail-card-property">Length: {starship.length}</span>
          </div>
          <div className="detail-card-column-r">
            <span className="detail-card-property">Passengers: {starship.passengers}</span>
            <span className="detail-card-property">Speed: {starship.max_atmosphering_speed}</span>
            <span className="detail-card-property">Hyperdrive: {starship.hyperdrive_rating}</span>
          </div>

          <div className="detail-card-buttons">
            {!isInFavorites ? (
              <button className="btn btn-success"
                onClick={() => {
                  dispatch({
                    type: 'add_to_favorites',
                    payload: {
                      name: starship.name,
                      item: { name: starship.name, uid: starship_id },
                      itemType: "starships"
                    }
                  });
                }}>
                Add to favorites
              </button>
            ) : (
              <button className="btn btn-danger"
                onClick={() => {
                  dispatch({
                    type: 'delete_from_favorites',
                    payload: starship.name
                  });
                }}>
                Delete from favorites
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStarship;
