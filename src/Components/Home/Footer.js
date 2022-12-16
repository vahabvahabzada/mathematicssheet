import "./footer.css";
/*import insta from "../../insta.png";
import face from "../../facebook.png";
import linkedin from "../../linkedin.png";*/
export default function Footer(){
    return(
        <div className="footer">
            <p className="mission">Our mission is to provide a free, world-class Math education to anyone, anywhere.Mathematicssheet is a nonprofit organization.</p>
            <div className="social">
                <a href="https://www.instagram.com/mathematicssheet/">{/*<img src={insta} alt="insta" className="insta"/>*/}<div id="insta"></div></a>
                <a href="https://www.instagram.com/mathematicssheet/">{/*<img src={face} alt="face"/>*/}<div id="face"></div></a>
                <a href="https://www.instagram.com/mathematicssheet/">{/*<img src={linkedin} alt="linkedin"/>*/}<div id="linkedin"></div></a>
            </div>

            <div className="ending">
                <p>©mathematicssheet</p>
                <p><a href="https://www.instagram.com/mathematicssheet/">Terms of use</a></p>
                <p><a href="https://www.instagram.com/mathematicssheet/">Privacy Policy</a></p>
                <p><a href="https://www.instagram.com/mathematicssheet/">Cookie Notice</a></p>
            </div>
        </div>
    )
}