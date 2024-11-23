import React, { useState, useEffect } from 'react';
import "./Usuarios.css";
import axios from "axios"
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';




 



function Usuarios({ Manejador }) {
  const URL = "http://localhost:8000/Usuario/"
  const [usuarios, setUsuarios] = useState([]);
  const [usuarios2, setUsuarios2] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');
  const UsuarioCabeza3=sessionStorage.getItem('Id');
  
  const navigate=useNavigate();
  useEffect(() => {
      getUsuarioss();
  }, [])


  const getUsuarioss = async () => {
      const res = await axios.get(URL)
      setUsuarios(res.data)
      setUsuarios2(res.data)
  }

  const deleteUsuarioss = async (id,id_audio) => {
    await axios.delete(`${URL}${id}`)
    const res= await axios.get(`http://localhost:8000/Audiografia/${id_audio}`)
    await axios.delete(`http://localhost:8000/Audiografia/${res.data.id}`)
    await axios.delete(`http://localhost:8000/EliminarFoto/${res.data.File}`)
    getUsuarioss()
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
  
    deleteUsuarioss(id,id_audio)
     }
})


};


const buscar = (textt)=>{
  const alumnosnew = usuarios2.filter(usu =>

    usu.Nombre.includes(textt)
 )
 setUsuarios(alumnosnew)
}

 

  const VerDetalles=(id)=>{
    navigate(`/Usuario/DetalleUsuario/${id}`)
  }



  const Mandaraeditar=(id)=>{
    navigate(`/Usuario/EditarUsuario/${id}`)
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
        <a href='/Usuario/NuevoUsuario'>+ Nuevo Usuario</a>
        <a href={`/Usuario/EditarUsuario/${UsuarioCabeza3}`}>+ Editar Mi Usuario</a>
      </div>
      <div className="contenedor-formulario-usuario">
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
            <input onChange={e=>{buscar(e.target.value)}}   type="text" placeholder="BUSCAR" />
          </form>
        </div>
      <div className="contenedor-tabla">
      
        <div className="contenedor-registro">
          <table>
            <thead>
              <tr >
              <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Usuario</th>
                <th>Cargo</th>
                <th>Accion</th>

              </tr>
            </thead>
            <tbody>

              {
                 usuarios.length===0? <td COLSPAN="7"  className='Notfound'><h5>No se Encontraron Datos</h5></td>: usuarios.map((usuario) => (
                  <tr key={usuario.id} >
                     <td >{usuario.id}</td>
                    <td>{usuario.Nombre}</td>
                    <td>{usuario.Apellido}</td>
                    <td>{usuario.Usuario}</td>
                    <td>{usuario.Cargo}</td>
               
                    <td className="primary">
                    <button onClick={(e)=>VerDetalles(usuario.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  <button  onClick={()=>confirmacion(usuario.id,usuario.id_audiografia)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>   </button>
            
                 
</td>



         

                  </tr>
                ))
              }

            


            </tbody>
          </table>
          
        </div>
      
      </div>
  
    </div>
  );
}

export default Usuarios;
