import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import CardFavorite from '../components/CardFavorite';


function Favorites() {
  const { store, dispatch } = useGlobalReducer()

  console.log(store.favorites)

  return (
    <div>
      <h1>Estos son los favoritos:</h1>
      <div className="row">
        {store.favorites?.map((favorite, index) => {
          return (
            <div className="col-3" key={index}>
              <CardFavorite
                name={favorite.name}
                id={favorite.uid}
                type={favorite.type}
              />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Favorites