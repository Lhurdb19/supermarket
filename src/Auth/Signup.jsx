import React, { useState, useContext } from "react";
import { AuthContext } from "../ContentApi/AuthContextApi";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Loader from "../Spinner/Loader";

const defaultForm = {
  firstName: "",
  surName: "",
  email: "",
  phone: "",
  password: "",
};

export default function Signup() {
  const [form, setForm] = useState(defaultForm);
  const [isVisible, setIsVisible] = useState(false);
  const { Register } = useContext(AuthContext);
  const { firstName, surName, email, phone, password } = form;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = Register(email, password);
    setIsLoading(false);

    if (success) {
      setForm(defaultForm);
      navigate("/signin");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="form-component">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Enter Your Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surName"
          value={surName}
          placeholder="Enter Your Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Enter Your Phone Number"
          onChange={handleChange}
          required
        />
        <span>
          <input
            type={isVisible ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          <div className="wrap" onClick={handleVisible}>
            {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </span>
        <button disabled={isLoading}>
          {isLoading ? <Loader /> : "SIGN UP"}
        </button>
        <p onClick={() => navigate("/signin")}>
          Already have an account?{" "}
          <h5 style={{ color: "red" }}>Log In</h5>
        </p>
      </form>
    </div>
  );
}
