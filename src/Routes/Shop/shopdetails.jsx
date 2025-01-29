import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bestProducts } from '../../Jsons/bestProduct';
import { foodStuff } from '../../Jsons/foodstuff';
import { personalCare } from '../../Jsons/personalCare';
import { diaryProduct } from '../../Jsons/diaryProduct';
import { CartContext } from '../../CartContext/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './Shop.css';

function Shopdetails() {
    const { id } = useParams(); // Extract `id` from the URL params
    const { addItemToCart } = useContext(CartContext);

    // Combine all products into one array
    const allProducts = [...bestProducts, ...foodStuff, ...diaryProduct, ...personalCare];

    // Find the product by ID
    const shop = allProducts.find((product) => product.id === parseInt(id));

    const [isDescription, setIsDescription] = useState(false);
    const [imageOverlay, setImageOverlay] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const notifyAdd = () => toast.success("Product added successfully to cart!");

    const handleAddToCart = (shop) => {
        addItemToCart(shop);
        notifyAdd();
    };

    const handleImageOverlay = (index) => {
        setCurrentImageIndex(index);
        setImageOverlay(true);
    };

    const closeImageOverlay = () => {
        setImageOverlay(false);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === shop.image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? shop.image.length - 1 : prevIndex - 1
        );
    };

    // If the product is not found, return a "Not Found" message
    if (!shop) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            {/* Back Arrow */}
            <div className="back-arrow">
                <Link to="/foodstuff">
                    <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
                </Link>
            </div>

            {/* Shop Details */}
            <div className="shop-details">
                <div className="con-1">
                    <div className="shop-image-container">
                        <img src={shop.image[0]} alt={shop.name} />
                        <div className="shop-image-overlay" onClick={() => handleImageOverlay(0)}>
                            <div className="plus-sign">+</div>
                        </div>
                    </div>
                </div>

                <div className="con-2">
                    <div className="name-text">
                        <h2>{shop.name}</h2>
                        <p>{shop.description}</p>
                    </div>
                    <h4>
                        {shop.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </h4>
                    <p>In stock: {shop.inStock === 'Yes' ? 'Available' : 'Out of stock'}</p>

                    <button
                        className="add-button"
                        onClick={() => handleAddToCart(shop)}
                        disabled={shop.inStock === 'No'}
                    >
                        Add to Cart
                    </button>
                </div>

                {/* Image Overlay Modal */}
                {imageOverlay && (
                    <div className="image-overlay-modal">
                        <MdClose className="close-overlay" onClick={closeImageOverlay} />
                        <div className="image-overlay-content">
                            <img src={shop.image[currentImageIndex]} alt="shop" />
                            <MdKeyboardArrowLeft className="arrow-left" onClick={handlePrevImage} />
                            <MdKeyboardArrowRight className="arrow-right" onClick={handleNextImage} />
                        </div>
                    </div>
                )}
            </div>

            {/* Toast Notifications */}
            <ToastContainer position="top-right" className="toast" />
        </div>
    );
}

export default Shopdetails;
