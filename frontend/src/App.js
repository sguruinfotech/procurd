
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Serverinstall from './pages/Serverinstall';
import Curd from './pages/Curd';
import Crudapi from './pages/Crudapi';
import Addrecord from './pages/Addrecord';
import Updaterecord from './pages/Updaterecord';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpass from './pages/Forgotpass';





function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/serverinstall" element={<Serverinstall />} />
      <Route path="/curd" element={<Curd />} />  
      <Route path="/crudapi" element={<Crudapi />} />  
      <Route path="/addrecord" element={<Addrecord />} />  
      <Route path="/updaterecord" element={<Updaterecord />} />  
      <Route path="/login" element={<Login />} />  
      <Route path="/signup" element={<Signup />} />  
      <Route path="/forgotpass" element={<Forgotpass />} />  
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
