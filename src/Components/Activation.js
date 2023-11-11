import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import jwt_decode from 'jwt-decode';


const Activation = () => {
  const { token } = useParams();

  const [values, setValues] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {
   console.log(token);
   // let { name } = decode(token);
    if (token) {
      const decodedToken = jwt_decode(token);
    const { name } = decodedToken;
    setValues({ ...values, name, token });
 }
  }, [token]);

  const { name, show } = values;

  const clickSubmit = event => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: {  token } 
    })
      .then(response => {
        console.log('ACCOUNT ACTIVATION', response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch(error => {
        console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Activate Account
      </button>
    </div>
  );

  return (
    <div className="col-md-6 offset-md-3">
      <ToastContainer />
      {activationLink()}
    </div>
  );
};

export default Activation;
