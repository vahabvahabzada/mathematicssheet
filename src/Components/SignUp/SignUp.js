import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./signup.css"
import { Link } from "react-router-dom";
export default function SignUp(){
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
                <input type="email" placeholder="Email address"/>
            </div>
            <div className="password">
                <input type="password" placeholder="Password"/>
            </div>
            <p id="alreadyhave">Already have an account?<Link to="/login">Login</Link></p>
            </form>
            <button type="submit" id="signupbutton">Sign Up</button>
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