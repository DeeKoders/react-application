import React from "react";

function StudentInfo(props){
    return(
        <div>
            <center>
                <h1><underline> Student Details</underline> </h1>
                <h2>Student Name: {props.stdName}</h2>
                <h2>Student Program: {props.stdProgram}</h2>
                <h2>Student Age: {props.stdAge}</h2>
                <h2>Institute Name: {props.stdInstitute}</h2>
            </center>
        </div>
    );
}

export default StudentInfo;
