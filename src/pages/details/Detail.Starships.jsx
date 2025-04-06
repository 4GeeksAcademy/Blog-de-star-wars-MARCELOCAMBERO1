import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./DetailView.css"
import useGlobalReducer from "../../hooks/useGlobalReducer";

const DetailStarship = () => {

  const { starship_id } = useParams()     //Con esta linea lo que hago es extraer el valor dinamico de la url 
  // Para que esto funcione lo que va dentro de las llaves se tiene que llamar igual a lo que va
  // en el routes.jsx despues de los ":"

  const [starship, setStarship] = useState({});
  const [loading, setLoading] = useState(true);
  const { store, dispatch } = useGlobalReducer()
  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    const fetchStarship = async () => {

      try {
        const response = await fetch(`https://swapi.tech/api/starships/${starship_id}`); //Cuando quiero meter JS dentro de un string debo utilizar las comillas invertidas, PARA QUE ME DEJE PONER EL SIMBOLO DEL DOLAR
        const data = await response.json();
        console.log(data)

        setStarship(data.result.properties);
        // console.log(data.results);

        setLoading(false)
      } catch (error) {
        console.error("Error fetching Starship:", error);
      }
    };

    fetchStarship();
  }, []);


  useEffect(() => {

    if (store.favorites.find(favorite => favorite.name === starship.name)) {
      setIsInFavorites(true)
    } else {
      setIsInFavorites(false)
    }

  })


  if (loading) {
    return (
      <>
        <div className="detail-view">
          <div className="detail-card">
            <h3>Loading Starships...</h3>
          </div>
        </div>

      </>
    )
  }

  return (

    // // aca tengo que usar el {Starship_id} dentro del url dentro de la funcion fetch para traerme el Starshipa especifico de la API
    <>
      <div className="detail-view">
        <div className="detail-card">
          <div className="detail-card-title">
            <h3>{starship.name}</h3>
          </div>
          <div className="detail-card-columns">
            <div className="detail-card-column-l">
              <span className="detail-card-property">Name: {starship.name}</span>
              <span className="detail-card-property">Created: {starship.created}</span>
              <span className="detail-card-property">Cargo Capacity: {starship.cargo_capacity}</span>
              <span className="detail-card-property">Passengers: {starship.passengers}</span>
            </div>
            <div className="detail-card-column-r">
              <span className="detail-card-property">Max atmosphering speed: {starship.max_atmosphering_speed}</span>
              <span className="detail-card-property">Model: {starship.model}</span>
              <span className="detail-card-property">Manufacturer: {starship.manufacturer}</span>
            </div>

            <div className="detail-card-buttons">
              {!isInFavorites ? (
                <button className="detail-card-button-add btn btn-success"
                  onClick={() => {
                    dispatch({
                      type: 'add_to_favorites',
                      payload: { name: starship.name, item: {name: starship.name, uid: starship_id, type: "Starship"} }
                    });
                  }}>
                  Add to favorites
                </button>
              ) : (
                <button className="detail-card-button-delete btn btn-danger"
                  onClick={() => {
                    dispatch({
                      type: 'delete_from_favorites',
                      payload: starship.name
                    })
                  }}>
                  Delete from favorites
                </button>
              )}
            </div>


          </div>

        </div>

      </div>

    </>
  )
}

export default DetailStarship;
