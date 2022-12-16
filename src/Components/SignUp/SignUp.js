import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./signup.css"
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
            <label for="email" className="email">
                <input type="email" placeholder="Email address"/>
            </label>
            <label for="password" className="password">
                <input type="password" placeholder="Password"/>
            </label>
            </form>
            <button type="submit" id="signupbutton">Sign Up</button>
            <p id="continue">...or continue with...</p>
            <div id="signupwith">
                <div id="facebook"></div>
                <div id="twitter"></div>
                <div id="google"></div>
            </div>
        </div>
    </div>
    <Footer/>
        </div>)
}