import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { bestProducts } from '../Jsons/bestProduct';
import { CartContext } from '../CartContext/cartContext';
import { ToastContainer, toast } from 'react-toastify';

export default function Provision() {
  const { addItemToCart } = useContext(CartContext); // Access addItemToCart correctly
  const notifyAdd = () => toast.success("Product added successfully to cart!");


  const handleAddToCart = (provision) => {
    addItemToCart(provision); // Use addItemToCart from context
    notifyAdd();
  };

  const filteredProvisions = bestProducts.filter((provision) =>
    provision.name.toLowerCase()
  );
  
  return (
    <div className='provision-component'>
      <h3>Available Items</h3>
      <div className="provision-list">
        {filteredProvisions.map((provision) => (
          <div key={provision.id} className="provision-info">
            <Link to={`/provisions/${provision.id}`}>
              <img src={provision.image} alt={provision.name} />
            </Link>
            <div className="provision-text">
              <h3>{provision.name}</h3>
              <h4>
                {provision.price
                  ? provision.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }) 
                  : ''}
              </h4>
              <p>In stock: {provision.inStock === 'Yes' ? 'Available' : 'Out of stock' }</p>
              <div className="btn">
                <button onClick={() => handleAddToCart(provision)}
                  disabled={provision.inStock === 'No'}>
                  Add to Cart 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeButton={true} />
    </div>
  );
}
