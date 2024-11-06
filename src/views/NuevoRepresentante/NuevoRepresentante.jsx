import React, { useState } from "react"
import "./NuevoRepresentante.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import { useEffect } from "react"


const NuevoRepresentante = ({ Manejador}) => {

  


 

  const navigate = useNavigate();
  const URL = "http://localhost:8000/Representante/"

  const [nombre,setNombre]=useState("");
  const [apellido,setApellido]=useState("");
  const [cedula,setCedula]=useState("");
  const [telefono,setTelefono]=useState("");
  const [estado,setEstado]=useState("");
  const [municipio,setMunicipio]=useState("");
  const [sector,setSector]=useState("");
  const [calle,setCalle]=useState("");
  const[nombrev, setNombrev]=useState("");

  const { register,formState:{errors}, handleSubmit } = useForm({mode:"all"});

  const agregar=async(e)=>{
    
    alert("hola")
    await axios.post(URL,{
      
      Nombre:nombre,
      Apellido:apellido,
      Cedula:cedula,
      Telefono:telefono,
      Estado:estado,
      Municipio:municipio,
      Sector:sector,
      Calle:calle,
      createdAt:"2024-10-23",
      updatedAt:"2024-10-23"
    })
    navigate("/Representante")
  }




  
  


   

  return (<div className="contenedor_representantee">
    <div className="cabeza-usuario">
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

    <div className="contenedor-opciones-representante">

      <div className='contenedor-back-re'>
        <button onClick={() => navigate("/Representante")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></button>
        <h6>regresar</h6>
      </div>

    </div>



    <div className="contenedor-formulario-nuevo-representante">

      <form action="" onSubmit={handleSubmit(agregar)}>
      <div className="container-form-info">
                    <h3>Datos Del Representante</h3>
                    </div>

        <div className="form-group-representante">
          <label htmlFor="">Nombre*</label>
          <input type="text"  value={nombre} {...register("nombre",{  required:true,  } )} onChange={(e)=>setNombre(e.target.value)} placeholder='ESCRIBA SU NOMBRE' />
        {errors.nombre?.type==='required'&& <p>El campo es necesario</p> } 
        </div>
        <div className="form-group-representante">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido}{...register("apellido",{  required:true,  } )} onChange={(e)=>setApellido(e.target.value)} placeholder='ESCRIBA SU APELLIDO' />
          {errors.apellido?.type==='required' && <p>El campo es necesario</p> } 
        </div>
        <div className="form-group-representante">
          <label htmlFor="">CEDULA *</label>
          <input type="number" value={cedula}{...register("cedula",{  required:true, maxLength:8 } )}  onChange={(e)=>setCedula(e.target.value)} placeholder='ESCRIBA SU CEDULA' />
          {errors.cedula?.type==='required' && <small>El campo es necesario</small> }
          {errors.cedula?.type==='maxLength' && <small>No corresponde a una cedula</small> }
          
          </div>
        <div className="form-group-representante">
          <label htmlFor="">TELEFONO*</label>
          <input type="number" value={telefono}{...register("telefono",{  required:true, maxLength:11, } )} onChange={(e)=>setTelefono(e.target.value)} placeholder='ESCRIBA SU TELEFONO' />
          {errors.telefono?.type==='required' && <small>El campo es necesario</small> }
          {errors.telefono?.type==='maxLength' && <small>no corresponde a un TELEFONO</small> }
         
        </div>
        <div className="container-form-info">
                    <h3>Ubicacion Del Representante</h3>
                    </div>

        <div className="form-group-representante">
          <label htmlFor="">ESTADO*</label>
          <select {...register("estado",{  required:true } )} onChange={(e) => setEstado(e.target.value)}>
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="Miranda">Miranda</option>
            <option value="zulia">zulia</option>
            <option value="coro">coro</option>
          </select>
          {errors.estado?.type==='required' && <small>seleccione un estado</small> }

        </div>
        <div className="form-group-representante">
          <label htmlFor="">MUNICIPIO*</label>
          <select {...register("municipio",{  required:true } )}  onChange={(e) => setMunicipio(e.target.value)}>
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="acevedo">acevedo</option>
            <option value="buroz">buroz</option>
            <option value="andres_bello">andres bello</option>
          </select>
          {errors.municipio?.type==='required' && <small>seleccione un municipio</small> }

        </div>
        <div className="form-group-representante">
          <label htmlFor="">SECTOR*</label>
          <select {...register("sector",{  required:true } )} onChange={(e) => setSector(e.target.value)}>
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="8 marzo">8 marzo</option>
            <option value="flor de mayo">flor de mayo</option>
            <option value="Casco central">Casco central</option>
          </select>
          {errors.sector?.type==='required' && <small>seleccione un sector</small> }

        </div>
        <div className="form-group-representante">
          <label htmlFor="">CALLE*</label>
          <select {...register("calle",{  required:true } )} onChange={(e)=>setCalle(e.target.value)} >
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="zapico">zapico</option>
            <option value="bolivar">bolivar</option>
            <option value="malabar">malabar</option>
          </select>
          {errors.calle?.type==='required' && <small>seleccione una</small> }

        </div>
        <div className="container-form-info">
               
        </div>
        <button type="Submit" >Registrar</button>
      </form>



    </div>






  </div>
  )
}

export default NuevoRepresentante;
