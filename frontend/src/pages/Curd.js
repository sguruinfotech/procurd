import React, { useState, useEffect } from "react";
import "../css/App.css";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

axios.defaults.baseURL="http://localhost:8080/"

export default function Curd() {

  const [dataList, setDataList] = useState([])

  const getFetchData = async() => {
    const data = await axios.get("/")
    console.log(data)
    setDataList(data.data.data)
  }
  useEffect(() => {
      getFetchData()
  },[])

  // For delete

  const handleDelete = async(id) =>{
    const data = await axios.delete("/delete/" + id)
   
   if(data.data.sucsess){
    
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your record deleted successfuly !",
      color: "#e28743",
      showConfirmButton: false,
      timer: 1800
      
    });
    getFetchData()
    
   }
  
  }
 
 
  return (
    <>
      <Header/>
    <div className="row d-flex align-items-center justify-content-center curdrow1">
      <div className="row d-flex align-items-center curdrow2">
        <h4>CRUD  Create, Read, Update, Delete</h4> <Link to="/Crudapi"><button>index.js</button></Link>
    </div>
      
    <div className="container d-flex align-items-center justify-content-center ">
              <Link to="/Addrecord"><button className="btnadd">Add_Record</button></Link>
    </div>

    
    <div class="table-responsive tbl">
  <table class="table align-middle">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>email_id</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    { 
            dataList[0] ? (
            dataList.map((el) =>{
              return(
                <tr>
                      <td>{el._id}</td>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <Link to="/Updaterecord"><button className="btnup">Update</button></Link>
                        <button onClick={() => handleDelete(el._id)} className="btndl" >Delete</button>
                      </td>
                </tr>
              )
            }))
                       
              : (<p>Data Not Found</p>)
            }
    </tbody>
  </table>
</div>
    </div>
    
  </>     
  );
}



