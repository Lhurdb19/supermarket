import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import "./Cartlist.css";

function Cartview() {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
    const navigate = useNavigate()

  const notifyAdd = () => toast.success("Product added successfully to cart!");
  const notifyRemove = () =>
    toast.error("Product removed successfully from cart!");
  const notifyClear = () => toast.info("Cart has been cleared!");

  const handleIncreaseCart = (item) => {
    addItemToCart(item);
    notifyAdd();
  };

  const handleDecreaseItem = (item) => {
    removeItemFromCart(item);
    notifyRemove();
  };

  const handleClearCart = () => {
    clearItemFromCart(cartItems); // Assuming clearItemFromCart clears all items in the cart
    notifyClear();
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <div>
      <div className="cartlistview-container">
        <h2>Shopping Cart</h2>
        <div className="favorite-head">
          <span>Item Image</span>
          <span>Item Name</span>
          <span>Unit Price</span>
          <span>Total Price</span>
          <span>Add/Remove</span>
        </div>
        {cartItems.length === 0 ? (
          <>
          <p>Your bag is empty</p>
          <button className="shop-button" onClick={() => navigate('/')}>
          Shop Now
        </button>
        </>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>
                  <img src={item.image} alt={item.name} />
                </span>
                <h4>
                  {item.name} (x{item.quantity})
                </h4>
                <p className="total">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <p className="subtotal">
                  {(item.price * item.quantity).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <div className="handle-btn">
                  <button onClick={() => handleIncreaseCart(item)}>
                    <IoMdAdd />
                  </button>
                  <button onClick={() => handleDecreaseItem(item)}>
                    <TiMinus />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}


        {cartItems.length > 0 && (
          <div className="cart-clear">

          <div className="cart-summary">
            <h3>
              Subtotal:{" "}
              {calculateSubtotal().toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
              </div>
              <button className="clear-button" onClick={handleClearCart}>
                Clear Cart
              </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeButton={true}
      />
    </div>
  );
}

export default Cartview;
