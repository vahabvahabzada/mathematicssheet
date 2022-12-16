import "./menucategory.css";
import { Link } from "react-router-dom";
import { useState } from "react";
/*import KursSec from "./KursSec";*/
export default function MenuCategory(){
    const [kursClicked,setClick]=useState(0);
    const [kursYazisi,setKursYazisi]=useState("Courses ^");
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
    return(
        <div className="sandwichMenuCategory">
            <Link to="/"><p>Home</p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/signup"><p>Sign Up</p></Link>
            <Link to="/about"><p>Who am I</p></Link>
            <p /*className="ps"*/ id="courses" onClick={clickHandler}>{kursYazisi}</p>
        </div>
    )
}