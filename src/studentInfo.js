import './App.css';
import { useState } from 'react';
import React,{useContext} from 'react';
import infoContext from "./infoContext";

function StudentInfo(props){

    let data = useContext(infoContext);
    console.log(data);
    return(
            <center>
                <h2>Student Name: {data["sname"]}</h2>

                <h2>Student Program: {data["prog"]}</h2>

                <h2>Student Age: {data["age"]}</h2>

                <h2>Institute Name: {data["institute"]}</h2>

            </center>
    );
}

export default StudentInfo;
