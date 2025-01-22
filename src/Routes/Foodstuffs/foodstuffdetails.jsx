import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../CartContext/cartContext'
import { ToastContainer, toast } from 'react-toastify';
import { foodStuff } from '../../Jsons/foodstuff';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './Foodstuff.css'



function Foodstuffdetails() {
    const {foodstuffId} = useParams();
    const {addItemToCart} = useContext(CartContext)
    const foodstuff = foodStuff.find((f) => f.id === parseInt(foodstuffId));
    const [isDescription, setIsDescription] = useState(false);
    const [imageOverlay, setImageOverlay] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const notifyAdd = () => toast.success("Product added successfully to cart!");
    

    const handleAddToCart = (foodstuff) => {
        addItemToCart(foodstuff);
        notifyAdd()
    };

    const handleDescription = () => {
        setIsDescription(!isDescription);
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
        prevIndex === foodstuff.image.length - 1 ? 0 : prevIndex + 1 );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? foodstuff.image.length - 1 : prevIndex - 1 );
    };

    if(!foodstuff) {
        return <div>Product not found!</div>;
    }
  return (
    <div>
      <div className="back-arrow">
        <Link to='/foodstuff'>
        <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
        </Link>
      </div>

      <div className="foodstuff-details">
        <div className="con-1">
            <div className="foodstuff-image-container">
                <img src={foodstuff.image[0]} alt={foodstuff.name} onClick={() => openImageOverlay(0)} />
                <div className="foodstuff-image-overlay" onClick={() => openImageOverlay(0)}>
                    <span className='plus-sign'>+</span>
                </div>
            </div>
        </div>
        <div className="con-2">
            <div className="name-text">
                <h2>{foodstuff.name}</h2>
                <p>{foodstuff.description}</p>
            </div>
            <h4>
                {foodstuff.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}
            </h4>
            <p>In stock: {foodstuff.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>
            
            <button className='add-button' onClick={() => handleAddToCart(foodstuff)} disabled={foodstuff.inStock === "No"}>
                Add to Cart
            </button>

        {isDescription && <p>{foodstuff.description}</p>}
        </div>

        {imageOverlay && (
            <div className="image-overlay-modal">
                  <MdClose className="close-overlay" onClick={closeImageOverlay} />
          <div className="image-overlay-content">
            <img src={foodstuff.image[currentImageIndex]} alt="Product Image" />
            <MdKeyboardArrowLeft className="arrow-left" onClick={handlePrevImage} />
            <MdKeyboardArrowRight className="arrow-right" onClick={handleNextImage} />
          </div>
        </div>
        )}

      </div>
      <ToastContainer position="top-right" className="toast"/>
    </div>
  )
}

export default Foodstuffdetails;
