import "./lesson.css";
import { useState } from "react";
import star1 from "../../assets/star1.png";
//import star2 from "../../assets/star2.png";
export default function Lesson(props){
    const [state,/*setState*/]=useState(props);
    //const [status,setStatus]=useState(/*props.status*/0);//en axrinci bunu comment etdim 
    var temp=[true,true,true];/* click etmek olar ya yox*/
    
    var score=0;
    //var cond=false;

    const checker=(event)=>{
        /*console.log(event.currentTarget);
        console.log(event.currentTarget.className.substring(0,event.currentTarget.className.length-1));
        console.log(state);*/
        //console.log(status);
        if(event.currentTarget.className.substring(0,event.currentTarget.className.length-1)===state.questions[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))].correct && temp[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))]/*===false*/){
        event.currentTarget.style.backgroundColor="green";
        temp[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))]=/*true*/false;
        console.log(temp);
        score=score+1;
        //cond=true;
        //setStatus((status)=>(status+1));
        if(score===3){
            score=0;
            //console.log(document.querySelectorAll(".status")["2"]);//yoxlama ucun
            //console.log(document.querySelectorAll(".status")[Math.floor(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length)/3)]);
            //console.log(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length)/3);
            //document.querySelectorAll(".status")[Math.floor(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length)/3)].style.backgroundImage="url("+star1+")";
            //document.querySelector(".status").style.backgroundImage="url("+star1+")";
            document.querySelectorAll(".status")[state.id].style.backgroundImage="url("+star1+")";
            console.log(state.id);
        }
        }
        if(event.currentTarget.className.substring(0,event.currentTarget.className.length-1)!==state.questions[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))].correct && temp[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))]/*===false*/){
            event.currentTarget.style.backgroundColor="red";
            temp[Number(event.currentTarget.className.substring(event.currentTarget.className.length-1,event.currentTarget.className.length))]=/*true*/false;
            console.log(temp);
            //setStatus((status)=>(status));
        }
    }
    return(
        <div className="videoBody">
            <div className="videoChart">
                <div className="status" /*style={/*status score===3?{backgroundImage:"url("+star1+")"}:{backgroundImage:"url("+star2+")"}}*/></div>
        <p className="title">{/*Video1*/state.title}</p>
        <iframe title={state.title} src={/* "https://www.youtube.com/embed/OmJ-4B-mS-Y "*/state.link} /*frameBorder="0"*/ allow="fullscreen"></iframe>
        <div className="suallar">
            {/*sual-1*/}
            <div className="sual1">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[0].problem}</p>
                <div className="A0" onClick={checker/*counterandchecker*/}><p className="a" >A</p><p className="answera" >{state.questions[0].answer[0]}</p></div>
                <div className="B0" onClick={checker/*counterandchecker*/}><p className="b" >B</p><p className="answerb" >{state.questions[0].answer[1]}</p></div>
                <div className="C0" onClick={checker/*counterandchecker*/}><p className="c" >C</p><p className="answerc" >{state.questions[0].answer[2]}</p></div>
            </div>
            {/*sual-2*/}
            <div className="sual2">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[1].problem}</p>
                <div className="A1" onClick={checker/*counterandchecker*/}><p className="a" >A</p><p className="answera" >{state.questions[1].answer[0]}</p></div>
                <div className="B1" onClick={checker/*counterandchecker*/}><p className="b" >B</p><p className="answerb" >{state.questions[1].answer[1]}</p></div>
                <div className="C1" onClick={checker/*counterandchecker*/}><p className="c" >C</p><p className="answerc" >{state.questions[1].answer[2]}</p></div>
            </div>
            {/*sual-3*/}
            <div className="sual3">
                <p className="problem">{/*jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece*/state.questions[2].problem}</p>
                <div className="A2" onClick={checker/*counterandchecker*/}><p className="a" >A</p><p className="answera" >{state.questions[2].answer[0]}</p></div>
                <div className="B2" onClick={checker/*counterandchecker*/}><p className="b" >B</p><p className="answerb" >{state.questions[2].answer[1]}</p></div>
                <div className="C2" onClick={checker/*counterandchecker*/}><p className="c" >C</p><p className="answerc" >{state.questions[2].answer[2]}</p></div>
            </div>
        </div>
        </div>
        </div>
    )
}
//export default Lesson;