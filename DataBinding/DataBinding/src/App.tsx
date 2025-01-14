// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GestionUsuarios from './components/GestionUsuarios.tsx'
import NavBar from './components/NavBar.tsx'
import Inicio from './components/Inicio.tsx'
import Departamento from './components/Departamento.tsx'
import './components/NavBar.css'
import Empleado from './components/Empleados.tsx'
import { useEffect } from 'react'


// function App() {

//   return (
//     <>
//       <>
//       <GestionUsuarios />
//     </>
//     </>
//   )
//   }

// export default App

interface Departamento{
  id_departamento:number;
  nombre:string;
}

interface Empleado{
  id:number;
  nombre:string;
  apellido:string;
  id_departamento:number;
}

const App: React.FC = () => {
  // const [departamentos, setDepartamentos] = useState<Departamento[]> = [
  //   {id_departamento: 1, nombre: 'Recursos Humanos'},
  //   {id_departamento: 2, nombre: 'Ventas'},
  //   {id_departamento: 3, nombre: 'Sistemas'}
  // ]
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  //leer los datos del local storage al cargar la aplicacion
  useEffect(() => {
    const storedDepartamentos = localStorage.getItem('departamentos');
    const storedEmpleados = localStorage.getItem('empleados');

    if (storedDepartamentos) {
      setDepartamentos(JSON.parse(storedDepartamentos));
    }

    if (storedEmpleados) {
      setEmpleados(JSON.parse(storedEmpleados));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('departamentos', JSON.stringify(departamentos));
  }, [departamentos]);

  useEffect(() => {
    localStorage.setItem('empleados', JSON.stringify(empleados));
  }, [empleados]);

  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/usuarios' element={<GestionUsuarios />}/>
            <Route path='/departamentos' 
                element={<Departamento
                departamentos={departamentos}
                setDepartamentos={setDepartamentos} />}/>
            <Route path='/empleado' 
            element={<Empleado 
            departamentos={departamentos}
            empleados={empleados}
            setEmpleados={set} />}/>

        </Routes>
      </div>
    </Router>
  ) 
}

export default App;