import { useEffect, useState } from "react";
import "./lesson.css";
export default function Lesson(props){
    //const Lesson=(props)=>{
    /*state={
        title:this.props.title,
        link:this.props,
        id:this.props.id,
        status:this.props.status,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
        questions:this.props.questions //props-dan question adli massivi cekecek
    }*/
    
    //let [title,setTitle]=useState(this.props.title);
    //let [link,setLink]=useState(this.props.link);
    
    /*let [id,setId]=useState(this.props.id);*/
    
    //let [starstatus,setStatus]=useState(/*false*/this.props.starstatus);/*ilkin halda hec bir suali yazmadigi ucun false veririk*/
    //let [questions,setQuestions]=useState(/*[]*/this.props.questions);/*questions array-i*/
    
    
    //console.log("******************************");
    //console.log(props.link);/*yoxlama ucun yazdim,en teze yazdigimdi*/
    //console.log(props.title);
    //console.log(props.questions);
    //console.log("******************************");


    const [state,setState]=useState(props);
    /*useEffect(()=>{
        setState(props);
    },[props])*/
    return(
        <div className="videoBody">
            <div className="videoChart">
                <div className="status"></div>
        <p className="title">{/*Video1*/state.title}</p>
        <iframe title={state.title} src={/* "https://www.youtube.com/embed/OmJ-4B-mS-Y "*/state.link} /*frameBorder="0"*/ allow="fullscreen"></iframe>
        <div className="suallar">
            {/*sual-1*/}
            <div className="sual1">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[0].problem}</p>
                <div><p className="a">A</p><p className="answera">{state.questions[0].answer[0]}</p></div>
                <div><p className="b">B</p><p className="answerb">{state.questions[0].answer[1]}</p></div>
                <div><p className="c">C</p><p className="answerc">{state.questions[0].answer[2]}</p></div>
            </div>
            {/*sual-2*/}
            <div className="sual2">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[1].problem}</p>
                <div><p className="a">A</p><p className="answera">{state.questions[1].answer[0]}</p></div>
                <div><p className="b">B</p><p className="answerb">{state.questions[1].answer[1]}</p></div>
                <div><p className="c">C</p><p className="answerc">{state.questions[1].answer[2]}</p></div>
            </div>
            {/*sual-3*/}
            <div className="sual3">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[2].problem}</p>
                <div><p className="a">A</p><p className="answera">{state.questions[2].answer[0]}</p></div>
                <div><p className="b">B</p><p className="answerb">{state.questions[2].answer[1]}</p></div>
                <div><p className="c">C</p><p className="answerc">{state.questions[2].answer[2]}</p></div>
            </div>
        </div>
        </div>
        </div>
    )
}
//export default Lesson;