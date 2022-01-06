import './App.css';

import StudentDetails from './studentDetails';


function App() {
  
  return (
    <div>
      <StudentDetails stdName ="Danyal Ahmad" stdAge = {21} stdIns = "Institute of Management Sciences" stdProg = "MERN Stack"/>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <StudentDetails stdName ="Samama Khan" stdAge = {22} stdIns = "Institute of Management Sciences" stdProg = "MERN Stack"/>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <StudentDetails stdName ="Hasnain Raza" stdAge = {22} stdIns = "Institute of Management Sciences" stdProg = "Flutter"/>
    </div>
  );
}

export default App;
