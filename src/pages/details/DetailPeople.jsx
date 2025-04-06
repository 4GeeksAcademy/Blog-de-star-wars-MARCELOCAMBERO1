import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./DetailView.css"
import useGlobalReducer from "../../hooks/useGlobalReducer";

const DetailPeople = () => {

  const { people_id } = useParams()     //Con esta linea lo que hago es extraer el valor dinamico de la url 
  // Para que esto funcione lo que va dentro de las llaves se tiene que llamar igual a lo que va
  // en el routes.jsx despues de los ":"

  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);
  const { store, dispatch } = useGlobalReducer()
  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(`https://swapi.tech/api/people/${people_id}`); //Cuando quiero meter JS dentro de un string debo utilizar las comillas invertidas, PARA QUE ME DEJE PONER EL SIMBOLO DEL DOLAR
        const data = await response.json();
        console.log(data)

        setPeople(data.result.properties);
        // console.log(data.results);

        setLoading(false)
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);


  useEffect(() => {

    if (store.favorites.find(favorite => favorite.name === people.name)) {
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
            <h3>{people.name}</h3>
          </div>
          <div className="detail-card-columns">
            <div className="detail-card-column-l">
              <span className="detail-card-property">Name: {people.name}</span>
              <span className="detail-card-property">Gender: {people.gender}</span>
              <span className="detail-card-property">Skin Color: {people.skin_color}</span>
              <span className="detail-card-property">Hair Color: {people.hair_color}</span>
            </div>
            <div className="detail-card-column-r">
              <span className="detail-card-property">Height: {people.height}</span>
              <span className="detail-card-property">Eye Color: {people.eye_color}</span>
              <span className="detail-card-property">Year of birth: {people.birth_year}</span>
            </div>

            <div className="detail-card-buttons">
              {!isInFavorites ? (
                <button className="detail-card-button-add btn btn-success"
                  onClick={() => {
                    dispatch({
                      type: 'add_to_favorites',
                      payload: { name: people.name, item: {name: people.name, uid: people_id, type: "people"} }
                    });
                  }}>
                  Add to favorites
                </button>
              ) : (
                <button className="detail-card-button-delete btn btn-danger"
                  onClick={() => {
                    dispatch({
                      type: 'delete_from_favorites',
                      payload: people.name
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

export default DetailPeople;
