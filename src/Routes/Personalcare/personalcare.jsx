import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { personalCare } from '../../Jsons/personalCare';
import { CartContext } from '../../CartContext/cartContext';
import { useFavorites } from '../FavoriteData/favoritecontext';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import './Personalcare.css';

function Personalcare() {
  const { addItemToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const notifyAdd = () => toast.success('Product added successfully to cart!');

  const handleAddToCart = (personal) => {
    addItemToCart(personal);
    notifyAdd();
  };

  const filteredProducts = personalCare.filter((personal) => 
  personal.name.toLowerCase()
);

const toggleAddFavorites = (item) => {
  if(!isFavorite(item.id)) {
    addToFavorites(item);
    toast.success('Product added successfully to wishlist!')
  } else{
    removeFromFavorites(item.id);
    toast('Product removed successfully from wishlist!')
  }
}

  return (
    <div className='personalcare-component'>
      <div className="personalcare-list">
        {filteredProducts.map((personal) => (
          <div key={personal.id} className="personalcare-info">
            <Link to={`/personals/${personal.id}`} className='personal-image'>
            <img src={personal.image[0]} alt={personal.name} />
            </Link>

            <div className="personalcare-text">
              <h3>{personal.name}</h3>
              <h4>
                {
                  personal.price 
                  ? personal.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })
                  : '' }
              </h4>
              <p >In stock: {personal.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
              <button style={{border: 'none', cursor: 'pointer', fontSize: '17px'}} onClick={() => toggleAddFavorites(personal)}>{isFavorite(personal.id) ? <MdFavorite style={{color: '#006f1c'}} /> : <MdFavoriteBorder />}</button>
              <div className="btn">
                <button onClick={() => handleAddToCart(personal)} disabled={personal.inStock === 'No'}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position='top-right' autoClose={2000} hideProgressBar={false} closeButton={true}/>
    </div>
  )
}

export default Personalcare;
