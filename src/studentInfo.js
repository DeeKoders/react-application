import './App.css';
import { useState } from 'react';
import React,{useContext} from 'react';
import infoContext from "./infoContext";

function StudentInfo(props){
    let ageValue = useContext(infoContext);
    let [age, setAge] = useState(ageValue);
    
    return(
            <center>
                <h2>Student Name: {props.stdName}</h2>

                <h2>Student Program: {props.stdProgram}</h2>

                <h2>Student Age: {age}</h2><button onClick={()=> setAge(age+1)}>Increase</button><button onClick={()=> setAge(age-1)}>Decrease</button>

                <h2>Institute Name: {props.stdInstitute}</h2>

            </center>
    );
}

export default StudentInfo;
