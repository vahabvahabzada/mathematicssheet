import Footer from "../Home/Footer";
import Header from "../Home/Header";
import KursSec from "../Home/KursSec";
import MenuCategory from "../Home/MenuCategory";
import Body from "./Body";
export default function About(){
    return(
        <div className="about">
        <MenuCategory/>
        <KursSec/>
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}