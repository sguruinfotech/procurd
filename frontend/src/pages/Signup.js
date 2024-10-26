import React, { useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import { RiUserSmileFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

axios.defaults.baseURL="http://localhost:8080/"

export default function Signup() {

  const [formData, setformData] = useState({
    name: "",
    city: "",
    email: "",
    username: "",
    password: "",
    
  })
  
  const navigate = useNavigate();
 


  const hendleOnchange = (e) => {
    const {value, name} = e.target
    setformData((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const data = await axios.post("/userpro/create", formData)
    console.log(data)
    if(data.data.sucsess){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your registration successfuly !",
        showConfirmButton: false,
        timer: 5000
      });
     navigate('/Login');
     }
  }

 
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
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                    <RiUserSmileFill /><input type="Name" className="form-control" name="name" id="name" placeholder='Enter your name' onChange={hendleOnchange}/>
                    </div>
                    <div className='mb-2'>
                    <MdLocationCity /><input type="city" className="form-control" name="city" id="city" placeholder='Your city' onChange={hendleOnchange}/>
                    </div>
                    <div className='mb-2'>
                    <IoMdMail /><input type="email" className="form-control" name="email" id="email" placeholder='Your mail id' onChange={hendleOnchange}/>
                    </div>
                    <div className='mb-2'>
                    <FaUserTie /><input type="username" className="form-control" name="username" id="username" placeholder='Creatre username' onChange={hendleOnchange}/>
                    </div>
                    <div className='mb-2'>
                    <FaKey /><input type="password" className="form-control" name="password" id="password" placeholder='Create password' onChange={hendleOnchange}/>
                    </div>
                    <div className='mb-2'>
                    <RiLockPasswordFill /><input type="password" className="form-control" name="rpassword" id="password" placeholder='Retype password'/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
               
                
                
                <div className='regquote'>Already have an account?  <span><Link to="/Login">Login</Link></span></div>
               
        </div>
       
       
    </div>
    </>
  )
}
