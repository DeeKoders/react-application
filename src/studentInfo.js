import React from "react";
import './App.css';
import { useState } from 'react';



function StudentInfo(props){
    let [age, setAge] = useState(props.stdAge);
    let [modeTime, setModeTime] = useState(false);
    return(
        <div className={`${modeTime ? 'lightMode' : 'nightMode'}`}>
            <center>
                <h1><underline> Student Details</underline> </h1>
                <hr/>
                <h2>Student Name: {props.stdName}</h2>
                <h2>Student Program: {props.stdProgram}</h2>


                <h2>Student Age: {age}</h2><button onClick={()=> setAge(age+1)}>Increase</button><button onClick={()=> setAge(age-1)}>Decrease</button>


                <h2>Institute Name: {props.stdInstitute}</h2>
                <hr/>

                <h1>Color Mode : {modeTime ? 'Light Mode': 'Night Mode'}</h1>
                <button onClick={()=> setModeTime(true)}>Light Mode</button>
                <button onClick={()=> setModeTime(false)}>Night Mode</button>

            </center>
        </div>
    );
}

export default StudentInfo;
