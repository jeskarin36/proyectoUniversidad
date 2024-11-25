import React, { useState,useEffect } from 'react'
import "./Detalles_Usuario.css"
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Detalles_Usuarios({Manejador}) {

    let { id } = useParams();
    const navigate = useNavigate();
    const URL = "http://localhost:8000/Usuario/"
    const URL2 = "http://localhost:8000/Audiografia/"
  const [usuarios, setUsuarios] = useState([]);
 const [nombre,setNombre]=useState("")
 const [apellido,setApellido]=useState("")
 const [usuarionom,setUsuarionom]=useState("")
 const [contraseña,setContraseña]=useState("")
 const [cargo,setCargo]=useState("")
 const [cedula,setCedula]=useState("")
 const [rol,setRol]=useState("")
 const [img,setImg]=useState("")
 const [imgbase,setImgbase]=useState("")
 const UsuarioCabeza1=sessionStorage.getItem('Nombre');
    const UsuarioCabeza2=sessionStorage.getItem('Cargo');


 useEffect(() => {
    getUsuarioss();
}, [])


const getUsuarioss = async () => {
    
    const res = await axios.get(`${URL}${id}`)
    const res2 = await axios.get(`${URL2}${res.data.Cedula}`);
    setNombre(res.data.Nombre)
    setApellido(res.data.Apellido)
    setUsuarionom(res.data.Usuario)
    setContraseña(res.data.Contraseña)
    setCargo(res.data.Cargo)
    setCedula(res.data.Cedula)
    setRol(res.data.Rol)
    setImg(res2.data.File)
}



  return (
    <div className="contenedor_Usuario">

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

    <div className="contenedor-form-usuario">
    <form action="" >
      <div className="container-form-info">
                    <h3>Detalles Del Usuario</h3>
      </div>

      <div className="envoltorio-Matricula">
        <div className="form-group-usuario-img">
          <img src={`http://localhost:8000/${img}`} alt="" />
         
         </div>
          <div className="envoltorio-datos-Matricula-alum">
        <div className="form-group-Matricula">
          <label htmlFor="">Nombre*</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='ESCRIBA SU NOMBRE' readOnly />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='ESCRIBA SU APELLIDO' readOnly />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Usuario *</label>
          <input type="text" value={usuarionom} onChange={(e) => setUsuarionom(e.target.value)} placeholder='ESCRIBA SU USUARIO'readOnly />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Contraseña*</label>
          <input type="text" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder='ESCRIBA SU CONTRASEÑA'readOnly />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Cedula*</label>
          <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} placeholder='ESCRIBA SU CEDULA'readOnly />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Cargo*</label>
          <select onChange={(e) => setCargo(e.target.value)} readOnly>
          <option value="Coordinadora">{cargo} </option>
          </select>

        </div>

        <div className="form-group-Matricula">
          <label htmlFor="">Rol del Usuario*</label>
          <select onChange={(e) => setRol(e.target.value)} readOnly>
          <option value={rol}>{rol} </option>
          </select>

        </div>


        </div>
        </div>
       
        <div className="container-form-info">
                
                    </div>
    
      </form>

    </div>

  </div>
  )
}

export default Detalles_Usuarios
