import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { diaryProduct } from "../../Jsons/diaryProduct";
import "./Diaryproduct.css";

const Dairyproductdetails = () => {
  const { dailyProductId } = useParams();
  const product = diaryProduct.find((item) => item.id === parseInt(dailyProductId));

  const [topImageIndex, setTopImageIndex] = useState(0);
  const moveImageToTop = (index) => setTopImageIndex(index);
  const topImage = product?.image[topImageIndex];

  if (!product) {
    return <p>Product not found. <Link to="/diaryproduct">Go Back</Link></p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <div className="details-container">
        <div className="cascaded-images-container">
          {product.image.map((image, index) =>
            index !== topImageIndex ? (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => moveImageToTop(index)}
                className="thumbnail"
              />
            ) : null
          )}
        </div>
        <div className="top-image">
          <img src={topImage} alt="Main Product" />
        </div>
      </div>
      <div className="product-info">
        <p>{product.description}</p>
        <p>
          Price:{" "}
          {product.price
            ? product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : "N/A"}
        </p>
        <p>Stock: {product.inStock === "Yes" ? "Available" : "Out of Stock"}</p>
      </div>
      <Link to="/diaryproduct" className="back-link">
        Back to Dairy Products
      </Link>
    </div>
  );
};

export default Dairyproductdetails;
