import React from 'react';
import { useFavorites } from './favoritecontext';
import { ToastContainer, toast } from 'react-toastify';
import './Favorite.css';

export default function Favoritelist() {
  const { favorites, removeFromFavorites } = useFavorites(); // Destructure removeFromFavorites from the context


  const handleRemove = (id) => {
    removeFromFavorites(id); // Call removeFromFavorites with the item's id
    toast("Product removed from favorites!");
  };

  return (
    <div className="favorite-component">
      <h2>Favorite</h2>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <li key={item.id} className="favorite-item">
              <div className="favorite-info">
                <h3>Product Name: {item.name}</h3>
                <img src={item.image} alt={item.name} className="favorite-image" />
                <h4>
                  Unit Price:
                  {item.price
                    ? item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    : ""}
                </h4>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove from Favorite
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>Your favorites list is empty.</p>
        )}
      </ul>
      <ToastContainer position="top-right" className="toast" />
    </div>
  );
}
