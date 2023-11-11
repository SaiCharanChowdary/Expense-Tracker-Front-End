import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { VscActivateBreakpoints } from "react-icons/vsc";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";
import { isAuth  } from "./Helpers";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: ''
});
const { name, email, password, buttonText } = values;


const handleChange = name => event => {
  // console.log(event.target.value);
  setValues({ ...values, [name]: event.target.value });
};
const handleShowPassword = () => {
  setShowPassword(!showPassword);
};

 
const clickSubmit = event => {
  event.preventDefault();
  setValues({ ...values, buttonText: 'Submitting' });
  axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/register`,
      data: { name, email, password }
  }).then(response => {
      console.log('SIGNUP SUCCESS', response);
      setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted' });
      toast.success(response.data.message);
  }).catch(error => {
      console.log('SIGNUP ERROR', error.response.data);
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(error.response.data.error);
  });
};



const variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};
  return (
    <div className="wrapper">
    {isAuth() && navigate("/")}
     <ToastContainer position="top-right" />
  
      <div className="emoji-face">
        {password ? (
          <span role="img" aria-label="smiling face">
            <div
              data-aos="flip-down"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-ao-easing="ease-in-back"
            >
              🫣
            </div>
          </span>
        ) : (
          <span role="img" aria-label="eyes">
            👀
          </span>
        )}
      </div>
      <h1 className="title">
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1200">
          Register
        </div>
      </h1>
      <form className="form">
        <div className="form-group">
          <label className="label">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange('name')}
            placeholder="name"
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleChange('email')} 
            placeholder="email"
            className="input"
            required
          />
          
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <div className="input-wrapper">
            <input
              placeholder="Must be 6 characters"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange('password')}
              className="input"
            />
            <span className="eye-icon" onClick={handleShowPassword}>
              {showPassword ? "👁" : "👁‍🗨"}
            </span>
          </div>
        </div>

        <motion.button
          type="submit"
          className="styled-button"
          size="medium"
          endIcon={<VscActivateBreakpoints />}
          color="primary"
          variant="outlined"
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          style={{
            marginTop: "1em",
            borderRadius: "2em",
            fontSize: "17px",
            color: "white",
            backgroundColor: "#545454",
            fontFamily: "Poppins, sans-serif",
          }}
          onClick={clickSubmit}
        >
          <span style={{ textTransform: "capitalize" }}>Active Account</span>
        </motion.button>

        <Nav.Link href="/login">
          <Button
            size="small"
            startIcon={
              <motion.span
                style={{
                  display: "inline-block",
                  animation: "floatLeftToRight 2s infinite",
                }}
              >
                <AiOutlineArrowLeft />
              </motion.span>
            }
            color="primary"
            variant=""
            sx={{ borderRadius: 4, marginTop: 4, marginBottom: 25 }}
            style={{ fontSize: "12px", fontFamily: "Poppins, sans-serif" }}
          >
            <span style={{ textTransform: "capitalize" }}>
              already a member in KYB
            </span>
          </Button>
        </Nav.Link>
      </form>
    </div>
  );
};

export default Registration;
