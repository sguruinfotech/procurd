import React from 'react'
import Update from '../component/Update';
import { useParams } from 'react-router-dom'; 

export default function Updatepage() {

  const { id } = useParams(); 

    const userId = id;
  

  return (
    <div>
      <h1>User Update</h1><br></br>
      <Update _id={userId} />
    </div>
  )
}