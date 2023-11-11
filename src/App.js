import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//import Preloader from './Components/Pre';
import NavigationBar from "./Components/NavigationBar";

import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Service from "./Components/Service";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
//import PasswordReset from "./Components/PasswordReset";
//import ForgotPassword from "./Components/ForgotPassword";
import Activation from "./Components/Activation";
import PrivateRoute from "./Components/PrivateRoute ";
import Dashboard from "./Components/Dashboard";
import Forgot from "./Components/Forgot";
import Reset from "./Components/Reset";
import Insidehome from "./Components/Insidehome";
import Test from "./Components/Test";
//import Home from './Components/Home'
//  <Route path="/" element={<Home />} />

/*const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);*/

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/" element={<Service />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/activate/:token" element={<Activation />} />
        <Route exact element={<PrivateRoute  />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/insidehome" element={<Insidehome />} ></Route>
            <Route exact path="/test" element={<Test />} ></Route>

        </Route>
        <Route path="/auth/password/forgot" element={<Forgot />} />
        <Route path="/auth/password/reset/:token" element={<Reset />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
