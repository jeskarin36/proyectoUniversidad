import React,{ useState } from 'react'
import {BrowserRouter as Router,Routes,Route, useLocation } from "react-router-dom"
import Menu from './Menu/Menu'
import Inicio from "./Inicio/Inicio"
import Matricula from './Matricula/Matricula'
import "./Principal.css"
import NuevoRegistroAlum from './NuevoRegistroAlum/NuevoRegistroAlum'
import Detalles_Alumnos from './Detalles_Alumnos/Detalles_Alumnos'
import Inventario from './Inventario/Inventario'
import NuevoRegistroInstru from './NuevoRegistroInstru/NuevoRegistroInstru'
import DetallesInstru from './DetallesInstru/DetallesInstru'
import NuevoRepresentante from './NuevoRepresentante/NuevoRepresentante'
import Representante from './Representante/Representante'
import EditarRepresentante from './EditarRepresentante/EditarRepresentante'
import EditarInstrumento from './EditarInstrumento/EditarInstrumento'
EditarInstrumento
import Paginaweb from './Paginaweb/Paginaweb'
import Modal from './Modal/Modal'
import EditarMatricula from './EditarMatricula/EditarMatricula'
import Usuarios from './Usuarios/Usuarios'
import NuevoUsuario from './NuevoUsuario/NuevoUsuario'



function Principal() {

  const [isActive, setIsActive] = useState(false)
  const [Home, setHome] = useState(true)
  const [Student, setStudent] = useState(false)
  const [Pintar, setPintar] = useState(true)
  let location

    
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
<div className={ isActive ?  'container dark-theme-variable' : 'container' }>


  <Menu cambio={setHome}></Menu>

  <Router>

      <Routes>
   
        <Route path='/Inicio' element={<Inicio Manejador={handleClick}></Inicio>}></Route>
        <Route path='/Matricula' element={<Matricula Manejador={handleClick}></Matricula>}></Route>
        <Route path='/Matricula/Nuevoalumno' element={<NuevoRegistroAlum Manejador={handleClick}></NuevoRegistroAlum>}></Route>
        <Route path='/Matricula/EditarAlumno/:id' element={<EditarMatricula Manejador={handleClick}></EditarMatricula>}></Route>
       <Route path='/Inventario' element={<Inventario Manejador={handleClick}></Inventario>}></Route>
        <Route path='/Inventario/NuevoInstrumento' element={<NuevoRegistroInstru Manejador={handleClick}></NuevoRegistroInstru>}></Route>
        <Route path='/Inventario/EditarInstrumento/:id' element={<EditarInstrumento Manejador={handleClick}></EditarInstrumento>}></Route>
        <Route path='/Matricula/detalles' element={<DetallesInstru Manejador={handleClick}></DetallesInstru>}></Route>
        <Route path='/Representante/NuevoRepresentante' element={<NuevoRepresentante Manejador={handleClick} setPinta={setPintar}></NuevoRepresentante>}></Route>
        <Route path='/Representante' element={<Representante Manejador={handleClick}></Representante>}></Route>
        <Route path='/Representante/EditarRepresentante/:id' element={<EditarRepresentante Manejador={handleClick}></EditarRepresentante>}></Route>
        <Route path='/Representante/Modal' element={<Modal Manejador={handleClick}></Modal>}></Route>
        <Route path='/Usuario' element={<Usuarios Manejador={handleClick}/>}></Route>
        <Route path='/Usuario/NuevoUsuario' element={<NuevoUsuario Manejador={handleClick}/>}></Route>
      </Routes>
    </Router>
  </div>
    
    
  )
}

export default Principal
{/*
  
  <Menu cambio={setHome}></Menu>  



*/}