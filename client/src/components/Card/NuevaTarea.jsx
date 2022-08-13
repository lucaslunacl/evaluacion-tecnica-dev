import React, { useState } from "react";
import "./NuevaTarea.css";
function NuevaTarea({ estado, reset, onSubmit }) {
  let fechaActual = new Date();
   const  [input, setInput] = useState({
    id: 0,
    titulo: "",
    fecha_creacion: fechaActual.getDay(),
    descripcion: "",
  });

  function handleOnChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    if (input.titulo === "" || input.descripcion === "") {
      alert("Por favor completa los datos");
      return;
    } else {
      e.preventDefault();
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        titulo: input.titulo,
        descripcion: input.descripcion,
        fecha_creacion: input.fecha_creacion
      })
      alert("Tarea creada")
    }
    reset();
  };

  return (
    <div>
      <button className="boton-cerrar" onClick={(e) => reset()}>
        Cerrar
      </button>

      <form onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input
          type="text"
          placeholder="Titulo"
          name="titulo"
          value={input.titulo}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <label>Descripción</label>
        <input
          type="text"
          placeholder="Descripción"
          name="descripcion"
          value={input.descripcion}
          onChange={(e) => handleOnChange(e)}
        ></input>

        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
}

export default NuevaTarea;
