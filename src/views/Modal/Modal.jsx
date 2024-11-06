import React from 'react'

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;
  return (
    <div className='contenido'>
      
      <Modal>
					<h1>Ventana Modal</h1>
					<p>Reutilizable y con opciones de personalización.</p>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
				
			</Modal>


    </div>
  )
}

export default Modal
