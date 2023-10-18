
import './App.css';
import Hero from './components/Hero';
import Login from './components/login/login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
 <>
  <Routes>
    <Route path="/" exact element={ <Hero/>}/>
    <Route path="/Login" exact element={ <Login />}/>
    </Routes>
 </>
  );
}

export default App;
