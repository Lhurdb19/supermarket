import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormData from "../../Libs/useFormData";
import useFormLocation from "../../Libs/useFormLocation";
import usePaymentForm from "../../Libs/useFormPayment";
import './Shipping.css';

export default function Shippingpayment() {
  const navigate = useNavigate();
  const [formData] = useFormData("shippingdetail");
  const [locationForm] = useFormLocation("locationdetail");
  const [paymentForm, handlePaymentChange] = usePaymentForm("paymentdetail");
  const [isFormComplete, setIsFormComplete] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data", paymentForm);
    navigate("/");
  };
  return (
    <Fragment>

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
      <div className="shipping-data-3">
        <div className="shipping-info">

        <h3>Shipping Details</h3>
        <p>Full Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phone}</p>
        <p>Age: {formData.age}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Address: {formData.address}</p>
        </div>
        
        <div className="shipping-info">
        <h3>Location Details</h3>
        <p>Full Name: {locationForm.full_name}</p>
        <p>Email Address : {locationForm.email_address}</p>
        <p>Phone Number : {locationForm.phone_number}</p>
        <p>Location : {locationForm.location}</p>
        <p>Items Weight : {locationForm.itemsWeight}</p>
        <p>Quantity : {locationForm.quantity}</p>
        </div>
      </div>

      <div className="payment-component">
        <p>Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</p>
      </div>
    <button onClick={handleSubmit}>Place Order</button>
    </div>
    </Fragment>
  );
}
