import React from 'react'
import useFormData from '../../Libs/useFormData'
import { useNavigate } from 'react-router-dom'
import useFormLocation from '../../Libs/useFormLocation';

export default function Shippinglocation() {
    const navigate = useNavigate();
    const [formData] = useFormData('shippingdetail');
    const [locationForm, handleLocationChange] = useFormLocation('locationdetail');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('Location Details', locationForm);
        navigate('/shippingpayment');
    }


  return (
    <div className='location-detail'>
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
            <div className="second-circle-3">
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
        </div>

        <h2>Shipping Location</h2>
        <form onSubmit={handleSubmit}>
            <div className="second">
                <div className="label-input">
                    <label htmlFor="full_name">Full Name</label>
            <input type="text" name='full_name' placeholder='Enter Your Full Name' value={locationForm.full_name || ""} onChange={handleLocationChange} required />
                </div>

                <div className="label-input">
                    <label htmlFor="email">Email Address</label>
            <input type="email" name='email_address' placeholder='Enter Your Email Address' value={locationForm.email_address || "" } onChange={handleLocationChange} required />
                </div>

                <div className="label-input">
                    <label htmlFor="phone"> Phone Number</label>
            <input type="tel" name='phone_number' placeholder='Enter Your Phone Number' value={locationForm.phone_number || "" } onChange={handleLocationChange} required />
                </div>
            </div>

            <div className="second">
                <div className="label-input">
                    <label htmlFor="location">Location</label>
            <input type="text" name='location' placeholder='Enter Your Location Address' value={locationForm.location || "" } onChange={handleLocationChange} required />
                </div>

                <div className="label-input">
                    <label htmlFor="items">Items Weight</label>
            <input type="text" name='itemsWeight' placeholder='Enter The Item(s) Weight' value={locationForm.itemsWeight || "" } onChange={handleLocationChange} required />
                </div>

                <div className="label-input">
                    <label htmlFor="quantity">Quantity</label>
            <input type="text" name='quantity' placeholder='Enter The Quantity' value={locationForm.quantity || "" } onChange={handleLocationChange} required />
                </div>
            </div>

            <div className="button-con">

            <button
          type="submit"
          onClick={()=> navigate('/shippingdetails')}
          > Prev </button>
            <button type='submit'>Next</button>
          </div>
        </form>
      
    </div>
  )
}
