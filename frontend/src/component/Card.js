import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";



export default function Card(props) {
    return (
        <>
            
            <div className="card">
                <img src={props.crdimg} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <Link to={props.path} ><button className="btn btn-primary">{ props.crdbtn } </button></Link>
                    </div>
            </div>
        </>
  
    
    )}