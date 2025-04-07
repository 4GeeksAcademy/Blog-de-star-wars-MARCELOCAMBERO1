import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailView.css";
import useGlobalReducer from "../../hooks/useGlobalReducer";

const DetailPeople = () => {
  const { people_id } = useParams();
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`https://swapi.tech/api/people/${people_id}`);
        const data = await response.json();
        setPerson(data.result.properties);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };

    fetchPerson();
  }, []);

  useEffect(() => {
    setIsInFavorites(
      store.favorites.some(fav => fav.name === person.name && fav.type === "people")
    );
  }, [store.favorites, person.name]);

  if (loading) {
    return (
      <div className="detail-view">
        <div className="detail-card">
          <h3>Loading Character...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-view">
      <div className="detail-card">
        <div className="detail-card-title">
          <h3>{person.name}</h3>
        </div>
        <div className="detail-card-columns">
          <div className="detail-card-column-l">
            <span className="detail-card-property">Birth Year: {person.birth_year}</span>
            <span className="detail-card-property">Gender: {person.gender}</span>
            <span className="detail-card-property">Height: {person.height}</span>
            <span className="detail-card-property">Mass: {person.mass}</span>
          </div>
          <div className="detail-card-column-r">
            <span className="detail-card-property">Hair Color: {person.hair_color}</span>
            <span className="detail-card-property">Eye Color: {person.eye_color}</span>
            <span className="detail-card-property">Skin Color: {person.skin_color}</span>
          </div>

          <div className="detail-card-buttons">
            {!isInFavorites ? (
              <button className="btn btn-success"
                onClick={() => {
                  dispatch({
                    type: 'add_to_favorites',
                    payload: {
                      name: person.name,
                      item: { name: person.name, uid: people_id },
                      itemType: "people"
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
                    payload: person.name
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

export default DetailPeople;
