import React from 'react'
import "../css/App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
      <div className="row footerrow1 d-flex align-items-center">
            <div className="col-md-10 frcol1 d-flex align-items-center ">
                <h3>Lerning CRUD Operation, User Registration and Login functionality</h3>
            </div>
            <div className="col-md-2 frcol2 d-flex align-items-center justify-content-center">
            <Link to="/Home"><button className="homebtn">Home</button></Link>
            </div>
        
      </div>
      
    
  )
}