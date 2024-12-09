import React, { useState } from 'react';
import useSubmitForm from '../Libs/fetchRegisterUser';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Loader from '../Spinner/Loader';

const defaultForm = {
  fullName: '',
  email: '',
  phone: '',
  password: ''
};

export default function Signup() {
  const [form, setForm] = useState(defaultForm);
  const [isVisible, setIsVisible] = useState(false);
  const {fullName, email, phone, password} = form;
  const { submitForm, isLoading, error } = useSubmitForm();
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const {success, error: submissionError} = await submitForm(form);

    if (success) {
      setForm(defaultForm)
      navigate('/');
    } else {
      console.log(submissionError || error);
    };
  };

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setForm({...form, [name] : value});
  };

  const handleVisible = ()=> {
    setIsVisible(!isVisible)
  }

  return (
    <div className='form-component'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='fullName' value={fullName} placeholder='Enter Your Full Name' onChange={handleChange} required />
        <input type="text" name='email' value={email} placeholder='Enter Your Email Address' onChange={handleChange} required />
        <input type="tel" name='phone' value={phone} placeholder='Enter Your Phone Number' onChange={handleChange} required />
        <span>
        <input type={isVisible ? 'text' : 'password'} name='password' value={password} placeholder='Enter Your Password' onChange={handleChange} required />
        <div className="wrap" onClick={handleVisible}>
          {isVisible ? <AiOutlineEyeInvisible  /> : <AiOutlineEye />}
        </div>
        </span>
        <button disabled={isLoading}>
          {isLoading ? <Loader/> : "SIGN UP"}
        </button>
        <p onClick={()=> navigate('/signin')}>Already have an account? <h5 style={{color:'red'}}>Log In</h5></p>

      </form>
    </div>
  )
}
