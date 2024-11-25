import React, { useState, useEffect } from 'react';
import "./Representante.css";
import axios from "axios"
import swal from 'sweetalert';
import Tabla from "./Tabla"
import { useNavigate } from 'react-router-dom';




 



function Representante({ Manejador }) {
  const URL = "http://localhost:8000/Representante/"
  const [representantes, setRepresentantes] = useState([]);
  const [representantes2, setRepresentantes2] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');
  const UsuarioCabeza4=sessionStorage.getItem('Rol');
  const navigate=useNavigate();
  useEffect(() => {
      getRepresentantes();
  }, [])


  const getRepresentantes = async () => {
      const res = await axios.get(URL)
      setRepresentantes(res.data)
      setRepresentantes2(res.data)
  }

  const deleteRepresentantes = async (id,id_audio) => {
     await axios.delete(`${URL}${id}`)
    const res= await axios.get(`http://localhost:8000/Audiografia/${id_audio}`)
    await axios.delete(`http://localhost:8000/Audiografia/${res.data.id}`)
    await axios.delete(`http://localhost:8000/EliminarFoto/${res.data.File}`)
    
      getRepresentantes();
  }

 
  
const confirmacion=(id,id_audio)=>{
swal({
title:"Eliminar",
text:"Seguro que deseas eliminar?",
icon: "warning",
buttons:["no","si"]
}).then(respuesta=>{
  if(respuesta){
    swal({text:"El archivo se a borrado con exito",icon:"success", timer:"1000"})
  
    deleteRepresentantes(id,id_audio)
     }
})


};


const buscar = (textt)=>{
  const alumnosnew = representantes2.filter(repre =>

     repre.Nombre.toLowerCase().includes(textt.toLocaleLowerCase())
  )
  setRepresentantes(alumnosnew)
}

 
  const VerDetalles=(id)=>{
    navigate(`/Representante/DetalleRepresentante/${id}`)
  }

 



  const Mandaraeditar=(id)=>{
    navigate(`/Representante/EditarRepresentante/${id}`)
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
                
                Hey, <b>{UsuarioCabeza1}</b>
              </p>
              <small className="text-muted">{UsuarioCabeza2}</small>
            </div>
            <div className="profile-photo">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-opcioness">
        {
          UsuarioCabeza4==="Visor"?null:<a href='/Representante/NuevoRepresentante'>+ Nuevo Registro</a>
      
        }
      </div>
      <div className="contenedor-formulario-representante">
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
            <input  onChange={e=>buscar(e.target.value)}   type="text" placeholder="BUSCAR POR NOMBRE" />
          </form>
        </div>
      <div className="contenedor-tabla-representante">

        <div className="contenedor-registro">
          <table>
            <thead>
              <tr >
              <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Cedula</th>
                <th>Telefono</th>
                <th>Sector</th>
             {
              UsuarioCabeza4==="Visor"?null:   <th>Acciones</th>
             }

              </tr>
            </thead>
            <tbody>

              {
               <Tabla representantes={representantes} UsuarioCabeza4={UsuarioCabeza4} VerDetalles={VerDetalles} Mandaraeditar={Mandaraeditar} confirmacion={confirmacion}></Tabla>
               
              }

         


            </tbody>
          </table>
          
        </div>
      
      </div>
  
    </div>
  );
}

export default Representante;
