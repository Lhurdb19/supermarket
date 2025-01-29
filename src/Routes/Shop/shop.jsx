import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { bestProducts } from "../../Jsons/bestProduct";
import { foodStuff } from "../../Jsons/foodstuff";
import { personalCare } from "../../Jsons/personalCare";
import { diaryProduct } from "../../Jsons/diaryProduct";
import { CartContext } from "../../CartContext/cartContext";
import { useFavorites } from "../FavoriteData/favoritecontext";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./Shop.css";

function Shop() {
  const { addItemToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const notifyAdd = () => toast.success("Product added successfully to cart!");

  const handleAddToCart = (shop) => {
    addItemToCart(shop);
    notifyAdd();
  };

// Flatten all product arrays and apply filtering
const allProducts = [bestProducts, foodStuff, diaryProduct, personalCare].flat();
const filteredShop = allProducts.filter((shop) => shop.name && shop.name.toLowerCase());


  const handleAddFavorite = (item) => {
    if (!isFavorite(item.id)) {
      addToFavorites(item);
      toast.success("Product added  successfully to wishlist!");
    } else {
      removeFromFavorites(item.id);
      toast("Product removed successfully from wishlist!");
    }
  };

  return (
    <>
  <div className="shop-component">
      <h2>GENERAL PRODUCTS</h2>
      <div className="shop-list">
        {
          filteredShop.map((shop) => (
            <div key={shop.id} className="shop-info">
            <Link to={`/shops/${shop.id}`} className="shop-image">
              <img src={shop.image[0]} alt={shop.name} />
            </Link>

            <div className="shop-text">
              <h3>{shop.name}</h3>
              <h4>
                {shop.price
                ? shop.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }) : ''}
              </h4>
              <p>In stock: {shop.inStock === 'Yes' ? 'Available' : "Out of stock"}</p>
              <button style={{border: 'none', cursor: 'pointer', fontSize: '17px'}} onClick={() => handleAddFavorite(shop)}>{isFavorite(shop.id) ? <MdFavorite /> : <MdFavoriteBorder /> }</button>
              <div className="btn">
                <button onClick={() => handleAddToCart(shop)} disabled={shop.inStock === 'No'}>Add to Cart</button>
              </div>
            </div>
            </div>
          ))
        }
      </div>
      <ToastContainer position="top-right" autoClose= {2000} hideProgressBar={false} closeButton={true}/>
    </div>
  </>
  )
}

export default Shop;
