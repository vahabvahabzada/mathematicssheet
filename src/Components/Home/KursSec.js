import "./kurssec.css"
import { Link } from "react-router-dom";
export default function KursSec(){
    return(
        <div className="kurslar">
            <Link to="/algebra"><p>Algebra</p></Link>
            <Link to="/geometry"><p>Geometry</p></Link>
            <Link to="/calculus"><p>Calculus</p></Link>
            <Link to="/probability"><p>Probability</p></Link>
            {/*App.js - e bunlarin route - larini elave etmek lazimdi*/}
        </div>
    );
}