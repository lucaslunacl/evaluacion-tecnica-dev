import React from "react";
import Card from "./Card.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Tareas.css";
function Tareas() {
  const tareas = [
    {
      titulo: "Sacar a pasear al perro",
      descripcion: "Dar una vuelta a la manzana con el perro.",
      fecha_creacion: "26/10/2022 22:00",
    },
    {
      titulo: "Lavar los platos",
      descripcion: "Recordar usar esponja y detergente.",
      fecha_creacion: "26/09/2022 10:00",
    },
    {
      titulo: "Llamar a la empresa de internet.",
      descripcion: "Pedir descuentos y amenazar con dar de baja el servicio.",
      fecha_creacion: "28/04/2022 09:00",
    },
    {
      titulo: "Comprar alimento de tortuga.",
      descripcion: "Manuelita se esta quedando sin alimento :(",
      fecha_creacion: "22/07/2022 12:00",
    }
  ];

  return (
    <div>
      <div className="contenedor-cards">
        <div className="cont-izq">
          <h3> Mis tareas </h3>
          {tareas.map((tarea) => (
            <Card
              titulo={tarea.titulo}
              descripcion={tarea.descripcion}
              fecha={tarea.fecha_creacion}
            />
          ))}
        </div>

        <div className="cont-der">
          <h2>Tarea 1</h2>
          <span>Fecha craecion</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            eos odit minus odio perferendis explicabo, dolor optio veritatis
            officia. Sequi, praesentium! Sint praesentium dolores libero odit
            officia ducimus deserunt repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tareas;
