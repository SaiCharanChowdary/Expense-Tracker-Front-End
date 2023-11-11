import React from "react";
import "./Redirect.css";
import Nav from "react-bootstrap/Nav";
import { Button } from "@mui/material";
import './Dashboard.css'
import HomePic1 from '../imgs/HomePic1.svg';
const Redirect = () => {
  const variants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  const imageContentStyle = {
    float: 'right', 
    marginLeft: '700px', 
    marginTop: '-18em',
  };
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">KYB</h1>
        </div>
      </div>
      <div className="content">
      <div className = "paragraph">
    <h1> Unlocking Insights: Efficiently Managing Your Data Analysis </h1>
    
    <p>Streamline your data analysis for informed decision-making with effective management</p>
     
     <Nav.Link href="/insidehome">
          <Button
            type="submit"
            size="medium"
            color="primary"
            variant="outlined"
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            sx={{ marginTop: 2, borderRadius: 4 }}
            style={{
              fontSize: "17px",
              color: "white",
              backgroundColor: "#545454",
              fontFamily: "Poppins, sans-serif",
              marginTop:"-0.5em",
            }}
          >
            <span style={{ textTransform: "capitalize" }}>Execute Your Analysis</span>
          </Button>
        </Nav.Link>

        <div className="image-content" style={imageContentStyle}>
        <img src={HomePic1} alt="home" />
      </div>
  </div>
 
      </div>
    </div>
  );
};

export default Redirect;
