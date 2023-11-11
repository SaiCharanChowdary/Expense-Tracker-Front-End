import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import './Forgot.css'
const Forgot = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Send link");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending");
    setButtonText("Sending");
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/forgot-password`,
      data: { email },
    })
      .then((response) => {
        console.log("FORGOT PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setButtonText("Sent");
      })
      .catch((error) => {
        console.log("FORGOT PASSWORD ERROR", error.response.data);
        toast.error(error.response.data.error);
      });
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h1 className="title">Enter Your Email</h1>

      <motion.form className="login-form">
      <div className="input-group">
      <input
        className="input-group__input"
        type="text"
        value={email}
        onChange={setVal}
        name="email"
        id="email"
        style={{ color: "black" }}
        required
      />
      <label htmlFor="email" className="input-group__label">
        Email address
      </label>
    </div>
        <Button
          type="submit"
          size="medium"
          onClick={clickSubmit}
          color="primary"
          variant="outlined"
          className="login-button"
          sx={{ marginTop: 2, borderRadius: 4 }}
          style={{
            fontSize: "17px",
            color: "white",
            backgroundColor: "#545454",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <span className="login-text">{buttonText}</span>
        </Button>
      </motion.form>
    </div>
  );
};

export default Forgot;
