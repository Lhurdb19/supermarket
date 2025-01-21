import React from 'react';
import useFormData from '../../Libs/useFormData';
import { useNavigate } from 'react-router-dom';

export default function Shippingdetails() {
    const [formData, handleChange] = useFormData('shippingdetail');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Shipping Data', formData);
        navigate('/shippinglocation');
    };

  return (
    <div className='shipping-detail'>
        <div className="frame">
            <div className="circle-1">
                <div className="box">1</div>
                <p></p>
                <h5>Shipping Details</h5>
            </div>
            <div className="circle-2">
                <h6></h6>
                <div className="box">2</div>
                <p></p>
                <h5>Shipping Details</h5>
            </div>
            <div className="circle-3">
                <div className="box">3</div>
                <p></p>
                <h5>Shipping Details</h5>
            </div>
        </div>
        <h2>Shipping Details</h2>
        <form onSubmit={handleSubmit}>
            <div className="first">

                <div className="label-input">
                <label htmlFor="">Full Name</label>
            <input type="text" name='fullName' placeholder='Enter Your Full Name' value={formData.fullName || ''} onChange={handleChange} required/>
                </div>
                <div className="label-input">
                <label htmlFor="email">Email Address</label>
            <input type="email" name='email' placeholder='Enter Your Valid Email Address' value={formData.email || ''} onChange={handleChange} required/>
                </div>

                <div className="label-input">
                <label htmlFor="phone">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' value={formData.phone || ''} onChange={handleChange} required/>
                </div>
            </div>

            <div className="first">
                <div className="label-input">
                    <label htmlFor="age">Age</label>
            <input type="number" name='age' placeholder='Enter Your Age' value={formData.age || ''} onChange={handleChange} required/>
                </div>

                <div className="label-input">
                    <label htmlFor="city">City</label>
            <input type="text" name='city' placeholder='Enter Your City' value={formData.city || ''} onChange={handleChange} required/>
                </div>

                <div className="label-input">
                    <label htmlFor="state">State</label>
            <input type="text" name='state' placeholder='Enter Your State' value={formData.state || ''} onChange={handleChange} required/>
                </div>
            </div>

            <div className="address-input">
                <label htmlFor="address">Address</label>
            <input type="text" name='address' placeholder='Enter Your Full Address' value={formData.address || ''} onChange={handleChange} required/>
            </div>

            <button type='submit'>Next</button>
        </form>
      
    </div>
  )
}
