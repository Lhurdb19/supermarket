import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormData from "../../Libs/useFormData";
import useFormLocation from "../../Libs/useFormLocation";
import usePaymentForm from "../../Libs/useFormPayment";

export default function Shippingpayment() {
  const navigate = useNavigate();
  const [formData] = useFormData("shippingdetail");
  const [locationForm] = useFormLocation("locationdetail");
  const [paymentForm, handlePaymentChange] = usePaymentForm("paymentdetail");
  const [isFormComplete, setIsFormComplete] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data", paymentForm);
    navigate("/");
  };
  return (
    <div className="payment-detail">
      <div className="frame">
            <div className="circle-1">
                <div className="box">1</div>
                <p></p>
                <h5>Shipping Details</h5>
            </div>
            <div className="second-circle-2">
                <h6></h6>
                <div className="box">2</div>
                <p></p>
                <h5>Shipping Items</h5>
            </div>
            <div className="third-circle-3">
                <div className="box">3</div>
                <p></p>
                <h5>Payment Details</h5>
            </div>
        </div>
      <div className="shipping-data">
        <h3>Shipping Details</h3>
        <p>Full Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phone}</p>
        <p>Age: {formData.age}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Address: {formData.address}</p>
        <br />
        
        <h3>Location Details</h3>
        <p>Full Name: {locationForm.full_name}</p>
        <p>Email Address : {locationForm.email_address}</p>
        <p>Phone Number : {locationForm.phone_number}</p>
        <p>Location : {locationForm.location}</p>
        <p>Items Weight : {locationForm.itemsWeight}</p>
        <p>Quantity : {locationForm.quantity}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="third">
            <div className="label-input">
                <label htmlFor="bank">Bank Name</label>
        <input
          type="text"
          name="bankName"
          placeholder="Enter The Bank Name"
          value={paymentForm.bankName || ""}
          onChange={handlePaymentChange}
          required
          />
          </div>

            <div className="label-input">
                <label htmlFor="credit">Credit Card</label>
        <input
          type="numb"
          name="creditCard"
          placeholder="Enter Credit Card Number"
          value={paymentForm.creditCard || ""}
          onChange={handlePaymentChange}
          required
          />
          </div>
          </div>

        <div className="third">
            <div className="label-input">
                <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          name="cvv"
          placeholder="Enter The CVV"
          value={paymentForm.cvv || ""}
          onChange={handlePaymentChange}
          required
          />
          </div>

            <div className="label-input">
                <label htmlFor="expireDate">Expire Date</label>
        <input
          type="date"
          name="expireDate"
          placeholder="Enter Card Expiring Data"
          value={paymentForm.expireDate || ""}
          onChange={handlePaymentChange}
          required
          />
          </div>
        </div>
        <div className="btn-con">
        <button
          onClick={()=> navigate('/shippinglocation')}
          >
          Prev
        </button>
        <button
          type="submit"
          style={{ width: '170px',
              backgroundColor: isFormComplete ? "#d0300e" : "",
              cursor: isFormComplete ? "pointer" : "not-allowed",
            }}
            disabled={!isFormComplete}
            >
          Proceed to Payment
        </button>
    </div>
      </form>
    </div>
  );
}
