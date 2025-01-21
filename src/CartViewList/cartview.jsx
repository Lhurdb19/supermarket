import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/cartContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

function Cartview() {
  const navigate = useNavigate();
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext); 
  const [removeCart, setRemoveCart] = useState(false);
  const [clearOverlay, setClearOverlay] = useState(false);
  const [itemToRemove, setItemToRemove] = useState('');

  const notifyAdd = () => toast.success("Product added successfully to cart!");
  const notifyRemove = () => toast.error("Product removed successfully from cart!");
  const notifyClear = () => toast.info("Cart has been cleared!");

  const handleRemoveOverlay = (cartItems) => {
    setItemToRemove(cartItems);
    setRemoveCart(true);
  };

  const handleDecreaseItem = (item) => {
    removeItemFromCart(item);
    notifyRemove();
  };

  const handleRemoveItem = () => {
    clearItemFromCart(itemToRemove.id);
    setRemoveCart(false);
    notifyRemove();
  };

  const handleIncreaseCart = (item) => {
    addItemToCart(item);
    notifyAdd();
  };

  const handleClearCart = () => {
    clearItemFromCart(cartItems); // Assuming clearItemFromCart clears all items in the cart
    setClearOverlay(true);
    notifyClear();
  };

  return (
    <div>
      <div className="cartlistview-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your bag is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                <button onClick={() => handleIncreaseCart(item)}>Add</button>
                <button onClick={() => handleDecreaseItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && <button onClick={handleClearCart}>Clear Cart</button>}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeButton={true} />
    </div>
  );
}

export default Cartview;
