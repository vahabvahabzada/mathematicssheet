import "./body.css"
import i1 from "../../assets/personalized_learning_icon.png";
import i2 from "../../assets/trusted_content_icon.png";
import i3 from "../../assets/empower_teachers_icon.png";
/*import brain from "../../assets/brain.jpg";*/
export default function Body(){
    return (
        <div className="body">
            <div className="info1">
                <h1>Why mathematicssheet works?</h1>
                <div id="i1"><img src={i1} alt="i1"/><h2>Personalized learning</h2><p>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p></div>
                <div id="i2"><img src={i2} alt="i2"/><h2>Trusted content</h2><p>Created by experts, mathematicssheet’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p></div>
                <div id="i3"><img src={i3} alt="i3"/><h2>Tools to empower teachers</h2>With mathematicssheet, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</div>
            </div>
            <div className="info2">
                <h1>Enjoy Math :-)</h1>
                <p>Build a deep, solid understanding in math, science, and more.</p>
                {/*<img src={brain} alt="math"/>*/}
            </div>
        </div>
    )
}