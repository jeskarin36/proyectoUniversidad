import React from 'react'
import "./Menu.css"
import imggg from "../../assets/NI-COLOR-H.png"

function Menu({cambio}) {
  return (
    <aside>
            <div className="top">
                <div className="logo">
                    <img src={imggg} alt="" srcset=""/>
                    
                </div>
                <div className="close" id="close-btn">
                    <span className="material-symbols-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                <a href="/Inicio" onClick={()=>(cambio(true))}>
                    <span className="material-icons-sharp">grid_view </span>
                    <h3>INICIO</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">person</span>
                    <h3>USUARIOS</h3>
                </a>
                <a href="/prueba-vite/Matricula" onClick={()=>(cambio(false))}>
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>MATRICULA</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">insights</span>
                    <h3>INVENTARIO</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">mail_outline </span>
                    <h3>MENSAJES</h3>
                    <span className="message-count">26</span>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>PERSONAL</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>REPORTES</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">settings</span>
                    <h3>CONFIGURACION</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Product</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">logout</span>
                    <h3>SALIR</h3>
                </a>
            </div>
   </aside>
  )
}

export default Menu
