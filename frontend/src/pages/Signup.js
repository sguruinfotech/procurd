import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
    <Header/>
    <div className="row signuprow1 d-flex align-items-center justify-content-center">
                    <div className="row signuprow2 d-flex align-items-center ">
                        <h4>SignUp</h4> 
                    </div>
    </div>
    <div className='row signuprow3 d-flex justify-content-center align-items-center'>
        <div className='row signuprow4 '>
                <h5>Register your account</h5>
                <form>
                    <div className='mb-2'>
                    <input type="Name" class="form-control" id="name" placeholder='Enter your name'/>
                    </div>
                    <div className='mb-2'>
                    <input type="city" class="form-control" id="city" placeholder='Your city'/>
                    </div>
                    <div className='mb-2'>
                    <input type="email" class="form-control" id="email" placeholder='Your mail id'/>
                    </div>
                    <div className='mb-2'>
                    <input type="username" class="form-control" id="username" placeholder='Creatre username'/>
                    </div>
                    <div className='mb-2'>
                    <input type="password" class="form-control" id="password" placeholder='Create password'/>
                    </div>
                    <div className='mb-2'>
                    <input type="password" class="form-control" id="password" placeholder='Retype password'/>
                    </div>
                </form>
                <button class="btn btn-primary" type="submit">Submit</button>
                
                
                <div className='regquote'>Already have an account?  <span><Link to="/Login">Login</Link></span></div>
               
        </div>
        
       
    </div>
    </>
  )
}
