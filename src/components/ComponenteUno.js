import React from 'react'

const ComponenteUno = (props) => {
    
  return (
    <div>
      <h1>Componente Uno</h1>
        <p>Este es el contenido del Componente Uno.</p>
        <ul>
            <li>Nombre: <strong>{props.nombre}</strong></li>
            <li>Apellido Paterno: <strong>{props.apellido}</strong></li>
            <li>Apellido Materno: <strong>{props.segundoApellido}</strong></li>
            <li>Escuela: <strong>{props.escuela}</strong></li>
        </ul>
    </div>
  )
}

export default ComponenteUno
