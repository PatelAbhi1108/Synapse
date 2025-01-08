// App.jsx
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import About from "./pages/About.jsx";
import Forum from "./pages/Forum.jsx";
import Material from "./pages/Material.jsx";
import Lecture from "./screens/Lobby.jsx";
import Room from "./screens/Room.jsx";

function App() {
  return (
    <div >
    <Navbar/>
    
    <Routes>
      
     
        <Route path="/" element={<Home/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/forum" element={<Forum/>}/> 
        <Route path="/material" element={<Material/>}/> 
        <Route path="/lecture" element={<Lecture/>}/> 
        <Route path="/room/:roomId" element={<Room/>}/> 
      </Routes>
    </div>
  );
}

export default App;
