import React, { useEffect, useState } from 'react'
import "./Menu.css"
import imggg from "../../assets/NI-COLOR-H.png"
import { useNavigate } from 'react-router-dom';

function Menu({cambio}) {

    const [color,setColor]= useState(false)
    const [colorMatricula,setColorMatricula]= useState(false)
    const [colorInventario,setColorInventario]= useState(false)
    const [colorRepresentante,setColorRepresentante]= useState(false)
    const [colorReporte,setColorReporte]= useState(false)
    const navigate=useNavigate();
  
useEffect(()=>{
  
    const actualUrl = window.location.href;
   
    if(actualUrl==="http://localhost:5173/Usuario"){
        setColor(true)
    }
    else if(actualUrl==="http://localhost:5173/Matricula"){
        setColorMatricula(true)
    }
    else if(actualUrl==="http://localhost:5173/Inventario"){
        setColorInventario(true)
    }
    else if(actualUrl==="http://localhost:5173/Representante"){
        setColorRepresentante(true)
    }

    else if(actualUrl==="http://localhost:5173/Reporte"){
        setColorReporte(true)
    }
    
},[])



  const handleLogin=()=>{
    sessionStorage.removeItem("Nombre");
    sessionStorage.removeItem("Rol");
    sessionStorage.removeItem("Cargo");
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("Id");

    navigate("/Login")
  }


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

<body>
    

            <div className="sidebar" >
                <a  href="/Inicio" onClick={()=>(cambio(true)) }>
                    <span className="material-icons-sharp">grid_view </span>
                    <h3>INICIO</h3>
                </a>
                <a  href="/Usuario"  className={color===true? 'color':null }  >
                    <span className="material-icons-sharp">person</span>
                    <h3>USUARIOS</h3>
                </a>
                <a href="/Matricula" onClick={()=>(cambio(false))} className={colorMatricula===true? 'color':null } >
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>MATRICULA</h3>
                </a>
                <a href="/Inventario"  className={colorInventario===true? 'color':null }>
                    <span className="material-icons-sharp">insights</span>
                    <h3>INSTRUMENTOS</h3>
                </a>
               
                <a href="/Representante" className={colorRepresentante===true? 'color':null }>
                    <span className="material-icons-sharp">inventory</span>
                    <h3>REPRESENTANTE</h3>
                </a>
                <a href="/Reporte"  className={colorReporte===true? 'color':null }>
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>REPORTES</h3>
                </a>
               
                
                <a href="" onClick={handleLogin}>
                    <span className="material-icons-sharp">logout</span>
                    <h3>SALIR</h3>
                </a>
            </div>

            </body>
</aside>
  )
}

export default Menu
