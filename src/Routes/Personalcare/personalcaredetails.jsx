import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { personalCare } from "../../Jsons/personalCare";
import { CartContext } from "../../CartContext/cartContext";
import { useFavorites } from "../FavoriteData/favoritecontext";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import "./Personalcare.css";
import { useContext } from "react";

function Personalcaredetails() {
  const { personalId } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const personal = personalCare.find((per) => per.id === parseInt(personalId));
  const [isDescription, setIsDescription] = useState(false);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const notifyAdd = () => toast.success("Product added successfully to cart!");

  const handleAddToCart = (personal) => {
    addItemToCart(personal);
    notifyAdd();
  };

  const openImageOverlay = (index) => {
    setCurrentImageIndex(index);
    setImageOverlay(true);
  };

  const closeImageOverlay = () => {
    setImageOverlay(false);
};

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === personal.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? personal.image.length - 1 : prevIndex - 1
    );
  };

  if (!personal) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <div className="back-arrow">
        <Link to="/foodstuff">
          <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
        </Link>
      </div>

      <div className="personal-details">
        <div className="con-1">
          <div className="personal-image-container">
            <img
              src={personal.image[0]}
              alt={personal.name}
              onClick={() => openImageOverlay(0)}
            />
            <div
              className="personal-image-overlay"
              onClick={() => openImageOverlay(0)}
            >
              <span className="plus-sign">+</span>
            </div>
          </div>
        </div>

        <div className="con-2">
          <div className="name-text">
            <h2>{personal.name}</h2>
            <p>{personal.description}</p>
          </div>
          <h4>
            {personal.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h4>
          <p>
            In stock:{" "}
            {personal.inStock === "Yes" ? "Available" : "Out of stock"}
          </p>
          <button
            className="add-button"
            onClick={() => handleAddToCart(personal)}
            disabled={personal.inStock === "No"}
          >
            Add to Cart
          </button>
          {isDescription && <p>{personal.description}</p>}
        </div>
          {imageOverlay && (
            <div className="image-overlay-modal">
              <MdClose className="close-overlay" onClick={closeImageOverlay} />

              <div className="image-overlay-content">
                <img
                  src={personal.image[currentImageIndex]}
                  alt="Personal Image"
                />
                <MdKeyboardArrowLeft
                  className="arrow-left"
                  onClick={handlePrevImage}
                />
                <MdKeyboardArrowRight
                  className="arrow-right"
                  onClick={handleNextImage}
                />
              </div>
            </div>
          )}
      </div>
        <ToastContainer position="top-right" className="toast"/>
    </div>
  );
}

export default Personalcaredetails;
