import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
//import lupa from "../../lupa.png";
export default function Header(){
    const [kursClicked,setClick]=useState(0);
    const [kursYazisi,setKursYazisi]=useState("Courses ^");
    const [sandwichClicked,setSanwichStatus]=useState(0);
    const clickHandler=()=>{
        /*kursClicked ? setClick(false):setClick(true);
        console.log("works");*/
        if(kursClicked%2===0){
            setClick(kursClicked+1);
            document.querySelector(".kurslar").style.display="block";
            setKursYazisi("Courses v");
        }
        else{
            setClick(kursClicked+1);
            document.querySelector(".kurslar").style.display="none";
            setKursYazisi("Courses ^");
        }
    }

    const sandwichHandler=()=>{
        if(sandwichClicked%2===0){
            setSanwichStatus(sandwichClicked+1);
            document.querySelector(".sandwichMenuCategory").style.display="block";
        }
        else{
            setSanwichStatus(sandwichClicked+1);
            document.querySelector(".sandwichMenuCategory").style.display="none";
            document.querySelector(".kurslar").style.display="none";
        }
    }
    return <div className="header">
        <div className="menubar">
        <p className="ps" id="courses" onClick={clickHandler}>{kursYazisi}</p>
        {/*<p className="input"><input type="text" placeholder="Search"/><div className="img"></div></p>*/}
        {/*<input type="text" placeholder="Search"/><div className="img"></div>*/}
        {/*<div className="input"><input type="text" placeholder="Search"/><button className="img"></button></div>*/}
        <Link to=/*"login"*/"/" className="logo"><div id="logo"></div></Link>
        <Link to="/"><p className="ps" id="home">Home</p></Link>
        <Link to="/login"><p className="ps" id="login">Login</p></Link>
        <Link to="/signup"><p className="ps" id="signup">Sign up</p></Link>
        <Link to="/about"><p className="ps" id="whoami">Who am I</p></Link>
        <div className="sandwichMenu" onClick={sandwichHandler}></div>{/*mobile ve tablet ucundu*/}
        </div>
    </div>
}