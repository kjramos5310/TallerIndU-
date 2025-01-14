import React, { useState } from "react";

interface Departamento {
  id: number;
  nombre: string;
}

const Departamentos: React.FC = () => {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([
    { id: 1, nombre: "Recursos Humanos" },
    { id: 2, nombre: "Ingeniería" },
  ]);
  const [nombreDepartamento, setNombreDepartamento] = useState<string>("");

  const agregarDepartamento = () => {
    if (nombreDepartamento.trim() !== "") {
      setDepartamentos([
        ...departamentos,
        { id: departamentos.length + 1, nombre: nombreDepartamento },
      ]);
      setNombreDepartamento("");
    }
  };

  return (
    <div>
      <h1>Departamentos</h1>
      <input
        type="text"
        value={nombreDepartamento}
        onChange={(e) => setNombreDepartamento(e.target.value)}
        placeholder="Nombre del departamento"
      />
      <button onClick={agregarDepartamento}>Agregar Departamento</button>
      <table border={1} style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map((departamento) => (
            <tr key={departamento.id}>
              <td>{departamento.id}</td>
              <td>{departamento.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departamentos;
