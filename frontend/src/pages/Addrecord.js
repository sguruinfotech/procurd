import React from "react";
import Coform from '../component/Coform';
import Header from '../component/Header';
import { Link } from "react-router-dom";

export default function Addrecord() {
           
    return(
        <>
            <Header/>
            <div className="row adrrow1 d-flex align-items-center justify-content-center">
                    <div className="row adrrow2 d-flex align-items-center ">
                        <h4>Enter your information</h4> 
                    </div>
            </div>
            <Coform/>
            <div className="row addrrow3 d-flex align-items-center justify-content-center ">
                <Link to="/Curd"><button className="backcrud">Back to CRUD Page</button></Link>
            </div>
        </>
    )
}