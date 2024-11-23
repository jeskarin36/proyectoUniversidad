import React, { useState,useEffect } from 'react'
import "./EditarUsuario.css"
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Editar_Usuario({Manejador}) {

    let { id } = useParams();
    const navigate = useNavigate();
    const URL = "http://localhost:8000/Usuario/"
  const [usuarios, setUsuarios] = useState([]);
 const [nombre,setNombre]=useState("")
 const [apellido,setApellido]=useState("")
 const [usuarionom,setUsuarionom]=useState("")
 const [contraseña,setContraseña]=useState("")
 const [cargo,setCargo]=useState("")
 const [cedula,setCedula]=useState("")
 const [img, setimg] = useState("");
  const [ruta, setRuta] = useState("");
  const [ImagetBase, setImagetBase] = useState("");
  const [CambiolaImagen, setCambiolaImagen] = useState(false);
   const URL2 = "http://localhost:8000/upload/"
    const URL3 = "http://localhost:8000/Audiografia/"
 const UsuarioCabeza1=sessionStorage.getItem('Nombre');
 const UsuarioCabeza2=sessionStorage.getItem('Cargo');


 useEffect(() => {
    getUsuarioss();
}, [])


const getUsuarioss = async () => {
    
    const res = await axios.get(`${URL}${id}`)
    const res2 = await axios.get(`http://localhost:8000/Audiografia/${res.data.Cedula}`);
    setNombre(res.data.Nombre)
    setApellido(res.data.Apellido)
    setUsuarionom(res.data.Usuario)
    setContraseña(res.data.Contraseña)
    setCargo(res.data.Cargo)
    setCedula(res.data.Cedula)
    setimg(res2.data.File)

    setRuta(`http://localhost:8000/${res2.data.File}`)

}


const agregar = async (e) => {
    e.preventDefault()
     alert("hola")

     await axios.put(`${URL3}${cedula}`,{
      id:cedula,
      Nombre:nombre,
      File:ImagetBase.name,
      createdAt:"2024-10-23",
      updatedAt:"2024-10-23"
    })


     await axios.put(`${URL}${id}`, {
 
       Nombre: nombre,
       Apellido: apellido,
       Usuario: usuarionom,
       Contraseña: contraseña,
       Cargo: cargo,
       Cedula:cedula,
       Id_Audiografia:cedula,
       createdAt: "2024-10-23",
       updatedAt: "2024-10-23"
     })

     const formData = new FormData();
     formData.append('file', ImagetBase);
     await axios.post(URL2,formData)
 

     if(CambiolaImagen===true){
      await axios.delete(`http://localhost:8000/EliminarFoto/${img}`)
    }

     navigate("/Usuario")
   }


   const cambiarImg=(e)=>{
    e.preventDefault()
    alert("cambio")
    setRuta(null)
    setRuta(e.target.files[0])
    setImagetBase(e.target.files[0])
   
    setRuta(window.URL.createObjectURL(e.target.files[0]))
   setCambiolaImagen(true)
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
    <form action="" onSubmit={agregar}>
      <div className="container-form-info">
                    <h3>Datos de mi Usuario</h3>
      </div>

      <div className="envoltorio">
        <div className="form-group-usuario-img">
          <img src={ruta} alt="" />
          <label htmlFor="foto" className="foto">Subir Imagen aqui+</label>
         <input type="file" name="foto" id="foto" onChange={e=>cambiarImg(e)} />
         </div>
          <div className="envoltorio-datos">
        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Nombre*</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='ESCRIBA SU NOMBRE' />

        </div>
        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='ESCRIBA SU APELLIDO' />

        </div>
        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Usuario *</label>
          <input type="text" value={usuarionom} onChange={(e) => setUsuarionom(e.target.value)} placeholder='ESCRIBA SU USUARIO'/>

        </div>
        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Contraseña*</label>
          <input type="text" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder='ESCRIBA SU CONTRASEÑA' />

        </div>

        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Cargo*</label>
          <select onChange={(e) => setCargo(e.target.value)}>
          <option value="Coordinadora">{cargo} </option>
          <option value="Coordinadora">Selecione Una Opcion</option>
          <option value="Coordinadora">Coordinadora</option>
          <option value="Director">Director</option>
          <option value="Secretaria">Secretaria</option>
          </select>

         
        </div>
        <div className="form-group-Detalles-Usuario">
          <label htmlFor="">Cedula *</label>
          <input type="number" value={cedula} onChange={(e) => setCedula(e.target.value)} placeholder='ESCRIBA SU USUARIO'/>

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

export default Editar_Usuario
