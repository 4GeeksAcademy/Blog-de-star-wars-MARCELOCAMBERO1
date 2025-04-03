import React from 'react'
import { useNavigate } from "react-router-dom";

function CardFavorite({ name, id, type }) {
  const navigate = useNavigate()

  return (
    <div className="p-4 border rounded-lg shadow-md" onClick={() => { navigate(`/${type}/${id}`) }}>
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
  );
}

export default CardFavorite