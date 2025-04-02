import React from "react"
import { useParams } from "react-router-dom";

const DetailPlanet = () => {

    const {planet_id} = useParams()     //Con esta linea lo que hago es extraer el valor dinamico de la url 
                                        // Para que esto funcione lo que va dentro de las llaves se tiene que llamar igual a lo que va
                                        // en el routes.jsx despues de los ":"

    return (

        // aca tengo que usar el {planet_id} dentro del url dentro de la funcion fetch para traerme el planeta especifico de la API
        <>
        <h1>Hola soy el planeta {planet_id}</h1>  
        </>
    )
}

export default DetailPlanet;