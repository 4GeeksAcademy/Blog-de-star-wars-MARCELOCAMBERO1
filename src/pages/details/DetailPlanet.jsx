import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./DetailView.css"
import useGlobalReducer from "../../hooks/useGlobalReducer";

const DetailPlanet = () => {

  const { planet_id } = useParams()     //Con esta linea lo que hago es extraer el valor dinamico de la url 
  // Para que esto funcione lo que va dentro de las llaves se tiene que llamar igual a lo que va
  // en el routes.jsx despues de los ":"

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const { store, dispatch } = useGlobalReducer()
  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    const fetchPlanet = async () => {

      try {
        const response = await fetch(`https://swapi.tech/api/planets/${planet_id}`); //Cuando quiero meter JS dentro de un string debo utilizar las comillas invertidas, PARA QUE ME DEJE PONER EL SIMBOLO DEL DOLAR
        const data = await response.json();
        console.log(data)

        setPlanet(data.result.properties);
        // console.log(data.results);

        setLoading(false)
      } catch (error) {
        console.error("Error fetching planet:", error);
      }
    };

    fetchPlanet();
  }, []);


  useEffect(() => {

    if (store.favorites.find(favorite => favorite.name === planet.name)) {
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
            <h3>Loading Planets...</h3>
          </div>
        </div>

      </>
    )
  }

  return (

    // // aca tengo que usar el {planet_id} dentro del url dentro de la funcion fetch para traerme el planeta especifico de la API
    <>
      <div className="detail-view">
        <div className="detail-card">
          <div className="detail-card-title">
            <h3>{planet.name}</h3>
          </div>
          <div className="detail-card-columns">
            <div className="detail-card-column-l">
              <span className="detail-card-property">Climate: {planet.climate}</span>
              <span className="detail-card-property">Diameter: {planet.diameter}</span>
              <span className="detail-card-property">Gravity: {planet.gravity}</span>
              <span className="detail-card-property">Orbital Period: {planet.orbital_period}</span>
            </div>
            <div className="detail-card-column-r">
              <span className="detail-card-property">Population: {planet.population}</span>
              <span className="detail-card-property">Rotation Period: {planet.rotation_period}</span>
              <span className="detail-card-property">Surface Water: {planet.surface_water}</span>
              <span className="detail-card-property">Terrain: {planet.terrain}</span>
            </div>

            <div className="detail-card-buttons">
              {!isInFavorites ? (
                <button className="detail-card-button-add btn btn-success"
                  onClick={() => {
                    dispatch({
                      type: 'add_to_favorites',
                      payload: { name: planet.name, item: {name: planet.name, uid: planet_id, type: "planet"} }
                    });
                  }}>
                  Add to favorites
                </button>
              ) : (
                <button className="detail-card-button-delete btn btn-danger"
                  onClick={() => {
                    dispatch({
                      type: 'delete_from_favorites',
                      payload: planet.name
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

export default DetailPlanet;
