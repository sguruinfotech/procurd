import React from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Forgotpass() {
  return (
    <>
    <Header/>
    <div className="row forgotpassrow1 d-flex align-items-center justify-content-center">
                    <div className="row forgotpassrow2 d-flex align-items-center ">
                        <h4>Forgot Password</h4> 
                    </div>
    </div>
    <div className='row forgotpassrow3 d-flex justify-content-center align-items-center'>
        <div className='row forgotpassrow4 '>
                <h5>Forgot Password</h5>
                <form>
                    <div className='mb-3'>
                    <FaUserTie /><input type="Username" class="form-control" id="username" placeholder='User Name'/>
                    </div>
                    <div className='mb-3'>
                    <IoMdMail /><input type="email" class="form-control" id="email" placeholder='Registred email id'/>
                    </div>
                    <div className=''>
                    <BiSolidPhoneCall /><input type="number" class="form-control" id="email" placeholder='Registred contact no.'/>
                    </div>
                </form>
                <button class="btn btn-primary" type="submit">Submit</button>
                
                
                <div className='regquote'>Already have an account?  <span><Link to="/Login">Login</Link></span></div>             
        </div>
        
    </div>
    </>
  )
}
