import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StudentInfo from './studentInfo';


function App() {
  return (
    <StudentInfo stdName = "Danyal Ahmed" stdAge = "21" stdProgram = "MERN Stack" stdInstitute = "IMSciences" />
  );
}

export default App;
