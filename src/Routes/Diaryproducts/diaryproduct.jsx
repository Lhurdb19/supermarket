import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { diaryProduct } from "../../Jsons/diaryProduct";
import { CartContext } from "../../CartContext/cartContext";
import { useFavorites } from "../FavoriteData/favoritecontext";
import { ToastContainer, toast } from "react-toastify";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./Diaryproduct.css";

function Diaryproduct() {
  const { addItemToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const notifyAdd = () => toast.success("Product added successfully to cart!");

  const handleAddToCart = (dailyproduct) => {
    addItemToCart(dailyproduct);
    notifyAdd();
  };

  const filteredDaily = diaryProduct.filter((dailyproduct) =>
    dailyproduct.name.toLowerCase()
  );

  const handleFavoritesProduct = (item) => {
    if (!isFavorite(item.id)) {
      addToFavorites(item);
      toast.success("Product added successfully to wishlist!");
    } else {
      removeFromFavorites(item.id);
      toast("Product removed successfully from wishlist!");
    }
  };


  return (
  <div className="dailyproduct-component">
    <h2>DAILY PRODUCTS</h2>
    <div className="dailyproduct-list">
      {filteredDaily.map((dailyproduct) => (
        <div key={dailyproduct.id} className="dailyproduct-info">
          <Link to={`/dailyproducts/${dailyproduct.id}`} className="dailyproduct-image">
          <img src={dailyproduct.image[0]} alt={dailyproduct.name} />
          </Link>

          <div className="dailyproduct-text">
            <h3>{dailyproduct.name}</h3>
            <h4>
              {dailyproduct.price
              ? dailyproduct.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })
            : ''};
            </h4>
            <p>In stock:{dailyproduct.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>

            <button style={{border: 'none', cursor: 'pointer', fontSize: '17px'}} onClick={() => handleFavoritesProduct(dailyproduct)}>{isFavorite(dailyproduct.id) ? <MdFavorite style={{color: '#006f1c'}} /> : <MdFavoriteBorder />}</button>
            <div className="btn">
              <button onClick={()=> handleAddToCart(dailyproduct)} disabled={dailyproduct.inStock === 'No'}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <ToastContainer position='top-right' autoClose={2000} hideProgressBar={false} closeButton={true}/>
  </div>
  )
}

export default Diaryproduct;
