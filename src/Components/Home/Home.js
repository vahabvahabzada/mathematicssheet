import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import KursSec from "./KursSec";
import MenuCategory from "./MenuCategory";
export default function Home(){
    return(
        /*<h1>Grettings from React!</h1>*/
        <div className="home">
        <MenuCategory/>
        <KursSec/>
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}