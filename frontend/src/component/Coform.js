import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

axios.defaults.baseURL="http://localhost:8080/"

export default function Coform() {

    const [crudData, setcrudData] = useState({
        name: "",
        email: "",
        mobile: "",
      })
      
      const navigate = useNavigate();
     
  
  
      const hendleOnchange = (e) => {
        const {value, name} = e.target
        setcrudData((preve) => {
          return{
            ...preve,
            [name] : value
          }
        })
      }
      const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = await axios.post("/sales/create", crudData)
        console.log(data)
        if(data.data.sucsess){
          Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your record add successfuly !",
          showConfirmButton: false,
          timer: 1800
        });
         navigate('/Curd');
         }
      }
           
    return(
        <>

            <div className="row cofrow1 d-flex justify-content-center">
                <div className="row cofrow2 d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" className="form-control" name="name" id="name" onChange={hendleOnchange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email id</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={hendleOnchange} />
                    </div> 

                    <div className="mb-3">
                        <label className="form-label">Contact</label>
                        <input type="number" className="form-control" name="mobile" id="contact" onChange={hendleOnchange} />
                    </div>
  

                    <button type="submit" className="btn coformbtn">Submit</button>
                    </form>
                </div>
            </div>
      </>
    )
}