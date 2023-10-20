import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";
import Login from "./components/login/login";
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reset from "./components/Reset";
function App() {
  return (
    <>
      <Routes>
      <Route path="/Navbar" exact element={<Navbar />} /> 
        <Route path="/" exact element={<Hero />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/Reset" exact element={<Reset />}/>
      </Routes>
    </>
  );
}

export default App;
