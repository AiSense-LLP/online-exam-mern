import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";
import Login from "./components/login/login";
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
