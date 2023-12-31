import React from 'react'
import './Dashboard.css'


const Redirect = (props) => {
  return (
    <div className='layout'>

    <div className="header d-flex justify-content-between align-items-center">
      <div>
      <h1 className="logo">KYB</h1>
      </div>
    </div>

    <div className="content">
      {props.children}
    </div>

    </div>

    
  )
}

export default Redirect;
