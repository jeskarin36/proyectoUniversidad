import React from 'react'
import "./Detalles_Alumnos.css"
function Detalles_Alumnos({Manejador}) {
  return (
    <div className='container-detalle-alumno'>
       <div className="cabeza">
      <div className="top">
        <button id="menu-btn">
          <span className="material-icons-sharp"> menu</span>
        </button>
        <div className="theme-toggler" onClick={Manejador}>
          <span className="material-icons-sharp active"> light_mode</span>
          <span className="material-icons-sharp"> dark_mode</span>
        </div>
        <div className="profilee">
          <div className="info">
            <p>
              Hey, <b>Daniel</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="contenedor-opcioness">
    
      <div className='contenedor-backk'>
      <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
      <h6>regresar</h6>
      </div>
         <h3>Detalles del alumno</h3>
       
      </div>

      <div className="contenedor-detalles">
         <div className='contenedor-detalles-alum'>
         <div className="contenedor-detalles-img">

</div>
<div className="contenedor-detalles-datos">
  <h2>Datos del Alumno</h2>
    <div className="caja-con-info">
       <h4>Nombres</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Apellidos</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Cedula</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Edad</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Sexo</h4>
       <p>Femenino</p>
    </div>
</div>
         </div>
        <div className="contenedor-detalles-alumno-re">
          <h2>Representante del Alumno</h2>
          <div className="caja-con-info">
       <h4>Nombres</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>Apellidos</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Cedula</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Telefono</h4>
       <p>Jeskarin Francelis</p>
    </div>
    <div className="caja-con-info">
       <h4>Correo</h4>
       <p>Jeskarin Francelis</p>
    </div>
  
        </div>
        <div className="contenedor-detalles-alumno-ubic">
        <h2>Ubicacion del Alumno</h2>
          <div className="caja-con-info">
       <h4>Municipio</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>Sector</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>Calle</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>N Casa</h4>
       <p>Karina</p>
    </div>

        </div>
        <div className="contenedor-detalles-alumno-instr">
        <h2>Instrumento del Alumno</h2>
        <div className="caja-con-info">
       <h4>Nombre</h4>
       <p>Cuatro</p>
    </div>
    <div className="caja-con-info">
       <h4>Programa</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>Codigo</h4>
       <p>Karina</p>
    </div>
    <div className="caja-con-info">
       <h4>Medida</h4>
       <p>Karina</p>
    </div>

        </div>
        <div className="contenedor-detalles-alumno-otros">
        <h2>Otros Datos del Alumno</h2>
        <div className="caja-con-info">
       <h4>Escuela</h4>
       <p>Cuatro</p>
    </div>
    <div className="caja-con-info">
       <h4>Turno</h4>
       <p>Cuatro</p>
    </div>
    <div className="caja-con-info">
       <h4>Grado</h4>
       <p>Cuatro</p>
    </div>
    <div className="caja-con-info">
       <h4>Enfermedad</h4>
       <p>Cuatro</p>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Detalles_Alumnos
