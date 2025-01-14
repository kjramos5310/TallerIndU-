import React, { useState } from 'react';
import './GestionUsarios.css';


interface Usuario{
    id:number;
    nombre:string;
    email:string;
}

const GestionUsuarios: React.FC = () => {

    const [usuarios, setUsuarios] =useState<Usuario[]>([]);
    const [nombre, setNombre] =useState<string>('');
    const [email, setEmail] =useState<string>('');
    
    const agregarUsuario=()=>{
        if (nombre.trim() && email.trim()){
            const nuevoUsuario: Usuario = {
                id: Date.now(),
                nombre,
                email
            };
            setUsuarios([...usuarios, nuevoUsuario]);
            setNombre('');
            setEmail('');
        }
        else {
            alert('Nombre y email son requeridos');
        }
    } 
    
    const eliminarUsuario = (id: number) => {
        const usuariosFiltrados = usuarios.filter((usuario) => usuario.id!=(id))
        setUsuarios(usuariosFiltrados)
    }

    const actualizarUsuario = (id: number, nuevoNombre: string, nuevoEmail: string) => {
        const usuariosActualizados = usuarios.map((usuario) => {
          if (usuario.id === id) {
            return { ...usuario, nombre: nuevoNombre, email: nuevoEmail };
          }
          return usuario;
        });
        setUsuarios(usuariosActualizados);
      };
      

    return (
        <div>
            <h1>Gestion de Usuarios</h1>
        <div className="formulario">
            <input 
                type="text"
                placeholder='Nombre'
                value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
            
            />

            <input 
                type="email"
                placeholder='Email'
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
            
            />
            <button onClick={agregarUsuario}>Guardar</button>
        </div>
        <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.id}-{usuario.nombre} - {usuario.email}
          <button onClick={()=>eliminarUsuario(usuario.id)}>Eliminar</button>
          <button onClick={() => {
            const nuevoNombre = window.prompt("Nuevo nombre:", usuario.nombre);
            const nuevoEmail = window.prompt("Nuevo email:", usuario.email);
            if (nuevoNombre && nuevoEmail) {
              actualizarUsuario(usuario.id, nuevoNombre, nuevoEmail);
            }
          }}>Actualizar</button>

          </li>
        ))}
        
      </ul>
        
        </div>
    )
}

export default GestionUsuarios;