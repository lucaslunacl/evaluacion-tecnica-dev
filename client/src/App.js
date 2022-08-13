import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Tareas from './components/Card/Tareas';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>

        <Route path="/" element={<Tareas />}  />
        
      </Routes>
    </div>
  );
}

export default App;
