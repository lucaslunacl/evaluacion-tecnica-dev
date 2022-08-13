import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Tareas from "./components/Card/Tareas";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Tareas />} />
      </Routes>

      
        <Footer />
      
    </div>
  );
}

export default App;
