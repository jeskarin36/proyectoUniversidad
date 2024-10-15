import React,{ useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Menu from './Menu/Menu'
import Inicio from "./Inicio/Inicio"
import Matricula from './Matricula/Matricula'
import "./Principal.css"
import NuevoRegistroAlum from './NuevoRegistroAlum/NuevoRegistroAlum'
import Detalles_Alumnos from './Detalles_Alumnos/Detalles_Alumnos'
import Inventario from './Inventario/Inventario'
import NuevoRegistroInstru from './NuevoRegistroInstru/NuevoRegistroInstru'
import DetallesInstru from './DetallesInstru/DetallesInstru'




function Principal() {

  const [isActive, setIsActive] = useState(false)
  const [Home, setHome] = useState(true)
  const [Student, setStudent] = useState(false)

    
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
<div className={ isActive ?  'container dark-theme-variable' : 'container' }>
  <Menu cambio={setHome}></Menu>  
  
  <Router>
      <Routes>
        <Route path='/Inicio' element={<Inicio Manejador={handleClick}></Inicio>}></Route>
        <Route path='/prueba-vite/Matricula' element={<Matricula Manejador={handleClick}></Matricula>}></Route>
      </Routes>
    </Router>
  </div>
    
    
  )
}

export default Principal
{/*
<div className={ isActive ?  'container dark-theme-variable' : 'container' }>
      <Menu cambio={setHome}></Menu>    
    
    <Inicio Manejador={handleClick}></Inicio>
       
    </div> */}