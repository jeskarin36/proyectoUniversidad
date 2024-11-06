import React, { useState, useEffect } from 'react';
import "./Inventario.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Inventario({Manejador}) {
  
  const URL = "http://localhost:8000/Instrumento/"
  const [instrumentos, setInstrumentos] = useState([])
  const [busqueda, setBusqueda] = useState("");
  const navigate=useNavigate();
   useEffect(() => {
      getInstrumentos();
  }, [])


  const getInstrumentos= async () => {

      const res = await axios.get(URL)
      console.log(res.data)
      setInstrumentos(res.data)
      
  }

  const deleteInstrument = async (id) => {
     await axios.delete(`${URL}${id}`)
      getInstrumentos();
  }

  const buscar = (e)=>{
    setBusqueda(e.target.value)
    console.log(e.target)
   }


  const confirmacion=(id)=>{
    swal({
    title:"Eliminar",
    text:"Seguro que deseas eliminar?",
    icon: "warning",
    buttons:["no","si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({text:"El archivo se a borrado con exito",icon:"success", timer:"1000"})
      
        deleteInstrument(id)
         }
    })

    
    
    };

  const Mandaraeditar=(id)=>{
    navigate(`/Inventario/EditarInstrumento/${id}`)
  }



  return (
    <div className='contenedor-inventario'>
        <div className="cabeza">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp active"> menu</span>
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
      <div className="contenedor-opcionesss">
      <a href='/Inventario/NuevoInstrumento'>+ Nuevo Registro</a>
        
        <div className="opciones-inventario">
          <label htmlFor="">
            Orquestal
            <input type="checkbox" value="n" />
          </label>
          <label htmlFor="">
            Alma llanera
            <input type="checkbox" value="n" />
          </label>
          
        </div>
      </div>
      <div className="contenedor-tabla-inventario">
      <div className="contenedor-formulario">
          <form action="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input value={busqueda} onChange={buscar} type="text" placeholder="BUSCAR" />
          </form>
        </div>
        <div className="contenedor-registro-inventario">
        <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Codigo</th>
                      <th>Marca</th>
                      <th>Tamaño</th>
                      <th>Estado</th>
                      <th>opciones</th>
                  </tr>
              </thead>
              <tbody>
              {
                instrumentos.filter((instrumento)=>
                  {return busqueda.toLowerCase=== ' ' ? instrumento : instrumento.Codigo.toLowerCase().includes(busqueda)}
                 ).map((instrumento) => (
                  <tr key={instrumento.id} >
                     <td>{instrumento.id}</td>
                    <td>{instrumento.Nombre}</td>
                    <td>{instrumento.Codigo}</td>
                    <td>{instrumento.Marca}</td>
                    <td>{instrumento.Tamaño}</td>
                    <td>{instrumento.Estado}</td>
                 
                    <td className="primary">
                  <button onClick={()=>confirmacion(instrumento.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg> </button>
                  <button onClick={(e)=>Mandaraeditar(instrumento.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button></td>

                  </tr>
                ))
              }
                  <tr>
                      <td>Foldable Mini Drone</td>
                      <td>85331</td>
                      <td>Due</td>
                      <td>Due</td>
                      <td >Datale</td> 
                      <td>mato</td>
                      <td className="primary"> 
                      <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button></td>
                  
                  </tr>
                 
                 
              </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default Inventario
