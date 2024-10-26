import React, { useEffect, useState }  from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



axios.defaults.baseURL="http://localhost:8080/"

export default function Updateform() {

    const [dataList, setDataList] = useState([])
    const getFetchData = async() => {
        const data = await axios.get("/")
        console.log(data)
        setDataList(data.data.data)
      }
      useEffect(() => {
          getFetchData()
      },[])

         
    return(
        <>
            {
                dataList[0] ? (
                    dataList.map((el) =>{
                        return(
                    
                               
            
                            <div className="row updfrow1 d-flex justify-content-center">
                                <div className="row updfrow2 d-flex justify-content-center">
                                     <form >
                                            <div className="mb-3">
                                                <label className="form-label">ID</label>
                                                <input type="name" className="form-control" name="id" id="id"  value={el._id}/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="name" className="form-control" name="name" id="name"  value={el.name}/>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Email id</label>
                                                <input type="email" className="form-control" name="email" id="email" value={el.email} />
                                            </div> 

                                            <div className="mb-3">
                                                <label className="form-label">Contact</label>
                                                <input type="number" className="form-control" name="mobile" id="contact" value={el.mobile}/>
                                            </div>
                        
                                            <Link to={`/updatepage/${el._id}`}>Update</Link>
                                            {/* <button type="submit" className="btn updatebtn" onClick={`{../pages/Update${el._id}`}>Update</button> */}
                                     </form>
                                 </div>
                            </div>
                        )
                    }))
                    : <p>Record Not Found</p>
            }
      </>
    )
}