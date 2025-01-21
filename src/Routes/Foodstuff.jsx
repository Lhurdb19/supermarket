import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { foodStuff } from "../Jsons/foodstuff";
import { CartContext } from "../CartContext/cartContext";
import { useFavorites } from "./FavoriteData/favoritecontext";
import { ToastContainer, toast } from "react-toastify";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function Foodstuff() {
  const { addItemToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const notifyAdd = () => toast.success("Product added successfully to cart!");

  const handleAddToCart = (foodstuff) => {
    addItemToCart(foodstuff);
    notifyAdd();
  };

  const filteredFoodstuff = foodStuff.filter((foodstuff) =>
    foodstuff.name.toLowerCase()
  );

  const handleFavorites = (item) => {
    if (!isFavorite(item.id)) {
      addToFavorites(item); // Corrected from removeFromFavorites to addToFavorites
      toast.success("Product added to favorites!");
    } else {
      removeFromFavorites(item.id);
      toast.success("Product removed from favorites!");
    }
  };

  return (
    <div className="foodstuff-component">
      <h2>FOODSTUFF</h2>
      <div className="foodstuff-list">
        {filteredFoodstuff.map((foodstuff) => (
          <div key={foodstuff.id} className="foodstuff-info">
            <Link to={`/foodstuffs/${foodstuff.id}`} className="foodstuff-image">
              <img src={foodstuff.image[0]} alt={foodstuff.name} />
            </Link>

            <div className="foodstuff-text">
              <h3>{foodstuff.name}</h3>
              <h4>
                {foodstuff.price
                  ? foodstuff.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    })
                  : ''}
              </h4>
              <p>In Stock: {foodstuff.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
              <button
                style={{ border: 'none', cursor: 'pointer', fontSize: '17px' }}
                onClick={() => handleFavorites(foodstuff)} // Passing foodstuff object here
              >
                {isFavorite(foodstuff.id) ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
              <div className="btn">
                <button
                  onClick={() => handleAddToCart(foodstuff)}
                  disabled={foodstuff.inStock === 'No'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" className="toast" />
    </div>
  );
}
