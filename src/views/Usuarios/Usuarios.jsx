import React, { useState, useEffect } from 'react';
import "./Usuarios.css";
import axios from "axios"
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';




 



function Usuarios({ Manejador }) {
  const URL = "http://localhost:8000/Usuario/"
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
      getUsuarioss();
  }, [])


  const getUsuarioss = async () => {
      const res = await axios.get(URL)
      setUsuarios(res.data)
      
  }

  const deleteUsuarioss = async (id) => {
     await axios.delete(`${URL}${id}`)
      getUsuarioss();
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
  
    deleteUsuarioss(id)
     }
})


};


const buscar = (e)=>{
 setBusqueda(e.target.value)
 console.log(e.target)
}

 
  

 



  const Mandaraeditar=(id)=>{
    navigate(`/Usuarios/EditarUsuarios/${id}`)
  }
  
  return (
    <div className="container-matricula">
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
        <a href='/Usuario/NuevoUsuario'>+ Nuevo Usuario</a>
      
      </div>
      <div className="contenedor-tabla">
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
            <input value={busqueda} onChange={buscar}   type="text" placeholder="BUSCAR" />
          </form>
        </div>
        <div className="contenedor-registro">
          <table>
            <thead>
              <tr >
              <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Usuario</th>
                <th>Cargo</th>
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody>

              {
                usuarios.map((usuario) => (
                  <tr key={usuario.id} >
                     <td>{usuario.id}</td>
                    <td>{usuario.Nombre}</td>
                    <td>{usuario.Apellido}</td>
                    <td>{usuario.Usuario}</td>
                    <td>{usuario.Cargo}</td>
               
                    <td className="primary">

                  <button  onClick={()=>confirmacion(usuario.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>   </button>
            
                 
                  <button onClick={(e)=>Mandaraeditar(usuario.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button></td>



         

                  </tr>
                ))
              }

              <tr>
              <td>100</td>
                <td>Foldable Mini Drone</td>
                <td>85331</td>
                <td>Due</td>
                <td >Datale</td>
                <td className="primary">
                  <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg> </button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button></td>

              </tr>


            </tbody>
          </table>
          
        </div>
      
      </div>
  
    </div>
  );
}

export default Usuarios;
