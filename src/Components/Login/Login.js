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
            <label for="email" className="email">
                <input type="email" placeholder="Email address"/>
            </label>
            <label for="password" className="password">
                <input type="password" placeholder="Password"/>
            </label>
            <a href="#!" id="forgot">Forgot password?</a>
            </form>
            <button type="submit" id="signinbutton">LOGIN</button>
            <p id="continue">...or continue with...</p>
            <div id="signinwith">
                <div id="facebook"></div>
                <div id="twitter"></div>
                <div id="google"></div>
            </div>
            <p id="additions">Don't have an account? <a href="#!">Sign Up</a></p>
        </div>
    </div>
    <Footer/>
    </div>)
}