import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationSharpIcon from "@mui/icons-material/AppRegistrationSharp";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import Registration from "./Registration";
import Login from "./Login";
import { isAuth, logout } from "./Helpers";
import { CgLogOut } from "react-icons/cg";
import { HiIdentification } from "react-icons/hi";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/");
    });
  };

  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    return match.path === location.pathname;
  };

  return (
    <div>
     <Navbar className={`my-custom-navbar ${isAuth() ? 'auth-box-shadow' : ''}`} expand="lg">
        <Container>
          {!isAuth() && <AccountBalanceWalletIcon />}
          {!isAuth() && (
            <NavLink  to="/" className="navbar-brand fw-bolder fs-4 mx-4">
              Know Your Budget
            </NavLink>
          )}
          {isAuth() && <HiIdentification size={30} />}
          {isAuth() && isAuth().role === 'subscriber' && (
            <NavLink exact to="/dashboard" className="navbar-brand fw-bolder fs-4 mx-4">
              {isAuth().name}
            </NavLink>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!isAuth() && (
              <Nav className="me-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/service"
                    className="nav-link"
                    activeClassName="active"
                    isActive={isActive}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                    isActive={isActive}
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    isActive={isActive}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                    isActive={isActive}
                  >
                    Contact us
                  </NavLink>
                </li>
              </Nav>
            )}

            <Nav.Link href="/login">
              <div style={{ display: "flex" }}>
                {!isAuth() && (
                  <Fragment>
                    <Nav.Link href="/login">
                      <Button
                        className="nav-link login-button"
                        startIcon={<LoginIcon />}
                        sx={{ marginTop: 0, borderRadius: 5 }}
                        style={{
                          color: "white",
                          backgroundColor: "#545454",
                          marginLeft: "1.2em",
                          marginTop: "0.5em",
                        }}
                        color="primary"
                        variant="contained"
                        onClick={Login}
                      >
                        Login
                      </Button>
                    </Nav.Link>
                    <Nav.Link href="/register">
                      <Button
                        className="nav-link register-button"
                        endIcon={<AppRegistrationSharpIcon />}
                        sx={{
                          marginTop: 0.6,
                          marginBottom: 0.5,
                          borderRadius: 5,
                        }}
                        style={{
                          color: "#545454",
                          border: `1px solid #bbb`,
                          marginLeft: "1em",
                          marginTop: "0.6em",
                        }}
                        color="primary"
                        variant="outlined"
                        onClick={Registration}
                      >
                        Register
                      </Button>
                    </Nav.Link>
                  </Fragment>
                )}
              </div>
            </Nav.Link>

            {isAuth() && (
              <div className="logout-button-container">
                <Button
                  className="nav-link login-button"
                  startIcon={
                    <motion.span
                      style={{
                        display: "inline-block",
                        animation: "bounce 1s ease-in-out infinite",
                      }}
                    >
                      <CgLogOut />
                    </motion.span>
                  }
                  sx={{ marginTop: 0, borderRadius: 5 }}
                  style={{
                    color: "white",
                    backgroundColor: "#545454",
                    marginLeft: "1.2em",
                    marginTop: "0.5em",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={handleLogout}
                >
                  <span className="button-text">Logout</span>
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
