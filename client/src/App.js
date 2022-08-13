import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Tareas from "./components/Card/Tareas";
import Footer from "./components/Footer/Footer";
import NuevaTarea from "./components/Card/NuevaTarea";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tareas />} />
        
      </Routes>

      
        <Footer />
      
    </div>
  );
}

export default App;
