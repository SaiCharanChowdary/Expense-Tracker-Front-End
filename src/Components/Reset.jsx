import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import {  useParams } from "react-router-dom"; 
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import jwt_decode from "jwt-decode";

const Reset = () => {

  const { token } = useParams();

  const [values, setValues] = useState({
    name: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [buttonText, setButtonText] = useState("Reset password");

  useEffect(() => {
    console.log(token);

    if (token) {
      const decodedToken = jwt_decode(token);
      const { name } = decodedToken;
      setValues({ ...values, name, token });
    }
  }, [token]);

  const { name, show } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    setButtonText("Submitting");
    setButtonText("Submitting");
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/reset-password`,
      data: { newPassword, resetPasswordLink: token },
    })
      .then((response) => {
        console.log("RESET PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setButtonText("Done");
      })
      .catch((error) => {
        console.log("RESET PASSWORD ERROR", error.response.data);
        toast.error(error.response.data.error);
        setButtonText("Reset password");
      });
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h1 className="title">Hey {name}, Type your new password</h1>

      <motion.form className="login-form">
      <div className="input-group">
        <input
          className="input-group__input"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          name="email"
          id="email"
          style={{ color: "black" }}
          required
        /><label htmlFor="email" className="input-group__label">
        Password
      </label></div>

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

export default Reset;
