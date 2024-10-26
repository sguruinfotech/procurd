import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";


export default function Login() {
  return (
    <>
    <Header/>
    <div className="row loginrow1 d-flex align-items-center justify-content-center">
                    <div className="row loginrow2 d-flex align-items-center ">
                        <h4>Login.....</h4> 
                    </div>
    </div>
    <div className='row loginrow3 d-flex justify-content-center align-items-center'>
        <div className='row loginrow4 '>
                <h5>Login...</h5>
                <form>
                    <div className='mb-3'>
                    <FaUserTie /><input type="Username" class="form-control" id="username" placeholder='User Name'/>
                    </div>
                    <div className=''>
                    <FaKey /><input type="password" class="form-control" id="password" placeholder='Password'/>
                    </div>
                </form>
                <button class="btn btn-primary" type="submit">Login</button>
                
                <div className='forgotpass'><Link to="/Forgotpass">FORGOT PASSWORD</Link></div>
                <div className='regquote'>Don't have an account?  <span><Link to="/Signup">Register</Link></span></div>
               
        </div>
  
    </div>
    </>
  )
}
