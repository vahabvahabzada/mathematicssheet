import Lesson from "./Lesson";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
export default function Algebra(){
    return(
        <div>
        <MenuCategory/>
        <KursSec/>
        <Header/>
        <Lesson/>
        <Lesson/>
        <Footer/>
        </div>
    )
}