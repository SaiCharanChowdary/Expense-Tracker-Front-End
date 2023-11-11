import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, CircularProgress } from "@mui/material";
import Nav from "react-bootstrap/Nav";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { authenticate } from "./Helpers";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const loginButtonRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeState, setEyeState] = useState("open");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { buttonText } = values;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginButtonRef.current.click();
    }
  };

  const handleChange = (name) => (event) => {
    if (name === "email") {
      setEmail(event.target.value);
      setEyeState("open");
    } else if (name === "password") {
      setPassword(event.target.value);
      setEyeState("closed");
    }
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Start loader animation
    setValues({ ...values, buttonText: "Submitting" });

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/login`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);

        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
          });
          toast.success(`Hey ${response.data.user.name}, Welcome back!`);

          // Redirect to the dashboard page
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        console.log("SIGNIN ERROR", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      })
      .finally(() => {
        // Stop loader animation after 3 seconds
        setTimeout(() => {
          setLoading(false);
        }, 3000); // 3000 milliseconds (3 seconds)
      });
  };

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="emoji-container">
        {eyeState === "open" ? (
          <span role="img" aria-label="Open Eyes">
            😃
          </span>
        ) : (
          <span role="img" aria-label="Closed Eyes">
            😄
          </span>
        )}
      </div>
      <h1 className="title">Welcome back!</h1>
      <motion.form className="login-form">
        <input
          className="input"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChange("email")}
          onKeyPress={handleKeyPress}
          style={{ color: "black" }}
        />
        <div className="input-container">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange("password")}
            onKeyPress={handleKeyPress}
            style={{ color: "black" }}
          />
          <button
            className="password-toggle"
            onClick={(event) => togglePasswordVisibility(event)}
          >
            {showPassword ? (
              <FaEye className="eye-icon" />
            ) : (
              <FaEyeSlash className="eye-slash-icon" />
            )}
          </button>
        </div>
        <Button
          type="submit"
          size="medium"
          endIcon={<AiOutlineLogin />}
          color="primary"
          variant="outlined"
          ref={loginButtonRef}
          onClick={clickSubmit}
          className="login-button"
          sx={{ marginTop: 2, borderRadius: 4 }}
          style={{
            fontSize: "17px",
            color: "white",
            backgroundColor: "#545454",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <span className="login-text">Login</span>
          )}
        </Button>
        <Nav.Link href="/register" className="register-button">
          <span className="button-text">New to KYB</span>
          <motion.span
            style={{
              display: "inline-block",
              animation: "floatRightToLeft 2s infinite",
            }}
          >
            <AiOutlineArrowRight />
          </motion.span>
        </Nav.Link>

        <Nav.Link href="/auth/password/forgot" className="navlink-underline">
          Forgot your Password
        </Nav.Link>
      </motion.form>
    </div>
  );
};

export default Login;
