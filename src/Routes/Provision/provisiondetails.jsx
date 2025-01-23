import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../CartContext/cartContext";
import { bestProducts } from "../../Jsons/bestProduct";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Provision.css";

function Provisiondetails() {
  const { provisionId } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const provision = bestProducts.find((p) => p.id === parseInt(provisionId));
  const [isDescription, setIsDescription] = useState(false);
  const notifyAdd = () => toast.success("Product added successfully to cart");

  const handleAddToCart = (provision) => {
    addItemToCart(provision);
    notifyAdd();
  };

  const handleDescription = () => {
    setIsDescription(!isDescription);
  };

  if (!provision) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="back-arrow">
        <Link to="/foodstuff">
          <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
        </Link>
      </div>

      <div className="provision-details">
        <div className="con-1">
            <div className="provision-image-container">
                <img src={provision.image} alt={provision.name} />
            </div>
        </div>

        <div className="con-2">
            <div className="name-text">
                <h2>{provision.name}</h2>
                <p>{provision.description}</p>
            </div>

            <h4>
                {provision.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}
            </h4>
            <p>In stock: {provision.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>

            <button className="add-button" onClick={() => handleAddToCart(provision)} disabled={provision.inStock === 'No'}>Add to cart</button>
        </div>
      </div>
    <ToastContainer position="top-right" className="toast"/>
    </div>
  );
}

export default Provisiondetails;
