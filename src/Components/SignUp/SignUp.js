import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./signup.css"
import { Link } from "react-router-dom";
export default function SignUp(){
    const signupController=()=>{
        var email=document.getElementById("email").value;
        localStorage.setItem("email",email);
        var password=document.getElementById("password").value;
        localStorage.setItem("password",password);
        alert("Welcome,you have succesfully signed up!");
    }
    return (<div className="signup">
        <MenuCategory/>
        <KursSec/>
        <Header/>
        {/*<h1>Here is SignUp Page</h1>*/}
        <div className="signupbody">
        <div className="chart">
            <h1>Sign Up</h1>
            <p id="signupmessage">Sign into your account</p>
            <form>
            <div className="email">
                <input type="email" placeholder="Email address" id="email"/>
            </div>
            <div className="password">
                <input type="password" placeholder="Password" id="password"/>
            </div>
            <p id="alreadyhave">Already have an account?<Link to="/login">Login</Link></p>
            </form>
            <button type="submit" id="signupbutton" onClick={signupController}>Sign Up</button>
            <p id="continue">...or continue with...</p>
            <div id="signupwith">
                <a href="https://accounts.google.com/"><div id="google"></div></a>
                <a href="https://facebook.com"><div id="facebook"></div></a>
                <a href="https://apple.com"><div id="apple"></div></a>
            </div>
        </div>
    </div>
    <Footer/>
        </div>)
}
