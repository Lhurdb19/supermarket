import React, { useContext, useState } from 'react';
import {AuthContext} from '../ContentApi/AuthContextApi';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Loader from '../Spinner/Loader';


const defaultForm = {
  email: "",
  password: ""
};

export default function Signin() {
  const { Login } = useContext(AuthContext);
  const [formField, setFormField] = useState(defaultForm);
  const {email, password} = formField;
  const [show, setShow] = useState(false);
  const [isLoading ] = useState(false);
  const navigate = useNavigate()

  const handleVisible = ()=> {
    setShow(!show)
  };

  const handleChange = (e)=> {
    const { name, value } = e.target;
    setFormField({...formField, [name] : value});
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    Login();
    setFormField(defaultForm)
    navigate('/')
  }

  return (
    <div className='form-component'>
      <h2>LogIn Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name='email' value={email} placeholder='Enter Your Valid Email Address' onChange={handleChange} required />
        <span>
        <input type={show ? 'text' : 'password'} name='password' value={password} placeholder='Enter Your Password' onChange={handleChange} required />
        <div className="wrap" onClick={handleVisible}>
          {show ? <AiOutlineEyeInvisible className='eye-icons'/> : <AiOutlineEye className='eye-icons' />}
        </div>
        </span>
        <button disabled={isLoading}>
          {isLoading ? <Loader/> : "LOGIN"}
        </button>
        <p onClick={()=> navigate('/signup')}>Don't have an account yet? <h5 style={{color:'red'}}>SignUp</h5></p>
      </form>
    </div>
  )
}
