import React from "react";
import Card from "./Card.jsx";
import Footer from "../Footer/Footer.jsx";
import NuevaTarea from "./NuevaTarea.jsx";
import "./Tareas.css";
import Loader from "../Loader/Loader.jsx";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Tareas() {
  const [modal, setModal] = useState(false);
  const[tarea, setTarea] = useState();

  function cambiarEstadoModal() {
    setModal(true);
  }
  function resetEstadoModal() {
    setModal(false);
  }

  const [todos, setTodos] = useState([]);

  const addTarea = (todo) => {
    const NuevaTarea = [...todos, todo];

    setTodos(NuevaTarea);
    console.log(todos);
  };

  const borrarTarea = (id) => {
    const borrar = [...todos].filter(todo => todo.id !== id);
    setTodos(borrar);
    
  };

  const tareas = [
    {
      id: 1,
      titulo: "Sacar a pasear al perro",
      descripcion: "Dar una vuelta a la manzana con el perro.",
      fecha_creacion: "26/10/2022 22:00",
    },
    {
      id: 2,
      titulo: "Lavar los platos",
      descripcion: "Recordar usar esponja y detergente.",
      fecha_creacion: "26/09/2022 10:00",
    },
    {
      id: 3,
      titulo: "Llamar a la empresa de internet.",
      descripcion: "Pedir descuentos y amenazar con dar de baja el servicio.",
      fecha_creacion: "28/04/2022 09:00",
    },
    {
      id: 4,
      titulo: "Comprar alimento de tortuga.",
      descripcion: "Manuelita se esta quedando sin alimento :(",
      fecha_creacion: "22/07/2022 12:00",
    },
  ];

  function handleClick(e) {
    setTarea(e)
    console.log(e.id);
  }



  return (
    <div>
      <div className="contenedor-nav">
        <Link to="/">
          <h1>To Do App</h1>
        </Link>

        <button className="btn-nav" onClick={(e) => cambiarEstadoModal()}>
          AGREGAR TAREA
        </button>
      </div>

      {!!modal ? (
        <NuevaTarea
          estado={cambiarEstadoModal}
          reset={resetEstadoModal}
          onSubmit={addTarea}
        />
      ) : null}

      <div className="contenedor-cards">
        <div className="cont-izq">
          <h3> Mis tareas </h3>
            {tareas.map((tarea) => (
          <div  key={tarea.id} onClick={() => handleClick(tarea)}>
              <Card
                id={tarea.id}
                titulo={tarea.titulo}
                descripcion={tarea.descripcion}
                fecha={tarea.fecha_creacion}
              />
          </div>
            ))}

          {todos.map((t) => (
            <div key={t.id} onClick={() => handleClick(t)}>
            <Card
              
              key={t.id}
              id={t.id}
              titulo={t.titulo}
              descripcion={t.descripcion}
              fecha={t.fecha_creacion}
              borrar={() =>borrarTarea(t.id)}
            />
            </div>
          ))}
        </div>

        <div className="cont-der">
          {
            tarea  ? 
            <div className="tarea">

              <h2>{tarea.titulo}</h2>
              <span className='fecha_creacion'>{tarea.fecha_creacion}</span>
              <p>
                {tarea.descripcion}               </p>
            </div>
            : <Loader/>
          }
        </div>
      </div>
    </div>
  );
}

export default Tareas;
