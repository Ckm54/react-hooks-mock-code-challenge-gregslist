import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {

  const [isFavorite, setIsFavorite] = useState(true)

  function handleFavorite() {
    setIsFavorite(!isFavorite)
  }

  function handleDeleteClick(){
    onDeleteItem(item)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
