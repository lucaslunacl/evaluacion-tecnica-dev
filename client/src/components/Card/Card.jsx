import React from "react";
import './Card.css'
import { FaTrash } from "react-icons/fa";
export default function Card({ titulo, descripcion, fecha }) {
  return (
    <div className="cont-card">
      <div className="info">
        <h2>{titulo}</h2>
        <span>
          {descripcion} {fecha}
        </span>
      </div>

      <div className="borrar">
        <FaTrash />
      </div>
    </div>
  );
}
