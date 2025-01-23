import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "./favoritecontext";
import { CartContext } from "../../CartContext/cartContext";
import { ToastContainer, toast } from "react-toastify";
import { HiMiniXMark } from "react-icons/hi2";
import "./Favorite.css";

function ItemModal({ item, onClose }) {
  const { addItemToCart } = useContext(CartContext);

  if (!item) return null;

  const handleAddToCart = (item) => {
    addItemToCart(item);
    toast.success("Product added successfully to cart");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-image">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        </div>
        <div className="modal-text">
          <p className="description">{item.description}</p>
          <p>
            Price:{" "}
            {item.price
              ? item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : "N/A"}
          </p>
          <p>
            Stock Status:{" "}
            {item.inStock === "Yes" ? "Available" : "Out of stock"}
          </p>
          <button className="add-button" onClick={() => handleAddToCart(item)} disabled={item.inStock === 'No'}>Add to cart</button>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Favoritelist() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null); // For modal

  const handleRemove = (id) => {
    removeFromFavorites(id);
    toast("Product removed from favorites!");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="favorite-component">
      <h2>Wishlist</h2>
      <div className="home-wishlist">
        <Link to={"/"}>Home</Link>
        <p>/</p>
        <p>Wishlist</p>
      </div>
      {favorites.length > 0 ? (
        <div className="favorite-list">
          <div className="favorite-header">
            <span>Item Image</span>
            <span>Item Name</span>
            <span>Unit Price</span>
            <span>In Stock</span>
          </div>
          <ul>
            {favorites.map((item) => (
              <li key={item.id} className="favorite-item">
                <div className="favorite-row">
                  {/* Item Image */}
                  <div className="favorite-image">
                    <div className="favorite-remove">
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(item.id)}
                      >
                        <HiMiniXMark className="remove" />
                      </button>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="favorite-image"
                    />
                  </div>

                  {/* Item Name */}
                  <div className="favorite-name">
                    <button
                      className="item-name-btn"
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name}
                    </button>
                  </div>

                  {/* Unit Price */}
                  <div className="favorite-price">
                    <p>
                      {item.price
                        ? item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                        : ""}
                    </p>
                  </div>

                  {/* In Stock */}
                  <div className="favorite-stock">
                    <p>
                      {item.inStock === "Yes" ? "Available" : "Out of stock"}
                    </p>
                  </div>

                  {/* Remove Item */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="empty-container">Your favorites list is empty.</p>
      )}
      <ItemModal item={selectedItem} onClose={handleCloseModal} />
      <ToastContainer position="top-right" className="toast" />
    </div>
  );
}
