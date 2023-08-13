import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { AddNote } from './components/AddNote';

function App() {
  return (
    <div className="App">
     <h1>Notes Taking Application </h1>
     <div style={{display:'flex',justifyContent:"space-evenly"}}>
      <Link to={"/login"}>login</Link>
      <Link to={"/signup"}>signup</Link>
      <Link to={"/addnote"}>addnote</Link>
      </div>

     <Routes>
     <Route path='/signup' element={<Signup />}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/addnote' element={<AddNote/>}/>
     </Routes>
    </div>
  );
}

export default App;
