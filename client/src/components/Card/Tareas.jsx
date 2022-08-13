import React from 'react'
import Card from './Card.jsx'
import Footer from '../Footer/Footer.jsx'
import './Tareas.css'
function Tareas() {
  return (
    <div>
      <div className='contenedor-cards'>
        <div className='cont-izq'>
        <h3> Mis tareas </h3>
        <Card 
        titulo='Tarea 1'
        descripcion= 'lorem'
        fecha= '14/05/2002 12:00'
        />
        <Card 
        titulo='Tarea 1'
        descripcion= 'lorem'
        fecha= '14/05/2002 12:00'
        />
        <Card 
        titulo='Tarea 1'
        descripcion= 'lorem'
        fecha= '14/05/2002 12:00'
        />
        <Card 
        titulo='Tarea 1'
        descripcion= 'lorem'
        fecha= '14/05/2002 12:00'
        />
        <Card 
        titulo='Tarea 1'
        descripcion= 'lorem'
        fecha= '14/05/2002 12:00'
        />
       
        
        
        </div>

        <div className='cont-der'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque omnis eligendi facere totam sit mollitia ad beatae. Laboriosam odio explicabo, assumenda in saepe omnis nemo, repellendus harum inventore ipsam delectus.</p>
        </div>
      </div>

    </div>
  )
}

export default Tareas
