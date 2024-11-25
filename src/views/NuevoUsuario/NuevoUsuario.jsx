import React, { useState } from "react"
import "./NuevoUsuario.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import { useEffect } from "react"
import silueta from "../../assets/63699.png"

const NuevoUsuario = ({ Manejador}) => {

  


 

  const navigate = useNavigate();
  const URL = "http://localhost:8000/Usuario/"
  const URL2 = "http://localhost:8000/upload/"
    const URL3 = "http://localhost:8000/Audiografia/"
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');
  
  const [nombre,setNombre]=useState("");
  const [apellido,setApellido]=useState("");
  const [usuario,setUsuario]=useState("");
  const [contraseña,setContraseña]=useState("");
  const [cargo,setCargo]=useState("");
  const [rol,setRol]=useState("");
  const [cedula,setCedula]=useState("");
  const[img, setImg]=useState(silueta);
  const[imgbase, setImgbase]=useState(silueta);
  const { register,formState:{errors}, handleSubmit } = useForm({mode:"all"});

  const agregar=async(e)=>{
    e.preventDefault()
  
    if(imgbase==="/src/assets/63699.png"){
      alert("Por Favor Eliga Una Imagen para subir")
     }
     
     else{
       
      const res2 = await axios.get(`http://localhost:8000/Audiografia/`);
  
      const dat= res2.data.filter(re=>re.File===imgbase.name)
  
     if(dat.length!==0){
      console.log(dat)
      alert("El Nombre de esa Imagen no esta disponible")
     } else{
      await axios.post(URL3,{
        id:cedula,
        Nombre:nombre,
        File:imgbase.name,
        createdAt:"2024-10-23",
        updatedAt:"2024-10-23"
      })
      
      await axios.post(URL,{
        
        Nombre:nombre,
        Apellido:apellido,
        Usuario:usuario,
        Contraseña:contraseña,
        Cargo:cargo,
        Cedula:cedula,
        Rol:rol,
        Id_Audiografia:cedula,
        createdAt:"2024-10-23",
        updatedAt:"2024-10-23"
      })
  
      const formData = new FormData();
      formData.append('file', imgbase);
      await axios.post(URL2,formData)
      navigate("/Usuario")
     }

    }
  }


  const cambiarImg=(e)=>{
    e.preventDefault()
   
    setImgbase(e.target.files[0])
   
    setImg(window.URL.createObjectURL(e.target.files[0]))

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

    <div className="contenedor-opciones-representante">

      <div className='contenedor-back-re'>
        <button onClick={() => navigate("/Usuario")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></button>
        <h6>regresar</h6>
      </div>

    </div>



    <div className="contenedor-formulario-nuevo-representante">

      <form action="" onSubmit={agregar}>
      <div className="container-form-info">
                    <h3>Datos Del Usuario</h3>
                    </div>

        <div className="envoltorio-Matricula">
        <div className="form-group-matricula-img">
          <img src={img} alt="" />
          <label htmlFor="foto" className="foto">Subir Imagen aqui+</label>
         <input type="file" name="foto" id="foto" onChange={e=>cambiarImg(e)} />
         </div>
          <div className="envoltorio-datos-Matricula-alum">
          <div className="form-group-Matricula">
          <label htmlFor="">Nombre*</label>
          <input type="text"  value={nombre}{...register("nombre",{  required:true,  } )} onChange={(e)=>setNombre(e.target.value)} placeholder='ESCRIBA SU NOMBRE' />
        {errors.nombre?.type==='required'&& <p>El campo es necesario</p> } 
        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido}{...register("apellido",{  required:true,  } )} onChange={(e)=>setApellido(e.target.value)} placeholder='ESCRIBA SU APELLIDO' />
          {errors.apellido?.type==='required' && <p>El campo es necesario</p> } 
        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Usuario*</label>
          <input type="text" value={usuario}{...register("cedula",{  required:true, maxLength:8 } )}  onChange={(e)=>setUsuario(e.target.value)} placeholder='ESCRIBA SU USUARIO' />
          {errors.usuario?.type==='required' && <small>El campo es necesario</small> }
          {errors.usuario?.type==='maxLength' && <small>No corresponde a una cedula</small> }
          
          </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Contraseña*</label>
          <input type="text" value={contraseña}{...register("telefono",{  required:true, maxLength:11, } )} onChange={(e)=>setContraseña(e.target.value)} placeholder='ESCRIBA SU CONTRASEÑA' />
          {errors.contraseña?.type==='required' && <small>El campo es necesario</small> }
          {errors.contraseña?.type==='maxLength' && <small>no corresponde a un TELEFONO</small> }
         
        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Cedula*</label>
          <input type="text" value={cedula} onChange={(e)=>setCedula(e.target.value)} placeholder='ESCRIBA SU CEDULA' />
        
        </div>
 
        <div className="form-group-Matricula">
          <label htmlFor="">Cargo*</label>
          <select {...register("estado",{  required:true } )} onChange={(e) => setCargo(e.target.value)}>
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="Coordinadora">Coordinadora</option>
            <option value="Director">Director</option>
            <option value="Secretaria">Secretaria</option>
          </select>
          {errors.cargo?.type==='required' && <small>seleccione un estado</small> }

        </div>

        <div className="form-group-Matricula">
          <label htmlFor="">Rol del Usuario*</label>
          <select onChange={(e) => setRol(e.target.value)}>
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="Administrador">Administrador</option>
            <option value="Visor">Visor</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>

          </div>
        </div>
        
       
        <div className="container-form-info">
               
        </div>
        <button type="Submit" >Registrar</button>
      </form>



    </div>






  </div>
  )
}

export default NuevoUsuario;
