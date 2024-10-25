import React from 'react'
import "../css/App.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Swal from 'sweetalert2';
import withoutcode from '../assets/withoutcode.png';
import withcode from '../assets/withcode.png';
import massage from '../assets/massage.png';


export default function Serverinstall() {
  function btnwc (){

    Swal.fire({
      title: "Show resulat without code.",
      width: 900,
      padding: "1em",
      color: "#716add",
      background: "#fff",
      imageUrl: withoutcode ,
      imageWidth: 900,
      imageHeight: 300,
      imageAlt: "Custom image"
      
    });
    }
    function btnc (){

      Swal.fire({
        title: "Show result with code.",
        width: 900,
        padding: "1em",
        color: "#716add",
        background: "#fff",
        imageUrl: withcode ,
        imageWidth: 900,
        imageHeight: 300,
        imageAlt: "Custom image"
        
      });
      }
  return (
    <>
    <Header/>
    <div className="row sirow1 d-flex align-items-center justify-content-center ">
          <div className="row sirow2 d-flex sirow2">
            <h4>Server Installation</h4>
          </div>
    </div>

    <div className="row sirow3 d-flex align-items-center justify-content-center ">
      <div className="row  sirow4 d-flex  ">
        <h5>Follow Step</h5>
        <hr />
        <p>Create new foleder in your project <br/>For Ex. <span> backend</span></p>
        Open your project in VS Code and Open terminal
        <p>D:\Project\{'>'}</p><br/>
        Open created folder
        <p>D:\Project{'>'} <span>cd backend</span> (press enter)</p><br/>
        D:\Project\backend{'>'} <br />
        Install some packages.....<br />
        <p>D:\Project\backend{'>'} <span>npm</span> init</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i dotenv</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i cors</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i body-parser</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i express</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i mongoose</p>
        <p>D:\Project\backend{'>'} <span>npm</span> i --save-dev nodemon</p> <br />
        <p>Create file in backend directory</p>
        <p>For Ex. <span>index.js</span></p> 
        

      </div>
      
    </div>
    <div className="row sirow5 d-flex align-items-center justify-content-center ">
        <h5>Open index.js  and config</h5>
      <div className="row  sirow6 d-flex  ">
      
        <p><br/><span id="sp1">const</span><span id="sp2">&nbsp; express = require</span>&nbsp; <span id="sp3">(</span><span id="sp4">'express'</span><span id="sp3">)</span></p>

        <p><span id="sp1">const</span><span id="sp2">&nbsp; cors = require</span>&nbsp; <span id="sp3">(</span><span id="sp4">'cors'</span><span id="sp3">)</span></p>

        <p><span id="sp1">const</span><span id="sp2">&nbsp; <span id="sp7">mongoose</span> = require</span>&nbsp; <span id="sp3">(</span><span id="sp4">'mongose'</span><span id="sp3">)</span></p>

        <p><span id="sp1">const</span><span id="sp2">&nbsp; app = express</span>&nbsp; <span id="sp3">(</span> &nbsp; <span id="sp3">)</span></p> <br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">app</span><span id="sp2">&nbsp;.use</span>&nbsp; <span id="sp5">(&nbsp;</span><span id="sp2">cors</span> <span id="sp6">(&nbsp;)</span><span id="sp5">&nbsp;)</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">app</span><span id="sp2">&nbsp;.use</span>&nbsp; <span id="sp5">(&nbsp;</span><span id="sp2">express.json</span> <span id="sp6">(&nbsp;)</span><span id="sp5">&nbsp;)</span></p><br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">const</span><span id="sp1">&nbsp;PORT</span>&nbsp; = <span id="sp8"> process.env.</span><span id="sp5">PORT</span> ||<span id="sp2"> 8080</span> </p><br/>

        <p><span id="sp9"> "//Below code is for testing server msg in browser" &nbsp;&nbsp;&nbsp;&nbsp; ( Open Browser and hit localhost:8080 )</span>&nbsp;&nbsp;&nbsp;  Reasult&nbsp;&nbsp;<button className='btnwc' onClick={btnc}>With Code</button> &nbsp;&nbsp; | &nbsp;&nbsp; <button className='btnwc' onClick={btnwc}>Without Code</button></p><br/>
        <p id="gujfont">નીચે મુજબનો કોડ તમારા બ્રાઉઝરમાં ટેસ્ટીંગ મેસેજ દર્શાવવા માટે છે.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">app</span><span id="sp2">&nbsp;.get</span><span id="sp3"> (</span><span id="sp4"> "/"</span>, <span id="sp6">(</span>&nbsp;<span id="sp8">req, res</span><span id="sp6"> )</span><span id="sp1">{' => '}</span> <span id="sp4">{"{"}</span>  </p> <br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp1">app</span><span id="sp2">&nbsp;.json</span><span id="sp5"> (</span><span id="sp2"> {"{"}</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp8">massage:</span><span id="sp4">&nbsp;"Server is running"</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp2">{"}"}</span><span id="sp5"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp4">{"}"}</span><span id="sp3"> )</span></p>

        <p><span id="sp9"> "//Schema"  ( Declare collection data field and data type)</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">const</span><span id="sp1">&nbsp;schemaData</span>&nbsp; = <span id="sp8"> mongoose<span id="sp2">.Schema</span></span> <span id="sp3"> (</span><span id="sp4">&nbsp;{"{"}</span></p><br/>
        
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp10">name</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp10">email</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>
          
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp10">mobile</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="sp4">{"}"}</span><span id="sp3"> )</span></p>

          <p><span id="sp9"> "//Model"   (Create collection name  for ex. "sales")</span></p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">const</span><span id="sp1">&nbsp;userModel</span>&nbsp; = <span id="sp8"> mongoose<span id="sp2">.model</span></span>  <span id="sp3">(&nbsp;<span id="sp4">"sales"</span><span>&nbsp;,</span><span id='sp1'>&nbsp;schemaData</span>&nbsp;)</span></p><br/>

        <p><span id="sp9"> "//Below code is for connect MongoDB Database"</span></p><br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp7">mongoose</span><span id="sp2"> .connect</span><span id="sp3"> (</span> <span id="sp4">"mongodb://localhost:27017/crudoperation"</span><span id="sp3"> )</span></p>
        
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp2">.then</span><span id="sp3"> (</span><span id="sp2"></span> <span id="sp6">(&nbsp;)</span><span id="sp1">{' => '}</span><span id="sp6">{"{"}</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp8">console</span><span id="sp2">&nbsp;.log</span><span id="sp5"> (</span><span id="sp2"> "connect.ToDb"</span><span id="sp5"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp8">app</span><span id="sp2">&nbsp;.listen</span><span id="sp5"> ( PORT</span>,<span id="sp6"> (&nbsp;)</span><span id="sp1">{' => '}</span><span id="sp8">console</span><span id="sp2">&nbsp;.log</span><span id="sp3"> (</span><span id="sp4"> "Server is running"</span><span id="sp3"> )</span><span id="sp5"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp6">{"}"}</span><span id="sp3"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp2">.catch</span><span id="sp3"> (</span><span id="sp2"></span> <span id="sp6">(<span id="sp8">err</span>)</span><span id="sp1">{' => '}</span><span id="sp8"> console</span><span id="sp2">&nbsp;.log</span><span id="sp6"> (<span id="sp8">err</span>)</span><span id="sp3"> )</span></p><br/>
        <p>Note. Remove server testing massage code after created schema & model</p>
                        
      </div>
    </div>
    <div className="row sirow7 d-flex align-items-center justify-content-center ">
      <div className="row  sirow8 d-flex  ">
        <h5>Open terminal and start server</h5>
        <hr />
        
        Open your project in VS Code and Open terminal
        <p>D:\Project\{'>'}</p><br/>
        Open created folder
        <p>D:\Project{'>'} cd <span id="sp3"> backend</span> (press enter)</p><br/>
        D:\Project\backend{'>'} <br />
        Start node server<br />
        <p>D:\Project\<span id="sp1">backend</span>{'>'} <span id="sp3">node</span>&nbsp;index.js  &nbsp;&nbsp;&nbsp;&nbsp; (&nbsp;press enter&nbsp;)</p><br />
        <p id="sp8">connect.ToDb<br/>
        server is running</p>

        <p>Show above massage your server is sucessfuly run in your project </p>
        <p>Check in browser <br/> Open browser, Type url : <span id="sp1">localhost:8080</span> </p>

         <div className='col-md-5 sirow8col1'>
          <p>below code exist in index.js file result will be shown right window </p>
         <p id="gujfont">નીચે મુજબનો કોડ તમારા બ્રાઉઝરમાં ટાઇપ કરેલો હશે તો જમણી બાજુ દર્શાવેલ પરિણામ મળશે.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">app</span><span id="sp2">&nbsp;.get</span><span id="sp3"> (</span><span id="sp4"> "/"</span>, <span id="sp6">(</span>&nbsp;<span id="sp8">req, res</span><span id="sp6"> )</span><span id="sp1">{' => '}</span> <span id="sp4">{"{"}</span>  </p> <br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp1">app</span><span id="sp2">&nbsp;.json</span><span id="sp5"> (</span><span id="sp2"> {"{"}</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp8">massage:</span><span id="sp4">&nbsp;"Server is running"</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp2">{"}"}</span><span id="sp5"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp4">{"}"}</span><span id="sp3"> )</span></p>
          </div> 
         <div className='col-md-5 sirow8col2'>
              <img src={withcode} alt='...'/>
          </div> 
               

      </div>
      
    </div>

    <div className="row sirow9 d-flex align-items-center justify-content-center ">
      <div className="row  sirow10 d-flex  ">
        

         <div className='col-md-5 sirow8col1'>
          <p>below code not exist in index.js file result will be shown right window </p>
         <p id="gujfont">નીચે મુજબનો કોડ તમારા બ્રાઉઝરમાં ટાઇપ કરેલો ના હોય તો જમણી બાજુ દર્શાવેલ પરિણામ મળશે.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp9">"//app</span><span id="sp9">&nbsp;.get</span><span id="sp9"> (</span><span id="sp9"> "/"</span><span id="sp9">, </span><span id="sp9">(</span>&nbsp;<span id="sp9">req, res</span><span id="sp9"> )</span><span id="sp9">{' => '}</span> <span id="sp9">{"{"}</span>  </p> <br/>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp9">app</span><span id="sp9">&nbsp;.json</span><span id="sp9"> (</span><span id="sp9"> {"{"}</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp9">massage:</span><span id="sp9">&nbsp;"Server is running"</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp9">{"}"}</span><span id="sp9"> )</span></p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="sp9">{"}"}</span><span id="sp9"> )</span></p>
          </div> 
         <div className='col-md-5 sirow8col2'>
              <img src={withoutcode} alt='...'/>
          </div> 
               

      </div>
      
    </div>

    <div className="row sirow11 d-flex align-items-center justify-content-center ">
      <div className="row  sirow12 d-flex  ">
        

         <div className='col-md-5 sirow12col1'>
          <p>Schema and model code exist in index.js file result will be shown right window </p>
         <p id="gujfont">નીચે મુજબનો કોડ તમારા બ્રાઉઝરમાં ટાઇપ કરેલો હોય તો જમણી બાજુ દર્શાવેલ પરિણામ મળશે.</p>
         <p><span id="sp9"> "//Schema"  ( Declare collection data field and data type)</span></p>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">const</span><span id="sp1">&nbsp;schemaData</span>&nbsp; = <span id="sp8"> mongoose<span id="sp2">.Schema</span></span> <span id="sp3"> (</span><span id="sp4">&nbsp;{"{"}</span></p><br/>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="sp10">name</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="sp10">email</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>
                
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="sp10">mobile</span><span id="sp8">&nbsp;:</span><span id="sp10"> String</span>,</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="sp4">{"}"}</span><span id="sp3"> )</span></p>

                <p><span id="sp9"> "//Model"   (Create collection name  for ex. "sales")</span></p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="sp1">const</span><span id="sp1">&nbsp;userModel</span>&nbsp; = <span id="sp8"> mongoose<span id="sp2">.model</span></span>  <span id="sp3">(&nbsp;<span id="sp4">"sales"</span><span>&nbsp;,</span><span id='sp1'>&nbsp;schemaData</span>&nbsp;)</span></p><br/>
            </div>

         <div className='col-md-5 sirow12col2'>
              <img src={massage} alt='...'/>
          </div> 
               

      </div>
      
    </div>

    
    <Footer/>
    </>
  )
}