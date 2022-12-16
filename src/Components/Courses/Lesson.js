import "./lesson.css";
export default function Lesson(){
    /*state={
        title:this.props.title,
        link:this.props,
        id:this.props.id,
        status:this.props.status,//tamamlanib ya yox
        questions:this.props.questions //props-dan question adli massivi cekecek
    }*/
    return(
        <div className="videoBody">
            <div className="videoChart">
                <div className="status"></div>
        <p className="title">Video1</p>
        <iframe title="1"src="https://www.youtube.com/embed/OmJ-4B-mS-Y" frameborder="0" allow="fullscreen"></iframe>
        <div className="suallar">
            {/*sual-1*/}
            <div className="sual1">
                <p className="problem">jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece</p>
                <div><p className="a">A</p><p className="answera">Cavab A</p></div>
                <div><p className="b">B</p><p className="answerb">Cavab B</p></div>
                <div><p className="c">C</p><p className="answerc">Cavab C</p></div>
            </div>
            {/*sual-2*/}
            <div className="sual2">
                <p className="problem">jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece</p>
                <div><p className="a">A</p><p className="answera">Cavab A</p></div>
                <div><p className="b">B</p><p className="answerb">Cavab B</p></div>
                <div><p className="c">C</p><p className="answerc">Cavab C</p></div>
            </div>
            {/*sual-3*/}
            <div className="sual3">
                <p className="problem">jhgdfjdkdkdjskdjskdjsdkjawidjwkdnxmcecheufhece</p>
                <div><p className="a">A</p><p className="answera">Cavab A</p></div>
                <div><p className="b">B</p><p className="answerb">Cavab B</p></div>
                <div><p className="c">C</p><p className="answerc">Cavab C</p></div>
            </div>
        </div>
        </div>
        </div>
    )
}