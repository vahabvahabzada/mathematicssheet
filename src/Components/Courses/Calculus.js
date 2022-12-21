import Lesson from "./Lesson";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
import { useState } from "react";
export default function Calculus(){
    /*const [lessonitems]=useState([
        ({title:"fdfdf",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false,questions:[{answer:["dsdsd","dfefve","rgrfwe"]},{answer:["dsdsd","dfefve","rgrfwe"]},{answer:["dsdsd","dfefve","rgrfwe"]}]}),({title:"dsdwds",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false}),({title:"weffed",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false})
    ]);*/

    const [lessonAttributes]=useState([{
      id:"0",  
      title:"Limits and continuity",
      link:"https://youtube.com/embed/riXcZT2ICjA",
      /*id:"at"his.props.id,*/
      status:/*false*/0,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
      questions:[{problem:"Evaluate f(x)=49-x\xB2 at x=5:",answer:["24","32","14"],correct:"A"},{problem:"Evaluate f(x)=x\xB3-1 at x=3:",answer:["26","11","34"],correct:"A"},{problem:"Given that g(x,y)=2x\xB2y+xy+1, g(3,1)=?",answer:["34","21","22"],correct:"C"}], //props-dan question adli massivi cekecek
      /*selected:[false,false,false]*//* muvafiq olaraq 1 ci,2 ci ve 3 cu suallara cavab verilib-verilmediyini gosterirve buna uygun olaraq clicklenmeni enable ve disable edirk*/
    },
    {
        id:"1",
        title:"Estimating limit values from graphs",
        link:"https://youtube.com/embed/mols6pMKrto",
        /*id:"at"his.props.id,*/
        status:false,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
        questions:[{problem:"\u221A8=?",answer:["2\u221A2","3","4\u221A2"],correct:"A"},{problem:"At which real values of x ,\u221Ax has the meaning?",answer:["x<0","x	\u22650","x<-1"],correct:"B"},{problem:"At which real values of b (1/b)\xB2 has the meaning?",answer:["b=0","b\u22650","b>0"],correct:"C"}] //props-dan question adli massivi cekecek
    },
    {
        id:"2",
        title:"Unbounded limits",
        link:"https://youtube.com/embed/56qtGRCd8bE",
        /*id:"at"his.props.id,*/
        status:false,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
        questions:[{problem:"Solve for x: 2x+7<5 and x+3\u22650",answer:["x=7","x\u2208(-2,1)","x\u2208(-3,1)"],correct:"C"},{problem:"Solve for y: 3x-91>-87 or 21x-17>25",answer:["x>4\xF73","x<23","x>3"],correct:"A"},{problem:"Solve for x:3x-8\u226423 and -4x+26\u22656",answer:["x>3","x\u22655","x\u226417"],correct:"B"}] //props-dan question adli massivi cekecek
    }
]);

    return(
        <div>
        <MenuCategory/>
        <KursSec/>
        <Header/>
        {/*<Lesson  {...{title:"dfdfdfdf", link:"https://www.youtube.com/embed/OmJ-4B-mS-Y", status:false, questions:[{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]}]} ...lessonAttributes[0]} />*/}
        {
        lessonAttributes.map((item)=>{
            //console.log(item);
            //console.log(lessonAttributes.length);
            return <Lesson {...item} key={item.id}/> 
        })
        }
        <Footer/>
        </div>
    )
}