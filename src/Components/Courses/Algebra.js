import Lesson from "./Lesson";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import MenuCategory from "../Home/MenuCategory";
import KursSec from "../Home/KursSec";
import { useState } from "react";
export default function Algebra(){
    /*const [lessonitems]=useState([
        ({title:"fdfdf",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false,questions:[{answer:["dsdsd","dfefve","rgrfwe"]},{answer:["dsdsd","dfefve","rgrfwe"]},{answer:["dsdsd","dfefve","rgrfwe"]}]}),({title:"dsdwds",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false}),({title:"weffed",link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",starstatus:false})
    ]);*/

    const [lessonAttributes]=useState([{
      id:"a1",  
      title:"dfdfdfdf",
      link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",
      /*id:"at"his.props.id,*/
      status:false,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
      questions:[{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]},{problem:"jkdfdjfdf",answer:["rgrgrg","ddkjkfdf","owkdwd"]},{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]}] //props-dan question adli massivi cekecek
    },
    {
        id:"a2",
        title:"dfdfdfdf",
        link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",
        /*id:"at"his.props.id,*/
        status:false,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
        questions:[{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]},{problem:"jkdfdjfdf",answer:["rgrgrg","ddkjkfdf","owkdwd"]},{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]}] //props-dan question adli massivi cekecek
    },
    {
        id:"a3",
        title:"dfdfdfdf",
        link:"https://www.youtube.com/embed/OmJ-4B-mS-Y",
        /*id:"at"his.props.id,*/
        status:false,//3 suali da duz yazibsa ulduz almagi,yazmayibsa almamagi ucundu
        questions:[{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]},{problem:"jkdfdjfdf",answer:["rgrgrg","ddkjkfdf","owkdwd"]},{problem:"kcjkdjdkfjdkf",answer:["dfdfdf","fwfldkf","ffelfekf"]}] //props-dan question adli massivi cekecek
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