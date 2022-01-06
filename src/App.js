import './App.css';
import InfoContext from './infoContext';
import StudentDetails from './studentDetails';


function App() {
  
  return (
    <InfoContext.Provider value={21}>
      <StudentDetails/>
    </InfoContext.Provider>
  );
}

export default App;
