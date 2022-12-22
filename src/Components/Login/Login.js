import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import KursSec from "../Home/KursSec";
import MenuCategory from "../Home/MenuCategory";
import "./login.css";
export default function Login(){
    return (<div className="login">
    {/*<h1>Here is Login Page</h1>*/}
    <MenuCategory/>
    <KursSec/>
    <Header/>
    {/*Burda Login -e aid body cagirilmalidir*/}
    <div className="loginbody">
        <div className="chart">
            <h1>Login</h1>
            <p id="signinmessage">Sign into your account</p>
            <form>
            <div className="email">
                <input type="email" placeholder="Email address"/>
            </div>
            <div className="password">
                <input type="password" placeholder="Password"/>
            </div>
            <a href="#!" id="forgot">Forgot password?</a>
            </form>
            <button type="submit" id="signinbutton">LOGIN</button>
            <p id="continue">...or continue with...</p>
            <div id="signinwith">
              <a href="https://accounts.google.com/"><div id="google"></div></a>
              <a href="https://facebook.com"><div id="facebook"></div></a>
              <a href="https://apple.com"><div id="apple"></div></a>
            </div>
            <p id="additions">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </div>
    <Footer/>
    </div>)
}