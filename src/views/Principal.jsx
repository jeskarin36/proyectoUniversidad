import React,{ useState } from 'react'
import {BrowserRouter as Router,Routes,Route, useLocation } from "react-router-dom"
import Login from "./Login/Login"
import Menu from './Menu/Menu'
import Inicio from "./Inicio/Inicio"
import Matricula from './Matricula/Matricula'
import "./Principal.css"
import NuevoRegistroAlum from './NuevoRegistroAlum/NuevoRegistroAlum'
import Detalles_Alumnos from './Detalles_Alumnos/Detalles_Alumnos'
import Detalles_Usuarios from './Detalles_Usuarios/Detalles_Usuarios'
import Inventario from './Inventario/Inventario'
import NuevoRegistroInstru from './NuevoRegistroInstru/NuevoRegistroInstru'
import Detalles_Instrumento from './Detalles_Instrumento/DetalleInstrumento'
import DetalleRepresentante from './Detalles_Representante/Detalles_Representante'
import NuevoRepresentante from './NuevoRepresentante/NuevoRepresentante'
import Representante from './Representante/Representante'
import EditarRepresentante from './EditarRepresentante/EditarRepresentante'
import EditarInstrumento from './EditarInstrumento/EditarInstrumento'
import Paginaweb from './Paginaweb/Paginaweb'
import Modal from './Modal/Modal'
import EditarMatricula from './EditarMatricula/EditarMatricula'
import Usuarios from './Usuarios/Usuarios'
import NuevoUsuario from './NuevoUsuario/NuevoUsuario'
import Editar_Usuario from './EditarUsuario/EditarUsuario'
import NotFound from './NotFound/NotFound'
import Reporte from './Reporte/Reporte'


function Principal() {

  const [isActive, setIsActive] = useState(false)
  const [Home, setHome] = useState(true)
  const [Student, setStudent] = useState(false)
  const [Pintar, setPintar] = useState(true)

  
    
  const handleClick = () => {
    setIsActive(!isActive)
  }



  return (
<div className={ isActive ?  'container dark-theme-variable' : 'container' }>

  
 

  <Router>

      <Routes>
      <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Inicio' element={<> <Menu cambio={setHome}></Menu><Inicio Manejador={handleClick}></Inicio></>}></Route>
        <Route path='/Matricula' element={<> <Menu cambio={setHome}></Menu><Matricula Manejador={handleClick}></Matricula></>}></Route>
        <Route path='/Matricula/Nuevoalumno' element={<> <Menu cambio={setHome}></Menu><NuevoRegistroAlum Manejador={handleClick}></NuevoRegistroAlum></>}></Route>
        <Route path='/Matricula/EditarAlumno/:id' element={<> <Menu cambio={setHome}></Menu><EditarMatricula Manejador={handleClick}></EditarMatricula></>}></Route>
        <Route path='/Matricula/DetalleAlumno/:id' element={<> <Menu cambio={setHome}></Menu><Detalles_Alumnos Manejador={handleClick}></Detalles_Alumnos></>}></Route>
        <Route path='/Inventario' element={<> <Menu cambio={setHome}></Menu><Inventario Manejador={handleClick}></Inventario></>}></Route>
        <Route path='/Inventario/NuevoInstrumento' element={<> <Menu cambio={setHome}></Menu><NuevoRegistroInstru Manejador={handleClick}></NuevoRegistroInstru></>}></Route>
        <Route path='/Inventario/EditarInstrumento/:id' element={<> <Menu cambio={setHome}></Menu><EditarInstrumento Manejador={handleClick}></EditarInstrumento></>}></Route>
        <Route path='/Inventario/DetalleInstrumento/:id' element={<> <Menu cambio={setHome}></Menu><Detalles_Instrumento Manejador={handleClick}></Detalles_Instrumento></>}></Route>
        <Route path='/Representante/NuevoRepresentante' element={<> <Menu cambio={setHome}></Menu><NuevoRepresentante Manejador={handleClick} setPinta={setPintar}></NuevoRepresentante></>}></Route>
        <Route path='/Representante' element={<> <Menu cambio={setHome}></Menu><Representante Manejador={handleClick}></Representante></>}></Route>
        <Route path='/Representante/EditarRepresentante/:id' element={<> <Menu cambio={setHome}></Menu><EditarRepresentante Manejador={handleClick}></EditarRepresentante></>}></Route>
        <Route path='/Representante/Modal' element={<Modal Manejador={handleClick}></Modal>}></Route>
        <Route path='/Representante/DetalleRepresentante/:id' element={<> <Menu cambio={setHome}></Menu><DetalleRepresentante Manejador={handleClick}></DetalleRepresentante></>}></Route>
        <Route path='/Usuario' element={<> <Menu cambio={setHome}></Menu><Usuarios Manejador={handleClick}/></>}></Route>
        <Route path='/Usuario/NuevoUsuario' element={<> <Menu cambio={setHome}></Menu><NuevoUsuario Manejador={handleClick}/></>}></Route>
        <Route path='/Usuario/EditarUsuario/:id' element={<> <Menu cambio={setHome}></Menu><Editar_Usuario Manejador={handleClick}/></>}></Route>
        <Route path='/Usuario/DetalleUsuario/:id' element={<> <Menu cambio={setHome}></Menu><Detalles_Usuarios Manejador={handleClick}/></>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/Reporte' element={<> <Menu cambio={setHome}></Menu><Reporte Manejador={handleClick}/></>}></Route>
       
      </Routes>
    </Router>
  </div>
    
    
  )
}

export default Principal
{/*
  
  <Menu cambio={setHome}></Menu>  



*/}