import React, { useEffect, useState } from 'react';
import './GestionUsuario.css';
import './menu.css';
import GestionUsuarios from './componentes/GestionUsuarios';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Departamentos from './componentes/Departamentos';
import Inicio from './componentes/Inicio';
import Empleados from './componentes/Empleados';

interface Departamento {
  id: number;
  nombre: string;
}

interface Empleado {
  id: number;
  nombre: string;
  apellido: string;
  idDepartamento: number;
}

const App: React.FC = () => {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([
    { id: 1, nombre: 'Tecnología' },
    { id: 2, nombre: 'Recursos Humanos' },
    { id: 3, nombre: 'Contabilidad' },
    { id: 4, nombre: 'Ventas' },
    { id: 5, nombre: 'Marketing' },
  ]);
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  //leer los datos del local storage al cargar la aplicacion
  useEffect(() => {
    const storageDepartamentos = localStorage.getItem('departamentos');
    const storageEmpleados = localStorage.getItem('empleados');

    if (storageDepartamentos) {
      setDepartamentos(JSON.parse(storageDepartamentos));
    }
    if (storageEmpleados) {
      setEmpleados(JSON.parse(storageEmpleados));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('departamentos', JSON.stringify(departamentos));  
  },[departamentos]);

  useEffect(() => {
    localStorage.setItem('empleados', JSON.stringify(empleados));  
  },[empleados]);


/*
  const agregarDepartamento = (nuevoDepartamento: Departamento) => {
    setDepartamentos([...departamentos, nuevoDepartamento]);
  };

  const editarDepartamento = (id: number, nombre: string) => {
    setDepartamentos(
      departamentos.map((departamento) =>
        departamento.id === id ? { ...departamento, nombre } : departamento
      )
    );
  };
*/
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<GestionUsuarios />} />
          <Route path="/departamentos"
            element={<Departamentos
                departamentos={departamentos}
                setDepartamentos={setDepartamentos}
              />}
          />
          <Route path="/empleados" 
            element={<Empleados
            departamentos={departamentos} 
            empleados={empleados}
            setEmpleados={setEmpleados}
            />} 
            />
        </Routes>
      </div>
    </Router>
  );
};

export default App;