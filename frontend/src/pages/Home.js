import React from 'react';
import "../css/App.css";
import Card from '../component/Card';
import serinst from '../assets/serinst.png';
import card1 from '../assets/curd.png';

import login from '../assets/login.png';

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

          
            </div>
              
            <Card
                crdimg={login}
                title="SignUp & Login"
                text="SignUp and login Opration in your react project with MongoDB"
                crdbtn="Process"
                path={"/Login"}
              />
          
            
              
      <Footer/>
    </>
  )
}