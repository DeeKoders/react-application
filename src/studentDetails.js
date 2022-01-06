import React from "react";
import { useState } from "react";
import StudentInfo from "./studentInfo";

function StudentDetails (){
    let [modeTime, setModeTime] = useState(false);
    return (
        
        <div className={`${modeTime ? 'lightMode' : 'nightMode'}`}>
            <center>
                <h1><underline> Student Details</underline> </h1>
                <hr/>

                <StudentInfo stdName = "Danyal Ahmed" stdAge = {21} stdProgram = "MERN Stack" stdInstitute = "IMSciences" />

                <hr/>
                <h1>Color Mode : {modeTime ? 'Light Mode': 'Night Mode'}</h1>
                <button onClick={()=> setModeTime(true)}>Light Mode</button>
                <button onClick={()=> setModeTime(false)}>Night Mode</button>
                <button onClick={()=> setModeTime(!modeTime)}>Change Mode</button>

            </center>
        </div>
    );

}
export default StudentDetails;