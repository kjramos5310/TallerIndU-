import React, { useState } from "react";

interface Departamento {
  id: number;
  nombre: string;
}

interface PropsDepartamento {
  departamentos: Departamento[];
  setDepartamentos: React.Dispatch<React.SetStateAction<Departamento[]>>;
}

const Departamentos: React.FC<PropsDepartamento> = ({ departamentos, setDepartamentos }) => {
  const [nombreDepartamento, setNombreDepartamento] = useState<string>("");
  const [idDepartamentoEditando, setIdDepartamentoEditando] = useState<number | null>(null);
  const [nombreEditando, setNombreEditando] = useState<string>("");

  const agregarDepartamento = () => {
    if (nombreDepartamento.trim() !== "") {
      setDepartamentos([
        ...departamentos,
        { id: departamentos.length + 1, nombre: nombreDepartamento },
      ]);
      setNombreDepartamento("");
    }
  };

  const eliminarDepartamento = (idDepartamento: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este departamento?")) {
      setDepartamentos(departamentos.filter((departamento) => departamento.id !== idDepartamento));
    }
  };

  const comenzarEditarDepartamento = (idDepartamento: number, nombreActual: string) => {
    setIdDepartamentoEditando(idDepartamento);
    setNombreEditando(nombreActual);
  };

  const editarDepartamento = () => {
    if (idDepartamentoEditando !== null && nombreEditando.trim() !== "") {
      setDepartamentos(departamentos.map((departamento) =>
        departamento.id === idDepartamentoEditando
          ? { ...departamento, nombre: nombreEditando }
          : departamento
      ));
      setIdDepartamentoEditando(null);
      setNombreEditando("");
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map((departamento) => (
            <tr key={departamento.id}>
              <td>{departamento.id}</td>
              <td>
                {idDepartamentoEditando === departamento.id ? (
                  <input
                    type="text"
                    value={nombreEditando}
                    onChange={(e) => setNombreEditando(e.target.value)}
                  />
                ) : (
                  departamento.nombre
                )}
              </td>
              <td>
                {idDepartamentoEditando === departamento.id ? (
                  <button onClick={editarDepartamento}>Guardar</button>
                ) : (
                  <>
                    <button onClick={() => comenzarEditarDepartamento(departamento.id, departamento.nombre)}>Editar</button>
                    <button onClick={() => eliminarDepartamento(departamento.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departamentos;
