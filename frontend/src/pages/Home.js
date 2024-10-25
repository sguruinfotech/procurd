import React from 'react';
import "../css/App.css";
import Card from '../component/Card';
import serinst from '../assets/serinst.png';
import card1 from '../assets/curd.png';
<<<<<<< HEAD
=======

import login from '../assets/login.png';

>>>>>>> ee9a8b9 (25.10.24)
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <>
        <Header/>
           <div className="row homerow1">
              <Card 
                crdimg={serinst}
                title="Installation Server"
                text="How to install node server in your react project"
                crdbtn="Process"
                path={"/Serverinstall"}
              />
              <Card
                crdimg={card1}
                title="Crud"
                text="CRUD Opration in your react project with MongoDB"
                crdbtn="Process"
                path={"/Crudapi"}
              />
<<<<<<< HEAD
=======

>>>>>>> ee9a8b9 (25.10.24)
          
            </div>
              <p>from git hub</p>
              <p>form VS code</p>
<<<<<<< HEAD
=======

              <Card
                crdimg={login}
                title="SignUp & Login"
                text="SignUp and login Opration in your react project with MongoDB"
                crdbtn="Process"
                path={"/Login"}
              />
          
            
              
>>>>>>> ee9a8b9 (25.10.24)
      <Footer/>
    </>
  )
}
