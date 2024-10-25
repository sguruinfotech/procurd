import React from "react";
import Updateform from '../component/Updateform';
import Header from '../component/Header';
import { Link } from "react-router-dom";

export default function Addrecord() {
           
    return(
        <>
            <Header/>
            <div className="row updrow1 d-flex align-items-center justify-content-center">
                    <div className="row updrow2 d-flex align-items-center ">
                        <h4>Update your information</h4> 
                    </div>
            </div>
            <Updateform/>
            <div className="row updrrow3 d-flex align-items-center justify-content-center ">
                <Link to="/Curd"><button className="backcrud">Back to CRUD Page</button></Link>
            </div>
        </>
    )
}