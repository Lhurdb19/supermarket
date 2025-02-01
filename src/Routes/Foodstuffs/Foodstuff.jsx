import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { foodStuff } from "../../Jsons/foodstuff";
import { CartContext } from "../../CartContext/cartContext";
import { useFavorites } from "../FavoriteData/favoritecontext";
import { useRecentViews } from "../RecentView/recentViewContext";
import { ToastContainer, toast } from "react-toastify";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./Foodstuff.css";

export default function Foodstuff({ item }) {
  const { addItemToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToRecentViews } = useRecentViews();
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
      addToFavorites(item);
      toast.success("Product added to favorites!");
    } else {
      removeFromFavorites(item.id);
      toast("Product removed from favorites!");
    }
  };

  React.useEffect(() => {
    if (item) {
      addToRecentViews(item);
    }
  }, [item, addToRecentViews]);

  return (
    <div className="foodstuff-component">
      <h2>FOODSTUFF</h2>
      <div className="foodstuff-list">
        {filteredFoodstuff.map((foodstuff) => (
          <div key={foodstuff.id} className="foodstuff-info">
            <Link to={`/foodstuffs/${foodstuff.id}`} className="foodstuff-image">
              <img
                src={Array.isArray(foodstuff.image) && foodstuff.image[0] ? foodstuff.image[0] : "/path/to/placeholder.jpg"}
                alt={foodstuff.name}
              />
            </Link>
            <div className="recent">
              {/* <img src={item?.image || "/path/to/placeholder.jpg"} alt={item?.name || "Placeholder"} /> */}
              {/* <h4>{item?.name || "No name available"}</h4> */}
            </div>
            <div className="foodstuff-text">
              <h3>{foodstuff.name}</h3>
              <h4>
                {foodstuff.price
                  ? foodstuff.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : ""}
              </h4>
              <p>
                In Stock: {foodstuff.inStock === "Yes" ? "Available" : "Out of stock"}
              </p>
              <button
                style={{ border: "none", cursor: "pointer", fontSize: "17px" }}
                onClick={() => handleFavorites(foodstuff)}
              >
                {isFavorite(foodstuff.id) ? <MdFavorite style={{color: '#006f1c'}} /> : <MdFavoriteBorder />}
              </button>
              <div className="btn">
                <button
                  onClick={() => handleAddToCart(foodstuff)}
                  disabled={foodstuff.inStock === "No"}
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
