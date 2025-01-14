import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GestionUsuarios from './componentes/GestionUsuarios'
import Navbar from './componentes/NavBar'
import Home from "./componentes/Home";
import Contact from "./componentes/Contact";
import './App.css';
import { useState } from "react";
import Departamentos from "./componentes/Departamentos";
import Empleados from "./componentes/Empleados";

interface Departamento {
  id: number;
  nombre: string;
}

const App: React.FC = () => {
  
  const [departamentos, setDepartamentos] = useState<Departamento[]>([
    { id: 1, nombre: "Recursos Humanos" },
    { id: 2, nombre: "Ingeniería" },
  ]);

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<GestionUsuarios />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departamentos" element={<Departamentos />} />
          <Route
            path="/empleados"
            element={<Empleados departamentos={departamentos} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
