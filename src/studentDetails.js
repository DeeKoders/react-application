import React from "react";
import InfoContext from './infoContext';
import { useState } from "react";
import StudentInfo from "./studentInfo";

function StudentDetails (props){
    let [modeTime, setModeTime] = useState(false);
    var dict = {sname: props.stdName , age: props.stdAge, institute :  props.stdIns , prog : props.stdProg};

    return (
        <InfoContext.Provider value={dict}>


        <div className={`${modeTime ? 'lightMode' : 'nightMode'}`}>
            <center>
                <h1><u> Student Details</u> </h1>
                <hr/>

                <StudentInfo/>

                <hr/>
                <h1>Color Mode : {modeTime ? 'Light Mode': 'Night Mode'}</h1>
                <button onClick={()=> setModeTime(true)}>Light Mode</button>
                <button onClick={()=> setModeTime(false)}>Night Mode</button>
                <button onClick={()=> setModeTime(!modeTime)}>Change Mode</button>

            </center>
        </div>
        </InfoContext.Provider>
    );

}
export default StudentDetails;