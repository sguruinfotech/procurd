import React from 'react'
import "../css/App.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    
      <div className="row headerrow1 d-flex align-items-center">
            <div className="col-md-10 hrcol1 d-flexalign-items-center ">
                <h3>Lerning CRUD Operation, User Registration and Login functionality</h3>
            </div>
            <div className="col-md-2 hrcol1 d-flex align-items-center justify-content-center">
            <Link to="/Home"><button className="homebtn">Home</button></Link>
            </div>
        
      </div>
      
    
  )
}
