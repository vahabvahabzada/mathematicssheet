//import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import Login from "../src/Components/Login/Login";
import SignUp from "../src/Components/SignUp/SignUp";
import About from "../src/Components/Whoami/About";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Algebra from "../src/Components/Courses/Algebra";
import Geometry from "../src/Components/Courses/Geometry";
import Calculus from "../src/Components/Courses/Calculus";
import Probability from "../src/Components/Courses/Probability";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/algebra" element={<Algebra/>}/>
        <Route path="/geometry" element={<Geometry/>}/>
        <Route path="/calculus" element={<Calculus/>}/>
        <Route path="/probability" element={<Probability/>}/>
    </Routes>
  </BrowserRouter>
  );
  }
export default App;
